import {
    resolveAssetPath,
    updateAddressBar
} from '../../scripts/utils/youtubeNavigation.js';
import {
    createThemeMessageHandler
} from '../../scripts/utils/themeManager.js';
import {
    navigateTo
} from './router.js';
export function handleSocialLinkClick(_0x2cc104) {
    const _0x4696b8 = {};
    _0x4696b8['type'] = 'open-social-from-about', _0x4696b8['key'] = _0x2cc104['key'], _0x4696b8['url'] = _0x2cc104['url'], _0x4696b8['label'] = _0x2cc104['name'], window['parent'] && window['parent'] !== window ? window['parent']['postMessage'](_0x4696b8, '*') : window['open'](_0x2cc104['url'], '_blank');
}
export function initializeSharedEventListeners() {
    const _0x48f0c4 = createThemeMessageHandler('youtube-theme');
    window['addEventListener']('message', function(_0x3a626a) {
        if (_0x3a626a['data'] && 'toolbar:action' === _0x3a626a['data']['type']) switch (_0x3a626a['data']['action']) {
            case 'theme:toggle':
                _0x48f0c4(_0x3a626a);
                break;
            case 'nav:prev':
                updateAddressBar(''), navigateTo('/');
        }
    });
}
let allProjects = [],
    hasLoaded = !0x1;
export async function loadProjectsOnce(_0x2c164b) {
    if (hasLoaded) return allProjects;
    try {
        _0x2c164b && _0x2c164b['setProgress'](0x5);
        const _0x5a4a96 = await fetch(resolveAssetPath('projects.json'));
        _0x2c164b && _0x2c164b['setProgress'](0xa);
        const _0xe7a8b2 = await _0x5a4a96['json']();
        return _0x2c164b && _0x2c164b['setProgress'](0xf), allProjects = _0xe7a8b2, hasLoaded = !0x0, window['allProjects'] = _0xe7a8b2, allProjects;
    } catch (_0x3a07b3) {
        return _0x2c164b && _0x2c164b['complete'](), [];
    }
}