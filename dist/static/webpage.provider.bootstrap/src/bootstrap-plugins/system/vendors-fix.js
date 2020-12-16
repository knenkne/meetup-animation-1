const vendorsMap = {
    'lib.vendor.react-dom/16.8.3/index.js': {
        'lib.vendor.react/master/index.js': 'lib.vendor.react/16.8.3/index.js'
    },
    'lib.vendor.react-redux/5.0.7/index.js': {
        'lib.vendor.react/master/index.js': 'lib.vendor.react/16.8.3/index.js',
        'lib.vendor.react-dom/master/index.js': 'lib.vendor.react-dom/16.8.3/index.js',
        'lib.vendor.redux/master/index.js': 'lib.vendor.redux/4.0.1/index.js'
    },
    'lib.vendor.redux-form/7.4.2/index.js': {
        'lib.vendor.react/master/index.js': 'lib.vendor.react/16.8.3/index.js',
        'lib.vendor.redux/master/index.js': 'lib.vendor.redux/4.0.1/index.js',
        'lib.vendor.react-redux/master/index.js': 'lib.vendor.react-redux/5.0.7/index.js',
        'lib.vendor.lodash/master/index.js': 'lib.vendor.lodash/4.17.11/index.js',
    }
}
export default (id, parentUrl) => {
    if (!parentUrl) {
        return id
    }

    const bug = Object.keys(vendorsMap).find((vendor) => parentUrl.includes(vendor))
    if (bug) {
        return vendorsMap[bug][id] || id
    }

    return id
}
