import {
    initializeSearch
} from './search.js';
import {
    loadProjectsOnce,
    handleSocialLinkClick
} from './youtube-utils.js';
import _0x3150c2 from '../../scripts/utils/appLoader.js';
import {
    getMediaCountText,
    setNavigationState,
    updateAddressBar,
    resolveAssetPath
} from '../../scripts/utils/youtubeNavigation.js';
import {
    setAndStringifyItem
} from '../../scripts/utils/domUtils.js';
import {
    navigateTo
} from './router.js';

function initializeMobileImageProtection() {
    ['selectstart', 'dragstart', 'contextmenu']['forEach'](_0x55f635 => {
        const _0x4bf454 = {};
        _0x4bf454['passive'] = !0x1, document['addEventListener'](_0x55f635, _0x8240a2 => _0x8240a2['preventDefault'](), _0x4bf454);
    });
    let _0x3aac27 = null;
    const _0x1f28af = () => {
            _0x3aac27 && (clearTimeout(_0x3aac27), _0x3aac27 = null);
        },
        _0x2682f5 = {};
    _0x2682f5['passive'] = !0x1;
    const _0x26deb1 = {};
    _0x26deb1['passive'] = !0x1;
    const _0x3232d9 = {};
    _0x3232d9['passive'] = !0x1;
    const _0x2bd225 = {};
    _0x2bd225['passive'] = !0x1, (document['addEventListener']('touchstart', _0x2beebb => {
        _0x1f28af();
        const _0x4679ab = _0x2beebb['target'];
        ('IMG' === _0x4679ab['tagName'] || 'VIDEO' === _0x4679ab['tagName'] || 'CANVAS' === _0x4679ab['tagName'] || _0x4679ab['style']['backgroundImage'] || _0x4679ab['closest']('.video-thumbnail') || _0x4679ab['closest']('.video-card')) && (_0x3aac27 = setTimeout(() => {
            _0x2beebb['preventDefault']();
        }, 0x1f4));
    }, _0x2682f5), document['addEventListener']('touchmove', _0x1f28af, _0x26deb1), document['addEventListener']('touchend', _0x1f28af, _0x3232d9), document['addEventListener']('touchcancel', _0x1f28af, _0x2bd225));
}
export async function initializeGalleryPage(_0x45ee05 = {}) {
    const {
        filter: _0x5681df
    } = _0x45ee05;
    initializeMobileImageProtection();
    const _0x249c3b = document['querySelector']('.search-input'),
        _0x5e8541 = document['getElementById']('search-dropdown'),
        _0x2bc9f4 = {};
    _0x2bc9f4['type'] = 'update-status-bar', _0x2bc9f4['text'] = 'Select\x20a\x20project\x20to\x20view\x20details', (initializeSearch(_0x249c3b, _0x5e8541), setNavigationState(!0x1, !0x1), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x2bc9f4, '*'));
    const addressBarElement = window['parent'] ?.['document'] ?.['querySelector']('#projects-window\x20.addressbar');
    let _0x245179 = null;
    if (addressBarElement) {
        const _0x1dc206 = addressBarElement['querySelector']('.address-bar-progress');
        _0x1dc206 && _0x1dc206['remove'](), _0x245179 = new _0x3150c2('projects', addressBarElement, () => {
            const _0x359305 = {};
            _0x359305['type'] = 'app-fully-loaded', _0x359305['appId'] = 'projects-window', window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x359305, '*');
        }), _0x245179['startLoading'](0x5);
    }
    const _0x158d47 = await loadProjectsOnce(_0x245179),
        _0xaa7f7c = _0x158d47['map'](_0x20d630 => ({
            'url': resolveAssetPath(_0x20d630['src'] || (_0x20d630['media'] && _0x20d630['media'][0x0] ? _0x20d630['media'][0x0]['src'] : '')),
            'type': 'image'
        }));

    function _0x3e03c7(_0x25d9a0) {
        document['querySelectorAll']('.video-card')['forEach']((_0x1294ca, _0x2b8786) => {
            const _0x5ac9f4 = _0x158d47[_0x2b8786];
            if (!_0x5ac9f4) return;
            let _0x52e33c = !0x1;
            switch (_0x25d9a0['toLowerCase']()) {
                case 'all':
                default:
                    _0x52e33c = !0x0;
                    break;
                case 'image':
                    _0x52e33c = 'Image' === _0x5ac9f4['category'];
                    break;
                case 'video':
                    _0x52e33c = 'Video' === _0x5ac9f4['category'];
                    break;
                case 'web':
                    _0x52e33c = 'Web' === _0x5ac9f4['category'];
                    break;
                case 'client':
                    _0x52e33c = 'client' === _0x5ac9f4['workType'];
                    break;
                case 'personal':
                    _0x52e33c = 'personal' === _0x5ac9f4['workType'];
            }
            _0x52e33c ? _0x1294ca['classList']['remove']('dimmed') : _0x1294ca['classList']['add']('dimmed');
        });
    }

    function _0x338842() {
        document['querySelectorAll']('.video-card')['forEach'](_0x132a5a => {
            _0x132a5a['classList']['remove']('dimmed');
        });
    }
    _0x245179 && _0xaa7f7c['length'] > 0x0 ? await _0x245179['loadAssets'](_0xaa7f7c, 0x23, 0x50) : _0x245179 && _0x245179['setProgress'](0x50), await async function(_0x400c50) {
        try {
            _0x400c50 && _0x400c50['setProgress'](0x50);
            let _0xbbb52c = !0x1;
            window['parent'] && window['parent'] !== window && window['parent']['brandingManager'] && document['querySelectorAll']('.social-btn')['forEach'](_0x11dc8e => {
                const _0x28d10f = _0x11dc8e['getAttribute']('data-social'),
                    _0x1533d8 = window['parent']['brandingManager']['getBrandingValue']('socials.' + _0x28d10f);
                if (_0x1533d8) {
                    const _0x266036 = {
                        'key': _0x28d10f,
                        'name': _0x28d10f['charAt'](0x0)['toUpperCase']() + _0x28d10f['slice'](0x1),
                        'url': _0x1533d8,
                        'icon': 'assets/gui/start-menu/' + _0x28d10f + '.webp'
                    };
                    _0x11dc8e['addEventListener']('click', function() {
                        handleSocialLinkClick(_0x266036);
                    }), _0xbbb52c = !0x0;
                }
            });
            if (!_0xbbb52c) {
                const _0x34ea19 = await fetch(resolveAssetPath('ui.json')),
                    _0x24580e = await _0x34ea19['json']();
                _0x400c50 && _0x400c50['setProgress'](0x5d), document['querySelectorAll']('.social-btn')['forEach'](_0x3cf9ca => {
                    const _0x1eaf28 = _0x3cf9ca['getAttribute']('data-social'),
                        _0x12d415 = _0x24580e['socials'] ?.['find'](_0x28e13a => _0x28e13a['key'] === _0x1eaf28);
                    _0x12d415 && _0x3cf9ca['addEventListener']('click', function() {
                        handleSocialLinkClick(_0x12d415);
                    });
                });
            }
            _0x400c50 && _0x400c50['setProgress'](0x5f);
        } catch (_0x2fa886) {
            _0x400c50 && _0x400c50['complete']();
        }
    }(_0x245179);
    const _0x1b51d1 = document['querySelector']('.video-grid');
    _0x1b51d1 && (_0x1b51d1['innerHTML'] = '', (_0x158d47['forEach'](function(_0x3f95c7) {
        const _0x5a7b51 = document['querySelector']('.video-grid'),
            _0x1f7600 = _0x3f95c7['src'] || (_0x3f95c7['media'] && _0x3f95c7['media'][0x0] ? _0x3f95c7['media'][0x0]['src'] : ''),
            _0x29a0ee = resolveAssetPath(_0x1f7600),
            _0x433e58 = _0x3f95c7['workType'] ? _0x3f95c7['workType']['charAt'](0x0)['toUpperCase']() + _0x3f95c7['workType']['slice'](0x1) + '\x20Work' : 'Personal\x20Work',
            _0x56535b = _0x3f95c7['category'] || 'Web',
            _0x4beebd = 'client' === _0x3f95c7['workType'] ? 'ppclient.webp' : 'pppersonal.webp',
            _0x17380e = document['createElement']('div');
        _0x17380e['className'] = 'video-card', _0x17380e['dataset']['projectData'] = JSON['stringify'](_0x3f95c7), _0x17380e['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22thumbnail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x29a0ee + '\x22\x20alt=\x22' + (_0x3f95c7['alt'] || _0x3f95c7['title']) + '\x22\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22duration\x22>' + getMediaCountText(_0x3f95c7) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22channel-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/' + _0x4beebd) + '\x22\x20alt=\x22Channel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-details\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22video-title\x22>' + _0x3f95c7['title'] + '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22channel-name\x22>' + _0x433e58 + '\x20•\x20' + _0x56535b + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x5a7b51['appendChild'](_0x17380e);
    }), document['querySelectorAll']('.video-card')['forEach'](_0x570d42 => {
        _0x570d42['addEventListener']('click', function() {
            const _0x1b5a5d = JSON['parse'](this['dataset']['projectData']),
                _0x47b166 = this['querySelector']('.video-title'),
                _0x8d7117 = this['querySelector']('.channel-name'),
                _0x3fec24 = this['querySelector']('.thumbnail\x20img'),
                _0x3a14a7 = this['querySelector']('.channel-avatar\x20img');
            if (!(_0x47b166 && _0x8d7117 && _0x3fec24 && _0x3a14a7)) return;
            const _0x74ff5 = _0x47b166['textContent'],
                _0x5306a9 = _0x8d7117['textContent'],
                _0x391a6a = _0x3fec24['src'],
                _0x314bbf = _0x3a14a7['src'],
                _0x4b545e = _0x8d7117['textContent'],
                _0x37b71d = {};
            _0x37b71d['title'] = _0x74ff5, _0x37b71d['channel'] = _0x5306a9, _0x37b71d['thumbnail'] = _0x391a6a, _0x37b71d['avatar'] = _0x314bbf, _0x37b71d['views'] = _0x4b545e, _0x37b71d['project'] = _0x1b5a5d, (setAndStringifyItem('currentVideo', _0x37b71d), navigateTo('/video'));
        });
    })));
    _0x245179 && (document['body']['classList']['remove']('page-loading'), document['body']['classList']['add']('page-loaded'), _0x245179['setProgress'](0x5f), setTimeout(() => {
        _0x245179['complete']();
    }, 0x12c)), updateAddressBar('');
    const _0x47eaeb = document['querySelector']('.sidebar');
    _0x47eaeb && _0x47eaeb['addEventListener']('click', function(_0x12a750) {
        const _0x9b7f7b = _0x12a750['target']['closest']('.nav-item');
        if (!_0x9b7f7b) return;
        const _0xcea1a8 = _0x9b7f7b['querySelector']('.nav-text');
        if (_0xcea1a8) {
            const _0x563cfa = _0xcea1a8['textContent']['toLowerCase']();
            _0x12a750['stopImmediatePropagation'](), _0x12a750['preventDefault'](), (document['querySelectorAll']('.nav-item')['forEach'](_0x43d685 => {
                const _0x4f9990 = _0x43d685['querySelector']('.nav-text');
                _0x4f9990 && (_0x4f9990['textContent']['toLowerCase']() === _0x563cfa ? _0x43d685['classList']['add']('active') : _0x43d685['classList']['remove']('active'));
            }), 'all' === _0x563cfa ? _0x338842() : _0x3e03c7(_0x563cfa));
        }
    }), document['addEventListener']('click', function(_0x38d8c6) {
        const _0x5383a7 = _0x38d8c6['target']['closest']('.nav-item'),
            _0x1faa7c = _0x38d8c6['target']['closest']('.video-card');
        if (!_0x5383a7 && !_0x1faa7c) {
            const _0x28c804 = document['querySelectorAll']('.nav-item');
            _0x28c804['forEach'](_0x5ede8b => _0x5ede8b['classList']['remove']('active')), _0x28c804['forEach'](_0x3c4b45 => {
                const _0x5865a9 = _0x3c4b45['querySelector']('.nav-text');
                _0x5865a9 && 'all' === _0x5865a9['textContent']['toLowerCase']() && _0x3c4b45['classList']['add']('active');
            }), _0x338842();
        }
    });
    const _0x50c433 = document['querySelectorAll']('.sidebar\x20.nav-item');
    let _0x20f9e9 = !0x1;
    _0x5681df && _0x50c433['forEach'](_0x1c583f => {
        const _0x708fc1 = _0x1c583f['querySelector']('.nav-text');
        _0x708fc1 && _0x708fc1['textContent']['toLowerCase']() === _0x5681df ? (_0x1c583f['classList']['add']('active'), _0x3e03c7(_0x5681df), _0x20f9e9 = !0x0) : _0x1c583f['classList']['remove']('active');
    }), _0x20f9e9 || _0x50c433['forEach'](_0x1b2ec1 => {
        const _0x2b0949 = _0x1b2ec1['querySelector']('.nav-text');
        _0x2b0949 && 'all' === _0x2b0949['textContent']['toLowerCase']() ? _0x1b2ec1['classList']['add']('active') : _0x1b2ec1['classList']['remove']('active');
    });
}