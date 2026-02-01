(function(_0x5ba794, _0x33bbbc) {
    const _0x416364 = _0x49ae,
        _0x3058cf = _0x5ba794();
    while (!![]) {
        try {
            const _0x4d3a31 = -parseInt(_0x416364(0x200)) / 0x1 + -parseInt(_0x416364(0x1ee)) / 0x2 * (parseInt(_0x416364(0x203)) / 0x3) + -parseInt(_0x416364(0x1f3)) / 0x4 * (-parseInt(_0x416364(0x204)) / 0x5) + -parseInt(_0x416364(0x1f7)) / 0x6 * (parseInt(_0x416364(0x205)) / 0x7) + parseInt(_0x416364(0x1f8)) / 0x8 + parseInt(_0x416364(0x201)) / 0x9 * (-parseInt(_0x416364(0x1fe)) / 0xa) + parseInt(_0x416364(0x1f6)) / 0xb;
            if (_0x4d3a31 === _0x33bbbc) break;
            else _0x3058cf['push'](_0x3058cf['shift']());
        } catch (_0x6c8ea7) {
            _0x3058cf['push'](_0x3058cf['shift']());
        }
    }
}(_0x3f34, 0xdc6a6));
import {
    needsAudioResetDelay
} from './device.js';
let loginSound = null,
    logoffSound = null,
    balloonSound = null;

