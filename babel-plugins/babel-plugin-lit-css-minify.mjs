export default function litHtmlMinifyPlugin({ types: t }) {
    return {
        visitor: {
            TaggedTemplateExpression(path) {
                const tag = path.node.tag;
                if (!t.isIdentifier(tag)) return;
                if (tag.name !== 'html' && tag.name !== 'css') return;

                const tpl = path.node.quasi;

                // If any raw quasi contains '@' or unquoted attributes do a basic whitespace trim
                for (const q of tpl.quasis) {
                    if (/@\w+=/.test(q.value.raw)) {
                        // Basic whitespace collapse instead of full minify:
                        q.value.raw = q.value.raw.replace(/\s+/g, ' ').trim();
                        q.value.cooked = q.value.raw;
                        continue;
                    }

                    // Do the same whitespace trim:
                    q.value.raw = q.value.raw.replace(/\s+/g, ' ').trim();
                    q.value.cooked = q.value.raw;
                }
            },
        },
    };
}
