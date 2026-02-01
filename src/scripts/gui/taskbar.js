const _0x244f98 = _0x307e;
(function (_0x58d36b, _0x2ee604) {
    const _0xc9bd5 = _0x307e,
        _0x437f1e = _0x58d36b();
    while (!![]) {
        try {
            const _0x108404 = parseInt(_0xc9bd5(0x242)) / 0x1 + -parseInt(_0xc9bd5(0x1d0)) / 0x2 + -parseInt(_0xc9bd5(0x266)) / 0x3 * (parseInt(_0xc9bd5(0x202)) / 0x4) + -parseInt(_0xc9bd5(0x259)) / 0x5 + -parseInt(_0xc9bd5(0x203)) / 0x6 * (parseInt(_0xc9bd5(0x228)) / 0x7) + parseInt(_0xc9bd5(0x200)) / 0x8 * (parseInt(_0xc9bd5(0x1ec)) / 0x9) + parseInt(_0xc9bd5(0x1d3)) / 0xa;
            if (_0x108404 === _0x2ee604) break;
            else _0x437f1e['push'](_0x437f1e['shift']());
        } catch (_0x29bc5f) {
            _0x437f1e['push'](_0x437f1e['shift']());
        }
    }
}(_0x3b22, 0x80a27));
import _0x3e009c from './startMenu.js';

