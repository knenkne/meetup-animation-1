module.exports = {
    extends: '@sbol/stylelint-config',
    "rules": {
        "indentation": [4, { severity: 'warning' }],
        "color-hex-case": ["lower", { severity: 'warning' }],
        "color-hex-length": ["short", { severity: 'warning' }],
        "block-no-empty": [true, { severity: 'warning' }],
        "selector-max-universal": [0, { severity: 'warning' }]
    }
}