function _0x49ae(_0x4b7dc3, _0x5a44d7) {
    const _0x3f347b = _0x3f34();
    return _0x49ae = function(_0x49ae61, _0x35c32e) {
        _0x49ae61 = _0x49ae61 - 0x1ee;
        let _0x2106ab = _0x3f347b[_0x49ae61];
        if (_0x49ae['EQFLJu'] === undefined) {
            var _0x179510 = function(_0x28344f) {
                const _0x19182d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x49787a = '',
                    _0xa9ef0d = '';
                for (let _0x322ced = 0x0, _0xd0f2cc, _0x236e90, _0x58f20d = 0x0; _0x236e90 = _0x28344f['charAt'](_0x58f20d++); ~_0x236e90 && (_0xd0f2cc = _0x322ced % 0x4 ? _0xd0f2cc * 0x40 + _0x236e90 : _0x236e90, _0x322ced++ % 0x4) ? _0x49787a += String['fromCharCode'](0xff & _0xd0f2cc >> (-0x2 * _0x322ced & 0x6)) : 0x0) {
                    _0x236e90 = _0x19182d['indexOf'](_0x236e90);
                }
                for (let _0x46a376 = 0x0, _0x309285 = _0x49787a['length']; _0x46a376 < _0x309285; _0x46a376++) {
                    _0xa9ef0d += '%' + ('00' + _0x49787a['charCodeAt'](_0x46a376)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xa9ef0d);
            };
            _0x49ae['NtXfhf'] = _0x179510, _0x4b7dc3 = arguments, _0x49ae['EQFLJu'] = !![];
        }
        const _0x168b65 = _0x3f347b[0x0],
            _0x41d925 = _0x49ae61 + _0x168b65,
            _0x3e750c = _0x4b7dc3[_0x41d925];
        return !_0x3e750c ? (_0x2106ab = _0x49ae['NtXfhf'](_0x2106ab), _0x4b7dc3[_0x41d925] = _0x2106ab) : _0x2106ab = _0x3e750c, _0x2106ab;
    }, _0x49ae(_0x4b7dc3, _0x5a44d7);
}
export function initializeSystemAudio() {
    const _0x470f96 = _0x49ae;
    loginSound = new Audio(_0x470f96(0x1f2)), logoffSound = new Audio(_0x470f96(0x1f0)), balloonSound = new Audio('./assets/sounds/balloon.wav'), [loginSound, logoffSound, balloonSound]['forEach'](_0x28344f => {
        const _0x4c5eaf = _0x470f96;
        _0x28344f && (_0x28344f[_0x4c5eaf(0x202)] = _0x4c5eaf(0x1f5), _0x28344f[_0x4c5eaf(0x1fa)]());
    });
}
export function getBalloonSound() {
    return balloonSound;
}
export function getLoginSound() {
    return loginSound;
}
export function getLogoffSound() {
    return logoffSound;
}

function teardownAudioElement(_0x19182d) {
    const _0x1d05fc = _0x49ae;
    if (_0x19182d) try {
        _0x19182d[_0x1d05fc(0x1f9)](), _0x19182d[_0x1d05fc(0x206)] = 0x0, _0x19182d[_0x1d05fc(0x1fc)] = '', _0x19182d['removeAttribute'](_0x1d05fc(0x1fc)), _0x19182d['load']();
    } catch (_0x49787a) {}
}

function reinitializeAudioElement(_0xa9ef0d, _0x322ced) {
    const _0x19152b = _0x49ae;
    if (_0xa9ef0d) try {
        _0xa9ef0d['src'] = _0x322ced, _0xa9ef0d['preload'] = 'auto', _0xa9ef0d[_0x19152b(0x1fa)]();
    } catch (_0xd0f2cc) {}
}
export function playOnceAndTeardown(_0x236e90, _0x58f20d, volume = 0x1) {
    const _0x4d27b5 = _0x49ae;
    if (_0x236e90) try {
        _0x236e90['pause'](), _0x236e90[_0x4d27b5(0x206)] = 0x0, _0x236e90[_0x4d27b5(0x1fd)] = volume;
        const _0x46a376 = needsAudioResetDelay() ? 0x14 : 0x0;
        setTimeout(() => {
            const _0x48fb74 = _0x4d27b5;
            _0x236e90[_0x48fb74(0x1f4)]()[_0x48fb74(0x1ef)](() => {});
            const _0x309285 = () => {
                const _0x75f71 = _0x48fb74;
                teardownAudioElement(_0x236e90), _0x236e90[_0x75f71(0x1ff)]('ended', _0x309285), setTimeout(() => {
                    reinitializeAudioElement(_0x236e90, _0x58f20d);
                }, 0x64);
            };
            _0x236e90[_0x48fb74(0x1fb)](_0x48fb74(0x207), _0x309285), setTimeout(() => {
                const _0x43e5e6 = _0x48fb74;
                _0x236e90[_0x43e5e6(0x1fc)] && _0x309285();
            }, 0x1388);
        }, _0x46a376);
    } catch (_0x421fbb) {}
}
export function playLoginSound() {
    const _0x4d2095 = _0x49ae;
    playOnceAndTeardown(loginSound, _0x4d2095(0x1f2));
}

function _0x3f34() {
    const _0x4652e2 = ['mJiWmtC1mJnXsfzMzLm', 'mte0qLH5vhfk', 'mtm0nJC0odHLDwntyM0', 'Cgf1C2u', 'Bg9Hza', 'ywrKrxzLBNrmAxn0zw5LCG', 'C3jJ', 'DM9SDw1L', 'mJm5nZGZmhn0u2Hxsq', 'CMvTB3zLrxzLBNrmAxn0zw5LCG', 'mJqXmdeZy1bLAgXf', 'nJnQwunpDhO', 'ChjLBg9Hza', 'm3fquhjmtW', 'mJu0nwv1qNvWDq', 'mZGWodyZqNL5AKTj', 'y3vYCMvUDfrPBwu', 'zw5Kzwq', 'mtK0nZm2nLzhueLOrG', 'y2f0y2G', 'lI9HC3nLDhmVC291BMrZl2XVz29MzI53yxy', 'lI9HC3nLDhmVC291BMrZl2jHBgXVB24UD2f2', 'lI9HC3nLDhmVC291BMrZl2XVz2LUlNDHDG', 'odK5nLnjuNzIrW', 'CgXHEq', 'yxv0BW'];
    _0x3f34 = function() {
        return _0x4652e2;
    };
    return _0x3f34();
}
export function playLogoffSound() {
    const _0x236838 = _0x49ae;
    playOnceAndTeardown(logoffSound, _0x236838(0x1f0));
}
export function playBalloonSound() {
    const _0x93f67f = _0x49ae;
    playOnceAndTeardown(balloonSound, _0x93f67f(0x1f1));
}