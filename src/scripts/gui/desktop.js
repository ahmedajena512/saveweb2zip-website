const _0x10ac7f = _0x2b26;
(function (_0x27a067, _0x48aa81) {
    const _0x1120d2 = _0x2b26,
        _0x1cc67e = _0x27a067();
    while (!![]) {
        try {
            const _0x32e3df = parseInt(_0x1120d2(0x199)) / 0x1 * (-parseInt(_0x1120d2(0x175)) / 0x2) + parseInt(_0x1120d2(0x1dc)) / 0x3 + -parseInt(_0x1120d2(0x18e)) / 0x4 + -parseInt(_0x1120d2(0x1d6)) / 0x5 + -parseInt(_0x1120d2(0x173)) / 0x6 + parseInt(_0x1120d2(0x195)) / 0x7 * (parseInt(_0x1120d2(0x165)) / 0x8) + parseInt(_0x1120d2(0x18d)) / 0x9;
            if (_0x32e3df === _0x48aa81) break;
            else _0x1cc67e['push'](_0x1cc67e['shift']());
        } catch (_0x4def09) {
            _0x1cc67e['push'](_0x1cc67e['shift']());
        }
    }
}(_0x3136, 0xf03a6));
import {
    EVENTS
} from '../utils/eventBus.js';
import {
    addManagedEventListener
} from '../utils/eventListenerManager.js';
import {
    getUISection
} from '../utils/domUtils.js';
import {
    stateManager
} from '../utils/stateManager.js';
const _0x5b09c9 = {};
_0x5b09c9[_0x10ac7f(0x1b0)] = 'assets/gui/bgs/pc.webp', _0x5b09c9[_0x10ac7f(0x18a)] = _0x10ac7f(0x16b);
const DESKTOP_ASSETS = _0x5b09c9;
let SOCIALS_CACHE = null;

