import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';
var locale = 'en';
var messages = {};

/**
 * Equivalent to enzyme's 'shallow' method.
 * @param {string} node React Component that requires react-intl.
 * @return {object}
 */
function shallowWithIntl(node) {
    const intlProvider = new IntlProvider({locale: locale, messages }, {});
    const { intl } = intlProvider.getChildContext();
    return shallow(React.cloneElement(node, { intl }), { context: { intl } });
}

/**
 * Equivalent to enzyme's 'mount' method.
 * @param {string} node React Component that requires react-intl.
 * @return {object}
 */
function mountWithIntl (node, { context, childContextTypes } = {}) {
    const intlProvider = new IntlProvider({locale: locale, messages }, {});
    const { intl } = intlProvider.getChildContext();
    return mount(React.cloneElement(node, { intl }), {
        context: Object.assign({}, context, {intl}),
        childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes)
    });
}

var enzymeReactIntl = {
    shallowWithIntl: shallowWithIntl,
    mountWithIntl: mountWithIntl,
};
module.exports = enzymeReactIntl;