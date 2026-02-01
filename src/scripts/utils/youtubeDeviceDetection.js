(function(_0xcec4ac, _0x5719a7) {
    const _0x186b7a = _0x54c0,
        _0x36f54a = _0xcec4ac();
    while (!![]) {
        try {
            const _0x5136b9 = -parseInt(_0x186b7a(0x99)) / 0x1 * (parseInt(_0x186b7a(0x91)) / 0x2) + -parseInt(_0x186b7a(0x9b)) / 0x3 + -parseInt(_0x186b7a(0x90)) / 0x4 * (-parseInt(_0x186b7a(0x8f)) / 0x5) + parseInt(_0x186b7a(0x9d)) / 0x6 * (parseInt(_0x186b7a(0x9c)) / 0x7) + -parseInt(_0x186b7a(0x96)) / 0x8 + parseInt(_0x186b7a(0x9a)) / 0x9 * (parseInt(_0x186b7a(0x98)) / 0xa) + -parseInt(_0x186b7a(0x8e)) / 0xb * (-parseInt(_0x186b7a(0x8d)) / 0xc);
            if (_0x5136b9 === _0x5719a7) break;
            else _0x36f54a['push'](_0x36f54a['shift']());
        } catch (_0x5e146a) {
            _0x36f54a['push'](_0x36f54a['shift']());
        }
    }
}(_0x58be, 0x5789f));
import {
    isMobileDevice
} from './device.js';
export {
    isMobileDevice as detectMobileDevice
}
from './device.js';
export function applyMobileClasses(_0x19631a) {
    const _0x3964f7 = _0x54c0;
    _0x19631a && document[_0x3964f7(0x92)]['classList'][_0x3964f7(0x93)]('mobile-device');
}
export function applyMobileClassesToBody(_0x10b945) {
    const _0x597986 = _0x54c0;
    _0x10b945 && document[_0x597986(0x94)]['classList'][_0x597986(0x93)](_0x597986(0x97));
}
export function initYoutubeMobileDetection() {
    const _0x4dfaa6 = _0x54c0,
        _0x4bef38 = isMobileDevice();
    return applyMobileClasses(_0x4bef38), document['addEventListener'](_0x4dfaa6(0x95), function() {
        applyMobileClassesToBody(_0x4bef38);
    }), _0x4bef38;
}

function _0x54c0(_0x5e7c17, _0x17aab5) {
    const _0x58be17 = _0x58be();
    return _0x54c0 = function(_0x54c076, _0x540515) {
        _0x54c076 = _0x54c076 - 0x8d;
        let _0x1205e3 = _0x58be17[_0x54c076];
        if (_0x54c0['irZNOU'] === undefined) {
            var _0xe5441f = function(_0x19631a) {
                const _0x10b945 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x4bef38 = '',
                    _0x1b679d = '';
                for (let _0x11eac8 = 0x0, _0x24e1b7, _0x354311, _0x56b2dd = 0x0; _0x354311 = _0x19631a['charAt'](_0x56b2dd++); ~_0x354311 && (_0x24e1b7 = _0x11eac8 % 0x4 ? _0x24e1b7 * 0x40 + _0x354311 : _0x354311, _0x11eac8++ % 0x4) ? _0x4bef38 += String['fromCharCode'](0xff & _0x24e1b7 >> (-0x2 * _0x11eac8 & 0x6)) : 0x0) {
                    _0x354311 = _0x10b945['indexOf'](_0x354311);
                }
                for (let _0x17cff1 = 0x0, _0x463943 = _0x4bef38['length']; _0x17cff1 < _0x463943; _0x17cff1++) {
                    _0x1b679d += '%' + ('00' + _0x4bef38['charCodeAt'](_0x17cff1)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x1b679d);
            };
            _0x54c0['lAIvXj'] = _0xe5441f, _0x5e7c17 = arguments, _0x54c0['irZNOU'] = !![];
        }
        const _0x2736d0 = _0x58be17[0x0],
            _0x5f251d = _0x54c076 + _0x2736d0,
            _0x28b168 = _0x5e7c17[_0x5f251d];
        return !_0x28b168 ? (_0x1205e3 = _0x54c0['lAIvXj'](_0x1205e3), _0x5e7c17[_0x5f251d] = _0x1205e3) : _0x1205e3 = _0x28b168, _0x1205e3;
    }, _0x54c0(_0x5e7c17, _0x17aab5);
}

function _0x58be() {
    const _0xc6b79a = ['otK2tLzwy09O', 'nZu2otfevfHrwuu', 'nxbxBuvuEq', 'mZm1mZe2z3fXwNfZ', 'mJaZmdjbzgDhBNq', 'zg9JDw1LBNrfBgvTzw50', 'ywrK', 'yM9KEq', 're9nq29UDgvUDeXVywrLza', 'mJG3mJG5nMPLCgHxvG', 'Bw9IAwXLlwrLDMLJzq', 'mtb1BNHeEuC', 'nJLnEKLHzeG', 'mZa1mdq3og5yBuvLBq', 'ndG3nJiWvNHAs3DJ', 'mtrRswfwr1O', 'mtC2mdiWoeXUBfb6CW'];
    _0x58be = function() {
        return _0xc6b79a;
    };
    return _0x58be();
}