function _0x2b26(_0x3ed69d, _0x514214) {
    const _0x31369e = _0x3136();
    return _0x2b26 = function (_0x2b266f, _0x1423a3) {
        _0x2b266f = _0x2b266f - 0x14c;
        let _0x52a850 = _0x31369e[_0x2b266f];
        if (_0x2b26['saBByC'] === undefined) {
            var _0x4b1db9 = function (_0x5b09c9) {
                const _0x29f9f6 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x461197 = '',
                    _0xf6fdae = '';
                for (let _0x3a0986 = 0x0, _0x4cb35d, _0x4d8453, _0x557e52 = 0x0; _0x4d8453 = _0x5b09c9['charAt'](_0x557e52++); ~_0x4d8453 && (_0x4cb35d = _0x3a0986 % 0x4 ? _0x4cb35d * 0x40 + _0x4d8453 : _0x4d8453, _0x3a0986++ % 0x4) ? _0x461197 += String['fromCharCode'](0xff & _0x4cb35d >> (-0x2 * _0x3a0986 & 0x6)) : 0x0) {
                    _0x4d8453 = _0x29f9f6['indexOf'](_0x4d8453);
                }
                for (let _0x3cc83a = 0x0, _0xb4accc = _0x461197['length']; _0x3cc83a < _0xb4accc; _0x3cc83a++) {
                    _0xf6fdae += '%' + ('00' + _0x461197['charCodeAt'](_0x3cc83a)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xf6fdae);
            };
            _0x2b26['idXXIk'] = _0x4b1db9, _0x3ed69d = arguments, _0x2b26['saBByC'] = !![];
        }
        const _0x20a77a = _0x31369e[0x0],
            _0x46f3cb = _0x2b266f + _0x20a77a,
            _0x3bae12 = _0x3ed69d[_0x46f3cb];
        return !_0x3bae12 ? (_0x52a850 = _0x2b26['idXXIk'](_0x52a850), _0x3ed69d[_0x46f3cb] = _0x52a850) : _0x52a850 = _0x3bae12, _0x52a850;
    }, _0x2b26(_0x3ed69d, _0x514214);
}
async function getSocials() {
    if (SOCIALS_CACHE) return SOCIALS_CACHE;
    const defaults = [
        { key: 'instagram', name: 'Instagram', icon: 'assets/gui/start-menu/instagram.webp', url: 'https://instagram.com/mitchivin', showInAbout: true },
        { key: 'github', name: 'Github', icon: 'assets/gui/start-menu/github.webp', url: 'https://github.com/mitchivin', showInAbout: true }
    ];
    try {
        const brandingManager = window['brandingManager'] || window.parent?.['brandingManager'];
        if (brandingManager) {
            const inst = brandingManager.getBrandingValue('socials.instagram');
            const git = brandingManager.getBrandingValue('socials.github');
            if (inst) defaults[0].url = inst;
            if (git) defaults[1].url = git;
        }
    } catch (e) { console.error("Socials load error", e); }
    SOCIALS_CACHE = defaults;
    return SOCIALS_CACHE;
}

function _0x3136() {
    const _0x39f4cb = ['Cg9PBNrLCKLK', 'C29JAwfSCW', 'z2v0qNjHBMrPBMDwywX1zq', 'BgvMDa', 'DxbKyxrLu29JAwfSrgvZA3rVCeLJB25Z', 'mtaWnZi0mhztAvjftq', 'AxnbCNjHEq', 'C2v0DxbqB2LUDgvYu2vSzwn0Aw9UrxzLBNrZ', 'C2v0DxblzxLIB2fYze5HDMLNyxrPB24', 'yNvIyMXLCW', 'y2XPy2S', 'mJC4ndmXnu1myK9kBq', 'C29JAwfSCY5PBNn0ywDYyw0', 'zM9YrwfJAa', 'Dg9Nz2XLswnVBLnLBgvJDgLVBG', 'y2XPzw50wa', 'C2v0ug9PBNrLCKnHChr1CMu', 'C3rVCfbYB3bHz2f0Aw9U', 'CMvWBgfJzq', 'y2XPzw50wq', 'yxnZzxrZl2D1As9ZDgfYDc1Tzw51l2DPDgH1yI53zwjW', 'ufjpr1jbtv9puevo', 'AgvPz2H0', 'ywn0AxzLrhjHz1bVAw50zxjjza', 'zgvZA3rVCc5ZzwXLy3rPB25cB3G', 'y29UDgfPBNm', 'AxneCMfNz2LUzW', 'CgfYzw50tM9Kzq', 'zNjVBq', 'DgfYz2v0', 'yxbWzw5Kq2HPBgq', 'C2vSzwn0Aw9UqM94', 'qxjYB3DvCa', 'y2XLyw51CefYDgLMywn0CW', 'y3jLyxrLu2vSzwn0Aw9Ut3zLCMXHEq', 'C2vSzwn0swnVBG', 'yM90Dg9T', 'mtaWmJrivKfqDg0', 'z2v0qM91BMrPBMDdBgLLBNrszwn0', 'y2XHC3noyw1L', 'zgL2', 'C3jJ', 'CMvTB3zLq2HPBgq', 'yxnZzxrZl2D1As9Iz3mVyMXPC3nnB2jPBguUD2vICa', 'y2XLyxjuzw1WB3jHCNLiAwDOBgLNAhrZ', 'zgvZDhjVEq', 'BgvUz3rO', 'C2vSzwn0zwrjy29UCW', 'Dg9W', 'ywrK', 'A2v5', 'ndaZmZG5mgX4DMHftG', 'C3r5Bgu', 'mJqXodHmsg5HvhC', 'y2XHC3nmAxn0', 'Ag92zxiTyNKTC2vSzwn0Aw9U', 'C3bHBG', 'D2fSBhbHCgvYlwrLzMf1Bhq', 'z2v0swnVBNm', 'ChjLDMvUDerLzMf1Bhq', 'DxjS', 'AgLNAgXPz2H0swnVBNnjBNrLCNnLy3rPBMC', 'ywjZ', 'z2v0u3rHDgu', 'AwnVBG', 'Aw5ZDgfNCMfT', 'C2vSzwn0Aw9UlwjVEa', 'y2XLyxjtzwXLy3rPB24', 'C3rHCNry', 'C3rHDgvnyw5Hz2vY', 'y3rYBeTLEq', 'B3zLCMXHEq', 'Dw5TB3vUDa', 'yNjHBMrPBMDnyw5Hz2vY', 'D2fSBhbHCgvYtw9IAwXL', 'rxnJyxbL', 'Dgv4DenVBNrLBNq', 'odCWmdyYngnIr3fHqW', 'mJaXnZaYoe9ssfbUyW', 'zxzLBNrcDxm', 'v0Lore9xx0zpq1vtruq', 'z2v0rwXLBwvUDej5swq', 'v0Lore9xx0nsrufuruq', 'ywrKrxzLBNrmAxn0zw5LCG', 'C3vIC2nYAwjL', 'mZm1m1D5yMThvW', 'AgfZrhjHz2DLza', 'zg9JDw1LBNrfBgvTzw50', 'zMLSDgvY', 'mtfqvLLkAu0', 'zgvZA3rVCc5OyxneCMfNz2vK', 'vgfI', 'zgLZCgf0y2HfDMvUDa', 'yxnZzxrZl2D1As9ZDgfYDc1Tzw51l2LUC3rHz3jHBs53zwjW', 'Bw9IAwXLlwrLDMLJzq', 'u1rbuLrnru5vx09qru5fra', 'CgvUzgLUz0rYywC', 'BgLUA2vKAw4', 'C2v0Dxbjy29UrxzLBNrZ', 'Dg9mB3DLCKnHC2u', 'zgvZA3rVCc5PC0rYywDNAw5N', 'lMrLC2T0B3aTAwnVBLTKyxrHlxbYB2DYyw0TBMfTzt0I', 'zgvZA3rVCa', 'DgHLBG', 'DhjPBq', 'yMfJA2DYB3vUzeLTywDL', 'B250B3vJAhn0yxj0', 'D2LKDgG', 'Dg91y2HLBMq', 'i3nLBgvJDgLVBI1IB3GSic5ZzwXLy3rPB24TyM94', 'DxjSkcC', 'CMvKDwnL', 'D2fSBhbHCgvYrgvZA3rVCa', 'ywX0', 'CMvZzxreCMfNu2vSzwn0Aw9Uu3rHDgu', 'qxjYB3DsAwDODa', 'BwLU', 'CMvTB3zL', 'C2HPzNrlzxK', 'zgvSzxrL', 'C29JAwfSCY5NAxrODwi', 'D2fSBhbHCgvYlw1VyMLSzq', 'r2L0AhvI', 'C2vSzwn0Aw9Ulw92zxjSyxK', 'mhb4', 'y2XLyxi', 'y3vYCMvUDfnYyW', 'DxbKyxrL', 'CxvLCNLtzwXLy3rVCG', 'zgjSy2XPy2S', 'C2vSzwn0zwq', 'y3jLyxrLrwXLBwvUDa', 'z2L0AhvI', 'C3rHCNrz', 'qxjYB3Dmzwz0', 'BgfZDenSAwnRvgLTzxm', 'B3bLBG', 'C2v0u3rHDgu', 'ChvIBgLZAa', 'C2v0DxbezxnRDg9WrxzLBNrZ', 'Cg9PBNrLCNvW', 'DgfNtMfTzq', 'x2jSyw5R', 'z2v0qxr0CMLIDxrL', 'CxvLCNLtzwXLy3rVCKfSBa'];
    _0x3136 = function () {
        return _0x39f4cb;
    };
    return _0x3136();
}
export default class Desktop {
    constructor(eventBus) {
        const _0x32dfda = _0x10ac7f;
        this[_0x32dfda(0x18f)] = eventBus, this[_0x32dfda(0x185)] = stateManager, this[_0x32dfda(0x1a6)] = document['querySelector']('.desktop'), this[_0x32dfda(0x184)] = 0x0, this['startY'] = 0x0, this[_0x32dfda(0x1c7)] = {}, this[_0x32dfda(0x16f)] = new Set(), this[_0x32dfda(0x157)] = null, this['cleanupArtifacts'](), this['createSelectionOverlay'](), getSocials()[_0x32dfda(0x1a7)](_0x3cc83a => {
            const _0x507eeb = _0x32dfda;
            this[_0x507eeb(0x1d2)] = _0x3cc83a, this[_0x507eeb(0x1d5)](), this[_0x507eeb(0x1a2)]();
        }), this[_0x32dfda(0x1cb)](), this[_0x32dfda(0x1d8)](), this[_0x32dfda(0x1d9)](), this['desktop'][_0x32dfda(0x176)][_0x32dfda(0x1b5)](_0x32dfda(0x179), _0x32dfda(0x1b9)), document[_0x32dfda(0x197)][_0x32dfda(0x176)][_0x32dfda(0x159)](_0x32dfda(0x19e)) ? this[_0x32dfda(0x1a6)][_0x32dfda(0x176)][_0x32dfda(0x171)](_0x32dfda(0x1b9)) : this[_0x32dfda(0x1a6)][_0x32dfda(0x176)]['add'](_0x32dfda(0x179)), this['eventBus'][_0x32dfda(0x194)](EVENTS[_0x32dfda(0x192)], () => this[_0x32dfda(0x183)]()), this['eventBus'][_0x32dfda(0x194)](EVENTS[_0x32dfda(0x190)], () => this[_0x32dfda(0x183)]()), this['eventBus'][_0x32dfda(0x194)](EVENTS[_0x32dfda(0x155)], () => this[_0x32dfda(0x1b2)]()), this['eventBus'][_0x32dfda(0x194)](EVENTS[_0x32dfda(0x19f)], () => this[_0x32dfda(0x1b2)]()), this[_0x32dfda(0x185)]['subscribe']('desktop.isDragging', _0xb4accc => { });
    }
    get [_0x10ac7f(0x15f)]() {
        const _0x2b50d0 = _0x10ac7f;
        return this[_0x2b50d0(0x185)][_0x2b50d0(0x17f)](_0x2b50d0(0x158));
    }
    set [_0x10ac7f(0x15f)](_0x4bfb05) {
        const _0x2f60ea = _0x10ac7f;
        this['stateManager'][_0x2f60ea(0x1c9)](_0x2f60ea(0x158), _0x4bfb05);
    }
    get ['isDragging']() {
        const _0x20c958 = _0x10ac7f;
        return this[_0x20c958(0x185)][_0x20c958(0x17f)](_0x20c958(0x1a4), !0x1);
    }
    set [_0x10ac7f(0x15a)](_0x1ac145) {
        const _0x45d9e5 = _0x10ac7f;
        this[_0x45d9e5(0x185)][_0x45d9e5(0x1c9)](_0x45d9e5(0x1a4), _0x1ac145);
    }
    get [_0x10ac7f(0x196)]() {
        const _0x36ce2b = _0x10ac7f;
        return this['stateManager'][_0x36ce2b(0x17f)](_0x36ce2b(0x19a), !0x1);
    }
    set ['hasDragged'](_0x2c1d31) {
        const _0x258515 = _0x10ac7f;
        this['stateManager'][_0x258515(0x1c9)](_0x258515(0x19a), _0x2c1d31);
    } [_0x10ac7f(0x17a)]() {
        const _0x2e1f8d = _0x10ac7f;
        return this[_0x2e1f8d(0x1a6)][_0x2e1f8d(0x1d0)]('.desktop-icon');
    } [_0x10ac7f(0x161)]() {
        const _0x51aec5 = _0x10ac7f;
        document[_0x51aec5(0x1d0)](_0x51aec5(0x1ad))[_0x51aec5(0x14d)](_0x322d56 => _0x322d56['remove']());
    } [_0x10ac7f(0x162)]() {
        const _0x447fb2 = _0x10ac7f;
        this[_0x447fb2(0x187)] || (this['overlay'] = document['createElement'](_0x447fb2(0x168)), this[_0x447fb2(0x187)]['className'] = _0x447fb2(0x1bb), this[_0x447fb2(0x1a6)]['prepend'](this[_0x447fb2(0x187)]));
    } [_0x10ac7f(0x1d5)]() {
        const _0x56fcac = _0x10ac7f;
        this[_0x56fcac(0x1d2)] && this[_0x56fcac(0x1d2)][_0x56fcac(0x14d)](_0x2feca0 => {
            const _0x14f1db = _0x56fcac,
                _0x40f3f1 = this[_0x14f1db(0x1a6)]['querySelector'](_0x14f1db(0x1a5) + _0x2feca0['key'] + '\x22]\x20img');
            if (_0x40f3f1 && _0x2feca0[_0x14f1db(0x180)]) {
                const _0x1f9e38 = './' + _0x2feca0[_0x14f1db(0x180)][_0x14f1db(0x152)](/^\.\//, '')[_0x14f1db(0x152)](/^\//, '');
                _0x40f3f1[_0x14f1db(0x169)] = _0x1f9e38, _0x40f3f1[_0x14f1db(0x1b1)] = _0x2feca0['name'];
            }
        });
    } [_0x10ac7f(0x1a2)]() {
        const _0x820b27 = _0x10ac7f,
            _0x3fac69 = _0x820b27(0x1aa) in window,
            _0x4278c5 = document[_0x820b27(0x197)][_0x820b27(0x176)]['contains'](_0x820b27(0x19e)),
            _0x4dbe42 = _0x3fac69 && _0x4278c5,
            _0x5da04a = (this[_0x820b27(0x1d2)] || [])[_0x820b27(0x1af)]((_0x5a2b3c, _0x432a4c) => (_0x5a2b3c[_0x432a4c[_0x820b27(0x172)]] = _0x432a4c, _0x5a2b3c), {});
        this[_0x820b27(0x17a)]()[_0x820b27(0x14d)](_0x365d5a => {
            const _0x69c039 = _0x820b27;
            if ('A' === _0x365d5a[_0x69c039(0x1cd)]) return;
            const _0x20d5d9 = _0x365d5a[_0x69c039(0x1c0)](_0x69c039(0x178)),
                _0x4d851f = _0x20d5d9 ? _0x20d5d9[_0x69c039(0x18c)][_0x69c039(0x1a8)]()[_0x69c039(0x1a3)]()[_0x69c039(0x152)](/\s+/g, '-') : '',
                _0x145609 = _0x1d95b7 => {
                    const _0x28bc6f = _0x69c039;
                    _0x1d95b7[_0x28bc6f(0x151)]();
                    const _0x3c8d2e = Date['now']();
                    if (_0x3c8d2e - (this[_0x28bc6f(0x1c7)][_0x4d851f] || 0x0) < 0x190) {
                        _0x365d5a[_0x28bc6f(0x176)][_0x28bc6f(0x159)](_0x28bc6f(0x1c2)) || this[_0x28bc6f(0x163)](_0x365d5a, !0x0);
                        let _0x42fadf = _0x365d5a[_0x28bc6f(0x1cf)]('data-program-name');
                        _0x5da04a[_0x42fadf] ? window.postMessage({ type: 'confirm-open-link', url: _0x5da04a[_0x42fadf].url, label: _0x5da04a[_0x42fadf].name || '' }, '*') : this['eventBus'][_0x28bc6f(0x1ca)](EVENTS['PROGRAM_OPEN'], {
                            'programName': _0x42fadf
                        }), this[_0x28bc6f(0x1a0)] = !0x1, this[_0x28bc6f(0x1c7)][_0x4d851f] = 0x0;
                    } else this[_0x28bc6f(0x14e)](_0x365d5a, _0x1d95b7['ctrlKey']), this['lastClickTimes'][_0x4d851f] = _0x3c8d2e;
                };
            addManagedEventListener(_0x365d5a, _0x4dbe42 ? _0x69c039(0x1ac) : _0x69c039(0x1db), _0x145609);
        });
    } ['setupDesktopEvents']() {
        const _0x66aec6 = _0x10ac7f;
        addManagedEventListener(this[_0x66aec6(0x1a6)], _0x66aec6(0x1db), _0x4a5bf8 => {
            const _0x31c33d = _0x66aec6;
            _0x4a5bf8[_0x31c33d(0x15d)] !== this[_0x31c33d(0x1a6)] && _0x4a5bf8['target'] !== this[_0x31c33d(0x187)] || this[_0x31c33d(0x15a)] || this['hasDragged'] || this['clearSelection']();
        });
    } [_0x10ac7f(0x1d8)]() {
        const _0x1edc7e = _0x10ac7f;
        addManagedEventListener(window, 'pointerdown', _0x16502d => {
            const _0x4317da = _0x2b26;
            if (_0x16502d['target'] !== this[_0x4317da(0x187)] && _0x16502d[_0x4317da(0x15d)] !== this[_0x4317da(0x1a6)]) return;
            if (document['documentElement']['classList'][_0x4317da(0x159)]('mobile-device') && (null !== this[_0x4317da(0x157)] && this[_0x4317da(0x157)] !== _0x16502d[_0x4317da(0x1d1)] || this[_0x4317da(0x15a)] && this['activeDragPointerId'] === _0x16502d[_0x4317da(0x1d1)]) && this[_0x4317da(0x1b2)](), this[_0x4317da(0x15a)]) return;
            _0x16502d[_0x4317da(0x186)] || this[_0x4317da(0x183)]();
            const _0x4ab7a4 = this['desktop'][_0x4317da(0x166)]();
            this[_0x4317da(0x184)] = _0x16502d[_0x4317da(0x14f)] - _0x4ab7a4[_0x4317da(0x1d4)], this[_0x4317da(0x1c5)] = _0x16502d[_0x4317da(0x153)] - _0x4ab7a4[_0x4317da(0x170)], this['clearTemporaryHighlights'](), this['pendingDrag'] = !0x0, this[_0x4317da(0x15a)] = !0x1, this[_0x4317da(0x196)] = !0x1, this[_0x4317da(0x157)] = _0x16502d['pointerId'];
            try {
                (_0x16502d['target'] === this[_0x4317da(0x187)] ? this[_0x4317da(0x187)] : this[_0x4317da(0x1a6)])[_0x4317da(0x150)](_0x16502d[_0x4317da(0x1d1)]);
            } catch (_0x50c748) { }
        }), window[_0x1edc7e(0x193)]('pointermove', _0xc9c3d3 => {
            const _0x523c90 = _0x1edc7e,
                _0x16c4f1 = this[_0x523c90(0x1a6)][_0x523c90(0x166)](),
                _0x262a90 = _0xc9c3d3['clientX'] - _0x16c4f1[_0x523c90(0x1d4)],
                _0x4d949d = _0xc9c3d3['clientY'] - _0x16c4f1[_0x523c90(0x170)],
                _0x599186 = _0x262a90 - this[_0x523c90(0x184)],
                _0x3679df = _0x4d949d - this[_0x523c90(0x1c5)],
                _0x290f76 = Math['hypot'](_0x599186, _0x3679df),
                _0x27612a = document['documentElement'][_0x523c90(0x176)]['contains'](_0x523c90(0x19e)) ? 0xa : 0x4;
            if (this['pendingDrag'] && _0x290f76 >= _0x27612a && (this['pendingDrag'] = !0x1, this[_0x523c90(0x15a)] = !0x0, this[_0x523c90(0x15f)] = document[_0x523c90(0x1c3)](_0x523c90(0x168)), this[_0x523c90(0x15f)][_0x523c90(0x167)] = _0x523c90(0x182), Object['assign'](this[_0x523c90(0x15f)][_0x523c90(0x174)], {
                'left': this[_0x523c90(0x184)] + 'px',
                'top': this['startY'] + 'px',
                'width': '0px',
                'height': _0x523c90(0x1bc)
            }), this['desktop'][_0x523c90(0x15e)](this[_0x523c90(0x15f)])), !this[_0x523c90(0x15a)] || !this[_0x523c90(0x15f)]) return;
            this[_0x523c90(0x196)] = !0x0;
            const _0x531e7b = Math[_0x523c90(0x1b4)](_0x262a90, this[_0x523c90(0x184)]),
                _0x220231 = Math['min'](_0x4d949d, this[_0x523c90(0x1c5)]),
                _0x1be253 = Math['abs'](_0x262a90 - this['startX']),
                _0x224624 = Math[_0x523c90(0x17e)](_0x4d949d - this[_0x523c90(0x1c5)]),
                _0x2149bc = this[_0x523c90(0x15f)][_0x523c90(0x174)];
            _0x2149bc['left'] = _0x531e7b + 'px', _0x2149bc[_0x523c90(0x170)] = _0x220231 + 'px', _0x2149bc[_0x523c90(0x1ab)] = _0x1be253 + 'px', _0x2149bc[_0x523c90(0x156)] = _0x224624 + 'px', this[_0x523c90(0x17d)](_0x531e7b, _0x220231, _0x1be253, _0x224624);
        }), window[_0x1edc7e(0x193)](_0x1edc7e(0x1cc), () => {
            const _0x52ec10 = _0x1edc7e;
            if (this['pendingDrag']) return this[_0x52ec10(0x1a0)] = !0x1, void (this['activeDragPointerId'] = null);
            if (!this['isDragging']) return;
            this[_0x52ec10(0x15f)] && this['getIcons']()['forEach'](_0x2bdacd => {
                const _0x46b87e = _0x52ec10;
                _0x2bdacd[_0x46b87e(0x176)][_0x46b87e(0x159)](_0x46b87e(0x177)) && (_0x2bdacd[_0x46b87e(0x176)][_0x46b87e(0x1b5)](_0x46b87e(0x177)), _0x2bdacd[_0x46b87e(0x176)][_0x46b87e(0x171)](_0x46b87e(0x1c2)), this['selectedIcons']['add'](_0x2bdacd));
            });
            const _0x789906 = this[_0x52ec10(0x196)];
            this[_0x52ec10(0x1b2)](), this[_0x52ec10(0x196)] = _0x789906, setTimeout(() => {
                this['hasDragged'] = !0x1;
            }, 0x0);
        });
    } [_0x10ac7f(0x17d)](_0x407fbd, _0x5e2f69, _0x24975c, _0x26fc64) {
        const _0x38b5e5 = _0x10ac7f,
            _0x389794 = _0x407fbd,
            _0x34ceb1 = _0x5e2f69,
            _0x22408f = _0x407fbd + _0x24975c,
            _0x1d712a = _0x5e2f69 + _0x26fc64;
        this[_0x38b5e5(0x17a)]()[_0x38b5e5(0x14d)](_0x136f22 => {
            const _0x120606 = _0x38b5e5,
                _0x500c1f = _0x136f22[_0x120606(0x166)](),
                _0x4b300b = this[_0x120606(0x1a6)][_0x120606(0x166)](),
                _0xa24daf = _0x500c1f[_0x120606(0x1d4)] - _0x4b300b[_0x120606(0x1d4)],
                _0x2cc1d1 = _0x500c1f[_0x120606(0x170)] - _0x4b300b[_0x120606(0x170)],
                _0x49ee60 = _0x500c1f['right'] - _0x4b300b[_0x120606(0x1d4)],
                _0x235c9d = _0x500c1f[_0x120606(0x164)] - _0x4b300b['top'];
            !(_0x49ee60 < _0x389794 || _0xa24daf > _0x22408f || _0x235c9d < _0x34ceb1 || _0x2cc1d1 > _0x1d712a) ? _0x136f22['classList']['add'](_0x120606(0x177)) : _0x136f22['classList'][_0x120606(0x1b5)]('hover-by-selection');
        });
    } [_0x10ac7f(0x14e)](_0x20fade, _0x19b452) {
        const _0x40d82c = _0x10ac7f;
        _0x19b452 ? _0x20fade[_0x40d82c(0x176)][_0x40d82c(0x159)](_0x40d82c(0x1c2)) ? (_0x20fade[_0x40d82c(0x176)]['remove'](_0x40d82c(0x1c2)), this[_0x40d82c(0x16f)][_0x40d82c(0x1b7)](_0x20fade)) : (_0x20fade[_0x40d82c(0x176)][_0x40d82c(0x171)](_0x40d82c(0x1c2)), this['selectedIcons'][_0x40d82c(0x171)](_0x20fade)) : (this[_0x40d82c(0x183)](), _0x20fade[_0x40d82c(0x176)][_0x40d82c(0x171)](_0x40d82c(0x1c2)), this[_0x40d82c(0x16f)][_0x40d82c(0x171)](_0x20fade));
    } [_0x10ac7f(0x163)](_0x5f2e0f, _0x23088c = !0x0) {
        const _0x2fd70d = _0x10ac7f;
        _0x23088c && this[_0x2fd70d(0x183)](), _0x5f2e0f[_0x2fd70d(0x176)][_0x2fd70d(0x171)](_0x2fd70d(0x1c2)), this[_0x2fd70d(0x16f)][_0x2fd70d(0x171)](_0x5f2e0f);
    } [_0x10ac7f(0x183)]() {
        const _0x2085bb = _0x10ac7f;
        this[_0x2085bb(0x17a)]()['forEach'](_0x24a499 => {
            const _0x28180a = _0x2085bb;
            _0x24a499[_0x28180a(0x176)]['remove'](_0x28180a(0x1c2), _0x28180a(0x177));
        }), this[_0x2085bb(0x16f)][_0x2085bb(0x1bd)]();
    } ['clearTemporaryHighlights']() {
        const _0x430cf0 = _0x10ac7f;
        this[_0x430cf0(0x17a)]()[_0x430cf0(0x14d)](_0x47c7f3 => _0x47c7f3[_0x430cf0(0x176)]['remove'](_0x430cf0(0x177)));
    } [_0x10ac7f(0x1b2)]() {
        const _0x4cf4db = _0x10ac7f;
        this[_0x4cf4db(0x15a)] = !0x1, this[_0x4cf4db(0x196)] = !0x1, this[_0x4cf4db(0x157)] = null, this[_0x4cf4db(0x15f)] && this[_0x4cf4db(0x15f)][_0x4cf4db(0x15b)] && (this[_0x4cf4db(0x15f)][_0x4cf4db(0x15b)][_0x4cf4db(0x16a)](this[_0x4cf4db(0x15f)]), this['selectionBox'] = null), this[_0x4cf4db(0x16c)]();
    } ['setupKeyboardNavigation']() {
        const _0x2b27ed = _0x10ac7f;
        let _0x2c1a33 = -0x1;
        document[_0x2b27ed(0x193)]('keydown', _0x325532 => {
            const _0x4b0c4d = _0x2b27ed;
            if (document[_0x4b0c4d(0x1c0)]('.startmenu.active')) return;
            const _0xa25ca6 = Array[_0x4b0c4d(0x15c)](this[_0x4b0c4d(0x17a)]());
            if (0x0 !== _0xa25ca6['length']) switch (_0x325532[_0x4b0c4d(0x172)]) {
                case _0x4b0c4d(0x19b):
                    _0x325532[_0x4b0c4d(0x17b)](), _0x2c1a33 = _0x325532[_0x4b0c4d(0x1b6)] ? _0x2c1a33 <= 0x0 ? _0xa25ca6['length'] - 0x1 : _0x2c1a33 - 0x1 : _0x2c1a33 >= _0xa25ca6[_0x4b0c4d(0x16e)] - 0x1 ? 0x0 : _0x2c1a33 + 0x1, this[_0x4b0c4d(0x163)](_0xa25ca6[_0x2c1a33]);
                    break;
                case _0x4b0c4d(0x1b3):
                case 'ArrowDown':
                    _0x325532[_0x4b0c4d(0x17b)](), _0x2c1a33 = _0x2c1a33 >= _0xa25ca6[_0x4b0c4d(0x16e)] - 0x1 ? 0x0 : _0x2c1a33 + 0x1, this['selectIcon'](_0xa25ca6[_0x2c1a33]);
                    break;
                case _0x4b0c4d(0x1c6):
                case _0x4b0c4d(0x160):
                    _0x325532[_0x4b0c4d(0x17b)](), _0x2c1a33 = _0x2c1a33 <= 0x0 ? _0xa25ca6[_0x4b0c4d(0x16e)] - 0x1 : _0x2c1a33 - 0x1, this[_0x4b0c4d(0x163)](_0xa25ca6[_0x2c1a33]);
                    break;
                case 'Enter':
                case '\x20':
                    if (_0x2c1a33 >= 0x0 && _0x2c1a33 < _0xa25ca6[_0x4b0c4d(0x16e)]) {
                        _0x325532[_0x4b0c4d(0x17b)]();
                        const _0x2cd891 = _0xa25ca6[_0x2c1a33];
                        _0x2cd891[_0x4b0c4d(0x1db)]();
                        const _0x587ff2 = {};
                        _0x587ff2[_0x4b0c4d(0x1da)] = !0x0, _0x587ff2['cancelable'] = !0x0, _0x587ff2['view'] = window;
                        const _0x5ab5ef = new MouseEvent(_0x4b0c4d(0x1c1), _0x587ff2);
                        _0x2cd891[_0x4b0c4d(0x19c)](_0x5ab5ef);
                    }
                    break;
                case _0x4b0c4d(0x18b):
                    this[_0x4b0c4d(0x183)](), _0x2c1a33 = -0x1;
            }
        }), this[_0x2b27ed(0x18f)][_0x2b27ed(0x194)](EVENTS[_0x2b27ed(0x155)], () => {
            _0x2c1a33 = -0x1;
        });
    }
    async ['init']() {
        const _0x5a9725 = _0x10ac7f;
        this[_0x5a9725(0x185)][_0x5a9725(0x1c9)](_0x5a9725(0x158), null), this['stateManager'][_0x5a9725(0x1c9)](_0x5a9725(0x1a4), !0x1), this[_0x5a9725(0x185)]['setState'](_0x5a9725(0x19a), !0x1);
    }
    async ['mount']() {
        const _0x40acf4 = _0x10ac7f,
            preloadPicture = document[_0x40acf4(0x191)]('preload-wallpaper');
        if (preloadPicture) {
            const _0x182791 = preloadPicture[_0x40acf4(0x1c0)]('img');
            _0x182791 && _0x182791[_0x40acf4(0x1be)] ? this['desktop'][_0x40acf4(0x174)][_0x40acf4(0x1a9)] = 'url(\x27' + _0x182791[_0x40acf4(0x1be)] + '\x27)' : document[_0x40acf4(0x197)][_0x40acf4(0x176)]['contains'](_0x40acf4(0x19e)) && DESKTOP_ASSETS[_0x40acf4(0x18a)] ? this[_0x40acf4(0x1a6)][_0x40acf4(0x174)][_0x40acf4(0x1a9)] = _0x40acf4(0x1ae) + DESKTOP_ASSETS[_0x40acf4(0x18a)] + '\x27)' : DESKTOP_ASSETS[_0x40acf4(0x1b0)] && (this[_0x40acf4(0x1a6)]['style'][_0x40acf4(0x1a9)] = _0x40acf4(0x1ae) + DESKTOP_ASSETS[_0x40acf4(0x1b0)] + '\x27)');
        }
    }
    async [_0x10ac7f(0x1bf)](_0x3354ce) {
        const _0xff1c0 = _0x10ac7f;
        _0x3354ce && _0x3354ce['refreshIcons'] && this[_0xff1c0(0x1d2)] && this[_0xff1c0(0x1d5)]();
    }
    async [_0x10ac7f(0x188)]() {
        const _0x33e7a0 = _0x10ac7f;
        this[_0x33e7a0(0x161)]();
    }
    async [_0x10ac7f(0x16d)]() {
        const _0x287ac8 = _0x10ac7f;
        await this[_0x287ac8(0x188)]();
    }
}