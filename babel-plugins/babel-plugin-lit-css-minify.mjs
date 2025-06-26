import { minify } from 'html-minifier';

export default function litCssMinifyPlugin(babel) {
    const t = babel.types;

    const MINIFIER_OPTIONS = {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: false,
        conservativeCollapse: true,
    };

    return {
        visitor: {
            TaggedTemplateExpression(path) {
                const tag = path.node.tag;

                if (
                    t.isIdentifier(tag) &&
                    (tag.name === 'css' || tag.name === 'html')
                ) {
                    const tpl = path.node.quasi;
                    if (tpl.expressions.length > 0) return;

                    const raw = tpl.quasis.map((q) => q.value.raw).join('');

                    const minified = minify(raw, MINIFIER_OPTIONS);

                    tpl.quasis = [
                        t.templateElement(
                            { raw: minified, cooked: minified },
                            true
                        ),
                    ];
                }
            },
        },
    };
}
