/**
 * DOCS: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules
 *
 * Rule (example): DOCS: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
 */
module.exports = {
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        // Valuable visual tags and components should have alt text
        'jsx-a11y/alt-text': ['warn', {
            elements: ['img', 'object', 'area', 'input[type="image"]']
        }],

        // <a /> fails, dude
        'jsx-a11y/anchor-has-content': 'error',

        // Custom focus should has zero or positive tabindex
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

        // Only valid aria-attributes names
        'jsx-a11y/aria-props': 'warn',

        // Only valid aria-attributes values
        'jsx-a11y/aria-proptypes': 'warn',

        // Only valid roles
        'jsx-a11y/aria-role': 'warn',

        // Use aria only with visual elements
        'jsx-a11y/aria-unsupported-elements': 'warn',

        // No click events without keyboard events
        'jsx-a11y/click-events-have-key-events': 'warn',

        // <h1 /> fails, dude
        'jsx-a11y/heading-has-content': 'warn',

        // HTML with lang
        'jsx-a11y/html-has-lang': 'warn',

        // Iframe with title
        'jsx-a11y/iframe-has-title': 'warn',

        // Useless alt text is blocked!
        'jsx-a11y/img-redundant-alt': ['warn', {
            elements: ['img'],
            // Which words are redundant as substring of alt
            words: ['Иконка', 'Картинка']
        }],

        // All active elements should be focusable
        'jsx-a11y/interactive-supports-focus': 'error',

        // <label htmlFor /> or <label><Input /></label>
        // TODO: прорабатывается отдельным списком со стабилизацией интерфейса Labeled
        'jsx-a11y/label-has-associated-control': [
            'off',
            {
                labelAttributes: ['title', 'id'],
                assert: 'either'
            }
        ],
        // Titled media tags
        'jsx-a11y/media-has-caption': 'warn',

        // No pointer events without keyboard events
        'jsx-a11y/mouse-events-have-key-events': 'warn',

        // Do not use accessKey prop (control + option + S will focus on element with accesskey="s", it's breaking a11y)
        'jsx-a11y/no-access-key': 'warn',

        // Issues about usability if we has autofocus
        'jsx-a11y/no-autofocus': ['warn', {
            ignoreNonDOM: true
        }],

        // No magic visually animated elements (<marquee> and <blink>)
        'jsx-a11y/no-distracting-elements': 'warn',

        // Separate elements for interactive usage and static roles (except <tr>)
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
            'warn',
            {
                tr: ['none', 'presentation']
            }
        ],

        // No interaction handlers for non interactive elements
        'jsx-a11y/no-noninteractive-element-interactions': [
            'warn',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp'
                ]
            }
        ],

        // Separate elements for static usage and interactive roles (except <tr>)
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'warn',
            {
                ul: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid'
                ],
                ol: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid'
                ],
                li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
                table: ['grid'],
                td: ['gridcell']
            }
        ],

        // No elements with no interaction and with tabindex
        'jsx-a11y/no-noninteractive-tabindex': [
            'warn',
            {
                tags: [],
                roles: ['tabpanel']
            }
        ],
        // <select onChange> is not allowed
        'jsx-a11y/no-onchange': 'warn',

        // <img role="img"> (.etc) is not allowed
        'jsx-a11y/no-redundant-roles': 'warn',

        // No interaction handlers for non interactive elements
        'jsx-a11y/no-static-element-interactions': [
            'warn',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp'
                ]
            }
        ],

        // Check that all aria is included to this role
        'jsx-a11y/role-has-required-aria-props': 'warn',

        // No useless aria-attributes names for this role
        'jsx-a11y/role-supports-aria-props': 'warn',

        // <th scope="row|col"> only
        'jsx-a11y/scope': 'warn',

        // Tab index only negative or zero
        'jsx-a11y/tabindex-no-positive': 'warn'
    }
}
