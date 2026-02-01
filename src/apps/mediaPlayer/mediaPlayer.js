const _0x27d30f = _0x4389;

function _0x4389(_0xdd300, _0x5da644) {
    const _0x4636a4 = _0x4636();
    return _0x4389 = function (_0x438971, _0x2f01c0) {
        _0x438971 = _0x438971 - 0xec;
        let _0x815940 = _0x4636a4[_0x438971];
        if (_0x4389['XuRAhB'] === undefined) {
            var _0x1e103d = function (_0x451dcc) {
                const _0x43f6f1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x471f08 = '',
                    _0x564312 = '';
                for (let _0x517991 = 0x0, _0x4a2313, _0x19f166, _0x3e8673 = 0x0; _0x19f166 = _0x451dcc['charAt'](_0x3e8673++); ~_0x19f166 && (_0x4a2313 = _0x517991 % 0x4 ? _0x4a2313 * 0x40 + _0x19f166 : _0x19f166, _0x517991++ % 0x4) ? _0x471f08 += String['fromCharCode'](0xff & _0x4a2313 >> (-0x2 * _0x517991 & 0x6)) : 0x0) {
                    _0x19f166 = _0x43f6f1['indexOf'](_0x19f166);
                }
                for (let _0x18f152 = 0x0, _0x2c698e = _0x471f08['length']; _0x18f152 < _0x2c698e; _0x18f152++) {
                    _0x564312 += '%' + ('00' + _0x471f08['charCodeAt'](_0x18f152)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x564312);
            };
            _0x4389['qhZzAz'] = _0x1e103d, _0xdd300 = arguments, _0x4389['XuRAhB'] = !![];
        }
        const _0x331415 = _0x4636a4[0x0],
            _0x3b324f = _0x438971 + _0x331415,
            _0x3907b7 = _0xdd300[_0x3b324f];
        return !_0x3907b7 ? (_0x815940 = _0x4389['qhZzAz'](_0x815940), _0xdd300[_0x3b324f] = _0x815940) : _0x815940 = _0x3907b7, _0x815940;
    }, _0x4389(_0xdd300, _0x5da644);
} (function (_0x3238fd, _0x457b5c) {
    const _0x422d2b = _0x4389,
        _0x1d9d26 = _0x3238fd();
    while (!![]) {
        try {
            const _0x16b50c = -parseInt(_0x422d2b(0x104)) / 0x1 * (-parseInt(_0x422d2b(0x108)) / 0x2) + -parseInt(_0x422d2b(0x195)) / 0x3 + parseInt(_0x422d2b(0x12f)) / 0x4 + -parseInt(_0x422d2b(0x132)) / 0x5 + parseInt(_0x422d2b(0x16e)) / 0x6 * (-parseInt(_0x422d2b(0x1a3)) / 0x7) + parseInt(_0x422d2b(0x18e)) / 0x8 * (parseInt(_0x422d2b(0x198)) / 0x9) + parseInt(_0x422d2b(0x118)) / 0xa;
            if (_0x16b50c === _0x457b5c) break;
            else _0x1d9d26['push'](_0x1d9d26['shift']());
        } catch (_0x35f3b2) {
            _0x1d9d26['push'](_0x1d9d26['shift']());
        }
    }
}(_0x4636, 0x5bbcc));
class YouTubeMediaPlayer extends HTMLElement {
    constructor() {
        const _0x23f5c6 = _0x4389;
        super(), this[_0x23f5c6(0x155)]({
            'mode': _0x23f5c6(0x182)
        }), this[_0x23f5c6(0x196)] = this['attachInternals'](), this[_0x23f5c6(0x18d)] = null, this[_0x23f5c6(0x15a)] = !0x1, this['currentTime'] = 0x0, this[_0x23f5c6(0x151)] = 0x0, this[_0x23f5c6(0xf5)] = 0x64, this[_0x23f5c6(0xfb)] = !0x1, this[_0x23f5c6(0x113)] = _0x23f5c6(0x158), this[_0x23f5c6(0xed)] = _0x23f5c6(0x181), this[_0x23f5c6(0x11f)] = !0x1, this['_timeInterval'] = null, this[_0x23f5c6(0x100)] = null, this['_resumeAfterRestore'] = !0x1, this[_0x23f5c6(0x14a)] = !0x1, this[_0x23f5c6(0x159)] = this['_onVisibilityChange'][_0x23f5c6(0x12d)](this), document[_0x23f5c6(0x124)](_0x23f5c6(0x130), this['_onVisibilityChange']);
        try {
            if (window[_0x23f5c6(0x117)] && window[_0x23f5c6(0x117)][_0x23f5c6(0xfd)] && window[_0x23f5c6(0x117)][_0x23f5c6(0x184)]) {
                const {
                    eventBus: parentBus,
                    EVENTS: _0x3e8673
                } = window[_0x23f5c6(0x117)];
                this[_0x23f5c6(0x126)] = parentBus['subscribe'](_0x3e8673[_0x23f5c6(0xf3)], () => {
                    const _0x6f9e90 = _0x23f5c6;
                    if (this[_0x6f9e90(0x18d)] && this['isPlaying'] && !this[_0x6f9e90(0xfb)]) try {
                        this[_0x6f9e90(0x18d)][_0x6f9e90(0x112)]();
                    } catch (_0x18f152) { }
                }), this[_0x23f5c6(0x129)] = parentBus['subscribe'](_0x3e8673['MEDIA_GLOBAL_VISIBLE'], () => {
                    const _0x50d068 = _0x23f5c6;
                    if (this[_0x50d068(0x18d)] && this[_0x50d068(0x106)] && !this['isMuted'] && !this[_0x50d068(0x14a)]) try {
                        this[_0x50d068(0x18d)][_0x50d068(0x119)]();
                    } catch (_0x2c698e) { }
                }), this[_0x23f5c6(0x157)] = parentBus[_0x23f5c6(0x145)](_0x3e8673[_0x23f5c6(0x12a)], () => {
                    const _0x1ee795 = _0x23f5c6;
                    if (this[_0x1ee795(0x18d)] && this['isPlaying'] && !this[_0x1ee795(0xfb)]) try {
                        this[_0x1ee795(0x18d)][_0x1ee795(0x112)]();
                    } catch (_0x5a76db) { }
                });
            }
        } catch (_0x5e032a) { }
        try {
            if (window[_0x23f5c6(0x117)] && window[_0x23f5c6(0x117)][_0x23f5c6(0xfd)] && window[_0x23f5c6(0x117)]['EVENTS']) {
                const {
                    eventBus: parentBus,
                    EVENTS: _0x23b5ab
                } = window[_0x23f5c6(0x117)], _0x4e06ca = window[_0x23f5c6(0x101)] || _0x23f5c6(0x11e);
                this['_unsubscribeMin'] = parentBus['subscribe'](_0x23b5ab[_0x23f5c6(0x152)], _0x206e5b => {
                    const _0x1a4254 = _0x23f5c6;
                    if (_0x206e5b && _0x206e5b[_0x1a4254(0x120)] === _0x4e06ca) {
                        this[_0x1a4254(0x14a)] = !0x0, this[_0x1a4254(0x106)] = this[_0x1a4254(0x15a)] && !this['isMuted'];
                        try {
                            this[_0x1a4254(0x18d)]?.[_0x1a4254(0x112)]();
                        } catch (_0x4355c4) { }
                        this[_0x1a4254(0x115)]();
                        try {
                            performance[_0x1a4254(0x13e)](_0x1a4254(0x189));
                        } catch (_0x12c2a5) { }
                    }
                }), this['_unsubscribeRest'] = parentBus[_0x23f5c6(0x145)](_0x23b5ab['WINDOW_RESTORED'], _0x32cc43 => {
                    const _0x1150fd = _0x23f5c6;
                    if (_0x32cc43 && _0x32cc43[_0x1150fd(0x120)] === _0x4e06ca) {
                        if (this[_0x1150fd(0x14a)] = !0x1, this[_0x1150fd(0x106)] && !this[_0x1150fd(0xfb)]) try {
                            this[_0x1150fd(0x18d)]?.[_0x1150fd(0x119)]();
                        } catch (_0x32c1a1) { }
                        this[_0x1150fd(0x106)] = !0x1, this[_0x1150fd(0x164)](), this[_0x1150fd(0x15a)] && this[_0x1150fd(0xec)]();
                        try {
                            performance[_0x1150fd(0x13e)]('mediaPlayer-timer-resumed');
                        } catch (_0x2f6f33) { }
                    }
                });
                try {
                    parentBus['subscribe'](_0x23b5ab[_0x23f5c6(0x163)], () => {
                        const _0x4065c0 = _0x23f5c6;
                        if (this[_0x4065c0(0x18d)] && this[_0x4065c0(0x15a)]) try {
                            this[_0x4065c0(0x18d)][_0x4065c0(0x112)]();
                        } catch (_0x5d3b97) { }
                    });
                } catch (_0x25aa87) { }
            }
        } catch (_0x249106) { }
        this[_0x23f5c6(0x13b)](), window[_0x23f5c6(0x124)](_0x23f5c6(0x121), _0x375a76 => {
            const _0x49a55f = _0x23f5c6;
            'window:soft-reset' === _0x375a76?.[_0x49a55f(0x17f)]?.['type'] ? this[_0x49a55f(0x1a0)]() : _0x49a55f(0x12c) === _0x375a76?.[_0x49a55f(0x17f)]?.[_0x49a55f(0x19a)] && this[_0x49a55f(0x199)]();
        });
    } [_0x27d30f(0x13b)]() {
        const _0x2fc950 = _0x27d30f;
        this[_0x2fc950(0x173)][_0x2fc950(0x193)] = _0x2fc950(0x10d), this[_0x2fc950(0x15e)](), this['loadYouTubeAPI']();
    } ['setupControls']() {
        const _0x33f3fa = _0x27d30f;
        this[_0x33f3fa(0x185)] = null;
        const playPauseBtn = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0x138)),
            _0x5ad504 = this['shadowRoot']['querySelector'](_0x33f3fa(0x161)),
            _0x5795dc = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0x10e)),
            _0x49769c = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0xfc)),
            _0x1fe01d = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0x169)),
            volumeSlider = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0xf2));
        playPauseBtn[_0x33f3fa(0x124)](_0x33f3fa(0x135), () => this[_0x33f3fa(0x15d)]()), _0x5ad504[_0x33f3fa(0x124)]('click', () => this['nextVideo']()), _0x5795dc[_0x33f3fa(0x124)]('click', () => this[_0x33f3fa(0x143)]()), _0x49769c && (_0x49769c[_0x33f3fa(0x16d)] = !0x0, this[_0x33f3fa(0x103)] = !0x1), _0x49769c[_0x33f3fa(0x124)](_0x33f3fa(0x135), () => this['toggleMute']());
        const playlistBtn = this[_0x33f3fa(0x173)][_0x33f3fa(0x187)](_0x33f3fa(0xee));
        playlistBtn && (playlistBtn[_0x33f3fa(0x124)](_0x33f3fa(0x135), () => this[_0x33f3fa(0x199)]()), this[_0x33f3fa(0x102)]()), volumeSlider[_0x33f3fa(0x124)](_0x33f3fa(0x13c), _0x1e2836 => {
            const _0x2228fc = _0x33f3fa;
            this[_0x2228fc(0x116)](_0x1e2836['detail']);
        }), _0x1fe01d[_0x33f3fa(0x124)]('change', _0x22903f => {
            const _0x43eb74 = _0x33f3fa;
            this[_0x43eb74(0x110)](_0x22903f[_0x43eb74(0xfa)]);
        });
    } [_0x27d30f(0x199)]() {
        const _0x51b51d = _0x27d30f;
        this[_0x51b51d(0x15a)] = !0x1, this[_0x51b51d(0x100)] && (clearTimeout(this[_0x51b51d(0x100)]), this['_playlistErrorTimeout'] = null), this[_0x51b51d(0x19f)] = !0x1, this[_0x51b51d(0x11f)] = !this[_0x51b51d(0x11f)], this[_0x51b51d(0x102)](), this['youtubePlayer'] && _0x51b51d(0x156) == typeof this[_0x51b51d(0x18d)][_0x51b51d(0x144)] && (this[_0x51b51d(0x18d)]['destroy'](), this[_0x51b51d(0x18d)] = null, setTimeout(() => {
            this['initYouTubePlayer']();
        }, 0x96));
    } ['_updatePlaylistButton']() {
        const _0x5295bc = _0x27d30f;
        try {
            const _0x59309b = this[_0x5295bc(0x173)][_0x5295bc(0x187)]('.loop');
            if (!_0x59309b) return;
            _0x59309b['classList']['remove'](_0x5295bc(0x197));
        } catch (_0x27e801) { }
    } [_0x27d30f(0x17a)]() {
        const _0x581dc2 = _0x27d30f;
        window['YT'] && window['YT']['Player'] ? this[_0x581dc2(0x177)]() : (window[_0x581dc2(0x15c)] || (window[_0x581dc2(0x15c)] = new Promise(_0x552657 => {
            const _0x89edb6 = _0x581dc2,
                _0x35bf3b = window['onYouTubeIframeAPIReady'];
            window[_0x89edb6(0x160)] = () => {
                _0x35bf3b && _0x35bf3b(), _0x552657();
            };
            const _0x567295 = document[_0x89edb6(0x134)](_0x89edb6(0x19c));
            _0x567295['src'] = 'https://www.youtube.com/iframe_api';
            const _0x4a0a75 = document[_0x89edb6(0xef)](_0x89edb6(0x19c))[0x0];
            _0x4a0a75[_0x89edb6(0x114)][_0x89edb6(0x18b)](_0x567295, _0x4a0a75);
        })), window[_0x581dc2(0x15c)][_0x581dc2(0x12e)](() => this['initYouTubePlayer']()));
    } ['initYouTubePlayer']() {
        const _0x4f4219 = _0x27d30f,
            _0x5556f2 = this['isUsingAltPlaylist'] ? this[_0x4f4219(0xed)] : this['primaryPlaylistId'],
            _0x14879e = {};
        _0x14879e['autoplay'] = 0x1, _0x14879e[_0x4f4219(0x10f)] = 0x0, _0x14879e[_0x4f4219(0x13a)] = 0x0, _0x14879e[_0x4f4219(0x13f)] = 0x0, _0x14879e[_0x4f4219(0xf6)] = 0x1, _0x14879e[_0x4f4219(0x16c)] = 0x3, _0x14879e[_0x4f4219(0x146)] = 0x0, _0x14879e['fs'] = 0x0, _0x14879e['disablekb'] = 0x1, _0x14879e[_0x4f4219(0x11d)] = 0x1, _0x14879e[_0x4f4219(0x107)] = _0x4f4219(0x123), _0x14879e['list'] = _0x5556f2, _0x14879e[_0x4f4219(0x15b)] = _0x4f4219(0x167), this['youtubePlayer'] = new YT[(_0x4f4219(0x14e))](this[_0x4f4219(0x173)][_0x4f4219(0x141)]('youtube-iframe'), {
            'height': _0x4f4219(0x10b),
            'width': _0x4f4219(0x10b),
            'playerVars': _0x14879e,
            'events': {
                'onReady': _0x1e15d7 => this[_0x4f4219(0x18a)](_0x1e15d7),
                'onStateChange': _0x471152 => this[_0x4f4219(0x154)](_0x471152)
            }
        });
    } ['onPlayerReady']() {
        const _0x12a2f0 = _0x27d30f,
            _0x8b61ad = this['shadowRoot']['querySelector'](_0x12a2f0(0x161)),
            _0x4d48ee = this['shadowRoot'][_0x12a2f0(0x187)](_0x12a2f0(0x10e));
        _0x8b61ad && (_0x8b61ad[_0x12a2f0(0x16d)] = !0x1), _0x4d48ee && (_0x4d48ee[_0x12a2f0(0x16d)] = !0x1), this['setVolume'](this[_0x12a2f0(0xf5)]);
        try {
            const _0x2d1a28 = this[_0x12a2f0(0x173)][_0x12a2f0(0x187)]('.mute');
            this[_0x12a2f0(0xfb)] && this[_0x12a2f0(0x18d)]?.[_0x12a2f0(0xf4)] ? (this['youtubePlayer']['mute'](), _0x2d1a28 && (_0x2d1a28[_0x12a2f0(0x18f)] = !0x0)) : !this['isMuted'] && this[_0x12a2f0(0x18d)]?.[_0x12a2f0(0x17b)] && (this[_0x12a2f0(0x18d)][_0x12a2f0(0x17b)](), _0x2d1a28 && (_0x2d1a28['checked'] = !0x1));
        } catch (_0xd82aaa) { }
        this[_0x12a2f0(0x164)](), this[_0x12a2f0(0x1a1)](), this[_0x12a2f0(0x100)] && clearTimeout(this['_playlistErrorTimeout']);
        let _0x29eb0c = 0x0;
        const _0x3287a8 = () => {
            const _0x2d26f4 = _0x12a2f0;
            _0x29eb0c++;
            if (this[_0x2d26f4(0x15a)] || this[_0x2d26f4(0x18d)] && (0x3 === this[_0x2d26f4(0x18d)]['getPlayerState']() || 0x5 === this['youtubePlayer'][_0x2d26f4(0x142)]() || 0x1 === this[_0x2d26f4(0x18d)]['getPlayerState']())) this[_0x2d26f4(0x100)] = null;
            else {
                if (_0x29eb0c >= 0x2 && this['youtubePlayer']) {
                    const _0x1d38b1 = this[_0x2d26f4(0x18d)][_0x2d26f4(0x142)]();
                    if (-0x1 === _0x1d38b1 || 0x0 === _0x1d38b1 && _0x29eb0c >= 0x3) return this[_0x2d26f4(0x100)] && (clearTimeout(this[_0x2d26f4(0x100)]), this[_0x2d26f4(0x100)] = null), void this[_0x2d26f4(0x11c)]();
                }
                _0x29eb0c >= 0x4 ? (this[_0x2d26f4(0x100)] && (clearTimeout(this[_0x2d26f4(0x100)]), this[_0x2d26f4(0x100)] = null), this[_0x2d26f4(0x11c)]()) : this[_0x2d26f4(0x100)] = setTimeout(_0x3287a8, 0x12c);
            }
        };
        this[_0x12a2f0(0x100)] = setTimeout(_0x3287a8, 0x12c);
    } ['onPlayerStateChange'](_0x2ab726) {
        const _0x5bbf48 = _0x27d30f,
            _0x4f6ed3 = {};
        _0x4f6ed3[_0x5bbf48(0x162)] = 'mediaPlayer';
        if (_0x2ab726[_0x5bbf48(0x17f)] !== YT[_0x5bbf48(0x179)]['PLAYING'] && 0x3 !== _0x2ab726['data'] && 0x5 !== _0x2ab726[_0x5bbf48(0x17f)] || this[_0x5bbf48(0x100)] && (clearTimeout(this[_0x5bbf48(0x100)]), this['_playlistErrorTimeout'] = null), _0x2ab726[_0x5bbf48(0x17f)] === YT[_0x5bbf48(0x179)][_0x5bbf48(0x150)]) {
            try {
                const _0x3274b1 = this[_0x5bbf48(0x173)]['querySelector'](_0x5bbf48(0xfc));
                _0x3274b1 && !this[_0x5bbf48(0x103)] && (this[_0x5bbf48(0x185)] && clearTimeout(this['_muteEnableTimerId']), _0x3274b1[_0x5bbf48(0x16d)] = !0x0, this[_0x5bbf48(0x185)] = setTimeout(() => {
                    const _0x4ac455 = _0x5bbf48;
                    _0x3274b1[_0x4ac455(0x16d)] = !0x1, this[_0x4ac455(0x103)] = !0x0;
                }, 0x3e8));
            } catch (_0x436449) { }
            const _0x5de197 = {};
            _0x5de197[_0x5bbf48(0x162)] = _0x5bbf48(0x128), (this[_0x5bbf48(0x15a)] = !0x0, this[_0x5bbf48(0x122)](_0x5bbf48(0x180), _0x5bbf48(0x105)), this[_0x5bbf48(0xec)](), window['parent'] && window[_0x5bbf48(0x117)]['eventBus'] && window[_0x5bbf48(0x117)][_0x5bbf48(0x184)] && !this['isMuted'] && window[_0x5bbf48(0x117)]['eventBus'][_0x5bbf48(0x176)](window[_0x5bbf48(0x117)][_0x5bbf48(0x184)][_0x5bbf48(0x192)], _0x5de197));
        } else {
            if (_0x2ab726[_0x5bbf48(0x17f)] === YT[_0x5bbf48(0x179)][_0x5bbf48(0x137)]) this[_0x5bbf48(0x15a)] = !0x1, this[_0x5bbf48(0xf0)](_0x5bbf48(0x180)), this[_0x5bbf48(0x115)](), window[_0x5bbf48(0x117)] && window[_0x5bbf48(0x117)]['eventBus'] && window[_0x5bbf48(0x117)][_0x5bbf48(0x184)] && window['parent'][_0x5bbf48(0xfd)][_0x5bbf48(0x176)](window[_0x5bbf48(0x117)][_0x5bbf48(0x184)]['MEDIA_PLAYER_STOPPED'], _0x4f6ed3);
            else {
                if (_0x2ab726[_0x5bbf48(0x17f)] === YT['PlayerState'][_0x5bbf48(0x191)]) {
                    try {
                        const _0xab647f = this[_0x5bbf48(0x18d)];
                        if (_0xab647f && _0x5bbf48(0x156) == typeof _0xab647f[_0x5bbf48(0x1a6)] && _0x5bbf48(0x156) == typeof _0xab647f[_0x5bbf48(0x10c)] && 'function' == typeof _0xab647f['playVideoAt']) {
                            const _0x1eb4e0 = _0xab647f[_0x5bbf48(0x10c)]();
                            if (Array['isArray'](_0x1eb4e0) && _0x1eb4e0['length'] > 0x0) {
                                if (_0xab647f[_0x5bbf48(0x1a6)]() === _0x1eb4e0['length'] - 0x1) return void _0xab647f[_0x5bbf48(0x170)](0x0);
                            }
                        }
                    } catch (_0x550ec1) { }
                    const _0x56f240 = {};
                    _0x56f240['programId'] = _0x5bbf48(0x128), (this['isPlaying'] = !0x1, this['removeAttribute']('data-state'), this[_0x5bbf48(0x115)](), window[_0x5bbf48(0x117)] && window['parent'][_0x5bbf48(0xfd)] && window['parent'][_0x5bbf48(0x184)] && window[_0x5bbf48(0x117)][_0x5bbf48(0xfd)][_0x5bbf48(0x176)](window[_0x5bbf48(0x117)]['EVENTS'][_0x5bbf48(0x16b)], _0x56f240));
                }
            }
        }
        this[_0x5bbf48(0x1a1)]();
    } ['showPlaylistError']() {
        const _0x1d9b0b = _0x27d30f;
        if (!this['_errorShown']) {
            this[_0x1d9b0b(0x19f)] = !0x0;
            try {
                const _0x171f88 = {};
                _0x171f88[_0x1d9b0b(0x19a)] = _0x1d9b0b(0x125), _0x171f88[_0x1d9b0b(0x121)] = _0x1d9b0b(0x172), window[_0x1d9b0b(0x117)] && window[_0x1d9b0b(0x117)][_0x1d9b0b(0x12b)](_0x171f88, '*');
            } catch (_0x5d0651) { }
        }
    } [_0x27d30f(0x1a1)]() {
        const _0x36f079 = _0x27d30f;
        this['internals'] && (this['isPlaying'] ? this[_0x36f079(0x196)][_0x36f079(0x149)]?.[_0x36f079(0x136)]('playing') : this['internals'][_0x36f079(0x149)]?.[_0x36f079(0x190)]('playing'));
    } [_0x27d30f(0x164)]() {
        const _0x1939ce = _0x27d30f;
        if (!this[_0x1939ce(0x18d)] || !this[_0x1939ce(0x18d)][_0x1939ce(0x17e)]) return;
        const currentTime = this[_0x1939ce(0x18d)][_0x1939ce(0x17e)](),
            duration = this['youtubePlayer'][_0x1939ce(0xf8)](),
            timeDisplay = this[_0x1939ce(0x173)]['querySelector'](_0x1939ce(0x19d)),
            _0xf14d01 = this[_0x1939ce(0x173)][_0x1939ce(0x187)]('.seek');
        if (timeDisplay && duration > 0x0) {
            const _0x26a4df = this[_0x1939ce(0x175)](currentTime) + _0x1939ce(0x14f) + this[_0x1939ce(0x175)](duration);
            timeDisplay[_0x1939ce(0x147)] !== _0x26a4df && (timeDisplay[_0x1939ce(0x147)] = _0x26a4df);
            const _0x11ef05 = currentTime / duration * 0x64;
            if (_0xf14d01) {
                const _0x1ae567 = parseFloat(_0xf14d01[_0x1939ce(0x11a)][_0x1939ce(0x139)](_0x1939ce(0x1a4)));
                (isNaN(_0x1ae567) || Math['abs'](_0x1ae567 - _0x11ef05) >= 0.5) && _0xf14d01[_0x1939ce(0x11a)][_0x1939ce(0x133)](_0x1939ce(0x1a4), _0x11ef05);
            }
        }
    } [_0x27d30f(0xec)]() {
        const _0x5d77b3 = _0x27d30f;
        null == this[_0x5d77b3(0x166)] && (document[_0x5d77b3(0x14c)] || this[_0x5d77b3(0x14a)] || !this[_0x5d77b3(0x15a)] || (this[_0x5d77b3(0x164)](), this[_0x5d77b3(0x166)] = setInterval(() => {
            const _0x230820 = _0x5d77b3;
            document['hidden'] || this[_0x230820(0x14a)] || !this[_0x230820(0x15a)] ? this[_0x230820(0x115)]() : this[_0x230820(0x164)]();
        }, 0x3e8)));
    } [_0x27d30f(0x115)]() {
        const _0x22c84d = _0x27d30f;
        null != this['_timeInterval'] && (clearInterval(this['_timeInterval']), this[_0x22c84d(0x166)] = null);
    } [_0x27d30f(0x175)](_0x48bfdd) {
        const _0x1c9f06 = _0x27d30f;
        return Math[_0x1c9f06(0x18c)](_0x48bfdd / 0x3c) + ':' + Math[_0x1c9f06(0x18c)](_0x48bfdd % 0x3c)[_0x1c9f06(0x11b)]()[_0x1c9f06(0x13d)](0x2, '0');
    } [_0x27d30f(0x15d)]() {
        const _0x260941 = _0x27d30f;
        this['youtubePlayer'] && (this['isPlaying'] ? this[_0x260941(0x18d)][_0x260941(0x112)]() : this[_0x260941(0x18d)][_0x260941(0x119)]());
    } [_0x27d30f(0x174)]() {
        const _0x1af7c2 = _0x27d30f;
        if (this[_0x1af7c2(0x18d)]) {
            try {
                const _0x448945 = this[_0x1af7c2(0x18d)];
                if (_0x448945 && _0x1af7c2(0x156) == typeof _0x448945['getPlaylistIndex'] && _0x1af7c2(0x156) == typeof _0x448945[_0x1af7c2(0x10c)] && _0x1af7c2(0x156) == typeof _0x448945[_0x1af7c2(0x170)]) {
                    const _0x3171c2 = _0x448945[_0x1af7c2(0x10c)]();
                    if (Array[_0x1af7c2(0x153)](_0x3171c2) && _0x3171c2[_0x1af7c2(0x148)] > 0x0) {
                        if (_0x448945[_0x1af7c2(0x1a6)]() === _0x3171c2[_0x1af7c2(0x148)] - 0x1) return void _0x448945['playVideoAt'](0x0);
                    }
                }
            } catch (_0x54d7e5) { }
            this[_0x1af7c2(0x18d)]['nextVideo']();
        }
    } [_0x27d30f(0x143)]() {
        const _0x392c72 = _0x27d30f;
        this[_0x392c72(0x18d)] && this[_0x392c72(0x18d)]['previousVideo']();
    } [_0x27d30f(0x19e)]() {
        const _0x467329 = _0x27d30f;
        if (!this[_0x467329(0x18d)]) return;
        const _0x355dda = this[_0x467329(0x173)][_0x467329(0x187)](_0x467329(0xfc)),
            _0x47e8a5 = {};
        _0x47e8a5['programId'] = _0x467329(0x128);
        const _0x314451 = {};
        _0x314451['programId'] = _0x467329(0x128), this[_0x467329(0xfb)] ? (this[_0x467329(0x18d)][_0x467329(0x17b)](), this[_0x467329(0xfb)] = !0x1, _0x355dda['checked'] = !0x1, this['isPlaying'] && window['parent'] && window[_0x467329(0x117)][_0x467329(0xfd)] && window['parent'][_0x467329(0x184)] && window[_0x467329(0x117)][_0x467329(0xfd)]['publish'](window[_0x467329(0x117)][_0x467329(0x184)][_0x467329(0x192)], _0x47e8a5)) : (this[_0x467329(0x18d)][_0x467329(0xf4)](), this[_0x467329(0xfb)] = !0x0, _0x355dda['checked'] = !0x0, this['isPlaying'] && window[_0x467329(0x117)] && window['parent'][_0x467329(0xfd)] && window[_0x467329(0x117)][_0x467329(0x184)] && window['parent'][_0x467329(0xfd)]['publish'](window[_0x467329(0x117)][_0x467329(0x184)][_0x467329(0x16b)], _0x314451));
    } [_0x27d30f(0x116)](volume) {
        const _0x3c4ec9 = _0x27d30f;
        if (!this[_0x3c4ec9(0x18d)]) return;
        this['volume'] = Math[_0x3c4ec9(0xf7)](0x0, Math[_0x3c4ec9(0x10a)](0x64, volume)), this[_0x3c4ec9(0x18d)][_0x3c4ec9(0x116)](this[_0x3c4ec9(0xf5)]);
        const volumeSlider = this[_0x3c4ec9(0x173)][_0x3c4ec9(0x187)](_0x3c4ec9(0xf2));
        volumeSlider && volumeSlider['style'][_0x3c4ec9(0x133)](_0x3c4ec9(0x1a4), this[_0x3c4ec9(0xf5)]);
    } ['seekTo'](_0x4c7997) {
        const _0x483e7d = _0x27d30f;
        if (!this[_0x483e7d(0x18d)]) return;
        const duration = this['youtubePlayer'][_0x483e7d(0xf8)]();
        if (duration > 0x0) {
            const _0xfac5b8 = _0x4c7997 / 0x64 * duration;
            this[_0x483e7d(0x18d)][_0x483e7d(0x110)](_0xfac5b8);
        }
    } ['disconnectedCallback']() {
        const _0x5655af = _0x27d30f;
        try {
            this[_0x5655af(0x185)] && (clearTimeout(this[_0x5655af(0x185)]), this[_0x5655af(0x185)] = null);
        } catch (_0x1546b9) { }
        this['_stopTimeUpdates'](), document[_0x5655af(0x178)]('visibilitychange', this[_0x5655af(0x159)]), window[_0x5655af(0x178)](_0x5655af(0x188), this[_0x5655af(0x15f)]), window[_0x5655af(0x178)]('focus', this['_onWindowFocus']);
        try {
            this[_0x5655af(0x183)] && this[_0x5655af(0x183)](), this[_0x5655af(0x1a5)] && this['_unsubscribeRest'](), this[_0x5655af(0x126)] && this[_0x5655af(0x126)](), this[_0x5655af(0x129)] && this[_0x5655af(0x129)](), this[_0x5655af(0x186)] && this['_unsubscribeMediaResume'](), this[_0x5655af(0x111)] && this[_0x5655af(0x111)](), this[_0x5655af(0x157)] && this['_unsubscribeLogoffReq']();
        } catch { }
    } [_0x27d30f(0x1a0)]() {
        const _0x45668f = _0x27d30f;
        try {
            this[_0x45668f(0x115)](), this[_0x45668f(0x18d)] && this[_0x45668f(0x18d)][_0x45668f(0x112)] && this[_0x45668f(0x18d)]['pauseVideo'](), this[_0x45668f(0x106)] = !0x1;
        } catch (_0x2880f0) { }
    } [_0x27d30f(0x159)]() {
        const _0x12311f = _0x27d30f;
        document[_0x12311f(0x14c)] ? this[_0x12311f(0x115)]() : this[_0x12311f(0x15a)] && !this[_0x12311f(0x14a)] && this[_0x12311f(0xec)]();
    }
}

