(function(_0x5ed22d, _0x5428bc) {
    const _0x13c425 = _0x2774,
        _0x12cbb3 = _0x5ed22d();
    while (!![]) {
        try {
            const _0x2d6bc9 = -parseInt(_0x13c425(0x19f)) / 0x1 * (parseInt(_0x13c425(0x197)) / 0x2) + parseInt(_0x13c425(0x193)) / 0x3 * (-parseInt(_0x13c425(0x1a8)) / 0x4) + -parseInt(_0x13c425(0x196)) / 0x5 + parseInt(_0x13c425(0x195)) / 0x6 + parseInt(_0x13c425(0x192)) / 0x7 * (parseInt(_0x13c425(0x1a3)) / 0x8) + -parseInt(_0x13c425(0x19e)) / 0x9 + parseInt(_0x13c425(0x1a2)) / 0xa * (parseInt(_0x13c425(0x198)) / 0xb);
            if (_0x2d6bc9 === _0x5428bc) break;
            else _0x12cbb3['push'](_0x12cbb3['shift']());
        } catch (_0x329c78) {
            _0x12cbb3['push'](_0x12cbb3['shift']());
        }
    }
}(_0x5981, 0x8b4d1));
const _listenerRegistry = new Map(),
    _elementListeners = new WeakMap();
let _nextListenerId = 0x1;
export function addManagedEventListener(_0x3ad7cd, _0x1ce187, _0x4bddf7, _0x478fb9 = {}) {
    const _0x57aeae = _0x2774;
    if (!_0x3ad7cd || _0x57aeae(0x1a5) != typeof _0x4bddf7) throw new Error(_0x57aeae(0x19a));
    const _0x3d18a8 = _nextListenerId++,
        _0x49260c = _0x478fb9[_0x57aeae(0x191)];
    _0x3ad7cd[_0x57aeae(0x19c)](_0x1ce187, _0x4bddf7, _0x49260c);
    const _0x6dbbba = () => {
            const _0x5ca06c = _0x57aeae;
            _0x3ad7cd[_0x5ca06c(0x1a4)](_0x1ce187, _0x4bddf7, _0x49260c);
        },
        _0x1497d8 = {
            'id': _0x3d18a8,
            'element': _0x3ad7cd,
            'eventType': _0x1ce187,
            'handler': _0x4bddf7,
            'cleanup': _0x6dbbba,
            'timestamp': Date[_0x57aeae(0x19b)](),
            'options': _0x478fb9
        };
    return _listenerRegistry[_0x57aeae(0x1a6)](_0x3d18a8, _0x1497d8), _elementListeners[_0x57aeae(0x19d)](_0x3ad7cd) || _elementListeners['set'](_0x3ad7cd, new Set()), _elementListeners['get'](_0x3ad7cd)[_0x57aeae(0x1a9)](_0x3d18a8),
        function() {
            const _0x23e4ea = _0x57aeae;
            _0x6dbbba(), _listenerRegistry[_0x23e4ea(0x1a0)](_0x3d18a8);
            const _0xd5d29c = _elementListeners[_0x23e4ea(0x1a7)](_0x3ad7cd);
            _0xd5d29c && (_0xd5d29c[_0x23e4ea(0x1a0)](_0x3d18a8), 0x0 === _0xd5d29c[_0x23e4ea(0x199)] && _elementListeners[_0x23e4ea(0x1a0)](_0x3ad7cd));
        };
}
export function addManagedResizeListener(_0x57733f, _0x15d402 = {}) {
    const _0x3fd9e6 = _0x2774,
        _0x247eb1 = {
            'performanceOptimized': !0x0,
            'useDebounce': !0x0,
            ..._0x15d402
        };
    return addManagedEventListener(window, _0x3fd9e6(0x194), _0x57733f, _0x247eb1);
}
export function addManagedOrientationListener(_0x3908dc, _0x3afb53 = {}) {
    const _0x1d088b = _0x2774,
        _0x18dca1 = {
            'performanceOptimized': !0x0,
            'immediate': !0x0,
            ..._0x3afb53
        };
    return addManagedEventListener(window, _0x1d088b(0x1a1), _0x3908dc, _0x18dca1);
}

function _0x2774(_0x4655a5, _0x59cb54) {
    const _0x59817e = _0x5981();
    return _0x2774 = function(_0x277436, _0x302a22) {
        _0x277436 = _0x277436 - 0x191;
        let _0x514892 = _0x59817e[_0x277436];
        if (_0x2774['PrCmZD'] === undefined) {
            var _0xdbb529 = function(_0x3676b0) {
                const _0x4fb027 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x3ad7cd = '',
                    _0x1ce187 = '';
                for (let _0x4bddf7 = 0x0, _0x478fb9, _0x3d18a8, _0x49260c = 0x0; _0x3d18a8 = _0x3676b0['charAt'](_0x49260c++); ~_0x3d18a8 && (_0x478fb9 = _0x4bddf7 % 0x4 ? _0x478fb9 * 0x40 + _0x3d18a8 : _0x3d18a8, _0x4bddf7++ % 0x4) ? _0x3ad7cd += String['fromCharCode'](0xff & _0x478fb9 >> (-0x2 * _0x4bddf7 & 0x6)) : 0x0) {
                    _0x3d18a8 = _0x4fb027['indexOf'](_0x3d18a8);
                }
                for (let _0x6dbbba = 0x0, _0x1497d8 = _0x3ad7cd['length']; _0x6dbbba < _0x1497d8; _0x6dbbba++) {
                    _0x1ce187 += '%' + ('00' + _0x3ad7cd['charCodeAt'](_0x6dbbba)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x1ce187);
            };
            _0x2774['YXTgDu'] = _0xdbb529, _0x4655a5 = arguments, _0x2774['PrCmZD'] = !![];
        }
        const _0x484d02 = _0x59817e[0x0],
            _0x1628a4 = _0x277436 + _0x484d02,
            _0xe3e058 = _0x4655a5[_0x1628a4];
        return !_0xe3e058 ? (_0x514892 = _0x2774['YXTgDu'](_0x514892), _0x4655a5[_0x1628a4] = _0x514892) : _0x514892 = _0xe3e058, _0x514892;
    }, _0x2774(_0x4655a5, _0x59cb54);
}

function _0x5981() {
    const _0x2630eb = ['C2v0', 'z2v0', 'nJuXndm2sNDgELHd', 'ywrK', 'BgLZDgvUzxjpChrPB25Z', 'mJu5u01MAMTL', 'm0rHzwHIBq', 'CMvZAxPL', 'mtG0mty2neXQr3Lmra', 'mta2mdi4mgPts3z5Ea', 'otK3nLzwDw5Qta', 'ntvWt0vOwxy', 'C2L6zq', 'ywrKtwfUywDLzev2zw50tgLZDgvUzxi6ieLUDMfSAwqGzwXLBwvUDcbVCIbOyw5KBgvY', 'BM93', 'ywrKrxzLBNrmAxn0zw5LCG', 'AgfZ', 'nta3nty1oerWsvjlsq', 'mZzhAw5dt2C', 'zgvSzxrL', 'B3jPzw50yxrPB25JAgfUz2u', 'mtm0ndKXmhzkEw94wq', 'mtuZndmYyuvcqwzn', 'CMvTB3zLrxzLBNrmAxn0zw5LCG', 'zNvUy3rPB24'];
    _0x5981 = function() {
        return _0x2630eb;
    };
    return _0x5981();
}