function _0x307e(_0x29abcb, _0x928c4a) {
    const _0x3b22c7 = _0x3b22();
    return _0x307e = function (_0x307e80, _0x389e66) {
        _0x307e80 = _0x307e80 - 0x1cc;
        let _0x5beb74 = _0x3b22c7[_0x307e80];
        if (_0x307e['HuaKRW'] === undefined) {
            var _0x953d30 = function (_0x1b7738) {
                const _0x30b590 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x27c6dd = '',
                    _0x5b0e5b = '';
                for (let _0x401f04 = 0x0, _0x4bdca6, _0x396032, _0x1e9f63 = 0x0; _0x396032 = _0x1b7738['charAt'](_0x1e9f63++); ~_0x396032 && (_0x4bdca6 = _0x401f04 % 0x4 ? _0x4bdca6 * 0x40 + _0x396032 : _0x396032, _0x401f04++ % 0x4) ? _0x27c6dd += String['fromCharCode'](0xff & _0x4bdca6 >> (-0x2 * _0x401f04 & 0x6)) : 0x0) {
                    _0x396032 = _0x30b590['indexOf'](_0x396032);
                }
                for (let _0x37b49e = 0x0, _0x2c02a3 = _0x27c6dd['length']; _0x37b49e < _0x2c02a3; _0x37b49e++) {
                    _0x5b0e5b += '%' + ('00' + _0x27c6dd['charCodeAt'](_0x37b49e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x5b0e5b);
            };
            _0x307e['ngmLVU'] = _0x953d30, _0x29abcb = arguments, _0x307e['HuaKRW'] = !![];
        }
        const _0x33178b = _0x3b22c7[0x0],
            _0x4e7938 = _0x307e80 + _0x33178b,
            _0x1e1212 = _0x29abcb[_0x4e7938];
        return !_0x1e1212 ? (_0x5beb74 = _0x307e['ngmLVU'](_0x5beb74), _0x29abcb[_0x4e7938] = _0x5beb74) : _0x5beb74 = _0x1e1212, _0x5beb74;
    }, _0x307e(_0x29abcb, _0x928c4a);
}
import {
    EVENTS
} from '../utils/eventBus.js';
import {
    setupTooltips
} from './tooltip.js';
import {
    playBalloonSound
} from '../utils/audioManager.js';

function _0x3b22() {
    const _0x38be3c = ['lNrHC2TIyxiTChjVz3jHBxm', 'C3rHCNrnzw51q29TCg9Uzw50', 'tuvesufFueXbwuvsx1nut1bqruq', 'CMvMCMvZAenSB2nR', 'DxbKyxrLq2XVy2S', 'x3nLDfrHC2TIyxjcywnRz3jVDw5K', 'x2XHC3rtDgfYDfrVz2DSzvrZ', 'lNrHC2TIyxi', 'lMnYDc1WzxjZAxn0zw5Jzq', 'mI1KAwDPDa', 'x2nHBgn1Bgf0zuf2ywLSywjSzvDPzhrO', 'y2XHC3nmAxn0', 'z2v0u2vJB25KCW', 'ywjZB2X1Dgu', 'D293lxbSyxLPBMCTAw5KAwnHDg9Y', 'lMnYDc1HyMvYCMf0Aw9U', 'lI4VDxrPBhmVzNjHBwvty2HLzhvSzxiUANm', 'u1rbuLrnru5vx09qru5fra', 'C3rHCNqTyNv0Dg9U', 'mta2otC1nvrhDu1dtq', 'C3jJ', 'C3LZDgvTvhjHEq', 'C3vIDhjLzq', 'C3vIC2nYAwjLvg9fDMvUDhm', 'DhjHBNnPDgLVBG', 'ChvZAa', 'y2XVy2S', 'B25JBgLJAW', 'BxvZAwnqBgf5zxiTD2LUzg93', 'y2XVy2TfBgvTzw50', 'Cg9ZAxrPB24', 'y2HPBgrmAxn0', 'mJq2nJLVyvvvtLK', 'C3r5Bgu', 'ywrK', 'x3nLDfn0yxj0qNv0Dg9Usw1Hz2u', 'CMvTB3zL', 'CMvTB3zLq2HPBgq', 'lNn5C3rLBs10CMf5', 'zgvZDhjVEq', 'BwvKAwfqBgf5zxiTD2LUzg93', 'lNrHC2TIyxiTAxrLBq', 'DhjHBNnSyxrLwsGTmJbWEcK', 'x2fWCgX5vgfZA2jHCKXHEw91Da', 'Dg9Nz2XLu3rHCNrnzw51', 'i2jHBgXVB24TChjVAMvJDhmTBgLUAW', 'zM9YrwfJAa', 'D2vIA2L0uMvXDwvZDez1BgXZy3jLzw4', 'CMvXDwvZDez1BgXZy3jLzw4', 'zw4Tvvm', 'BxvZAwnqBgf5zxi', 'mtuWotq4A2fvuLPg', 'lMjHBgXVB24', 'zNvUy3rPB24', 'mtqZmZbvquruALC', 'yMfSBg9VBI5IB2r5', 'D2LUzg93swq', 'ywjVDxq', 'DxbKyxrLvgfZA2jHCKXHEw91Da', 'lMnYDc12AwDUzxr0zq', 'C3rHCNrcDxr0B24', 'lI9HC3nLDhmVz3vPl3rHC2TIyxiVy3j0lNDLyNa', 'zgf0ys10B29SDgLW', 'BgLUA1TYzwW9iNbYzwXVywqIxvTOCMvMjd0IyxnZzxrZl2D1As90yxnRyMfYl3rHC2TIyxiTyMCUD2vICcjD', 'Bw9IAwXLlwrLDMLJzq', 'zxHPDez1BgXZy3jLzw4', 'C2v0qxr0CMLIDxrL', 'y2fSBa', 'pc9WpGOGicaGica8CcbJBgfZCZ0IyMfSBg9VBL9FDgv4Df9FC2vJB25KiIbZDhLSzt0ICgfKzgLUzZOGmca4ChGGmcaYChG7ig1HCMDPBI10B3a6idHWEdSIpGOGicaGicaGieDLDcbtDgfYDgvKoIa8ysbOCMvMpsiJiIbPzd0IyMfSBg9VBI1HyM91Dc1SAw5RiIbZDhLSzt0Iy29SB3i6igjSDwu7ihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoYi+qwjVDxqGtwu8l2e+ihWGpgeGAhjLzJ0IiYiGAwq9iMjHBgXVB24TChjVAMvJDhmTBgLUAYiGC3r5Bgu9iMnVBg9YoIbIBhvLoYb0zxH0lwrLy29YyxrPB246ihvUzgvYBgLUztSIpK15ifbYB2PLy3rZpc9HpGOGicaGica8l3a+cIaGicaGidXKAxyGy2XHC3m9iMjHBgXVB24TCg9PBNrLCI1HBMnOB3iIihn0EwXLpsjWB3nPDgLVBJPHyNnVBhv0ztTIB3r0B206lte5ChG7CMLNAhq6mJrWEdT3Awr0AdOWo2HLAwDODdOWoYi+pc9KAxy+cIaGica8l2rPDJ4kica', 'v09xx1nut1bqruq', 'z2v0qM91BMrPBMDdBgLLBNrszwn0', 'CgfYzw50tM9Kzq', 'yxbWzw5Kq2HPBgq', 'Bxnszxf1zxn0rNvSBhnJCMvLBG', 'zg9JDw1LBNrfBgvTzw50', 'DgfZA2jHCG', 'u1rbuLrnru5vx0nmt1nfra', 'lNrYyxKTC3rHDhvZlwLJB24Sic50CMf5lxDLBgnVBwuTAwnVBIWGlNrYyxKTDM9SDw1LlwLJB24Sic50CMf5lwnYDc10B2DNBguSic50CMf5lwz1BgXZy3jLzw4TAwnVBG', 'ChjVz3jHBuLK', 'mJC2odrpqMX5y3e', 'Dg9W', 'B3bHy2L0Eq', 'AwnVBI1VBMX5', 'v09xx1bmqvLjtKC', 'C2nYB2XSwa', 'BNvTzxjPyW', 'ChjVAMvJDhm', 'D2LKDgG', 'C2v0DxbtDgfYDej1DhrVBKvMzMvJDhm', 'BgvUz3rO', 'tvvtsunFueXbwuvsx1bmqvLjtKC', 'yMfJA2DYB3vUzfnPEMu', 'AxnqBgf5Aw5N', 'AgLKzq', 'Aw5KAwnHDg9Yq2XHC3m', 'yxv0BYaXmdaL', 'zgvMyxvSDa', 'ChvIBgLZAa', 'yM9KEq', 'ofnPvuLgBG', 'EKLUzgv4', 'oe9rA25QwG', 'mJqWCMzAB0fY', 'lMjHBgXVB25Fx2nSB3nL', 'BgvMDa', 'Aw5Uzxjive1m', 'A2v5', 'Bw91BNq', 'lMnYDc1UB2LZzq', 'Aw5PDgLHBfrPBwvVDxrjza', 'C2v0DxbdBg9JA1vWzgf0zxm', 'BM93', 'yMfJA2DYB3vUzeLTywDL', 'DgHLBG', 'y3j0lxr1CM5PBMCTB24', 'yxnZzxrZl2D1As90yxnRyMfYl3n0yxj0lwj1DhrVBI53zwjW', 'Dg9Nz2XL', 'DxjSkcC', 'z2v0twLSBgLZzwnVBMrZ', 'DgLTzuzVCM1HDhrLCG', 'x19JB2fSzxnJzq', 'D293lxDPBMrVDW', 'Dgv4DenVBNrLBNq', 'Dw5TB3vUDa', 'yMf0y2HLzfb1yMXPC2G', 'BxvZAwmTCgXHEwLUzY1PBMrPy2f0B3i', 'CxvLCNLtzwXLy3rVCG', 'zgLZCgXHEq', 'z2v0qNjHBMrPBMDwywX1zq', 'lMjHBgXVB24TCg9PBNrLCI1HBMnOB3i', 'mtqWma', 'lNrYyxKTD2vSy29Tzs1Py29U', 'yNjHBMrPBMDnyw5Hz2vY', 'zNvSBhnJCMvLBKvSzw1LBNq', 'Bw96uMvXDwvZDez1BgXty3jLzw4', 'y3j0lxr1CM5PBMCTB2zM', 'i2jHBgXVB24TywjVDxqTBgLUAW', 'lNrYyxKTzNvSBhnJCMvLBI1Py29U', 'B2zMC2v0v2LKDgG', 'mJC5mdLzAgnNv2e', 'Aw50zxj2ywXjza', 'BwvKAwfqBgf5zxi', 'CMvPBML0u2nHBMXPBMu', 'yMXVy2S', 'CxvLCNLtzwXLy3rVCKfSBa', 'zM9YBwf0', 'ChjLDMvUDerLzMf1Bhq', 'A2v5zg93BG', 'y29UDgfPBNm', 'BM9Uzq', 'lMnYDc1Zy2fUBgLUzq', 'zgL2', 'ufjpr1jbtv9puevo', 'C3rVCfbYB3bHz2f0Aw9U', 'y3jLyxrLrwXLBwvUDa', 'yMfSBg9VBI1YB290', 'BwvKAweTCgXHEwLUzY1PBMrPy2f0B3i', 'D293', 'ywn0AxzL', 'C3vIC2nYAwjL', 'BwLUDxrL', 'zxzLBNrcDxm', 'y2XPy2S', 'pc9ZCgfUpGOGicaGica8l2rPDJ4kicaGicaGphaGy2XHC3m9iMjHBgXVB25Fx3rLEhrFx2zPCNn0iIbZDhLSzt0ICgfKzgLUzZOGmca4ChGGmcaYChG7iJ4', 'y3j0lwjYAwDODg5LC3m', 'otG3nZi5ALDlt2Xi', 'zMXLEa', 'C3rHCNrnzw51', 'B2zMC2v0sgvPz2H0'];
    _0x3b22 = function () {
        return _0x38be3c;
    };
    return _0x3b22();
}
import {
    updateTaskbarPlayingIndicator,
    getCachedElement
} from '../utils/domUtils.js';
import {
    addManagedEventListener
} from '../utils/eventListenerManager.js';
let taskbarSharedEventBus = null;
class Clock {
    constructor(_0x1c8f3b) {
        const _0x40ba96 = _0x307e,
            _0x51912c = {};
        _0x51912c['hour'] = _0x40ba96(0x1f2), _0x51912c[_0x40ba96(0x23d)] = _0x40ba96(0x24f), _0x51912c['hour12'] = !0x0, (this[_0x40ba96(0x263)] = document[_0x40ba96(0x21b)](_0x1c8f3b), this[_0x40ba96(0x229)] = null, this[_0x40ba96(0x20a)] = null, this[_0x40ba96(0x214)] = new Intl['DateTimeFormat'](_0x40ba96(0x1ce), _0x51912c), this['clockElement'] && this[_0x40ba96(0x20b)]());
    } ['setupClockUpdates']() {
        const _0x535068 = _0x307e;
        clearTimeout(this['initialTimeoutId']), clearInterval(this[_0x535068(0x229)]);
        const _0x2b8128 = new Date(),
            _0x392510 = 0x3e8 * (0x3c - _0x2b8128[_0x535068(0x252)]()) - _0x2b8128[_0x535068(0x213)]();
        this[_0x535068(0x24a)](), this[_0x535068(0x20a)] = setTimeout(() => {
            const _0x4fc22d = _0x535068;
            this[_0x4fc22d(0x24a)](), this[_0x4fc22d(0x229)] = setInterval(() => this['updateClock'](), 0xea60);
        }, _0x392510);
    } [_0x244f98(0x24a)]() {
        const _0x4f2293 = _0x244f98;
        this[_0x4f2293(0x263)] && (this['clockElement'][_0x4f2293(0x217)] = this['timeFormatter'][_0x4f2293(0x22e)](new Date()));
    } [_0x244f98(0x26d)]() {
        const _0x36b10a = _0x244f98;
        clearTimeout(this[_0x36b10a(0x20a)]), clearInterval(this[_0x36b10a(0x229)]);
    }
}
export default class Taskbar {
    constructor(eventBus) {
        const _0x2c166a = _0x244f98;
        this['eventBus'] = eventBus, taskbarSharedEventBus = eventBus, this[_0x2c166a(0x1d9)] = getCachedElement(_0x2c166a(0x258)), this[_0x2c166a(0x247)] = new _0x3e009c(this[_0x2c166a(0x23e)]), this['programsContainer'] = getCachedElement(_0x2c166a(0x246), !0x0), this[_0x2c166a(0x25b)] = getCachedElement(_0x2c166a(0x26c), !0x0), this['taskbar'] = getCachedElement(_0x2c166a(0x24d), !0x0), this[_0x2c166a(0x24c)] = 0x0, addManagedEventListener(window, 'resize', () => {
            const _0x2b95cf = _0x2c166a;
            this[_0x2b95cf(0x269)]();
        }), addManagedEventListener(document, 'fullscreenchange', () => { });
    } [_0x244f98(0x25d)]() {
        const _0x2d88b3 = _0x244f98;
        this['eventBus'][_0x2d88b3(0x23c)](EVENTS[_0x2d88b3(0x257)], () => {
            const _0x53fef0 = _0x2d88b3;
            this[_0x53fef0(0x1d9)]['classList'][_0x53fef0(0x268)](_0x53fef0(0x23b));
        }), this['eventBus'][_0x2d88b3(0x23c)](EVENTS[_0x2d88b3(0x1e9)], () => {
            const _0x383bd1 = _0x2d88b3;
            this['startButton'][_0x383bd1(0x251)][_0x383bd1(0x26a)](_0x383bd1(0x23b));
        }), this[_0x2d88b3(0x23e)][_0x2d88b3(0x23c)](EVENTS['WINDOW_CREATED'], () => {
            this['updateTaskbarLayout']();
        }), this[_0x2d88b3(0x23e)]['subscribe'](EVENTS['WINDOW_CLOSED'], () => {
            const _0x437d69 = _0x2d88b3;
            this[_0x437d69(0x1d7)]();
        }), this['eventBus'][_0x2d88b3(0x23c)](EVENTS[_0x2d88b3(0x1f7)], _0x251656 => {
            const _0x350b61 = _0x2d88b3,
                _0x16bae9 = {};
            _0x16bae9['programId'] = _0x350b61(0x1cf), _0x16bae9['windowId'] = _0x350b61(0x262), _0x16bae9['indicatorClass'] = 'music-playing-indicator', _0x16bae9[_0x350b61(0x1f9)] = !0x0, _0x251656 && 'musicPlayer' === _0x251656[_0x350b61(0x1eb)] && updateTaskbarPlayingIndicator(_0x16bae9);
        }), this[_0x2d88b3(0x23e)]['subscribe'](EVENTS['MUSIC_PLAYER_STOPPED'], _0x3a3410 => {
            const _0x2f28ba = _0x2d88b3,
                _0x9dd249 = {};
            _0x9dd249['programId'] = _0x2f28ba(0x1cf), _0x9dd249[_0x2f28ba(0x1d5)] = _0x2f28ba(0x262), _0x9dd249[_0x2f28ba(0x1fb)] = _0x2f28ba(0x21a), _0x9dd249[_0x2f28ba(0x1f9)] = !0x1, _0x3a3410 && 'musicPlayer' === _0x3a3410[_0x2f28ba(0x1eb)] && updateTaskbarPlayingIndicator(_0x9dd249);
        }), this[_0x2d88b3(0x23e)][_0x2d88b3(0x23c)](EVENTS['MEDIA_PLAYER_PLAYING'], _0x396052 => {
            const _0x429908 = _0x2d88b3,
                _0x1a3007 = {};
            _0x1a3007[_0x429908(0x1eb)] = _0x429908(0x22a), _0x1a3007[_0x429908(0x1d5)] = 'mediaPlayer-window', _0x1a3007[_0x429908(0x1fb)] = _0x429908(0x239), _0x1a3007[_0x429908(0x1f9)] = !0x0, _0x396052 && _0x429908(0x22a) === _0x396052[_0x429908(0x1eb)] && updateTaskbarPlayingIndicator(_0x1a3007);
        }), this[_0x2d88b3(0x23e)][_0x2d88b3(0x23c)](EVENTS[_0x2d88b3(0x248)], _0x2f338c => {
            const _0x535df8 = _0x2d88b3,
                _0xda996a = {};
            _0xda996a[_0x535df8(0x1eb)] = 'mediaPlayer', _0xda996a[_0x535df8(0x1d5)] = _0x535df8(0x26e), _0xda996a['indicatorClass'] = 'media-playing-indicator', _0xda996a[_0x535df8(0x1f9)] = !0x1, _0x2f338c && _0x535df8(0x22a) === _0x2f338c[_0x535df8(0x1eb)] && updateTaskbarPlayingIndicator(_0xda996a);
        });
    } [_0x244f98(0x1f5)]() {
        const _0x62de24 = _0x244f98;
        addManagedEventListener(this[_0x62de24(0x1d9)], 'click', _0x48ea04 => {
            const _0x24ae74 = _0x62de24;
            _0x48ea04 && _0x48ea04[_0x24ae74(0x236)]();
            const _0x304db9 = Date[_0x24ae74(0x20c)]();
            if (_0x304db9 - this[_0x24ae74(0x24c)] < 0xc8) return;
            this[_0x24ae74(0x24c)] = _0x304db9, this[_0x24ae74(0x247)] || (this[_0x24ae74(0x247)] = new _0x3e009c(this[_0x24ae74(0x23e)])), this[_0x24ae74(0x1d9)] || (this['startButton'] = getCachedElement(_0x24ae74(0x258)));
            let _0x5d3509 = !0x0;
            try {
                const _0x2bb2f6 = this[_0x24ae74(0x247)] && this['startMenuComponent'][_0x24ae74(0x244)],
                    _0xc781ac = !!(_0x2bb2f6 && _0x2bb2f6['classList'] && _0x2bb2f6[_0x24ae74(0x251)][_0x24ae74(0x231)](_0x24ae74(0x23b)));
                _0x5d3509 = !_0xc781ac;
            } catch (_0x34a5e6) { }
            const _0x62ce33 = {};
            _0x62ce33[_0x24ae74(0x215)] = !0x0, (window[_0x24ae74(0x219)] || this[_0x24ae74(0x23e)][_0x24ae74(0x1fe)])[_0x24ae74(0x1e0)](window[_0x24ae74(0x219)] ? void 0x0 : this[_0x24ae74(0x23e)], EVENTS['STARTMENU_TOGGLE'], _0x62ce33);
            const _0x327050 = _0x1a1377 => {
                setTimeout(() => {
                    const _0x508a49 = _0x307e;
                    try {
                        const _0x217b7f = this[_0x508a49(0x247)] && this[_0x508a49(0x247)][_0x508a49(0x244)],
                            _0x3f9642 = !!(_0x217b7f && _0x217b7f[_0x508a49(0x251)] && _0x217b7f[_0x508a49(0x251)][_0x508a49(0x231)](_0x508a49(0x23b)));
                        _0x5d3509 && !_0x3f9642 && this[_0x508a49(0x247)] && _0x508a49(0x1d2) == typeof this[_0x508a49(0x247)][_0x508a49(0x272)] && this[_0x508a49(0x247)][_0x508a49(0x272)]();
                    } catch (_0x8383b6) { }
                }, _0x1a1377);
            };
            _0x327050(0x40), _0x327050(0xa0);
        });
    } ['setupResponsiveTaskbar']() {
        const _0x390040 = _0x244f98;
        this['updateTaskbarLayout'](), addManagedEventListener(window, 'resize', () => {
            this['updateTaskbarLayout']();
        });
        const _0x3d0c28 = {};
        _0x3d0c28[_0x390040(0x265)] = !0x0, _0x3d0c28[_0x390040(0x25c)] = !0x1, new MutationObserver(() => {
            this['updateTaskbarLayout']();
        })['observe'](this['programsContainer'], _0x3d0c28);
    } [_0x244f98(0x1d7)]() {
        const _0x147821 = _0x244f98,
            _0x53b161 = document[_0x147821(0x22d)](_0x147821(0x26f));
        if (0x0 === _0x53b161[_0x147821(0x1f6)]) return;
        const _0x4b1240 = this[_0x147821(0x250)](),
            _0x3b690b = this['_determineLayoutMode'](_0x53b161[_0x147821(0x1f6)], _0x4b1240);
        this[_0x147821(0x271)](_0x53b161, _0x3b690b, _0x4b1240);
    } [_0x244f98(0x250)]() {
        const _0xab4ed6 = _0x244f98;
        return this[_0xab4ed6(0x1e8)][_0xab4ed6(0x227)] - this[_0xab4ed6(0x1d9)]['offsetWidth'] - this[_0xab4ed6(0x25b)][_0xab4ed6(0x227)];
    } ['_determineLayoutMode'](_0x2ddb8e, _0x258131) {
        const _0x563761 = _0x244f98;
        return 0xa8 * _0x2ddb8e <= _0x258131 ? _0x563761(0x1fd) : 0x50 * _0x2ddb8e <= _0x258131 ? 'reduced' : 0x24 * _0x2ddb8e <= _0x258131 ? _0x563761(0x1ef) : 'overflow';
    } ['_applyTaskbarLayout'](_0x4a5704, _0x17f59e, _0xb1e7be) {
        const _0x394a8c = _0x244f98,
            _0x1434ec = _0x4a5704[_0x394a8c(0x1f6)];
        let _0x5d804e = Math['floor'](_0xb1e7be / _0x1434ec);
        _0x5d804e > 0xa8 && (_0x5d804e = 0xa8), _0x5d804e < 0x24 && (_0x5d804e = 0x24);
        const _0x34fd1b = 0x24 === _0x5d804e;
        _0x4a5704['forEach'](_0x5a445c => {
            const _0x5c8da5 = _0x394a8c;
            _0x5a445c[_0x5c8da5(0x267)]['display'] = _0x5c8da5(0x243), _0x5a445c[_0x5c8da5(0x267)]['width'] = _0x5d804e + 'px', _0x5a445c[_0x5c8da5(0x251)][_0x5c8da5(0x211)](_0x5c8da5(0x1ef), _0x34fd1b);
        });
    } [_0x244f98(0x269)]() {
        const _0x4bb1fb = _0x244f98,
            _0x53dcab = this[_0x4bb1fb(0x1d9)][_0x4bb1fb(0x21b)]('img');
        _0x53dcab && (_0x53dcab['src'] = _0x4bb1fb(0x210));
    } [_0x244f98(0x24b)]() {
        const _0x3ac1b9 = _0x244f98;
        try {
            if (!this[_0x3ac1b9(0x1e8)]) return;
            const preload = document[_0x3ac1b9(0x21b)](_0x3ac1b9(0x1dc)),
                _0x355982 = 'assets/gui/taskbar/taskbar-bg.webp',
                _0x1b92c4 = preload?.['href'] || _0x355982;
            this[_0x3ac1b9(0x1e8)][_0x3ac1b9(0x267)][_0x3ac1b9(0x20d)] = _0x3ac1b9(0x212) + _0x1b92c4 + '\x27)', this['taskbar'][_0x3ac1b9(0x267)]['backgroundRepeat'] = 'repeat-x', this[_0x3ac1b9(0x1e8)][_0x3ac1b9(0x267)][_0x3ac1b9(0x1f8)] = _0x3ac1b9(0x1fc);
        } catch (_0x24e7dd) { }
    }
    async ['init']() {
        const _0x2e1a65 = _0x244f98;
        this[_0x2e1a65(0x269)](), this[_0x2e1a65(0x24b)]();
    }
    async [_0x244f98(0x208)]() {
        const _0x38ffd5 = _0x244f98;
        this[_0x38ffd5(0x1f5)](), this['setupResponsiveTaskbar'](), setupTooltips(_0x38ffd5(0x1ea), void 0x0, 0x64, () => !getCachedElement('balloon-root')), new Clock('.time'), this[_0x38ffd5(0x25d)]();
    }
    async ['update'](_0x40d946) {
        const _0x1185ba = _0x244f98;
        _0x40d946 && _0x40d946[_0x1185ba(0x249)] && this['clock'] && this['clock'][_0x1185ba(0x24a)]();
    }
    async [_0x244f98(0x218)]() {
        const _0x337d28 = _0x244f98;
        this['clock'] && this[_0x337d28(0x260)][_0x337d28(0x26d)]();
    }
    async ['destroy']() {
        const _0x9f9826 = _0x244f98;
        await this[_0x9f9826(0x218)]();
    }
}
let balloonTimeouts = [];
export function hideBalloon(_0x30d78f = !0x1) {
    const _0x2ab1a0 = _0x244f98,
        _0x5f4e97 = getCachedElement(_0x2ab1a0(0x238));
    if (!_0x5f4e97) return;
    const _0x2fd7a9 = _0x5f4e97[_0x2ab1a0(0x21b)](_0x2ab1a0(0x1d1));
    balloonTimeouts['forEach'](_0x11c5b7 => clearTimeout(_0x11c5b7)), balloonTimeouts = [], _0x30d78f ? _0x5f4e97[_0x2ab1a0(0x1e4)] && _0x5f4e97[_0x2ab1a0(0x1e4)][_0x2ab1a0(0x26b)](_0x5f4e97) : (_0x2fd7a9 && _0x2fd7a9[_0x2ab1a0(0x251)][_0x2ab1a0(0x268)]('hide'), setTimeout(() => {
        const _0x5c81eb = _0x2ab1a0;
        _0x5f4e97[_0x5c81eb(0x1e4)] && _0x5f4e97[_0x5c81eb(0x1e4)][_0x5c81eb(0x26b)](_0x5f4e97);
    }, 0x3e8));
}
export async function showWelcomeBalloon() {
    const _0x136d45 = _0x244f98,
        _0x53155c = getCachedElement('login-screen');
    if (_0x53155c && _0x136d45(0x232) !== _0x53155c[_0x136d45(0x267)][_0x136d45(0x21c)] && '0' !== _0x53155c[_0x136d45(0x267)][_0x136d45(0x1ee)]) return;
    if (getCachedElement('balloon-root')) return;
    balloonTimeouts['forEach'](_0x5ab109 => clearTimeout(_0x5ab109)), balloonTimeouts = [];
    const _0x44540c = getCachedElement('.tray-welcome-icon', !0x0);
    if (!_0x44540c) return;
    const _0x4e7375 = document[_0x136d45(0x237)](_0x136d45(0x234));
    _0x4e7375['id'] = _0x136d45(0x238), _0x4e7375[_0x136d45(0x267)][_0x136d45(0x264)] = _0x136d45(0x253), _0x4e7375[_0x136d45(0x267)][_0x136d45(0x201)] = _0x136d45(0x21f), document[_0x136d45(0x1ff)][_0x136d45(0x1e5)](_0x4e7375);
    let _0x5c5ed2 = '',
        _0xc9ebb8 = '';
    try {
        if (window['brandingManager']) {
            const _0x38e968 = window[_0x136d45(0x221)]['getBrandingValue']('balloon.title'),
                _0x24ee96 = window[_0x136d45(0x221)][_0x136d45(0x21d)](_0x136d45(0x1d4));
            _0x38e968 && (_0x5c5ed2 = _0x38e968), _0x24ee96 && (_0xc9ebb8 = _0x24ee96);
        }
    } catch (_0x49cec6) { }
    _0x4e7375[_0x136d45(0x206)] = '\x0a\x20\x20\x20\x20<div\x20class=\x22balloon\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22balloon__close\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22balloon__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20decoding=\x22async\x22\x20loading=\x22lazy\x22\x20class=\x22balloon__header__img\x22\x20src=\x22assets/gui/taskbar/welcome.webp\x22\x20alt=\x22welcome\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22balloon__header__text\x22\x20style=\x22font-weight:\x20bold;\x22>' + _0x5c5ed2 + _0x136d45(0x240) + _0xc9ebb8 + _0x136d45(0x1e1);
    const _0x581c05 = _0x4e7375[_0x136d45(0x21b)](_0x136d45(0x273));
    _0x581c05 && addManagedEventListener(_0x581c05, _0x136d45(0x23f), _0x562544 => {
        const _0x2aad65 = _0x136d45,
            _0x594e3a = {};
        _0x594e3a['programName'] = _0x2aad65(0x1f3), (_0x562544[_0x2aad65(0x22f)](), taskbarSharedEventBus && EVENTS && taskbarSharedEventBus[_0x2aad65(0x1fe)](EVENTS[_0x2aad65(0x235)], _0x594e3a));
    });
    const _0x3d1dcb = _0x4e7375[_0x136d45(0x21b)](_0x136d45(0x225));
    _0x3d1dcb && addManagedEventListener(_0x3d1dcb, 'click', _0x72cca9 => {
        const _0x2f44aa = _0x136d45,
            _0x57f9c0 = {};
        _0x57f9c0['programName'] = _0x2f44aa(0x1d6), (_0x72cca9[_0x2f44aa(0x22f)](), taskbarSharedEventBus && EVENTS && taskbarSharedEventBus[_0x2f44aa(0x1fe)](EVENTS[_0x2f44aa(0x235)], _0x57f9c0));
    }), (playBalloonSound(), await new Promise(_0x3a6b96 => {
        setTimeout(() => {
            const _0x353dc4 = _0x307e,
                _0x32fdbd = _0x44540c['getBoundingClientRect'](),
                _0x396013 = _0x4e7375[_0x353dc4(0x21b)](_0x353dc4(0x1d1)),
                _0x2187cf = _0x396013[_0x353dc4(0x21b)](_0x353dc4(0x21e));
            import(_0x353dc4(0x256))[_0x353dc4(0x20e)](({
                scheduleWrite: _0x3511f6
            }) => {
                _0x3511f6(() => {
                    const _0x5cad99 = _0x307e,
                        _0x13d21b = _0x2187cf[_0x5cad99(0x1e3)](),
                        _0x375569 = _0x32fdbd['left'] + _0x32fdbd[_0x5cad99(0x1f4)] / 0x2 + window[_0x5cad99(0x1f1)] - (_0x13d21b[_0x5cad99(0x205)] + _0x13d21b[_0x5cad99(0x1f4)] / 0x2 + window[_0x5cad99(0x1f1)]) - 0x8;
                    _0x4e7375[_0x5cad99(0x267)]['left'] = _0x4e7375['offsetLeft'] + _0x375569 + 'px', _0x4e7375[_0x5cad99(0x267)][_0x5cad99(0x1ed)] = _0x32fdbd[_0x5cad99(0x1ed)] - _0x396013[_0x5cad99(0x245)] - 0x8 + window['scrollY'] + 'px';
                    const _0x5817a8 = document[_0x5cad99(0x1e7)][_0x5cad99(0x251)][_0x5cad99(0x231)](_0x5cad99(0x1dd));
                    setTimeout(_0x3a6b96, _0x5817a8 ? 0x96 : 0x32);
                });
            });
        }, 0x0);
    }));
    const _0x3d4d67 = _0x4e7375[_0x136d45(0x21b)](_0x136d45(0x1d1));
    _0x4e7375[_0x136d45(0x21b)](_0x136d45(0x204))[_0x136d45(0x261)] = () => hideBalloon(), _0x3d4d67[_0x136d45(0x251)][_0x136d45(0x26a)](_0x136d45(0x1fa));
    const _0xeb66a6 = document[_0x136d45(0x1e7)][_0x136d45(0x251)][_0x136d45(0x231)](_0x136d45(0x1dd)),
        _0x3a8928 = _0xeb66a6 ? 0x1b58 : 0x2710,
        removeDelay = _0xeb66a6 ? 0x1f40 : 0x2af8;
    balloonTimeouts['push'](setTimeout(() => _0x3d4d67[_0x136d45(0x251)][_0x136d45(0x268)]('hide'), _0x3a8928)), balloonTimeouts[_0x136d45(0x25f)](setTimeout(() => hideBalloon(), removeDelay));
}
const setupBalloonClick = () => {
    const _0x47a63d = _0x244f98,
        _0x22443a = getCachedElement(_0x47a63d(0x220), !0x0);
    _0x22443a ? (addManagedEventListener(_0x22443a, _0x47a63d(0x23f), showWelcomeBalloon), addManagedEventListener(_0x22443a, _0x47a63d(0x230), _0xe2490a => {
        const _0x167c8a = _0x47a63d;
        'Enter' !== _0xe2490a[_0x167c8a(0x207)] && '\x20' !== _0xe2490a['key'] || (_0xe2490a['preventDefault'](), showWelcomeBalloon());
    })) : setTimeout(setupBalloonClick, 0x64);
};
addManagedEventListener(document, 'DOMContentLoaded', () => {
    const _0x2c2275 = _0x244f98;
    setupBalloonClick();
    const _0x580d56 = document[_0x2c2275(0x21b)]('.tray-crt-toggle');
    if (_0x580d56) {
        let _0x1f10c1 = !0x0;
        const _0x7152a4 = () => {
            const _0x109f8d = _0x2c2275;
            _0x1f10c1 = !_0x1f10c1, document[_0x109f8d(0x1ff)][_0x109f8d(0x251)]['remove'](_0x109f8d(0x20f), _0x109f8d(0x224)), _0x1f10c1 ? (document['body'][_0x109f8d(0x251)][_0x109f8d(0x268)](_0x109f8d(0x20f)), setTimeout(() => {
                const _0x14f5f4 = _0x109f8d;
                document[_0x14f5f4(0x1ff)][_0x14f5f4(0x251)][_0x14f5f4(0x26a)](_0x14f5f4(0x20f));
            }, 0x12c)) : (document[_0x109f8d(0x1ff)][_0x109f8d(0x251)][_0x109f8d(0x268)](_0x109f8d(0x224)), setTimeout(() => {
                const _0x175736 = _0x109f8d;
                document[_0x175736(0x1ff)]['classList'][_0x175736(0x26a)](_0x175736(0x224));
            }, 0xfa)), (['.crt-effect', _0x109f8d(0x233), _0x109f8d(0x1d8), _0x109f8d(0x209), '.crt-flicker', _0x109f8d(0x255), _0x109f8d(0x24e)][_0x109f8d(0x274)](_0x48a7c9 => {
                const _0x4ddd35 = _0x109f8d,
                    _0x5ebaf2 = document[_0x4ddd35(0x21b)](_0x48a7c9);
                _0x5ebaf2 && (_0x5ebaf2[_0x4ddd35(0x267)]['display'] = _0x1f10c1 ? _0x4ddd35(0x22c) : _0x4ddd35(0x232), '.crt-scanline' === _0x48a7c9 && _0x1f10c1 && (_0x5ebaf2[_0x4ddd35(0x267)][_0x4ddd35(0x25e)] = _0x4ddd35(0x232), _0x5ebaf2[_0x4ddd35(0x267)]['transform'] = _0x4ddd35(0x270), _0x5ebaf2[_0x4ddd35(0x245)], setTimeout(() => {
                    const _0x265ba4 = _0x4ddd35;
                    document['dispatchEvent'](new CustomEvent(_0x265ba4(0x22b)));
                }, 0x64)));
            }), _0x1f10c1 ? document[_0x109f8d(0x1ff)]['classList'][_0x109f8d(0x268)]('crt-brightness') : document[_0x109f8d(0x1ff)][_0x109f8d(0x251)][_0x109f8d(0x26a)]('crt-brightness'), _0x580d56[_0x109f8d(0x25a)] = _0x1f10c1 ? _0x109f8d(0x1da) : './assets/gui/taskbar/crt-off.webp', _0x580d56[_0x109f8d(0x1df)]('data-tooltip', _0x1f10c1 ? 'CRT\x20Effects:\x20ON' : 'CRT\x20Effects:\x20OFF'));
        };
        document[_0x2c2275(0x1ff)]['classList']['add'](_0x2c2275(0x241)), _0x580d56['setAttribute'](_0x2c2275(0x1db), 'CRT\x20Effects:\x20ON'), addManagedEventListener(_0x580d56, _0x2c2275(0x23f), _0x7152a4);
    }
    const _0x58f5d0 = document['querySelector'](_0x2c2275(0x226));
    _0x58f5d0 && addManagedEventListener(_0x58f5d0, _0x2c2275(0x23f), () => {
        const _0x4a9e9f = _0x2c2275;
        hideBalloon(!0x0);
        const _0x29b38a = document[_0x4a9e9f(0x1e7)];
        document[_0x4a9e9f(0x222)] ? document[_0x4a9e9f(0x1de)]() : _0x29b38a[_0x4a9e9f(0x1cd)] ? _0x29b38a['requestFullscreen']() : _0x29b38a[_0x4a9e9f(0x223)] ? _0x29b38a['mozRequestFullScreen']() : _0x29b38a[_0x4a9e9f(0x1cc)] ? _0x29b38a[_0x4a9e9f(0x1cc)]() : _0x29b38a[_0x4a9e9f(0x1e6)] && _0x29b38a[_0x4a9e9f(0x1e6)]();
    });
});