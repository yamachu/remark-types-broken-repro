import { unified } from "unified";
import markdown from "remark-parse";

const processor = unified().use(markdown);

const _ = processor.parse("**This is Markdown**");
