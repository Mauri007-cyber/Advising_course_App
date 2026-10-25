import json, re, sys

CONTENT = "src/data/content"
SKELETON = '''import type { Question } from "../questions";
import type { LessonContent } from "./types";

export const {m}Lessons: Record<string, LessonContent> = {
};

export const {m}Bank: Question[] = [
];
'''


def block(obj, indent):
    text = json.dumps(obj, ensure_ascii=False, indent=2)
    return text.replace("\n", "\n" + " " * indent)


def register(m):
    path = f"{CONTENT}/index.ts"
    s = open(path).read()
    if f"{m}Lessons" in s:
        return
    s = s.replace('\nexport type {', f'import {{ {m}Lessons, {m}Bank }} from "./{m}";\n\nexport type {{', 1)
    s = re.sub(r"lessonContent: Record<string, LessonContent> = \{ (.*?) \}", lambda x: f"lessonContent: Record<string, LessonContent> = {{ {x.group(1)}, ...{m}Lessons }}", s, 1)
    s = re.sub(r"banks: Record<string, Question\[\]> = \{ (.*?) \}", lambda x: f"banks: Record<string, Question[]> = {{ {x.group(1)}, {m}: {m}Bank }}", s, 1)
    open(path, "w").write(s)


def add(m, lessons=None, bank=None):
    path = f"{CONTENT}/{m}.ts"
    try:
        s = open(path).read()
    except FileNotFoundError:
        s = SKELETON.replace("{m}", m)
        open(path, "w").write(s)
    register(m)
    s = open(path).read()
    for lid, lesson in (lessons or {}).items():
        entry = f'  "{lid}": {block(lesson, 2)},\n'
        marker = f"}};\n\nexport const {m}Bank"
        assert marker in s, "marker"
        s = s.replace(marker, entry + marker, 1)
    if bank:
        items = "".join(f"  {block(q, 2)},\n" for q in bank)
        i = s.rindex("];")
        s = s[:i] + items + s[i:]
    open(path, "w").write(s)
