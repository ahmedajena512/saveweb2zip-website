(function(_0x2dff8d, _0x5a8933) {
    const _0x45a158 = _0x19d8,
        _0x563aa2 = _0x2dff8d();
    while (!![]) {
        try {
            const _0x19ad8f = -parseInt(_0x45a158(0xeb)) / 0x1 + -parseInt(_0x45a158(0xe8)) / 0x2 * (parseInt(_0x45a158(0xd2)) / 0x3) + -parseInt(_0x45a158(0xe5)) / 0x4 * (parseInt(_0x45a158(0xea)) / 0x5) + parseInt(_0x45a158(0xb2)) / 0x6 + -parseInt(_0x45a158(0xb3)) / 0x7 + -parseInt(_0x45a158(0xe6)) / 0x8 + parseInt(_0x45a158(0xd3)) / 0x9;
            if (_0x19ad8f === _0x5a8933) break;
            else _0x563aa2['push'](_0x563aa2['shift']());
        } catch (_0x22fd95) {
            _0x563aa2['push'](_0x563aa2['shift']());
        }
    }
}(_0x4b40, 0xe8310));
import {
    addManagedEventListener
} from './eventListenerManager.js';
import {
    TIMING
} from './domUtils.js';

function _0x19d8(_0x115447, _0x273711) {
    const _0x4b40b8 = _0x4b40();
    return _0x19d8 = function(_0x19d8a5, _0x5bd56d) {
        _0x19d8a5 = _0x19d8a5 - 0xb2;
        let _0x8c458f = _0x4b40b8[_0x19d8a5];
        if (_0x19d8['eEetMK'] === undefined) {
            var _0x40a5f6 = function(_0x2406dc) {
                const _0x3501c1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x5ec441 = '',
                    _0x66675a = '';
                for (let _0x948296 = 0x0, _0x4380e0, _0x12060e, _0x4a7954 = 0x0; _0x12060e = _0x2406dc['charAt'](_0x4a7954++); ~_0x12060e && (_0x4380e0 = _0x948296 % 0x4 ? _0x4380e0 * 0x40 + _0x12060e : _0x12060e, _0x948296++ % 0x4) ? _0x5ec441 += String['fromCharCode'](0xff & _0x4380e0 >> (-0x2 * _0x948296 & 0x6)) : 0x0) {
                    _0x12060e = _0x3501c1['indexOf'](_0x12060e);
                }
                for (let _0x88dfe2 = 0x0, _0x55571d = _0x5ec441['length']; _0x88dfe2 < _0x55571d; _0x88dfe2++) {
                    _0x66675a += '%' + ('00' + _0x5ec441['charCodeAt'](_0x88dfe2)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x66675a);
            };
            _0x19d8['noAkpe'] = _0x40a5f6, _0x115447 = arguments, _0x19d8['eEetMK'] = !![];
        }
        const _0x590a71 = _0x4b40b8[0x0],
            _0x4734d6 = _0x19d8a5 + _0x590a71,
            _0x1782a8 = _0x115447[_0x4734d6];
        return !_0x1782a8 ? (_0x8c458f = _0x19d8['noAkpe'](_0x8c458f), _0x115447[_0x4734d6] = _0x8c458f) : _0x8c458f = _0x1782a8, _0x8c458f;
    }, _0x19d8(_0x115447, _0x273711);
}
let _isMobileCache = null,
    _isFirefoxCache = null,
    _isInitialized = !0x1;
export function isFirefox() {
    const _0x4d86bf = _0x19d8;
    if (null === _isFirefoxCache) {
        const _0x5ec441 = navigator['userAgent'] || '';
        _isFirefoxCache = /Firefox/i [_0x4d86bf(0xbd)](_0x5ec441);
    }
    return _isFirefoxCache;
}
let _needsAudioResetCache = null;
export function needsAudioResetDelay() {
    const _0x2187ad = _0x19d8;
    if (null === _needsAudioResetCache) try {
        const _0x66675a = new Audio();
        _needsAudioResetCache = _0x2187ad(0xde) in _0x66675a || _0x2187ad(0xc7) in _0x66675a || _0x2187ad(0xe7) in _0x66675a || isFirefox();
    } catch {
        _needsAudioResetCache = isFirefox();
    }
    return _needsAudioResetCache;
}
export function isMobileDevice() {
    const _0x155501 = _0x19d8;
    if (null === _isMobileCache) {
        const _0x948296 = navigator[_0x155501(0xdc)] || '',
            _0x4380e0 = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i [_0x155501(0xbd)](_0x948296),
            _0x12060e = /Macintosh/i [_0x155501(0xbd)](_0x948296) && navigator[_0x155501(0xbc)] > 0x1;
        if (_0x4380e0 || _0x12060e) return _isMobileCache = !0x0, !0x0;
        if (_0x155501(0xbb) in window && navigator['maxTouchPoints'] > 0x0 && window[_0x155501(0xca)] <= 0x300) return _isMobileCache = !0x0, !0x0;
        try {
            const _0x4a7954 = navigator[_0x155501(0xbc)] > 0x0,
                _0x88dfe2 = window[_0x155501(0xca)],
                _0x55571d = window['innerHeight'],
                _0xfa5986 = Math[_0x155501(0xd6)](_0x88dfe2, _0x55571d);
            _isMobileCache = _0x4a7954 && _0xfa5986 < 0x30c && (_0x88dfe2 <= 0x4b0 && _0x55571d <= 0x4b0);
        } catch (_0x1a4012) {
            _isMobileCache = !0x1;
        }
    }
    return _isMobileCache;
}
export function isTruePhoneDevice() {
    const _0x2bdf56 = _0x19d8,
        _0x1c4996 = navigator[_0x2bdf56(0xdc)] || '',
        _0x2b6f28 = /Mobi|Android|iPhone|iPod|Windows Phone/i [_0x2bdf56(0xbd)](_0x1c4996);
    if (/iPad/i [_0x2bdf56(0xbd)](_0x1c4996) || /Macintosh/i ['test'](_0x1c4996) && navigator[_0x2bdf56(0xbc)] > 0x1) return !0x1;
    if (/Android/i [_0x2bdf56(0xbd)](_0x1c4996) && !/Mobile/i [_0x2bdf56(0xbd)](_0x1c4996)) return !0x1;
    const _0x33c89 = window['innerWidth'],
        _0x27b705 = window[_0x2bdf56(0xe3)],
        _0x3e2910 = Math[_0x2bdf56(0xd6)](_0x33c89, _0x27b705);
    return _0x2b6f28 && _0x3e2910 < 0x1f4;
}
export function initializeDeviceDetection() {
    const _0x2555f8 = _0x19d8;
    if (_isInitialized) return;
    const _0x467062 = isMobileDevice(),
        _0x143eaa = isFirefox();
    _0x467062 && (document[_0x2555f8(0xc5)][_0x2555f8(0xb5)][_0x2555f8(0xd9)]('mobile-device'), document['body'][_0x2555f8(0xb5)]['add'](_0x2555f8(0xcc))), _0x143eaa && document[_0x2555f8(0xc5)][_0x2555f8(0xb5)]['add'](_0x2555f8(0xd5)), _0x467062 && isChromiumMobile() && initializeChromiumViewportFix(), _isInitialized = !0x0;
}

function _0x4b40() {
    const _0x2fbfff = ['B250B3vJAhn0yxj0', 'Bwf4vg91y2HqB2LUDhm', 'DgvZDa', 'mtaWlJaXDMG', 'Dg91y2HLBMq', 'rw50zxi', 'yM9KEq', 'DMLZDwfSvMLLD3bVCNq', 'CxvLCNLtzwXLy3rVCG', 'te9or19eruXbwq', 'zg9JDw1LBNrfBgvTzw50', 'lcb1C2vYlxnJywXHyMXLpxLLCW', 'Bw96u2v0Dxa', 'A2v5zg93BG', 'CM91BMq', 'Aw5UzxjxAwr0Aa', 'AgvPz2H0', 'Bw9IAwXLlwrLDMLJzq', 'A2v5yM9HCMqTDMLZAwjSzq', 'BgvUz3rO', 'vKLfv1bpuLrFu1rbqKLmsvPf', 'C2v0uMvHBfzO', 'A2v5', 'm3bTDvfIBq', 'nJK4mJi0mJneDMz3vMq', 'zgLZCgf0y2HfDMvUDa', 'zMLYzwzVEc1ICM93C2vY', 'BwLU', 'C2nYB2XS', 'Bwf0y2HLCW', 'ywrK', 'CMvZAxPL', 'zM9Yy2vwAwv3Cg9YDfjLy2fSyW', 'DxnLCKfNzw50', 'C3r5Bgu', 'Bw96q3vYCMvUDfnHBxbSzu9MzNnLDa', 'y29UDgvUDa', 'CgfZC2L2zq', 'zM9JDxnPBG', 'Bwv0yvTUyw1Lpsj2Awv3Cg9YDcjD', 'Aw5UzxjizwLNAhq', 'C3vIBwL0', 'nZi4ng9LzLnZyG', 'mtG3odq4mgneD09fvW', 'Bw96rNjHz21LBNrfBMq', 'mZyYnde5ngfnAfrryW', 'Aw5WDxqSihrLEhrHCMvH', 'ndm4nuHAvvLWEq', 'mtGXmZi3nwvLrMTfCq', 'ywrKrxzLBNrmAxn0zw5LCG', 'odG4ndC0r05LCuXd', 'mta0oduWotDqzM5WqvO', 'tuvesvvnx0rftefz', 'y2XHC3nmAxn0', 'DgfYz2v0', 'DMLZAwjPBgL0EwnOyw5Nzq', 'AgLKzgvU', 'zM9JDxnVDxq', 'CMvTB3zL'];
    _0x4b40 = function() {
        return _0x2fbfff;
    };
    return _0x4b40();
}

function isChromiumMobile() {
    const _0x54294d = _0x19d8;
    if (!isMobileDevice()) return !0x1;
    const _0x43d407 = navigator[_0x54294d(0xdc)] || '';
    return /Chrome|Chromium|Edge|OPR|Opera|Brave/i ['test'](_0x43d407) && !/Safari|Firefox/i [_0x54294d(0xbd)](_0x43d407);
}
let viewportFixInitialized = !0x1;
export function initializeChromiumViewportFix() {
    const _0x3828ab = _0x19d8;
    if (viewportFixInitialized) return;
    let _0x4886a7, _0x2d8696 = !0x1,
        _0x363ac8 = window['visualViewport'] ?.[_0x3828ab(0xcb)] || window[_0x3828ab(0xe3)],
        _0x54ecfb, _0xf017fd = _0x363ac8;

    function _0x458f3f() {
        const _0x31ca70 = _0x3828ab,
            _0x19ed5d = window[_0x31ca70(0xc2)] ?.[_0x31ca70(0xcb)] || window['innerHeight'];
        _0x19ed5d > _0x363ac8 + 0xa && (_0x363ac8 = _0x19ed5d), _0x19ed5d > _0xf017fd + 0xa && setTimeout(() => {
            try {
                _0x8bf40a();
            } catch (_0x170af6) {}
        }, 0x3c), _0xf017fd = _0x19ed5d;
        const _0x3fe39a = _0x363ac8 - _0x19ed5d > Math[_0x31ca70(0xd6)](0x78, Math[_0x31ca70(0xc9)](0.18 * _0x363ac8));
        _0x3fe39a && !_0x2d8696 ? (_0x2d8696 = !0x0, document[_0x31ca70(0xc1)][_0x31ca70(0xb5)][_0x31ca70(0xd9)](_0x31ca70(0xcd))) : !_0x3fe39a && _0x2d8696 && (_0x2d8696 = !0x1, document[_0x31ca70(0xc1)][_0x31ca70(0xb5)][_0x31ca70(0xba)](_0x31ca70(0xcd)), setTimeout(() => {
            const _0x762496 = _0x31ca70;
            _0x8bf40a();
            const _0x50705c = window[_0x762496(0xc2)] ?.[_0x762496(0xcb)] || window[_0x762496(0xe3)];
            _0x50705c > _0x363ac8 + 0xa && (_0x363ac8 = _0x50705c);
        }, 0x64));
    }

    function _0x8bf40a() {
        const _0x4bd740 = _0x3828ab;
        window[_0x4bd740(0xd0)] && window[_0x4bd740(0xd0)]();
        const _0x3eba11 = document[_0x4bd740(0xc3)](_0x4bd740(0xe2));
        if (_0x3eba11) {
            const _0x794c9c = _0x3eba11[_0x4bd740(0xdf)];
            _0x3eba11[_0x4bd740(0xdf)] = _0x794c9c + _0x4bd740(0xc6), setTimeout(() => {
                const _0x25ed2f = _0x4bd740;
                _0x3eba11[_0x25ed2f(0xdf)] = _0x794c9c, window[_0x25ed2f(0xd0)] && window[_0x25ed2f(0xd0)]();
            }, 0x32);
        }
        const _0x241095 = document['body'][_0x4bd740(0xdd)]['height'];
        document[_0x4bd740(0xc1)][_0x4bd740(0xdd)]['height'] = _0x4bd740(0xbe), setTimeout(() => {
            const _0x508226 = _0x4bd740;
            document[_0x508226(0xc1)][_0x508226(0xdd)][_0x508226(0xcb)] = _0x241095, window[_0x508226(0xd0)] && window['setRealVh']();
        }, 0x32);
        const _0x31e320 = [TIMING['QUICK_DELAY'], TIMING[_0x4bd740(0xb4)], 0x190, 0x258, TIMING[_0x4bd740(0xc4)]];
        let _0x86c39e = 0x0;
        const _0xbef723 = () => {
            const _0x3dbb8a = _0x4bd740;
            _0x86c39e < _0x31e320[_0x3dbb8a(0xce)] && setTimeout(() => {
                const _0x3cf2d9 = _0x3dbb8a;
                window['setRealVh'] && window[_0x3cf2d9(0xd0)](), _0x86c39e++, _0xbef723();
            }, 0x0 === _0x86c39e ? _0x31e320[0x0] : _0x31e320[_0x86c39e] - _0x31e320[_0x86c39e - 0x1]);
        };
        _0xbef723(), setTimeout(() => {
            const _0x2a672d = _0x4bd740;
            window[_0x2a672d(0xd4)](new Event(_0x2a672d(0xda)));
        }, 0x64);
    }
    try {
        window['forceViewportRecalc'] || (window[_0x3828ab(0xdb)] = () => {
            try {
                _0x8bf40a();
            } catch (_0x458fd3) {}
        });
    } catch (_0x242daf) {}
    const _0x202312 = {};
    _0x202312[_0x3828ab(0xe0)] = !0x0;
    const _0x1af707 = {};
    _0x1af707['passive'] = !0x0, (window['visualViewport'] && addManagedEventListener(window[_0x3828ab(0xc2)], 'resize', _0x458f3f), addManagedEventListener(window, _0x3828ab(0xda), () => {
        const _0x2a708f = _0x3828ab;
        clearTimeout(_0x4886a7), _0x4886a7 = setTimeout(_0x458f3f, TIMING[_0x2a708f(0xcf)]);
    }), document[_0x3828ab(0xec)](_0x3828ab(0xe1), _0x60150f => {
        const _0x21016f = _0x3828ab;
        _0x60150f[_0x21016f(0xb6)][_0x21016f(0xd8)](_0x21016f(0xe9)) && setTimeout(_0x458f3f, 0x12c);
    }), document[_0x3828ab(0xec)](_0x3828ab(0xb9), _0x396828 => {
        const _0x209560 = _0x3828ab;
        _0x396828[_0x209560(0xb6)][_0x209560(0xd8)](_0x209560(0xe9)) && (setTimeout(_0x458f3f, 0x64), setTimeout(_0x458f3f, 0x12c), setTimeout(_0x458f3f, 0x1f4));
    }), document[_0x3828ab(0xec)](_0x3828ab(0xe4), () => {
        setTimeout(_0x458f3f, 0xc8), setTimeout(_0x458f3f, 0x1f4);
    }), document[_0x3828ab(0xec)](_0x3828ab(0xc8), _0x2ecbe1 => {
        const _0x2166f7 = _0x3828ab;
        _0x2166f7(0xc0) === _0x2ecbe1[_0x2166f7(0xd1)] && _0x2ecbe1['target'][_0x2166f7(0xd8)]('input,\x20textarea') && (setTimeout(_0x458f3f, 0xc8), setTimeout(_0x458f3f, 0x1f4));
    }), document['addEventListener'](_0x3828ab(0xb7), () => {
        const _0x3125c3 = _0x3828ab;
        document[_0x3125c3(0xb8)] || (setTimeout(_0x458f3f, 0x64), setTimeout(_0x458f3f, 0x12c));
    }), document['addEventListener'](_0x3828ab(0xd7), () => {
        clearTimeout(_0x54ecfb), _0x54ecfb = setTimeout(_0x458f3f, 0xc8);
    }, _0x202312), document['addEventListener'](_0x3828ab(0xbf), () => {
        setTimeout(_0x458f3f, 0x12c);
    }, _0x1af707), viewportFixInitialized = !0x0);
}