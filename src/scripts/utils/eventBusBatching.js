function _0x2048() {
    const _0x202a17 = ['DxnLtwLJCM90yxnRuhjPBwLUzW', 'otuYnJa0v3rtyLLT', 'lI9MCMfTzvnJAgvKDwXLCI5QCW', 'C2L6zq', 'mtaWnduYmvjluhvrtW', 'BM93', 'AgfZ', 'ChvIBgLZAa', 'v0Lore9xx0zpq1vtruq', 'u1rbuLrnru5vx0nmt1nfx1jfuvvfu1q', 'u1rbuLrnru5vx09qru5fra', 'tvvtsunFueXbwuvsx1nut1bqruq', 'v0Lore9xx01bweLnsvPfra', 'y2f0y2G', 'nZq5mJa3mfLMB0jruW', 'C29YDa', 'mtzOyw5tyxq', 'yxv0B0zYyw1LrMX1C2G', 'vefts0jbuL9jvevnx0nmsunlruq', 'zNjHBwvty2HLzhvSzxjmyxP5sw1WB3j0', 'ChvZAa', 'tuvesufFueXbwuvsx1nut1bqruq', 'DMfSDwvZ', 'm3nMt2zhsW', 'v0Lore9xx1jfu1rpuKve', 'mJu2mdzUCwXAzgS', 'mtGYnZK5nNDYu0zhEG', 'mti1otm0mdHWze1dzxC', 'C2HPzNq', 'mZn6tgfPsK4', 'u1rbuLrnru5vx0nmt1nfra', 'x19JB2fSzxnJzq', 'C2v0', 'v0Lore9xx01jtKLnsvPfra', 'BgvUz3rO', 'mJGWndG1B0jmvenK', 'u1rbuLrnru5vx1rpr0Dmrq', 'mJvWr29hs1O', 'DgHLBG'];
    _0x2048 = function() {
        return _0x202a17;
    };
    return _0x2048();
}
const _0x42faa4 = _0x55c3;
(function(_0x3d0e7c, _0x3b2150) {
    const _0x5c4794 = _0x55c3,
        _0x26be21 = _0x3d0e7c();
    while (!![]) {
        try {
            const _0xb216a2 = parseInt(_0x5c4794(0xdf)) / 0x1 * (-parseInt(_0x5c4794(0xd6)) / 0x2) + parseInt(_0x5c4794(0xdd)) / 0x3 * (parseInt(_0x5c4794(0xee)) / 0x4) + parseInt(_0x5c4794(0xeb)) / 0x5 * (parseInt(_0x5c4794(0xe0)) / 0x6) + parseInt(_0x5c4794(0xf1)) / 0x7 + parseInt(_0x5c4794(0xe1)) / 0x8 + -parseInt(_0x5c4794(0xe9)) / 0x9 + parseInt(_0x5c4794(0xd4)) / 0xa * (-parseInt(_0x5c4794(0xe3)) / 0xb);
            if (_0xb216a2 === _0x3b2150) break;
            else _0x26be21['push'](_0x26be21['shift']());
        } catch (_0x59b0cf) {
            _0x26be21['push'](_0x26be21['shift']());
        }
    }
}(_0x2048, 0xf30c6));
import {
    eventBus,
    EVENTS
} from './eventBus.js';

