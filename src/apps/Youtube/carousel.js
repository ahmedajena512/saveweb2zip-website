function createCarouselHTML(_0x3b8a34) {
    if (!_0x3b8a34 || 0x0 === _0x3b8a34['length']) return '<div\x20class=\x22carousel-error\x22>No\x20media\x20to\x20display</div>';
    let _0x13b101 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22image-carousel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-track\x22>\x0a\x20\x20\x20\x20';
    return _0x3b8a34['forEach']((_0x1eb75e, _0x547143) => {
        const _0xe9a1d3 = 0x0 === _0x547143;
        if ('video' === _0x1eb75e['type']) {
            const _0x107ea2 = _0x1eb75e['poster'] ? 'poster=\x22' + _0x1eb75e['poster'] + '\x22' : '',
                srcAttr = _0xe9a1d3 ? 'src' : 'data-src';
            _0x13b101 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-item\x20' + (_0xe9a1d3 ? 'active' : '') + '\x22\x20data-media-type=\x22video\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<video\x20' + srcAttr + '=\x22' + _0x1eb75e['src'] + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x107ea2 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22carousel-video\x20' + (_0xe9a1d3 ? '' : 'lazy-load') + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20muted\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20playsinline\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loop\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xe9a1d3 ? 'autoplay' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onloadedmetadata=\x22this.style.opacity=\x271\x27;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<source\x20' + srcAttr + '=\x22' + _0x1eb75e['src'] + '\x22\x20type=\x22' + (_0x1eb75e['mimeType'] || 'video/mp4') + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</video>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        } else _0x13b101 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-item\x20' + (_0xe9a1d3 ? 'active' : '') + '\x22\x20data-media-type=\x22image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20' + (_0xe9a1d3 ? 'src' : 'data-src') + '=\x22' + _0x1eb75e['src'] + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alt=\x22' + _0x1eb75e['alt'] + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22carousel-image\x20' + (_0xe9a1d3 ? '' : 'lazy-load') + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onload=\x22this.style.opacity=\x271\x27;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
    }), _0x13b101 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Navigation\x20arrows\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-nav\x20carousel-prev\x22\x20role=\x22button\x22\x20tabindex=\x220\x22\x20aria-label=\x22Previous\x20media\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22nav-arrow\x22>‹</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-nav\x20carousel-next\x22\x20role=\x22button\x22\x20tabindex=\x220\x22\x20aria-label=\x22Next\x20media\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22nav-arrow\x22>›</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', _0x13b101;
}

function createNavigationDots(_0x2641d8) {
    if (!_0x2641d8 || _0x2641d8['length'] <= 0x1) return '';
    let _0x42e3c3 = '<div\x20class=\x22carousel-nav-dots\x22>';
    return _0x2641d8['forEach']((_0x7169f8, _0xfcd652) => {
        _0x42e3c3 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-dot\x20' + (0x0 === _0xfcd652 ? 'active' : '') + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20role=\x22button\x22\x20tabindex=\x220\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-slide=\x22' + _0xfcd652 + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-label=\x22Go\x20to\x20image\x20' + (_0xfcd652 + 0x1) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
    }), _0x42e3c3 += '</div>', _0x42e3c3;
}

function createMobileCounter(_0x2ebdf5) {
    return !_0x2ebdf5 || _0x2ebdf5['length'] <= 0x1 ? '' : '<div\x20class=\x22mobile-carousel-counter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22current-image\x22>1</span>\x20of\x20<span\x20class=\x22total-images\x22>' + _0x2ebdf5['length'] + '</span>\x0a\x20\x20\x20\x20</div>';
}

function injectCarouselHTML(_0x417e9c, _0x2fa232) {
    if (!_0x417e9c) return;
    _0x417e9c['dataset']['originalContent'] || (_0x417e9c['dataset']['originalContent'] = _0x417e9c['innerHTML']);
    const _0x345fcd = _0x417e9c['querySelector']('.video-controls-overlay');
    let _0x1e9873 = '';
    _0x345fcd && (_0x1e9873 = _0x345fcd['outerHTML']), _0x417e9c['innerHTML'] = _0x2fa232, _0x1e9873 && (_0x417e9c['insertAdjacentHTML']('beforeend', _0x1e9873), initializeCarouselControlsFade(_0x417e9c));
}

function updateExternalDots(_0x1eccc3) {
    document['querySelectorAll']('.video-meta-center\x20.carousel-dot')['forEach']((_0x1a6647, _0x4a95fd) => {
        _0x4a95fd === _0x1eccc3 ? _0x1a6647['classList']['add']('active') : _0x1a6647['classList']['remove']('active');
    });
}

function initializeCarousel(_0x2b958c) {
    if (!_0x2b958c) return;
    const _0x70bdb9 = _0x2b958c['querySelector']('.image-carousel'),
        _0x3bbc12 = _0x2b958c['querySelectorAll']('.carousel-item'),
        _0x43e498 = _0x2b958c['querySelector']('.carousel-prev'),
        _0x1d3c3f = _0x2b958c['querySelector']('.carousel-next'),
        _0x1a8eb4 = document['querySelectorAll']('.video-meta-center\x20.carousel-dot');
    if (!_0x70bdb9 || 0x0 === _0x3bbc12['length']) return;
    let _0xe4cf9f = 0x0;

    function _0x391210(_0x43520c) {
        const _0x372b43 = _0x3bbc12[_0xe4cf9f];
        if (_0x372b43) {
            const _0xc4a355 = _0x372b43['querySelector']('video');
            _0xc4a355 && _0xc4a355['pause']();
        }
        _0x3bbc12[_0xe4cf9f]['classList']['remove']('active'), _0xe4cf9f = _0x43520c;
        const _0x5dc4b9 = _0x3bbc12[_0xe4cf9f];
        _0x5dc4b9['classList']['add']('active');
        const _0x8c0181 = _0x5dc4b9['querySelector']('video');
        if (_0x8c0181) {
            _0x8c0181['dataset']['src'] && (_0x8c0181['src'] = _0x8c0181['dataset']['src'], _0x8c0181['classList']['remove']('lazy-load'), _0x8c0181['removeAttribute']('data-src'), _0x8c0181['muted'] = !0x0, _0x8c0181['load']());
            const playPromise = _0x8c0181['play']();
            void 0x0 !== playPromise && playPromise['catch'](() => {});
        }
        var _0x25dd6c;
        [(_0x25dd6c = _0xe4cf9f) - 0x1, _0x25dd6c, _0x25dd6c + 0x1]['filter'](_0x3147c2 => _0x3147c2 >= 0x0 && _0x3147c2 < _0x3bbc12['length'])['forEach'](_0x13ce16 => {
            const _0x2454ba = _0x3bbc12[_0x13ce16],
                _0x459aa9 = _0x2454ba['querySelector']('img.lazy-load');
            _0x459aa9 && _0x459aa9['dataset']['src'] && (_0x459aa9['src'] = _0x459aa9['dataset']['src'], _0x459aa9['classList']['remove']('lazy-load'), _0x459aa9['removeAttribute']('data-src'));
            const _0x474dd2 = _0x2454ba['querySelector']('video.lazy-load');
            _0x474dd2 && _0x474dd2['dataset']['src'] && (_0x474dd2['src'] = _0x474dd2['dataset']['src'], _0x474dd2['classList']['remove']('lazy-load'), _0x474dd2['removeAttribute']('data-src'), _0x474dd2['muted'] = !0x0, _0x474dd2['load']());
        });
        const _0x13fe4b = document['querySelector']('.mobile-carousel-counter\x20.current-image');
        _0x13fe4b && (_0x13fe4b['textContent'] = _0xe4cf9f + 0x1), updateExternalDots(_0xe4cf9f);
    }
    _0x43e498 && _0x43e498['addEventListener']('click', () => {
        _0x391210(_0xe4cf9f > 0x0 ? _0xe4cf9f - 0x1 : _0x3bbc12['length'] - 0x1);
    }), _0x1d3c3f && _0x1d3c3f['addEventListener']('click', () => {
        _0x391210(_0xe4cf9f < _0x3bbc12['length'] - 0x1 ? _0xe4cf9f + 0x1 : 0x0);
    }), _0x1a8eb4['forEach']((_0x55ef98, _0x79d4ea) => {
        _0x55ef98['addEventListener']('click', () => {
            _0x391210(_0x79d4ea);
        });
    }), _0x2b958c['addEventListener']('keydown', function(_0x96a409) {
        if ('ArrowLeft' === _0x96a409['key']) _0x96a409['preventDefault'](), _0x391210(_0xe4cf9f > 0x0 ? _0xe4cf9f - 0x1 : _0x3bbc12['length'] - 0x1);
        else 'ArrowRight' === _0x96a409['key'] && (_0x96a409['preventDefault'](), _0x391210(_0xe4cf9f < _0x3bbc12['length'] - 0x1 ? _0xe4cf9f + 0x1 : 0x0));
    }), _0x2b958c['setAttribute']('tabindex', '0');
    let _0x18b312 = 0x0,
        _0x513b45 = 0x0,
        _0x2b2bf2 = 0x0,
        _0x569bbc = !0x1;
    const _0x4efa78 = {};
    _0x4efa78['passive'] = !0x1;
    const _0x20381e = {};
    _0x20381e['passive'] = !0x1;
    const _0x4040c3 = {};
    _0x4040c3['passive'] = !0x1, (_0x70bdb9['addEventListener']('touchstart', function(_0x4f9fdd) {
        _0x18b312 = _0x4f9fdd['touches'][0x0]['clientX'], _0x513b45 = _0x4f9fdd['touches'][0x0]['clientY'], _0x569bbc = !0x1;
    }, _0x4efa78), _0x70bdb9['addEventListener']('touchmove', function(_0xd2f982) {
        if (!_0x18b312) return;
        const _0x9f77b4 = _0xd2f982['touches'][0x0],
            _0xf4f088 = Math['abs'](_0x9f77b4['clientX'] - _0x18b312);
        _0xf4f088 > Math['abs'](_0x9f77b4['clientY'] - _0x513b45) && _0xf4f088 > 0xa && (_0x569bbc = !0x0, _0xd2f982['preventDefault']());
    }, _0x20381e), _0x70bdb9['addEventListener']('touchend', function(_0x2d5f8d) {
        if (!_0x18b312 || !_0x569bbc) return;
        _0x2b2bf2 = _0x2d5f8d['changedTouches'][0x0]['clientX'];
        const _0x43527b = _0x18b312 - _0x2b2bf2,
            _0x5011dd = window['innerWidth'] <= 0x2bc ? 0x1e : 0x32;
        if (Math['abs'](_0x43527b) > _0x5011dd) _0x43527b > 0x0 ? _0x391210(_0xe4cf9f < _0x3bbc12['length'] - 0x1 ? _0xe4cf9f + 0x1 : 0x0) : _0x391210(_0xe4cf9f > 0x0 ? _0xe4cf9f - 0x1 : _0x3bbc12['length'] - 0x1);
        _0x18b312 = 0x0, _0x2b2bf2 = 0x0, _0x569bbc = !0x1;
    }, _0x4040c3), (function() {
        const initialLoadCount = Math['min'](0x3, _0x3bbc12['length']);
        for (let _0x52ff7b = 0x0; _0x52ff7b < initialLoadCount; _0x52ff7b++) {
            const _0x3cc34c = _0x3bbc12[_0x52ff7b],
                _0x70bd27 = _0x3cc34c['querySelector']('img.lazy-load');
            _0x70bd27 && _0x70bd27['dataset']['src'] && (_0x70bd27['src'] = _0x70bd27['dataset']['src'], _0x70bd27['classList']['remove']('lazy-load'), _0x70bd27['removeAttribute']('data-src'));
            const _0x25d86d = _0x3cc34c['querySelector']('video.lazy-load');
            _0x25d86d && _0x25d86d['dataset']['src'] && (_0x25d86d['src'] = _0x25d86d['dataset']['src'], _0x25d86d['classList']['remove']('lazy-load'), _0x25d86d['removeAttribute']('data-src'), _0x25d86d['muted'] = !0x0, _0x25d86d['load']());
        }
    }()), _0x3bbc12['forEach'](_0x4f8f84 => {
        const _0x4e8c44 = _0x4f8f84['querySelector']('video');
        _0x4e8c44 && (_0x4e8c44['muted'] = !0x0);
    }));
    const _0x23f07e = _0x3bbc12[0x0];
    if (_0x23f07e && _0x23f07e['classList']['contains']('active')) {
        const _0x21b9ae = _0x23f07e['querySelector']('video');
        if (_0x21b9ae) {
            _0x21b9ae['muted'] = !0x0;
            const playPromise = _0x21b9ae['play']();
            void 0x0 !== playPromise && playPromise['catch'](() => {});
        }
    }
}

function initializeCarouselControlsFade(_0x66def9) {
    const _0x3cd0ff = _0x66def9['querySelector']('.video-controls-overlay'),
        _0x4960a2 = _0x66def9['querySelector']('.gallery-btn');
    let _0x5f0b07 = null;
    const _0x2671c9 = function() {
        document['body']['classList']['contains']('mobile-device') && _0x3cd0ff && (_0x3cd0ff['style']['opacity'] = '1', _0x5f0b07 && (clearTimeout(_0x5f0b07), _0x5f0b07 = null), _0x5f0b07 = setTimeout(() => {
            _0x3cd0ff['style']['opacity'] = '0', _0x5f0b07 = null;
        }, 0x7d0));
    };
    _0x4960a2 && _0x4960a2['addEventListener']('click', function() {
        _0x2671c9();
    }), _0x66def9 && _0x66def9['addEventListener']('click', function(_0x332273) {
        _0x332273['target']['closest']('.carousel-nav') || _0x332273['target']['closest']('.gallery-btn') || _0x2671c9();
    });
}
const _0x121de8 = {};
_0x121de8['createCarouselHTML'] = createCarouselHTML, _0x121de8['createNavigationDots'] = createNavigationDots, _0x121de8['createMobileCounter'] = createMobileCounter, _0x121de8['injectCarouselHTML'] = injectCarouselHTML, _0x121de8['initializeCarousel'] = initializeCarousel;
export default _0x121de8;