import {
    navigateTo
} from './router.js';
export function initializeSidebar() {
    const _0x4d04c1 = document['querySelector']('.sidebar');
    _0x4d04c1 && _0x4d04c1['addEventListener']('click', _0x10e959 => {
        const _0x5d3ce6 = _0x10e959['target']['closest']('.nav-item');
        if (!_0x5d3ce6) return;
        if ('/' === (window['location']['hash']['slice'](0x1)['split']('?')[0x0] || '/')) return;
        const _0x566a36 = _0x5d3ce6['querySelector']('.nav-text');
        if (_0x566a36) {
            const _0xbefb3c = _0x566a36['textContent']['toLowerCase']();
            navigateTo('all' === _0xbefb3c ? '/' : '/?filter=' + _0xbefb3c);
        }
    });
}