function _0x55c3(_0x1574a2, _0x647369) {
    const _0x2048eb = _0x2048();
    return _0x55c3 = function(_0x55c3bd, _0x5a71e3) {
        _0x55c3bd = _0x55c3bd - 0xd0;
        let _0x4d254f = _0x2048eb[_0x55c3bd];
        if (_0x55c3['AqPYiX'] === undefined) {
            var _0x2130d6 = function(_0x33451e) {
                const _0x4b4e97 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x5d4850 = '',
                    _0x540622 = '';
                for (let _0x28d475 = 0x0, _0x2e70c2, _0x8a3d1a, _0x125fa5 = 0x0; _0x8a3d1a = _0x33451e['charAt'](_0x125fa5++); ~_0x8a3d1a && (_0x2e70c2 = _0x28d475 % 0x4 ? _0x2e70c2 * 0x40 + _0x8a3d1a : _0x8a3d1a, _0x28d475++ % 0x4) ? _0x5d4850 += String['fromCharCode'](0xff & _0x2e70c2 >> (-0x2 * _0x28d475 & 0x6)) : 0x0) {
                    _0x8a3d1a = _0x4b4e97['indexOf'](_0x8a3d1a);
                }
                for (let _0x36b8bd = 0x0, _0x1eeede = _0x5d4850['length']; _0x36b8bd < _0x1eeede; _0x36b8bd++) {
                    _0x540622 += '%' + ('00' + _0x5d4850['charCodeAt'](_0x36b8bd)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x540622);
            };
            _0x55c3['PXNuxu'] = _0x2130d6, _0x1574a2 = arguments, _0x55c3['AqPYiX'] = !![];
        }
        const _0x31b551 = _0x2048eb[0x0],
            _0x53a9d0 = _0x55c3bd + _0x31b551,
            _0x5114da = _0x1574a2[_0x53a9d0];
        return !_0x5114da ? (_0x4d254f = _0x55c3['PXNuxu'](_0x4d254f), _0x1574a2[_0x53a9d0] = _0x4d254f) : _0x4d254f = _0x5114da, _0x4d254f;
    }, _0x55c3(_0x1574a2, _0x647369);
}
const _queue = [],
    _coalesceMap = new Map(),
    _0x33451e = {};
_0x33451e[_0x42faa4(0xd7)] = !0x0, _0x33451e['frameSchedulerLazyImport'] = !0x0, _0x33451e[_0x42faa4(0xed)] = !0x0;
let _rafScheduled = !0x1,
    _config = _0x33451e;
const _coalescableEvents = new Set([EVENTS[_0x42faa4(0xf5)], EVENTS['WINDOW_BLURRED'], EVENTS[_0x42faa4(0xd2)], EVENTS['WINDOW_UNMAXIMIZED'], EVENTS[_0x42faa4(0xe7)], EVENTS[_0x42faa4(0xde)], EVENTS[_0x42faa4(0xea)], EVENTS[_0x42faa4(0xf6)], EVENTS[_0x42faa4(0xd0)], EVENTS[_0x42faa4(0xe4)], EVENTS[_0x42faa4(0xd8)], EVENTS['MUSIC_PLAYER_PLAYING'], EVENTS[_0x42faa4(0xd1)], EVENTS['MEDIA_PLAYER_PLAYING'], EVENTS[_0x42faa4(0xdb)]]);

function scheduleFlush() {
    const _0x203301 = _0x42faa4;
    !_rafScheduled && _config[_0x203301(0xd7)] && (_rafScheduled = !0x0, _config[_0x203301(0xd9)] ?
        import (_0x203301(0xef))[_0x203301(0xec)](({
            scheduleAfter: _0x4b4e97
        }) => {
            _0x4b4e97(flushEventBusQueue);
        })[_0x203301(0xd3)](() => {
            requestAnimationFrame(flushEventBusQueue);
        }) : requestAnimationFrame(flushEventBusQueue));
}
export function batchedPublish(_0x5d4850, _0x540622) {
    const _0x39a27c = _0x42faa4;
    _coalescableEvents[_0x39a27c(0xf3)](_0x5d4850) || _0x540622 && !0x0 === _0x540622[_0x39a27c(0xe5)] ? _coalesceMap[_0x39a27c(0xe6)](_0x5d4850, {
        'event': _0x5d4850,
        'data': _0x540622,
        'ts': Date[_0x39a27c(0xf2)](),
        'coalesced': !0x0
    }) : _queue[_0x39a27c(0xda)]({
        'event': _0x5d4850,
        'data': _0x540622,
        'ts': Date[_0x39a27c(0xf2)](),
        'coalesced': !0x1
    }), scheduleFlush();
}
export function flushEventBusQueue() {
    const _0x27339 = _0x42faa4;
    if (_rafScheduled = !0x1, _coalesceMap[_0x27339(0xf0)]) {
        const _0x28d475 = Array['from'](_coalesceMap[_0x27339(0xdc)]())[_0x27339(0xd5)]((_0x2e70c2, _0x8a3d1a) => _0x2e70c2['ts'] - _0x8a3d1a['ts']);
        for (const _0x125fa5 of _0x28d475) _queue[_0x27339(0xda)](_0x125fa5);
        _coalesceMap['clear']();
    }
    if (_queue[_0x27339(0xe8)])
        for (; _queue[_0x27339(0xe8)];) {
            const {
                event: _0x36b8bd,
                data: _0x1eeede
            } = _queue[_0x27339(0xe2)]();
            try {
                eventBus[_0x27339(0xf4)](_0x36b8bd, _0x1eeede);
            } catch (_0x35535f) {}
        }
}