function _0x4636() {
    const _0x5e65ba = ['BwvKAwfqBgf5zxiTDgLTzxiTCgf1C2vK', 'B25qBgf5zxjszwfKEq', 'Aw5Zzxj0qMvMB3jL', 'zMXVB3i', 'Ew91DhvIzvbSyxLLCG', 'odKYntm2zhvkzfbN', 'y2HLy2TLza', 'zgvSzxrL', 'ru5eruq', 'tuvesufFueXbwuvsx1bmqvLjtKC', 'Aw5Uzxjive1m', 'zgvMAw5L', 'ndaWmZKYs2nuwwHu', 'Aw50zxjUywXZ', 'ywn0AxzL', 'mtHqserJDxe', 'Dg9Nz2XLugXHEwXPC3q', 'DhLWzq', 'y29UBMvJDgvKq2fSBgjHy2S', 'C2nYAxb0', 'lMn1CNjLBNqTDgLTzq', 'Dg9Nz2XLtxv0zq', 'x2vYCM9Yu2HVD24', 'C29MDfjLC2v0', 'DxbKyxrLugXHEvbHDxnLqNv0Dg9U', 'z2v0qM91BMrPBMDdBgLLBNrszwn0', 'mtrKvLrABMe', 'ls12ywX1zq', 'x3vUC3vIC2nYAwjLuMvZDa', 'z2v0ugXHEwXPC3rjBMrLEa', 'x3n0yxj0vgLTzvvWzgf0zxm', 'ywX0ugXHEwXPC3rjza', 'lMXVB3a', 'z2v0rwXLBwvUDhncEvrHz05HBwu', 'CMvTB3zLqxr0CMLIDxrL', 'z2v0qxr0CMLIDxrL', 'lNzVBhvTzq', 'tuvesufFr0XpqKfmx1bbvvnf', 'Bxv0zq', 'DM9SDw1L', 'Bw9Kzxn0yNjHBMrPBMC', 'Bwf4', 'z2v0rhvYyxrPB24', 'DxbKyxrLvMfSDwu', 'zgv0ywLS', 'AxnnDxrLza', 'lM11Dgu', 'zxzLBNrcDxm', 'AgfUzgXLq2XPy2S', 'ls1TyxHPBxvT', 'x3bSyxLSAxn0rxjYB3juAw1LB3v0', 'BMfTzq', 'x3vWzgf0zvbSyxLSAxn0qNv0Dg9U', 'x211DgvvBMXVy2TeB25L', 'otyZzwzTDwTL', 'CgXHEwLUzW', 'x3jLC3vTzufMDgvYuMvZDg9Yzq', 'BgLZDfr5Cgu', 'ntG2uhfAvNri', 'zgLZCgf0y2HfDMvUDa', 'BwLU', 'mtaWjq', 'z2v0ugXHEwXPC3q', 'cIaGicaGicaGicaGidXSAw5RihjLBd0IC3r5BgvZAgvLDciGAhjLzJ0IBwvKAwfqBgf5zxiUy3nZiIaVpGOGicaGicaGicaGica8zgL2ignSyxnZpsjTywLUiJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMnVBNrLBNqIpGOGicaGicaGicaGicaGicaGicaGidXKAxyGAwq9iNLVDxr1yMuTAwzYyw1LiIbZDhLSzt0ID2LKDgG6ideWmcu7igHLAwDODdOGmtaWjtSIpJWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsj0CMf5lwjHy2TNCM91BMqIihn0EwXLpsjWB3nPDgLVBJOGywjZB2X1Dgu7igjVDhrVBtOGmdSGBgvMDdOGmdSGCMLNAhq6ida7igHLAwDODdOGnJLWEdSGEI1PBMrLEdOGntSIpGOGicaGicaGicaGicaGicaGicaGidXZDMCGEg1SBNm9iMH0Dha6lY93D3CUDZmUB3jNlZiWmdaVC3zNiIb3Awr0Ad0ImtaWjsiGAgvPz2H0psi2osiGDMLLD0jVEd0ImcaWidu1oca2osiGChjLC2vYDMvbC3bLy3rsyxrPBZ0IEe1PzfLnAwqGC2XPy2uIignVBg9YlwLUDgvYCg9SyxrPB249iMXPBMvHCNjNyIi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKzwzZpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMvHCKDYywrPzw50igLKpsjVDxrLCI1MAwXSiIb4mt0ImciGEdi9iJaIihKXpsiWiIb5mJ0Imsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWiIbZDg9WlwnVBg9YpsiJnJm2yZG3iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc4YnsiGC3rVCc1JB2XVCJ0IiZnMndu1nYiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUmZC1iIbZDg9WlwnVBg9YpsiJmMuZmZnMiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc40nsiGC3rVCc1JB2XVCJ0IiZi3mMiZnsiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUnsiGC3rVCc1JB2XVCJ0IiZe3mtGXzciGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUntqIihn0B3aTy29SB3i9iImWytbHmgiIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJC1iIbZDg9WlwnVBg9YpsiJmdyWnJa5iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc43ociGC3rVCc1JB2XVCJ0IiZa1mdyWociGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUodGIihn0B3aTy29SB3i9iImWnta2mdGIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJKZiIbZDg9WlwnVBg9YpsiJmtqXoti5iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc45ociGC3rVCc1JB2XVCJ0IiZjJmZu1nsiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVBgLUzwfYr3jHzgLLBNq+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzwfYr3jHzgLLBNqGAwq9iNrYyxKTzMLSBciGEde9iJaIihGYpsiWiIb5mt0ImciGEti9iJeIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc4WmIiGC3rVCc1JB2XVCJ0IiZK1owzIosiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUmdqIihn0B3aTy29SB3i9iIm2mtzIodCIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJeYnsiGC3rVCc1JB2XVCJ0IiZu3nJa3nYiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUmJuIihn0B3aTy29SB3i9iIm0yZu1nJGIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJq4iIbZDg9WlwnVBg9YpsiJm2m0mZuYiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc41msiGC3rVCc1JB2XVCJ0IiZeXmteXmsiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUodaIihn0B3aTy29SB3i9iImXmJeYmtiIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJKWiIbZDg9WlwnVBg9YpsiJmtqXytjHiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc45ociGC3rVCc1JB2XVCJ0IiZqYngm3nciGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVBgLUzwfYr3jHzgLLBNq+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzwfYr3jHzgLLBNqGAwq9iNrYyxKTzwrNzs1ViIb4mt0ImciGEdi9iJaIihKXpsiWiIb5mJ0Imsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJm5iIbZDg9WlwnVBg9YpsiJnwu2nZDMiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc43mciGC3rVCc1JB2XVCJ0IiZe1mtyXzciGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUnZuIihn0B3aTy29SB3i9iImWzdbKmguIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XPBMvHCKDYywrPzw50pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMvHCKDYywrPzw50igLKpsj0CMf5lwvKz2uTAsiGEde9iJaIihGYpsiWiIb5mt0ImciGEti9iJeIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZDg9Wig9MzNnLDd0Imc43mciGC3rVCc1JB2XVCJ0IiZbKmgqWzsiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3rVCcbVzMzZzxq9iJaUnZuIihn0B3aTy29SB3i9iImXnte2mwqIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0B3aGB2zMC2v0psiWlJK4iIbZDg9WlwnVBg9YpsiJnde0yZCZiIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9SAw5LyxjhCMfKAwvUDd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXWyxrOigLKpsj0CMf5lwjVDw5Kyxj5lxbHDgGIigq9iK0GlteWideYlJuGtcaWideYlJuGusaZmIaXmI41idu1idqWiemGnZeGnJeGnZmGnJKGotuGnJKGtca0nJmGnJKGqYa0oduGnJKGndG3idyXiduWmYa0mcbriduYnIaXmI41idu1nIaXmI41ieWGnty2ideYlJuGBcaWic0XmI41ieWGlteWidaGEIiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXJBgLWugf0AcbPzd0IBM8TyM9YzgvYCYi+phjLy3qGEt0ImsiGD2LKDgG9iJeWmcuIigHLAwDODd0InJCIic8+pc9JBgLWugf0Ad4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXTyxnRigLKpsj0CMf5lwfYzweIpJX1C2uGAhjLzJ0Ii3rYyxKTyM91BMrHCNKTCgf0AciGzMLSBd0Ii0zgrIiGlZ48l21HC2S+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BwfZAYbPzd0IBM9UlxrYyxKTyxjLysi+phjLy3qGD2LKDgG9iJu1ociGAgvPz2H0psi2osiGzMLSBd0Ii0zgrIiGlZ48DxnLigHYzwy9iIn0CMf5lwjVDw5Kyxj5lxbHDgGIigzPBgW9iImWmdaIic8+pc9TyxnRpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rLzNm+cIaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihDPzhrOpsi1ntGIigHLAwDODd0InJKIig1HC2S9iNvYBcGJBM9UlxrYyxKTyxjLysKIigzPBgW9iNvYBcGJB3v0zxiTzMLSBcKIic8+cIaGicaGicaGicaGicaGicaGicaGicaGidXYzwn0ihDPzhrOpsi1ntGIigHLAwDODd0InJKIig1HC2S9iNvYBcGJDhjHEs1HCMvHksiGzMLSBd0IDxjSkcn0CMf5lwzPBgWPiIaVpGOGicaGicaGicaGicaGicaGicaGicaGica8DxnLigHYzwy9iIn0CMf5lwjVDw5Kyxj5lxbHDgGIigzPBgW9iM5VBMuIihn0CM9Rzt0IDxjSkcn0CMf5lwvKz2uTBYKIihn0CM9Rzs13Awr0Ad0ImYiGy2XPCc1WyxrOpsj1CMWOi25VlwjVCMrLCNmPiIbTyxnRpsj1CMWOi25VBI10CMf5lwfYzwePiIaVpGOGicaGicaGicaGicaGicaGicaGicaGica8DxnLigHYzwy9iIn0CMf5lwjVDw5Kyxj5lxbHDgGIigzPBgW9iM5VBMuIihn0CM9Rzt0IDxjSkcn0CMf5lwvKz2uTAsKIihn0CM9Rzs13Awr0Ad0ImsiGy2XPCc1WyxrOpsj1CMWOi25VlwjVCMrLCNmPiIaVpGOGicaGicaGicaGicaGicaGicaGicaGica8zYbZDhjVA2uTD2LKDgG9iJiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMuGEde9iI01jsiGEdi9iJeWmcuIihKXpsiWiIb5mJ0ImciGC3rYB2TLpsiJmJeYmJi0iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXPBMuGEde9iI01jsiGEdi9iJeWmcuIihKXpsi2osiGEti9iJy5iIbZDhjVA2u9iImXnJfHmJaIic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgLUzsb4mt0IotuIihGYpsi0nJmIihKXpsi2osiGEti9iJy5iIbZDhjVA2u9iImXotfKmJuIic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzZ4kicaGicaGicaGicaGicaGicaGica8l3n2zZ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGphDTlxnSAwrLCIbJBgfZCZ0IC2vLAYiGDgL0Bgu9iLnLzwSIigfYAweTBgfIzwW9iLnLzwSIpJWVD20TC2XPzgvYpGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0Iy29UDhjVBhmIpGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iMXLzNqIpGOGicaGicaGicaGicaGicaGicaGicaGica8DgLTzsbJBgfZCZ0Iy3vYCMvUDc10Aw1LiIbHCMLHlwXHyMvSpsjdDxjYzw50ihrPBwuIpJa6mda8l3rPBwu+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNbYzxyTCNCIigrPC2fIBgvKihrPDgXLpsjqCMv2Aw91CYi+uhjLDMLVDxm8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjWBgf5lxbHDxnLiJ5qBgf5pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0ICMLNAhqIpGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjUzxH0lwzMiIbKAxnHyMXLzcb0AxrSzt0ItMv4Dci+tMv4DdWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigfYAweTBgfIzwW9iK11DguIigfYAweTCM9Szt0IC3DPDgnOiIbJBgfZCZ0IyMfZAwmTyNv0Dg9Uig11DguIic8+cIaGicaGicaGicaGicaGicaGicaGicaGidX3Bs1ZBgLKzxiGyxjPys1SywjLBd0IvM9SDw1LiIbJBgfZCZ0IDM9SDw1LignVBNn0yw50lxrODw1IignPCMn1BgfYlxrODw1IiIbTAw49iJaIig1HEd0ImtaWiIb2ywX1zt0ImtaWiIbZDgvWpsiXiIb0AxrSzt0IvM9SDw1LiJ48l3DTlxnSAwrLCJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGidXKAxyGy2XHC3m9iMD1DhrLCI1YAwDODciGC3r5Bgu9iNOTAw5KzxG6ideWlcbWB3nPDgLVBJOGCMvSyxrPDMu7iJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNjLyxjYyw5NzwfIBgvZiJ4kicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IyMfZAwmTyNv0Dg9UigXVB3aIihrPDgXLpsjtD2fWihbSyxLSAxn0iIbHCMLHlwXHyMvSpsjtD2fWihbSyxLSAxn0iJ48l2j1DhrVBJ4kicaGicaGicaGidWVzgL2pGOGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG', 'lNbYzxyTCNC', 'y29UDhjVBhm', 'C2vLA1rV', 'x3vUC3vIC2nYAwjLu2vZC2LVBKXVz2LU', 'Cgf1C2vwAwrLBW', 'ChjPBwfYEvbSyxLSAxn0swq', 'CgfYzw50tM9Kzq', 'x3n0B3buAw1LvxbKyxrLCW', 'C2v0vM9SDw1L', 'CgfYzw50', 'mZC2ota3mhztBfv3EG', 'CgXHEvzPzgvV', 'C3r5Bgu', 'Dg9tDhjPBMC', 'C2HVD1bSyxLSAxn0rxjYB3i', 'CgXHExnPBMXPBMu', 'BwvKAwfqBgf5zxiTD2LUzg93', 'AxnvC2LUz0fSDfbSyxLSAxn0', 'D2LUzg93swq', 'BwvZC2fNzq', 'C2v0qxr0CMLIDxrL', 'CgXHEwXPC3q', 'ywrKrxzLBNrmAxn0zw5LCG', 'C2HVDY15B3v0DwjLlwvYCM9Y', 'x3vUC3vIC2nYAwjLtwvKAwfqyxvZzq', 'ChjLDMvUDerLzMf1Bhq', 'BwvKAwfqBgf5zxi', 'x3vUC3vIC2nYAwjLtwvKAwfwAxnPyMXL', 'te9hx09grL9srvfvrvnuruq', 'Cg9ZDe1LC3nHz2u', 'C3DHCc1WBgf5BgLZDa', 'yMLUza', 'DgHLBG', 'ndu3nZKYzKDLtwzO', 'DMLZAwjPBgL0EwnOyw5Nzq', 'AgfUzgXLtw91C2vnB3zL', 'mtaZmJKXmgDRDgjRDG', 'C2v0uhjVCgvYDhK', 'y3jLyxrLrwXLBwvUDa', 'y2XPy2S', 'ywrK', 'uefvu0ve', 'lNbSyxKTCgf1C2u', 'z2v0uhjVCgvYDhLwywX1zq', 'C2HVD2LUzM8', 'Aw5PDa', 'y2HHBMDL', 'CgfKu3rHCNq', 'BwfYAW', 'CMvS', 'C3rLCa', 'z2v0rwXLBwvUDej5swq', 'z2v0ugXHEwvYu3rHDgu', 'ChjLDMLVDxnwAwrLBW', 'zgvZDhjVEq', 'C3vIC2nYAwjL', 'y2nFBg9Hzf9WB2XPy3K', 'Dgv4DenVBNrLBNq', 'BgvUz3rO', 'C3rHDgvZ', 'x2LZtwLUAw1PEMvK', 'DMfSDwu', 'AgLKzgvU', 'AxneCMfNz2LUzW', 'ugXHEwvY', 'ic8G', 'ueXbwuLorW', 'zhvYyxrPB24', 'v0Lore9xx01jtKLnsvPfra', 'AxnbCNjHEq', 'B25qBgf5zxjtDgf0zunOyw5Nzq', 'yxr0ywnOu2HHzg93', 'zNvUy3rPB24', 'x3vUC3vIC2nYAwjLtg9NB2zMuMvX', 'ueXND2nNzKnwyu1dmKHFvdjSwK1ACeDLyMjctePzBwnPCq', 'x29UvMLZAwjPBgL0EunOyw5Nzq', 'AxnqBgf5Aw5N', 'B3jPz2LU', 'x3L0qxbPuhjVBwLZzq', 'Dg9Nz2XLugXHEvbHDxnL', 'C2v0DxbdB250CM9SCW', 'x29Uv2LUzg93qMX1CG', 'B25zB3vuDwjLswzYyw1LqvbjuMvHzhK', 'lM5LEhqTzMy', 'ChjVz3jHBuLK', 'tvvtsunFueXbwuvsx1bmqvLjtKC', 'DxbKyxrLvgLTzurPC3bSyxK', 'D20TC2XPzgvY', 'x3rPBwvjBNrLCNzHBa', 'Ahr0Chm6lY93D3CUEw91DhvIzs5JB20', 'AgfUzgXLtw91C2veB3DU', 'lNnLzwS', 'y2XPzw50wa', 'tuvesufFueXbwuvsx1nut1bqruq', 'AxzFBg9Hzf9WB2XPy3K', 'zgLZywjSzwq', 'odqYntm4r3jrzxjd', 'Bw91C2v1Ca', 'CgXHEvzPzgvVqxq', 'AgfUzgXLtw91C2vvCa', 'qNjVD3nLCIbJB21WyxrPyMLSAxr5igLZC3vLigrLDgvJDgvK', 'C2HHzg93uM9VDa', 'BMv4DfzPzgvV', 'zM9YBwf0vgLTzq', 'ChvIBgLZAa', 'Aw5PDfLVDvr1yMvqBgf5zxi', 'CMvTB3zLrxzLBNrmAxn0zw5LCG', 'ugXHEwvYu3rHDgu', 'Bg9HzfLVDvr1yMvbueK', 'Dw5nDxrL', 'cIaGicaGicaGicaGidXSAw5RihjLBd0IC3r5BgvZAgvLDciGAhjLzJ0IBwvKAwfqBgf5zxiUy3nZiIaVpGOGicaGicaGicaGica8zgL2ignSyxnZpsj0CMfJAY1IyxjLiJ48l2rPDJ4kicaGicaGicaGicaGpgrPDIbJBgfZCZ0IDhjHy2STzNvSBci+pc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNrODw1IiJ48l2rPDJ4kicaGicaGica', 'Bw91C2vKB3DU', 'z2v0q3vYCMvUDfrPBwu', 'zgf0yq', 'zgf0ys1ZDgf0zq', 'ueXND2nNzKnwyu1dmxO1qxfWAg51yKrMsxvFChaWt2S5tW', 'B3bLBG', 'x3vUC3vIC2nYAwjLtwLU', 'rvzftLrt', 'x211DgvfBMfIBgvuAw1LCKLK', 'x3vUC3vIC2nYAwjLtwvKAwfszxn1Bwu', 'CxvLCNLtzwXLy3rVCG', 'yMX1CG'];
    _0x4636 = function () {
        return _0x5e65ba;
    };
    return _0x4636();
}
class WMPlayerSliderElement extends HTMLElement {
    constructor() {
        const _0x4d0712 = _0x27d30f;
        super(), this['attachShadow']({
            'mode': _0x4d0712(0x182)
        }), this[_0x4d0712(0x14b)] = 0x0, this[_0x4d0712(0x10a)] = 0x0, this[_0x4d0712(0xf7)] = 0x64, this['step'] = 0x1, this[_0x4d0712(0x14d)] = !0x1, this[_0x4d0712(0x173)]['innerHTML'] = _0x4d0712(0x17c), this[_0x4d0712(0x124)](_0x4d0712(0x17d), this[_0x4d0712(0x168)]['bind'](this)), this['addEventListener']('click', this[_0x4d0712(0xfe)]['bind'](this)), this[_0x4d0712(0x131)] = this[_0x4d0712(0x131)][_0x4d0712(0x12d)](this), this['handleMouseUp'] = this[_0x4d0712(0x171)]['bind'](this);
    } ['handleMouseDown'](_0x5a8821) {
        const _0x118f38 = _0x27d30f;
        this[_0x118f38(0x14d)] = !0x0, this[_0x118f38(0xf9)](_0x5a8821), document['addEventListener']('mousemove', this['handleMouseMove']), document['addEventListener'](_0x118f38(0x16f), this[_0x118f38(0x171)]), _0x5a8821[_0x118f38(0x127)]();
    } [_0x27d30f(0x131)](_0x68ce80) {
        this['isDragging'] && this['updateValue'](_0x68ce80);
    } ['handleMouseUp']() {
        const _0x5c2b1e = _0x27d30f;
        this['isDragging'] && (this[_0x5c2b1e(0x14d)] = !0x1, document[_0x5c2b1e(0x178)]('mousemove', this[_0x5c2b1e(0x131)]), document[_0x5c2b1e(0x178)](_0x5c2b1e(0x16f), this[_0x5c2b1e(0x171)]));
    } ['handleClick'](_0x128a03) {
        const _0x8de167 = _0x27d30f;
        this[_0x8de167(0x14d)] || this[_0x8de167(0xf9)](_0x128a03);
    } [_0x27d30f(0xf9)](_0x3287c4) {
        const _0x3b3796 = _0x27d30f,
            _0x5e3c68 = this[_0x3b3796(0x1a2)](),
            _0x3ca344 = Math[_0x3b3796(0xf7)](0x0, Math['min'](0x1, (_0x3287c4[_0x3b3796(0x16a)] - _0x5e3c68['left']) / _0x5e3c68['width']));
        this['value'] = this['min'] + _0x3ca344 * (this['max'] - this[_0x3b3796(0x10a)]), this[_0x3b3796(0x11a)]['setProperty'](_0x3b3796(0x1a4), this[_0x3b3796(0x14b)]), this[_0x3b3796(0x109)](new CustomEvent(_0x3b3796(0x13c), {
            'detail': this[_0x3b3796(0x14b)]
        }));
    } [_0x27d30f(0x19b)]() {
        const _0x1c19e3 = _0x27d30f,
            _0x167448 = this[_0x1c19e3(0xf1)](_0x1c19e3(0xf7)),
            _0x4beec8 = this[_0x1c19e3(0xf1)](_0x1c19e3(0x10a)),
            _0x235375 = this[_0x1c19e3(0xf1)](_0x1c19e3(0x14b)),
            _0x2c00f8 = this[_0x1c19e3(0xf1)](_0x1c19e3(0x140));
        _0x167448 && (this['max'] = parseFloat(_0x167448)), _0x4beec8 && (this[_0x1c19e3(0x10a)] = parseFloat(_0x4beec8)), _0x235375 && (this['value'] = parseFloat(_0x235375)), _0x2c00f8 && (this['step'] = parseFloat(_0x2c00f8)), this[_0x1c19e3(0x11a)]['setProperty']('--value', this[_0x1c19e3(0x14b)]), this[_0x1c19e3(0x11a)][_0x1c19e3(0x133)]('--minimum', this[_0x1c19e3(0x10a)]), this[_0x1c19e3(0x11a)][_0x1c19e3(0x133)](_0x1c19e3(0xff), this['max']);
    }
}
customElements[_0x27d30f(0x194)](_0x27d30f(0x165), WMPlayerSliderElement), customElements['define']('wm-player', YouTubeMediaPlayer);