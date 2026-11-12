-- Progreso y perfiles. Ejecuta este archivo completo en el SQL Editor: es idempotente
-- (se puede repetir sin borrar datos).

create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null check (pg_column_size(data) < 200000),
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists "progress_select_own" on public.progress;
create policy "progress_select_own" on public.progress for select using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.progress;
create policy "progress_insert_own" on public.progress for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.progress;
create policy "progress_update_own" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "progress_delete_own" on public.progress;
create policy "progress_delete_own" on public.progress for delete using (auth.uid() = user_id);

-- Nombre de usuario visible y utilizable para entrar. Un perfil por cuenta.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null,
  created_at timestamptz not null default now(),
  constraint profiles_username_format check (username ~ '^[a-z0-9][a-z0-9._-]{2,23}$')
);

create unique index if not exists profiles_username_unique on public.profiles (lower(username));

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- Traduce nombre de usuario a correo para poder entrar con cualquiera de los dos.
-- Va con permisos elevados para no abrir la tabla de perfiles a todo el mundo.
create or replace function public.email_for_username(uname text)
returns text
language sql
stable
security definer
set search_path = public, auth
as $$
  select u.email
  from public.profiles p
  join auth.users u on u.id = p.id
  where p.username = lower(trim(uname))
  limit 1;
$$;

create or replace function public.username_taken(uname text)
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (select 1 from public.profiles where username = lower(trim(uname)));
$$;

revoke all on function public.email_for_username(text) from public;
revoke all on function public.username_taken(text) from public;
grant execute on function public.email_for_username(text) to anon, authenticated;
grant execute on function public.username_taken(text) to anon, authenticated;
