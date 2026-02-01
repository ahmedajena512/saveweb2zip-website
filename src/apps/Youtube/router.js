import {
    initializeGalleryPage
} from './script.js';
import {
    initializeVideoPage
} from './video-page.js';
const _0x342f98 = {};
_0x342f98['template'] = null, _0x342f98['init'] = initializeGalleryPage, _0x342f98['css'] = null;
const _0x3a704b = {};
_0x3a704b['template'] = './video-template.html', _0x3a704b['init'] = initializeVideoPage, _0x3a704b['css'] = 'video-page.css';
const _0x640d9a = {};
_0x640d9a['/'] = _0x342f98, _0x640d9a['/video'] = _0x3a704b;
const routes = _0x640d9a;
let appContent = null,
    initialGalleryContent = null,
    isInitialLoad = !0x0,
    loadRouteTimeout = null,
    currentLoadPromise = null;

function updateLogoState(_0x46ca90) {
    const _0x447912 = document['querySelector']('.logo-img');
    _0x447912 && ('/' === _0x46ca90 ? (_0x447912['style']['cursor'] = 'default', _0x447912['style']['pointerEvents'] = 'none') : (_0x447912['style']['cursor'] = 'pointer', _0x447912['style']['pointerEvents'] = 'auto'));
}

function updateStatusBar(_0x4cfdce) {
    if (window['parent'] && window['parent'] !== window) {
        let _0x1c472f;
        _0x1c472f = '/' === _0x4cfdce ? 'Select\x20a\x20project\x20to\x20view\x20details' : '/video' === _0x4cfdce ? 'Viewing\x20project\x20details\x20-\x20use\x20toolbar\x20to\x20go\x20back' : 'My\x20Projects\x20-\x20Navigate\x20using\x20toolbar\x20or\x20address\x20bar', window['parent']['postMessage']({
            'type': 'update-status-bar',
            'text': _0x1c472f
        }, '*');
    }
}

function manageStyles(_0x122ab1) {
    const _0x7eeb73 = document['querySelector']('link[data-dynamic-style]');
    if (_0x7eeb73 && _0x7eeb73['remove'](), _0x122ab1) {
        const _0x33b3c8 = document['createElement']('link');
        _0x33b3c8['rel'] = 'stylesheet', _0x33b3c8['href'] = _0x122ab1, _0x33b3c8['setAttribute']('data-dynamic-style', 'true'), document['head']['appendChild'](_0x33b3c8);
    }
}
async function loadRoute() {
    loadRouteTimeout && (clearTimeout(loadRouteTimeout), loadRouteTimeout = null), currentLoadPromise && await currentLoadPromise;
    const _0x1a17c2 = window['location']['hash']['slice'](0x1) || '/',
        [_0x41ccfc, _0x2454dd] = _0x1a17c2['split']('?'),
        _0x589d9c = new URLSearchParams(_0x2454dd),
        _0x142cfa = routes[_0x41ccfc] || routes['/'];
    return currentLoadPromise = ((async () => {
        try {
            const _0x9179f9 = document['querySelector']('.page-transition-overlay');
            if (_0x9179f9 && !isInitialLoad && (_0x9179f9['classList']['add']('active'), await new Promise(_0x586dc8 => setTimeout(_0x586dc8, 0x12c))), appContent['innerHTML'] = '', manageStyles(_0x142cfa['css']), _0x142cfa['template']) try {
                const _0x318a2c = await fetch(_0x142cfa['template']);
                if (!_0x318a2c['ok']) throw new Error('Template\x20not\x20found:\x20' + _0x142cfa['template']);
                const _0x2f3f1b = await _0x318a2c['text']();
                appContent['innerHTML'] = _0x2f3f1b, await new Promise(_0x3d6a37 => setTimeout(_0x3d6a37, 0x0)), _0x142cfa['init'] && await _0x142cfa['init']();
            } catch (_0x3b80a9) {
                appContent['innerHTML'] = '<p\x20style=\x22color:\x20white;\x20padding:\x2024px;\x22>Error:\x20Could\x20not\x20load\x20page.</p>';
            } else appContent['innerHTML'] = initialGalleryContent, _0x142cfa['init'] && await _0x142cfa['init']({
                'filter': _0x589d9c['get']('filter')
            });
            _0x9179f9 && !isInitialLoad && (await new Promise(_0x22297e => setTimeout(_0x22297e, 0x64)), _0x9179f9['classList']['remove']('active')), updateLogoState(_0x41ccfc), updateStatusBar(_0x41ccfc), isInitialLoad && (isInitialLoad = !0x1);
        } finally {
            currentLoadPromise = null;
        }
    })()), currentLoadPromise;
}
export function navigateTo(_0x151bf9) {
    window['location']['hash']['slice'](0x1) !== _0x151bf9 ? window['location']['hash'] = _0x151bf9 : loadRoute();
}
export function initRouter() {
    appContent = document['getElementById']('app-content'), appContent && (initialGalleryContent = appContent['innerHTML'], window['addEventListener']('hashchange', () => {
        loadRouteTimeout && clearTimeout(loadRouteTimeout), loadRouteTimeout = setTimeout(() => {
            loadRoute(), loadRouteTimeout = null;
        }, 0x32);
    }), loadRoute());
}