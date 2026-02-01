import {
    initializeSearch
} from './search.js';
import {
    loadProjectsOnce,
    handleSocialLinkClick
} from './youtube-utils.js';
import {
    initializeDeviceDetection
} from '../../scripts/utils/device.js';
import _0x17762c from '../../scripts/utils/appLoader.js';
import _0x4a76cf from './media-loader.js';
import _0x54024e from './carousel.js';
import {
    getMediaCountText,
    setNavigationState,
    updateAddressBar,
    resolveAssetPath
} from '../../scripts/utils/youtubeNavigation.js';
import {
    getParsedItem,
    setAndStringifyItem
} from '../../scripts/utils/domUtils.js';
import {
    navigateTo
} from './router.js';

function initializeMobileImageProtection() {
    ['selectstart', 'dragstart', 'contextmenu']['forEach'](_0x1633f2 => {
        const _0x259ece = {};
        _0x259ece['passive'] = !0x1, document['addEventListener'](_0x1633f2, _0x1ca0ac => _0x1ca0ac['preventDefault'](), _0x259ece);
    });
    let _0x595c9d = null;
    const _0x572a98 = () => {
            _0x595c9d && (clearTimeout(_0x595c9d), _0x595c9d = null);
        },
        _0x4521c6 = {};
    _0x4521c6['passive'] = !0x1;
    const _0x57a12a = {};
    _0x57a12a['passive'] = !0x1;
    const _0x490e22 = {};
    _0x490e22['passive'] = !0x1;
    const _0x49d68f = {};
    _0x49d68f['passive'] = !0x1, (document['addEventListener']('touchstart', _0x21f503 => {
        _0x572a98();
        const _0x3f8a53 = _0x21f503['target'];
        ('IMG' === _0x3f8a53['tagName'] || 'VIDEO' === _0x3f8a53['tagName'] || 'CANVAS' === _0x3f8a53['tagName'] || _0x3f8a53['style']['backgroundImage'] || _0x3f8a53['closest']('.video-player') || _0x3f8a53['closest']('.comment-avatar') || _0x3f8a53['closest']('.video-thumbnail')) && (_0x595c9d = setTimeout(() => {
            _0x21f503['preventDefault']();
        }, 0x1f4));
    }, _0x4521c6), document['addEventListener']('touchmove', _0x572a98, _0x57a12a), document['addEventListener']('touchend', _0x572a98, _0x490e22), document['addEventListener']('touchcancel', _0x572a98, _0x49d68f));
}
export function initializeVideoPage() {
    return ((async () => {
        initializeMobileImageProtection();
        const _0x5ed80d = document['querySelector']('.search-input'),
            _0x5a4c44 = document['getElementById']('search-dropdown'),
            _0x474dc1 = {};
        _0x474dc1['type'] = 'update-status-bar', _0x474dc1['text'] = 'Viewing\x20project\x20details\x20-\x20use\x20toolbar\x20to\x20go\x20back', (initializeSearch(_0x5ed80d, _0x5a4c44), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x474dc1, '*'), initializeDeviceDetection(), (function() {
            const _0x19e924 = document['querySelector']('.sidebar');
            if (!_0x19e924) return;
            _0x19e924['addEventListener']('click', function(_0x4bbd84) {
                if (!document['querySelector']('.video-content')) return;
                const _0x562669 = _0x4bbd84['target']['closest']('.nav-item');
                if (!_0x562669) return;
                const _0x31590f = _0x562669['querySelector']('.nav-text');
                if (_0x31590f) {
                    const _0x497de0 = _0x31590f['textContent']['toLowerCase']();
                    _0x4bbd84['stopImmediatePropagation'](), _0x4bbd84['preventDefault'](),
                        function(_0x26f1e6) {
                            document['querySelectorAll']('.nav-item')['forEach'](_0x419aee => {
                                const _0xcaa3 = _0x419aee['querySelector']('.nav-text');
                                _0xcaa3 && (_0xcaa3['textContent']['toLowerCase']() === _0x26f1e6['toLowerCase']() ? _0x419aee['classList']['add']('active') : _0x419aee['classList']['remove']('active'));
                            });
                        }(_0x497de0),
                        function(_0xb6105a) {
                            document['querySelectorAll']('.suggested-video')['forEach'](_0x2b1fa1 => {
                                const _0xdd7fec = JSON['parse'](_0x2b1fa1['dataset']['projectData']);
                                let _0x1fc945 = !0x1;
                                switch (_0xb6105a['toLowerCase']()) {
                                    case 'all':
                                    default:
                                        _0x1fc945 = !0x0;
                                        break;
                                    case 'image':
                                        _0x1fc945 = 'Image' === _0xdd7fec['category'];
                                        break;
                                    case 'video':
                                        _0x1fc945 = 'Video' === _0xdd7fec['category'];
                                        break;
                                    case 'web':
                                        _0x1fc945 = 'Web' === _0xdd7fec['category'];
                                        break;
                                    case 'client':
                                        _0x1fc945 = 'client' === _0xdd7fec['workType'];
                                        break;
                                    case 'personal':
                                        _0x1fc945 = 'personal' === _0xdd7fec['workType'];
                                }
                                _0x1fc945 ? _0x2b1fa1['classList']['remove']('dimmed') : _0x2b1fa1['classList']['add']('dimmed');
                            });
                        }(_0x497de0);
                }
            }, !0x0);
        }()), document['addEventListener']('click', function(_0x1967ce) {
            if (document['querySelector']('.video-content') && !_0x1967ce['target']['closest']('.nav-item')) {
                const _0x363696 = document['querySelectorAll']('.nav-item');
                _0x363696['forEach'](_0x5d41f4 => _0x5d41f4['classList']['remove']('active')), _0x363696['forEach'](_0x46cbf9 => {
                    const _0x177ee7 = _0x46cbf9['querySelector']('.nav-text');
                    _0x177ee7 && 'all' === _0x177ee7['textContent']['toLowerCase']() && _0x46cbf9['classList']['add']('active');
                }), document['querySelectorAll']('.suggested-video')['forEach'](_0x5b2419 => {
                    _0x5b2419['classList']['remove']('dimmed');
                });
            }
        }), (function() {
            const _0x4a270a = document['querySelector']('.logo-img');
            if (!_0x4a270a) return;
            _0x4a270a['addEventListener']('click', function() {
                document['querySelector']('.video-content') &&
                    import ('./router.js')['then'](({
                        navigateTo: _0x113b17
                    }) => {
                        _0x113b17('/');
                    });
            }), _0x4a270a['style']['cursor'] = 'pointer';
        }()), setNavigationState(!0x0, !0x1));
        const addressBarElement = window['parent'] ?.['document'] ?.['querySelector']('#projects-window\x20.addressbar');
        let _0x22bf7e = null;
        if (addressBarElement) {
            const _0x59af0e = addressBarElement['querySelector']('.address-bar-progress');
            _0x59af0e && _0x59af0e['remove'](), _0x22bf7e = new _0x17762c('projects-video', addressBarElement, () => {
                const _0x168df4 = {};
                _0x168df4['type'] = 'app-fully-loaded', _0x168df4['appId'] = 'projects-window', window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x168df4, '*');
            }), _0x22bf7e['startLoading'](0x5);
        }
        const _0x363443 = getParsedItem('currentVideo');
        if (_0x363443) {
            document['getElementById']('video-title')['textContent'] = _0x363443['title'];
            const _0x110bca = document['getElementById']('video-title');
            if (_0x110bca && _0x363443['project'] && _0x363443['project']['role'] && 'client' === _0x363443['project']['workType']) {
                const _0x16400c = document['createElement']('div');
                _0x16400c['className'] = 'video-role', _0x16400c['textContent'] = 'Role:\x20' + _0x363443['project']['role'], _0x110bca['appendChild'](_0x16400c);
            }
            if (_0x363443['project'] && _0x363443['project']['workType']) {
                const _0x205f7c = document['querySelector']('.video-title-section');
                if (_0x205f7c) {
                    const _0x20a416 = document['createElement']('div');
                    _0x20a416['className'] = 'video-profile-picture';
                    const _0x1d5604 = 'client' === _0x363443['project']['workType'] ? 'ppclient.webp' : 'pppersonal.webp',
                        _0x27abb5 = document['createElement']('img');
                    _0x27abb5['src'] = resolveAssetPath('assets/apps/projects/icons/' + _0x1d5604), _0x27abb5['alt'] = _0x363443['project']['workType'] + '\x20project\x20profile', _0x27abb5['width'] = 0x28, _0x27abb5['height'] = 0x28, _0x20a416['appendChild'](_0x27abb5), _0x205f7c['insertBefore'](_0x20a416, _0x205f7c['firstChild']);
                }
            }
            updateAddressBar(_0x363443['title']);
            const _0x48fe4e = _0x363443['views']['includes']('|') ? _0x363443['views']['split']('|')[0x1]['trim']() : _0x363443['views'],
                _0x53512d = document['querySelector']('.video-tags');
            if (_0x53512d && _0x48fe4e['includes']('•')) {
                const [_0x3773e7, _0x15d89f] = _0x48fe4e['split']('•')['map'](_0x124163 => _0x124163['trim']()), _0x41f000 = _0x3773e7['toLowerCase']()['includes']('client') ? 'client' : _0x3773e7['toLowerCase']()['includes']('personal') ? 'personal' : _0x3773e7['toLowerCase']();
                _0x53512d['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tag-bubble\x20work-type\x20clickable-tag\x22\x20data-filter=\x22' + _0x41f000 + '\x22>' + _0x3773e7 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tag-bubble\x20category\x20clickable-tag\x22\x20data-filter=\x22' + _0x15d89f + '\x22>' + _0x15d89f + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', (function() {
                    const _0x20e6e3 = document['querySelectorAll']('.clickable-tag');
                    _0x20e6e3['forEach'](_0x64f7a1 => {
                        _0x64f7a1['addEventListener']('click', function() {
                            var _0x1a3139;
                            _0x1a3139 = this['getAttribute']('data-filter'), document['querySelectorAll']('.nav-item')['forEach'](_0x30afe3 => {
                                const _0x24a2d0 = _0x30afe3['querySelector']('.nav-text');
                                _0x24a2d0 && (_0x24a2d0['textContent']['toLowerCase']() === _0x1a3139['toLowerCase']() ? _0x30afe3['classList']['add']('active') : _0x30afe3['classList']['remove']('active'));
                            }), _0x20e6e3['forEach'](_0x545009 => _0x545009['classList']['remove']('active')), this['classList']['add']('active');
                        });
                    });
                }());
            } else document['getElementById']('view-count')['textContent'] = _0x48fe4e;
            const _0x1a60f5 = document['getElementById']('main-video');
            _0x1a60f5['poster'] = _0x363443['thumbnail'], _0x1a60f5['volume'] = 0.2;
            const _0x341467 = document['querySelector']('.add-comment\x20.comment-avatar\x20img');
            _0x341467 && (_0x341467['src'] = resolveAssetPath('assets/apps/projects/icons/guest.webp'));
            const _0x49d06b = await loadProjectsOnce(_0x22bf7e);
            await async function(_0xed2bf6, _0x2146e0, _0x564eb6) {
                try {
                    if (_0x2146e0 && _0x2146e0['setProgress'](0x28), !_0x564eb6) throw new Error('Projects\x20not\x20loaded');
                    const _0x2a9f37 = _0x564eb6['find'](_0x2b8e6a => _0x2b8e6a['title'] === _0xed2bf6);
                    if (_0x2a9f37) {
                        const _0x1a5f13 = document['getElementById']('description-preview');
                        if (_0x1a5f13) {
                            let _0x289637 = '';
                            if (_0x289637 += '<div\x20class=\x22project-details\x22>', _0x2a9f37['brief'] && (_0x289637 += '<div\x20class=\x22detail-item\x22><span\x20class=\x22detail-label\x22>Brief:</span><span\x20class=\x22detail-content\x22>' + _0x2a9f37['brief'] + '</span></div>'), _0x2a9f37['client'] && (_0x289637 += '<div\x20class=\x22detail-item\x22><span\x20class=\x22detail-label\x22>Client:</span><span\x20class=\x22detail-content\x22>' + _0x2a9f37['client'] + '</span></div>'), _0x2a9f37['keyFeatures'] && _0x2a9f37['keyFeatures']['length'] > 0x0 && (_0x289637 += '<div\x20class=\x22detail-item\x22><span\x20class=\x22detail-label\x22>Key\x20Features:</span><span\x20class=\x22detail-content\x22>' + _0x2a9f37['keyFeatures']['join'](',\x20') + '</span></div>'), _0x289637 += '</div>', _0x2a9f37['description']) {
                                const _0x169dae = document['body']['classList']['contains']('mobile-device') ? 'Description:' : 'Desc:',
                                    _0x28bf16 = _0x2a9f37['description']['replace'](/<br><br>/g, '\x20');
                                _0x289637 += '<div\x20class=\x22detail-item\x20description-item\x22><span\x20class=\x22detail-label\x22>' + _0x169dae + '</span><div\x20class=\x22detail-content\x20description-text\x22>' + (_0x28bf16['length'] > 0x96 ? _0x28bf16['substring'](0x0, 0x96) + '...' : _0x28bf16) + '</div></div>';
                            } else {
                                if (_0x2a9f37['subtitle']) {
                                    const _0x2d3758 = document['body']['classList']['contains']('mobile-device') ? 'Description:' : 'Desc:',
                                        _0x381a3d = _0x2a9f37['subtitle']['replace'](/<br><br>/g, '\x20');
                                    _0x289637 += '<div\x20class=\x22detail-item\x20description-item\x22><span\x20class=\x22detail-label\x22>' + _0x2d3758 + '</span><div\x20class=\x22detail-content\x20description-text\x22>' + (_0x381a3d['length'] > 0x96 ? _0x381a3d['substring'](0x0, 0x96) + '...' : _0x381a3d) + '</div></div>';
                                }
                            }
                            _0x1a5f13['innerHTML'] = _0x289637, _0x2a9f37['description'] ? _0x1a5f13['dataset']['fullDescription'] = _0x2a9f37['description'] : _0x2a9f37['subtitle'] && (_0x1a5f13['dataset']['fullDescription'] = _0x2a9f37['subtitle']);
                        }! function(_0x13e67e) {
                            const _0xed7549 = {};
                            _0xed7549['text'] = 'Nice\x20clean\x20layout', _0xed7549['user'] = 'DevGuy92', _0xed7549['likes'] = [0x8, 0xf, 0x4, 0xc];
                            const _0x20f8ec = {};
                            _0x20f8ec['text'] = 'Works\x20well\x20on\x20mobile\x20from\x20what\x20I\x20can\x20see', _0x20f8ec['user'] = 'sarah_codes', _0x20f8ec['likes'] = [0x6, 0xb, 0x9, 0x12];
                            const _0x4b5fd0 = {};
                            _0x4b5fd0['text'] = 'Solid\x20color\x20choices', _0x4b5fd0['user'] = 'DesignNerd', _0x4b5fd0['likes'] = [0x3, 0x7, 0xc, 0x5];
                            const _0x3d89a5 = {};
                            _0x3d89a5['text'] = 'Pretty\x20standard\x20approach\x20but\x20it\x20works', _0x3d89a5['user'] = 'webdev_tom', _0x3d89a5['likes'] = [0xe, 0x9, 0x6, 0x15];
                            const _0x20b4cd = {};
                            _0x20b4cd['text'] = 'Good\x20composition\x20here', _0x20b4cd['user'] = 'PixelPusher', _0x20b4cd['likes'] = [0xc, 0x8, 0x10, 0x4];
                            const _0x2af218 = {};
                            _0x2af218['text'] = 'The\x20colors\x20work\x20well\x20together', _0x2af218['user'] = 'artlover23', _0x2af218['likes'] = [0x9, 0x13, 0x5, 0xd];
                            const _0x217516 = {};
                            _0x217516['text'] = 'Meets\x20the\x20brief\x20from\x20what\x20I\x20can\x20tell', _0x217516['user'] = 'CreativeMind', _0x217516['likes'] = [0x7, 0x4, 0xb, 0x8];
                            const _0x69d7e8 = {};
                            _0x69d7e8['text'] = 'Decent\x20work\x20overall', _0x69d7e8['user'] = 'visual_vibes', _0x69d7e8['likes'] = [0x5, 0x16, 0x9, 0x10];
                            const _0x4c727c = {};
                            _0x4c727c['text'] = 'Good\x20pacing\x20throughout', _0x4c727c['user'] = 'VideoEditor99', _0x4c727c['likes'] = [0xb, 0x6, 0xe, 0x7];
                            const _0x60cf62 = {};
                            _0x60cf62['text'] = 'Smooth\x20transitions', _0x60cf62['user'] = 'FilmStudent', _0x60cf62['likes'] = [0x8, 0x11, 0x3, 0xc];
                            const _0x34c19a = {};
                            _0x34c19a['text'] = 'Editing\x20flows\x20nicely', _0x34c19a['user'] = 'motionGFX', _0x34c19a['likes'] = [0x4, 0x9, 0x13, 0x6];
                            const _0x1b63d5 = {};
                            _0x1b63d5['text'] = 'Decent\x20production\x20value', _0x1b63d5['user'] = 'ContentCreator', _0x1b63d5['likes'] = [0xf, 0x5, 0x8, 0x14];
                            const _0x3df426 = {};
                            _0x3df426['web'] = [_0xed7549, _0x20f8ec, _0x4b5fd0, _0x3d89a5], _0x3df426['image'] = [_0x20b4cd, _0x2af218, _0x217516, _0x69d7e8], _0x3df426['video'] = [_0x4c727c, _0x60cf62, _0x34c19a, _0x1b63d5];
                            const _0x865dc0 = {};
                            _0x865dc0['text'] = 'Looks\x20like\x20it\x20hit\x20the\x20client\x20requirements', _0x865dc0['user'] = 'freelancer_life', _0x865dc0['likes'] = [0x6, 0xd, 0x8, 0x4];
                            const _0x13fc82 = {};
                            _0x13fc82['text'] = 'Client\x20work\x20can\x20be\x20tricky\x20but\x20this\x20seems\x20solid', _0x13fc82['user'] = 'AgencyWorker', _0x13fc82['likes'] = [0x9, 0x7, 0xf, 0xb];
                            const _0x507170 = {};
                            _0x507170['text'] = 'Always\x20nice\x20to\x20see\x20side\x20projects', _0x507170['user'] = 'WeekendWarrior', _0x507170['likes'] = [0xc, 0x4, 0x7, 0x10];
                            const _0x16642c = {};
                            _0x16642c['text'] = 'Personal\x20work\x20hits\x20different', _0x16642c['user'] = 'hobby_dev', _0x16642c['likes'] = [0x5, 0x12, 0x9, 0x3];
                            const _0x4f4443 = {};
                            _0x4f4443['client'] = [_0x865dc0, _0x13fc82], _0x4f4443['personal'] = [_0x507170, _0x16642c];
                            const _0x46fff7 = _0x3df426,
                                _0x571c00 = _0x4f4443,
                                _0xfbed77 = _0x13e67e['category'] ? _0x13e67e['category']['toLowerCase']() : 'web',
                                _0x1fa75a = _0x13e67e['workType'] || 'personal',
                                _0x20a72e = _0x46fff7[_0xfbed77] || _0x46fff7['web'],
                                _0x177abe = _0x571c00[_0x1fa75a] || [],
                                _0x224e1e = [..._0x20a72e, ..._0x177abe]['sort'](() => Math['random']() - 0.5)['slice'](0x0, 0x2),
                                _0x11a2f9 = 0x2,
                                _0x50146c = document['querySelector']('.comment-count');
                            _0x50146c && (_0x50146c['textContent'] = _0x11a2f9 + '\x20Comments'), document['querySelectorAll']('.comment')['forEach']((_0x418dfb, _0xa337be) => {
                                if (_0x224e1e[_0xa337be]) {
                                    const _0x3b3b6c = _0x418dfb['querySelector']('.comment-author'),
                                        _0x253abf = _0x418dfb['querySelector']('.comment-text'),
                                        _0xa9a220 = _0x418dfb['querySelector']('.comment-action');
                                    if (_0x3b3b6c && (_0x3b3b6c['textContent'] = '@' + _0x224e1e[_0xa337be]['user']), _0x253abf && (_0x253abf['textContent'] = _0x224e1e[_0xa337be]['text']), _0xa9a220 && _0xa9a220['textContent']['includes']('👍')) {
                                        const _0x32afb3 = _0x224e1e[_0xa337be]['likes'][_0xa337be] || _0x224e1e[_0xa337be]['likes'][0x0];
                                        _0xa9a220['textContent'] = '👍\x20' + _0x32afb3;
                                    }
                                }
                            });
                        }(_0x2a9f37), await loadProjectMedia(_0x2a9f37),
                            function(_0x51d786) {
                                const _0x31a0ce = document['getElementById']('gallery-btn'),
                                    _0x4a7d2e = document['getElementById']('media-player-btn'),
                                    _0x55f8d2 = document['getElementById']('mute-btn'),
                                    _0x5088be = function(_0x2e9d4e) {
                                        if (!_0x2e9d4e || !_0x2e9d4e['media'] || !Array['isArray'](_0x2e9d4e['media'])) return !0x1;
                                        const _0x2383a4 = /\.(webp|png|jpe?g|gif|avif)$/i;
                                        return _0x2e9d4e['media']['some'](_0x263d80 => _0x263d80 ?.['src'] && _0x2383a4['test'](_0x263d80['src']));
                                    }(_0x51d786),
                                    _0x5cff24 = 'video' === _0x51d786 ?.['type'] && function(_0x3026b0) {
                                        if (!_0x3026b0 || !_0x3026b0['media'] || !Array['isArray'](_0x3026b0['media'])) return !0x1;
                                        const _0x1c46d1 = /\.(mp4|webm|avi|mov)$/i;
                                        return _0x3026b0['media']['some'](_0x174d72 => _0x174d72 ?.['src'] && _0x1c46d1['test'](_0x174d72['src']));
                                    }(_0x51d786),
                                    _0x432905 = _0x51d786['headerButton'] ?.['enabled'] && _0x51d786['headerButton'] ?.['url'],
                                    _0x32cc24 = _0x51d786['headerButton'] ?.['enabled'] && _0x51d786['headerButton'] ?.['programName'],
                                    _0x38c583 = _0x51d786['headerButton'] ?.['enabled'] && 'openMediaPlayer' === _0x51d786['headerButton'] ?.['action'];
                                if (_0x31a0ce) {
                                    if (!_0x5088be || _0x432905 || _0x32cc24) _0x31a0ce['style']['display'] = 'none';
                                    else {
                                        _0x31a0ce['style']['display'] = 'flex';
                                        const _0x5291ee = _0x31a0ce['cloneNode'](!0x0);
                                        _0x31a0ce['parentNode']['replaceChild'](_0x5291ee, _0x31a0ce), _0x5291ee['addEventListener']('click', function(_0xc13271) {
                                            const _0x575987 = {};
                                            _0x575987['type'] = 'open-program', _0x575987['programName'] = 'image-viewer', _0x575987['initialIndex'] = 0x0, _0x575987['projectTitle'] = _0x51d786['title'], (_0xc13271['stopPropagation'](), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x575987, '*'));
                                        });
                                    }
                                }
                                if (_0x4a7d2e) {
                                    if (_0x432905 || _0x32cc24 || _0x5cff24 || _0x38c583) {
                                        _0x4a7d2e['style']['display'] = 'flex';
                                        const _0x4f47c3 = _0x4a7d2e['cloneNode'](!0x0);
                                        (_0x432905 || _0x32cc24) && _0x51d786['headerButton'] ?.['tooltip'] && _0x4f47c3['setAttribute']('title', _0x51d786['headerButton']['tooltip']), _0x4a7d2e['parentNode']['replaceChild'](_0x4f47c3, _0x4a7d2e), _0x32cc24 ? _0x4f47c3['addEventListener']('click', function(_0x1240c3) {
                                            const _0x3fa304 = {};
                                            _0x3fa304['type'] = 'open-program', _0x3fa304['programName'] = _0x51d786['headerButton']['programName'], (_0x1240c3['stopPropagation'](), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x3fa304, '*'));
                                        }) : _0x432905 ? _0x4f47c3['addEventListener']('click', function(_0xb59d15) {
                                            const _0x596bab = {};
                                            _0x596bab['type'] = 'confirm-open-link', _0x596bab['url'] = _0x51d786['headerButton']['url'], _0x596bab['label'] = _0x51d786['headerButton']['label'] || _0x51d786['title'], (_0xb59d15['stopPropagation'](), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x596bab, '*'));
                                        }) : _0x4f47c3['addEventListener']('click', function(_0x4cb118) {
                                            const _0x4dce93 = {};
                                            _0x4dce93['type'] = 'open-program', _0x4dce93['programName'] = 'mediaPlayer', (_0x4cb118['stopPropagation'](), window['parent'] && window['parent'] !== window && window['parent']['postMessage'](_0x4dce93, '*'));
                                        });
                                    } else _0x4a7d2e['style']['display'] = 'none';
                                }
                                _0x55f8d2 && (_0x55f8d2['style']['display'] = 'none', setTimeout(async () => {
                                    await _0x30732c();
                                }, 0x64));
                            }(_0x2a9f37), _0x2146e0 && _0x2146e0['setProgress'](0x32);
                    }
                } catch (_0x53c962) {}
            }(_0x363443['title'], _0x22bf7e, _0x49d06b);
            let _0x2ad77c = document['querySelector']('.suggested-video-list');
            if (!_0x2ad77c) {
                const parentContainer = document['querySelector']('.suggested-videos');
                parentContainer && (_0x2ad77c = document['createElement']('div'), _0x2ad77c['className'] = 'suggested-video-list', _0x2ad77c['id'] = 'suggested-videos', parentContainer['appendChild'](_0x2ad77c));
            }
            const _0x4a67f1 = _0x49d06b['filter'](_0x56b0cb => _0x56b0cb['media'] && Array['isArray'](_0x56b0cb['media']) && _0x56b0cb['media']['length'] > 0x0 && _0x56b0cb['title'] && '' !== _0x56b0cb['title']['trim']()),
                _0x5ed28a = _0x363443['title'],
                _0x33011e = _0x4a67f1['filter'](_0x3aa876 => _0x3aa876['title'] !== _0x5ed28a),
                _0x1e243e = _0x33011e['slice'](0x0, 0x3)['map'](_0x3b0605 => ({
                    'url': resolveAssetPath(_0x3b0605['src'] || (_0x3b0605['media'] && _0x3b0605['media'][0x0] ? _0x3b0605['media'][0x0]['src'] : '')),
                    'type': 'image'
                }));
            _0x22bf7e && _0x1e243e['length'] > 0x0 ? await _0x22bf7e['loadAssets'](_0x1e243e, 0x3c, 0x4b) : _0x22bf7e && _0x22bf7e['setProgress'](0x4b);
            const _0x5ec2b7 = document['querySelector']('.suggested-video-list');
            if (_0x5ec2b7 && _0x33011e['length'] > 0x0) {
                _0x33011e['slice'](0x0, 0x3)['forEach'](_0x217692 => {
                    const _0x1c3994 = _0x217692['src'] || (_0x217692['media'] && _0x217692['media'][0x0] ? _0x217692['media'][0x0]['src'] : ''),
                        _0x16c0e8 = resolveAssetPath(_0x1c3994),
                        _0x15184f = getMediaCountText(_0x217692),
                        _0x29e1ff = _0x217692['workType'] ? _0x217692['workType']['charAt'](0x0)['toUpperCase']() + _0x217692['workType']['slice'](0x1) + '\x20Work' : 'Personal\x20Work',
                        _0x3f21fd = _0x217692['category'] || 'Web',
                        _0x440c55 = document['createElement']('div');
                    _0x440c55['className'] = 'suggested-video', _0x440c55['dataset']['projectData'] = JSON['stringify'](_0x217692), _0x440c55['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22suggested-thumbnail\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x16c0e8 + '\x22\x20alt=\x22' + (_0x217692['alt'] || _0x217692['title']) + '\x22\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22duration\x22>' + _0x15184f + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22suggested-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22suggested-title\x22>' + _0x217692['title'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22suggested-channel\x22>' + _0x29e1ff + '\x20•\x20' + _0x3f21fd + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x440c55['addEventListener']('click', function() {
                        const _0x341a42 = JSON['parse'](this['dataset']['projectData']),
                            _0x180900 = {
                                'title': _0x341a42['title'],
                                'channel': _0x341a42['workType'] ? _0x341a42['workType']['charAt'](0x0)['toUpperCase']() + _0x341a42['workType']['slice'](0x1) + '\x20Work\x20•\x20' + _0x341a42['category'] : 'Personal\x20Work\x20•\x20' + _0x341a42['category'],
                                'thumbnail': resolveAssetPath(_0x341a42['src'] || _0x341a42['media'][0x0]['src']),
                                'views': getMediaCountText(_0x341a42) + '\x20|\x20' + (_0x341a42['workType'] ? _0x341a42['workType']['charAt'](0x0)['toUpperCase']() + _0x341a42['workType']['slice'](0x1) + '\x20Work\x20•\x20' + _0x341a42['category'] : 'Personal\x20Work\x20•\x20' + _0x341a42['category']),
                                'project': _0x341a42
                            };
                        setAndStringifyItem('currentVideo', _0x180900), navigateTo('/video');
                    }), _0x5ec2b7['appendChild'](_0x440c55);
                });
                const _0x35bccd = document['getElementById']('next-project-btn'),
                    _0x3e686d = document['querySelector']('.next-project-btn');
                if (_0x35bccd && _0x33011e['length'] > 0x0) {
                    if (!_0x35bccd['querySelector']('span')) {
                        const _0x4bc065 = document['createElement']('span');
                        _0x4bc065['textContent'] = 'Next\x20Project', _0x35bccd['appendChild'](_0x4bc065);
                    }
                    const _0x3ad943 = _0x33011e[0x0];
                    _0x35bccd['addEventListener']('click', function(_0x593c0a) {
                        _0x593c0a['preventDefault']();
                        const _0x349e19 = {
                            'title': _0x3ad943['title'],
                            'channel': _0x3ad943['workType'] ? _0x3ad943['workType']['charAt'](0x0)['toUpperCase']() + _0x3ad943['workType']['slice'](0x1) + '\x20Work\x20•\x20' + _0x3ad943['category'] : 'Personal\x20Work\x20•\x20' + _0x3ad943['category'],
                            'thumbnail': resolveAssetPath(_0x3ad943['src'] || _0x3ad943['media'][0x0]['src']),
                            'views': getMediaCountText(_0x3ad943)
                        };
                        setAndStringifyItem('currentVideo', _0x349e19), navigateTo('/video');
                    }), _0x3e686d && _0x3e686d !== _0x35bccd && _0x3e686d['addEventListener']('click', function(_0xe58195) {
                        _0xe58195['preventDefault']();
                        const _0x179015 = {
                            'title': _0x3ad943['title'],
                            'channel': _0x3ad943['workType'] ? _0x3ad943['workType']['charAt'](0x0)['toUpperCase']() + _0x3ad943['workType']['slice'](0x1) + '\x20Work\x20•\x20' + _0x3ad943['category'] : 'Personal\x20Work\x20•\x20' + _0x3ad943['category'],
                            'thumbnail': resolveAssetPath(_0x3ad943['src'] || _0x3ad943['media'][0x0]['src']),
                            'views': getMediaCountText(_0x3ad943)
                        };
                        setAndStringifyItem('currentVideo', _0x179015), navigateTo('/video');
                    });
                }
            }
            if (_0x22bf7e && _0x22bf7e['setProgress'](0x4b), !_0x22bf7e) return document['body']['classList']['remove']('page-loading'), void document['body']['classList']['add']('page-loaded');
            document['body']['classList']['remove']('page-loading'), document['body']['classList']['add']('page-loaded'), _0x22bf7e['setProgress'](0x5f), setTimeout(() => {
                _0x22bf7e && 'function' == typeof _0x22bf7e['complete'] && _0x22bf7e['complete']();
            }, 0x12c);
            const _0x2de33a = document['querySelector']('.comment-count');
            async function loadProjectMedia(_0x4eaa18) {
                try {
                    const _0x49ccac = document['querySelector']('.video-player');
                    if (!_0x49ccac) return;
                    if (_0x4a76cf['shouldShowCarousel'](_0x4eaa18)) {
                        const _0x42db8d = _0x4a76cf['getMediaItems'](_0x4eaa18);
                        if (_0x42db8d['length'] > 0x0) {
                            const _0x4132f5 = _0x42db8d['map'](_0x577d07 => ({
                                'url': _0x577d07['src'],
                                'type': _0x577d07['type'] || 'image'
                            }));
                            _0x22bf7e && await _0x22bf7e['loadAssets'](_0x4132f5, 0x32, 0x3c);
                            const _0x580c88 = _0x54024e['createCarouselHTML'](_0x42db8d);
                            if (_0x54024e['injectCarouselHTML'](_0x49ccac, _0x580c88), _0x42db8d['length'] > 0x1) {
                                const _0x37483f = _0x54024e['createNavigationDots'](_0x42db8d),
                                    _0x52694d = _0x54024e['createMobileCounter'](_0x42db8d),
                                    _0xcd4a64 = document['querySelector']('.video-meta-center');
                                _0xcd4a64 && _0x37483f && (_0xcd4a64['innerHTML'] = _0x37483f, _0x52694d && (_0xcd4a64['innerHTML'] += _0x52694d), _0x54024e['initializeCarousel'](_0x49ccac));
                            } else _0x54024e['initializeCarousel'](_0x49ccac);
                        }
                    } else {
                        if (_0x4a76cf['shouldShowVideo'](_0x4eaa18)) {
                            const _0x1f4a77 = _0x4a76cf['getPrimaryVideoSource'](_0x4eaa18);
                            if (_0x1f4a77) {
                                _0x49ccac['dataset']['originalContent'] && (_0x49ccac['innerHTML'] = _0x49ccac['dataset']['originalContent']);
                                const _0x40e81f = _0x49ccac['querySelector']('video'),
                                    _0x1b73a1 = _0x49ccac['querySelector']('source');
                                _0x40e81f && _0x1b73a1 && (_0x1b73a1['src'] = _0x1f4a77['src'], _0x1b73a1['type'] = _0x1f4a77['type'], _0x1f4a77['poster'] ? _0x40e81f['poster'] = _0x1f4a77['poster'] : _0x4eaa18['poster'] && (_0x40e81f['poster'] = resolveAssetPath(_0x4eaa18['poster'])), _0x40e81f['autoplay'] = !0x0, _0x40e81f['muted'] = !0x0, _0x40e81f['playsInline'] = !0x0, _0x40e81f['loop'] = !0x0, _0x40e81f['load'](), _0x22bf7e && _0x22bf7e['setProgress'](0x3c), _0x40e81f['addEventListener']('loadedmetadata', async () => {
                                    await _0x30732c();
                                    const playPromise = _0x40e81f['play']();
                                    void 0x0 !== playPromise && playPromise['catch'](() => {});
                                }));
                            }
                        }
                    }
                } catch {
                    try {
                        const _0x35f79b = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22media-error\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22error-icon\x22>⚠</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22error-message\x22>Media\x20could\x20not\x20be\x20loaded</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22error-details\x22>Please\x20check\x20your\x20connection\x20and\x20try\x20again</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                            _0x1e6df6 = document['querySelector']('.video-container');
                        _0x1e6df6 && (_0x1e6df6['innerHTML'] = _0x35f79b);
                    } catch (_0x3de9d5) {}
                }
            }

            function _0x2c3b4d(_0x3429fa) {
                if (!_0x3429fa) return !0x1;
                if (_0x3429fa['audioTracks']) return _0x3429fa['audioTracks']['length'] > 0x0;
                if (void 0x0 !== _0x3429fa['mozHasAudio']) return !0x0 === _0x3429fa['mozHasAudio'];
                const _0x2829c5 = document['body']['classList']['contains']('mobile-device');
                return _0x3429fa['readyState'] >= 0x1 ? !(!_0x2829c5 || void 0x0 !== _0x3429fa['audioTracks']) && null : null;
            }

            function _0x122c61() {
                let _0x1cbfb3 = document['getElementById']('main-video');
                if (!_0x1cbfb3) {
                    const _0x5609c2 = document['querySelector']('.carousel-item.active');
                    _0x5609c2 && (_0x1cbfb3 = _0x5609c2['querySelector']('.carousel-video'));
                }
                return _0x1cbfb3;
            }
            async function _0x337270(_0x5662cb) {
                if (!_0x5662cb) return !0x1;
                const _0xf22cdf = document['body']['classList']['contains']('mobile-device');
                if (_0x5662cb['readyState'] < 0x1) return new Promise(_0x5bebed => {
                    const _0x16182a = {};
                    _0x16182a['once'] = !0x0, _0x5662cb['addEventListener']('loadedmetadata', async () => {
                        _0xf22cdf && await new Promise(_0x5ea238 => setTimeout(_0x5ea238, 0x96));
                        let _0x5b5319 = _0x2c3b4d(_0x5662cb);
                        if (_0xf22cdf && null == _0x5b5319) {
                            for (let _0x3ea3e9 = 0x0; _0x3ea3e9 < 0x3 && (await new Promise(_0x470e79 => setTimeout(_0x470e79, 0x64)), _0x5b5319 = _0x2c3b4d(_0x5662cb), null == _0x5b5319); _0x3ea3e9++);
                        }
                        _0x5bebed(!0x0 === _0x5b5319);
                    }, _0x16182a), setTimeout(() => _0x5bebed(!0x1), _0xf22cdf ? 0x1388 : 0xbb8);
                });
                if (_0xf22cdf) {
                    await new Promise(_0x55f473 => setTimeout(_0x55f473, 0x96));
                    let _0x5d6867 = _0x2c3b4d(_0x5662cb);
                    if (null == _0x5d6867) {
                        for (let _0x33e637 = 0x0; _0x33e637 < 0x3 && (await new Promise(_0x117ac0 => setTimeout(_0x117ac0, 0x64)), _0x5d6867 = _0x2c3b4d(_0x5662cb), null == _0x5d6867); _0x33e637++);
                    }
                    return !0x0 === _0x5d6867;
                }
                return !0x0 === _0x2c3b4d(_0x5662cb);
            }
            async function _0x30732c() {
                const _0x4d7e4c = document['getElementById']('mute-btn');
                if (!_0x4d7e4c) return;
                const _0x197f2d = _0x122c61(),
                    _0x57f8ea = document['querySelector']('.carousel-item.active');
                if (_0x57f8ea) {
                    const _0x1fb0c4 = _0x57f8ea['querySelector']('.carousel-video');
                    if (_0x57f8ea['querySelector']('.carousel-image')) return void(_0x4d7e4c['style']['display'] = 'none');
                    if (_0x1fb0c4) {
                        const _0x1f7580 = await _0x337270(_0x1fb0c4);
                        return void(_0x4d7e4c['style']['display'] = _0x1f7580 ? 'flex' : 'none');
                    }
                    _0x4d7e4c['style']['display'] = 'none';
                } else {
                    if (_0x197f2d) {
                        const _0x1d1a61 = await _0x337270(_0x197f2d);
                        _0x4d7e4c['style']['display'] = _0x1d1a61 ? 'flex' : 'none';
                    } else _0x4d7e4c['style']['display'] = 'none';
                }
            }
            await async function(_0x35a3e0) {
                try {
                    _0x35a3e0 && _0x35a3e0['setProgress'](0x50);
                    let _0x25553e = null;
                    try {
                        const _0x3293c1 = await fetch(resolveAssetPath('ui.json'));
                        _0x25553e = await _0x3293c1['json'](), _0x35a3e0 && _0x35a3e0['setProgress'](0x57), _0x25553e['mockComments'] && function(_0x1716cd) {
                            const _0x3e2761 = document['querySelector']('.comments-list'),
                                _0x298426 = getParsedItem('currentVideo', {}),
                                _0x4fe896 = _0x298426['project'];
                            let _0x51b8aa = [];
                            _0x51b8aa = _0x4fe896 && _0x4fe896['title'] && _0x1716cd[_0x4fe896['title']] ? _0x1716cd[_0x4fe896['title']] : _0x1716cd['default'] || [], (_0x51b8aa['forEach'](_0x48ca65 => {
                                let _0x2dc39c = Date['now']();
                                const _0x44ec1e = _0x48ca65['timePosted']['toLowerCase'](),
                                    _0x1dc6d6 = parseInt(_0x44ec1e, 0xa) || 0x0;
                                _0x44ec1e['includes']('day') ? _0x2dc39c -= 0x5265c00 * _0x1dc6d6 : _0x44ec1e['includes']('hour') ? _0x2dc39c -= 0x36ee80 * _0x1dc6d6 : _0x44ec1e['includes']('minute') && (_0x2dc39c -= 0xea60 * _0x1dc6d6);
                                const _0x4b83cb = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment\x22\x20data-timestamp=\x22' + _0x2dc39c + '\x22\x20data-likes=\x22' + _0x48ca65['likes'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + resolveAssetPath(_0x48ca65['avatar']) + '\x22\x20alt=\x22Commenter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-author\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22username\x22>' + _0x48ca65['username'] + '</span><span\x20class=\x22timestamp\x22>\x20•\x20' + _0x48ca65['timePosted'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-text\x22>' + _0x48ca65['text'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-action\x22><img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/l_like.webp') + '\x22\x20alt=\x22Like\x22\x20class=\x22comment-icon\x22>\x20' + _0x48ca65['likes'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-action\x22><img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/l_dislike.webp') + '\x22\x20alt=\x22Dislike\x22\x20class=\x22comment-icon\x22>\x20' + _0x48ca65['dislikes'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                                _0x3e2761['insertAdjacentHTML']('beforeend', _0x4b83cb);
                            }), _0x2c4786(), _0x4b0756('recent'));
                        }(_0x25553e['mockComments']);
                    } catch (_0xa0ae8) {}
                    let _0x2c21e5 = !0x1;
                    window['parent'] && window['parent'] !== window && window['parent']['brandingManager'] && document['querySelectorAll']('.social-btn')['forEach'](_0x46a0b7 => {
                        const _0x242c6e = _0x46a0b7['getAttribute']('data-social'),
                            _0x4f30a1 = window['parent']['brandingManager']['getBrandingValue']('socials.' + _0x242c6e);
                        if (_0x4f30a1) {
                            const _0x4da9b3 = {
                                'key': _0x242c6e,
                                'name': _0x242c6e['charAt'](0x0)['toUpperCase']() + _0x242c6e['slice'](0x1),
                                'url': _0x4f30a1,
                                'icon': 'assets/gui/start-menu/' + _0x242c6e + '.webp'
                            };
                            _0x46a0b7['addEventListener']('click', function() {
                                handleSocialLinkClick(_0x4da9b3);
                            }), _0x2c21e5 = !0x0;
                        }
                    }), !_0x2c21e5 && _0x25553e && document['querySelectorAll']('.social-btn')['forEach'](_0xb38c41 => {
                        const _0x113879 = _0xb38c41['getAttribute']('data-social'),
                            _0x4f103 = _0x25553e['socials'] ?.['find'](_0x31c0d9 => _0x31c0d9['key'] === _0x113879);
                        _0x4f103 && _0xb38c41['addEventListener']('click', function() {
                            handleSocialLinkClick(_0x4f103);
                        });
                    }), _0x35a3e0 && _0x35a3e0['setProgress'](0x5a);
                } catch (_0x46b19f) {}
            }(_0x22bf7e);
            const _0x354e73 = document['getElementById']('show-more-btn'),
                _0x14f44a = document['getElementById']('description-preview');
            let _0x8e71e5 = !0x1;
            _0x354e73['addEventListener']('click', function() {
                const _0x175b7f = _0x14f44a['querySelector']('.description-text'),
                    _0x5aaa09 = _0x14f44a['dataset']['fullDescription'];
                if (_0x5aaa09 && _0x175b7f) {
                    if (_0x8e71e5) {
                        const _0x199018 = _0x5aaa09['replace'](/<br><br>/g, '\x20'),
                            _0x1aa5da = _0x199018['length'] > 0x96 ? _0x199018['substring'](0x0, 0x96) + '...' : _0x199018;
                        _0x175b7f['innerHTML'] = _0x1aa5da, this['textContent'] = '...more', _0x8e71e5 = !0x1;
                    } else _0x175b7f['innerHTML'] = _0x5aaa09, this['textContent'] = 'Show\x20less', _0x8e71e5 = !0x0;
                }
            }), setTimeout(() => {
                _0x354e73 && _0x14f44a['dataset']['fullDescription'] && (_0x354e73['textContent'] = '...more');
            }, 0x64);
            const _0x2e578f = document['querySelector']('.comment-input'),
                _0x27dd7d = document['querySelector']('.comments-list');

            function _0x376030() {
                _0x2e578f['style']['height'] = 'auto', _0x2e578f['style']['height'] = Math['min'](_0x2e578f['scrollHeight'], 0x78) + 'px';
            }
            _0x2e578f['addEventListener']('input', _0x376030), _0x2e578f['addEventListener']('paste', () => {
                setTimeout(_0x376030, 0x0);
            });
            const _0x19d321 = getParsedItem('currentVideo', {}),
                _0x4b813d = _0x19d321['project'] ?.['title'] ?.['replace'](/\s+/g, '-')['toLowerCase']() || 'default-video',
                _0x557bce = 'youtube-comments-' + _0x4b813d;

            function addCommentToDOM(_0x48d61a, _0x1390a7, _0x3edb5f = !0x1) {
                const _0x2d87cd = _0x1c9cc6(_0x1390a7),
                    _0x5f1ddb = _0x48d61a['replace'](/\n/g, '<br>'),
                    _0x204af3 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment\x20user-comment\x22\x20data-timestamp=\x22' + _0x1390a7 + '\x22\x20data-likes=\x220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/guest.webp') + '\x22\x20alt=\x22Your\x20avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-author\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22username\x22>@Guest</span><span\x20class=\x22timestamp\x22>\x20•\x20' + _0x2d87cd + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-menu\x22\x20data-action=\x22toggle-menu\x22>⋯</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-menu-dropdown\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22menu-item\x22\x20data-action=\x22delete-comment\x22>Delete</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-text\x22>' + _0x5f1ddb + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-action\x22><img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/l_like.webp') + '\x22\x20alt=\x22Like\x22\x20class=\x22comment-icon\x22>\x200</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22comment-action\x22><img\x20src=\x22' + resolveAssetPath('assets/apps/projects/icons/l_dislike.webp') + '\x22\x20alt=\x22Dislike\x22\x20class=\x22comment-icon\x22>\x200</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                _0x27dd7d['insertAdjacentHTML']('afterbegin', _0x204af3), _0x3edb5f || (! function(_0x13351a) {
                    const _0x14675c = getParsedItem(_0x557bce, []),
                        _0x2f2b64 = {
                            'text': _0x13351a,
                            'timestamp': Date['now']()
                        };
                    _0x14675c['unshift'](_0x2f2b64), setAndStringifyItem(_0x557bce, _0x14675c);
                }(_0x48d61a), _0x2c4786());
            }

            function _0x1c9cc6(_0x2802fd) {
                const _0x4c6448 = Date['now']() - _0x2802fd,
                    _0x35f4c4 = Math['floor'](_0x4c6448 / 0xea60),
                    _0xa096ab = Math['floor'](_0x4c6448 / 0x36ee80),
                    _0x3994eb = Math['floor'](_0x4c6448 / 0x5265c00);
                return _0x35f4c4 < 0x1 ? 'just\x20now' : _0x35f4c4 < 0x3c ? _0x35f4c4 + '\x20minute' + (0x1 === _0x35f4c4 ? '' : 's') + '\x20ago' : _0xa096ab < 0x18 ? _0xa096ab + '\x20hour' + (0x1 === _0xa096ab ? '' : 's') + '\x20ago' : _0x3994eb + '\x20day' + (0x1 === _0x3994eb ? '' : 's') + '\x20ago';
            }

            function _0x2c4786() {
                if (_0x2de33a) {
                    const _0x4ad04e = document['querySelectorAll']('.user-comment')['length'] + document['querySelectorAll']('.comment:not(.user-comment)')['length'];
                    _0x2de33a['textContent'] = _0x4ad04e['toLocaleString']() + '\x20Comments';
                }
            }
            const _0x5552af = document['querySelector']('.comment-submit-btn');

            function _0x4df46f() {
                const _0x344027 = _0x2e578f['value']['trim']();
                _0x344027 && (addCommentToDOM(_0x344027, Date['now']()), _0x2e578f['value'] = '', _0x2e578f['style']['height'] = 'auto', _0x57d0d0());
            }

            function _0x57d0d0() {
                _0x2e578f['value']['trim']() ? _0x5552af['classList']['add']('active') : _0x5552af['classList']['remove']('active');
            }
            _0x2e578f['addEventListener']('keypress', function(_0x150f46) {
                'Enter' === _0x150f46['key'] && this['value']['trim']() && _0x4df46f();
            }), _0x2e578f['addEventListener']('input', _0x57d0d0), _0x5552af['addEventListener']('click', _0x4df46f), getParsedItem(_0x557bce, [])['forEach'](_0x21bf1c => {
                addCommentToDOM(_0x21bf1c['text'], _0x21bf1c['timestamp'], !0x0);
            }), _0x2c4786();
            const _0x596203 = 'youtube-votes-' + _0x4b813d;

            function _0x1ee859() {
                return getParsedItem(_0x596203, {});
            }

            function _0x4afc69(_0x3da88a, _0x2d53f5) {
                const _0x1d0cec = _0x1ee859();
                _0x1d0cec[_0x3da88a] = _0x2d53f5, setAndStringifyItem(_0x596203, _0x1d0cec);
            }

            function _0x5f2cf5(_0x4c661b) {
                return _0x4c661b['dataset']['commentId'] || (_0x4c661b['dataset']['commentId'] = 'comment-' + Date['now']() + '-' + Math['random']()['toString'](0x24)['substring'](0x2, 0xb)), _0x4c661b['dataset']['commentId'];
            }

            function _0x229d77(_0x41e327, _0x45146d, _0x1f673d = !0x1) {
                const _0xb9dde6 = parseInt(_0x41e327['textContent']['match'](/\d+/) ?.[0x0] || 0x0),
                    _0x5e0ea9 = _0x41e327['querySelector']('.comment-icon'),
                    _0x2f8886 = Math['max'](0x0, _0xb9dde6 + _0x45146d);
                let _0x41f93c;
                if ('Like' === _0x5e0ea9['alt']) {
                    _0x41f93c = resolveAssetPath(_0x1f673d ? 'assets/apps/projects/icons/l_liked.webp' : 'assets/apps/projects/icons/l_like.webp');
                    const _0x28626e = _0x41e327['closest']('.comment');
                    _0x28626e && (_0x28626e['dataset']['likes'] = _0x2f8886);
                } else 'Dislike' === _0x5e0ea9['alt'] && (_0x41f93c = resolveAssetPath(_0x1f673d ? 'assets/apps/projects/icons/l_disliked.webp' : 'assets/apps/projects/icons/l_dislike.webp'));
                _0x41e327['innerHTML'] = '<img\x20src=\x22' + _0x41f93c + '\x22\x20alt=\x22' + _0x5e0ea9['alt'] + '\x22\x20class=\x22comment-icon\x22>\x20' + _0x2f8886;
            }
            document['addEventListener']('click', function(_0x3bcc29) {
                if (_0x3bcc29['target']['closest']('.comment-action')) {
                    const _0x4c5913 = _0x3bcc29['target']['closest']('.comment-action'),
                        _0x3b86ac = _0x4c5913['querySelector']('.comment-icon'),
                        _0x5b513c = _0x4c5913['closest']('.comment'),
                        _0x528f0e = _0x5f2cf5(_0x5b513c),
                        _0x1e56b7 = _0x1ee859()[_0x528f0e];
                    if (_0x3b86ac && 'Like' === _0x3b86ac['alt']) {
                        if ('like' === _0x1e56b7) _0x229d77(_0x4c5913, -0x1, !0x1), _0x4afc69(_0x528f0e, null);
                        else(_0x229d77(_0x4c5913, 0x1, !0x0), 'dislike' === _0x1e56b7) && _0x229d77(_0x5b513c['querySelector']('.comment-action\x20img[alt=\x22Dislike\x22]')['closest']('.comment-action'), -0x1, !0x1), _0x4afc69(_0x528f0e, 'like');
                    } else {
                        if (_0x3b86ac && 'Dislike' === _0x3b86ac['alt']) {
                            if ('dislike' === _0x1e56b7) _0x229d77(_0x4c5913, -0x1, !0x1), _0x4afc69(_0x528f0e, null);
                            else(_0x229d77(_0x4c5913, 0x1, !0x0), 'like' === _0x1e56b7) && _0x229d77(_0x5b513c['querySelector']('.comment-action\x20img[alt=\x22Like\x22]')['closest']('.comment-action'), -0x1, !0x1), _0x4afc69(_0x528f0e, 'dislike');
                        }
                    }
                }
            }), document['addEventListener']('click', function() {
                document['querySelectorAll']('.comment-menu-dropdown.show,\x20.sort-dropdown.show')['forEach'](_0x45e07e => {
                    _0x45e07e['classList']['remove']('show');
                });
            });
            const _0x1a8388 = document['querySelector']('.sort-btn');

            function _0x4b0756(_0x1ba0d7) {
                const _0x1f5a93 = document['querySelector']('.comments-list'),
                    _0x470154 = Array['from'](_0x1f5a93['children']);
                _0x470154['sort']((_0x2395d8, _0x3c8200) => {
                    if ('recent' === _0x1ba0d7) {
                        const _0x382561 = _0x73766b(_0x2395d8);
                        return _0x73766b(_0x3c8200) - _0x382561;
                    }
                    if ('liked' === _0x1ba0d7) {
                        const _0x3921df = _0x25d493(_0x2395d8);
                        return _0x25d493(_0x3c8200) - _0x3921df;
                    }
                }), _0x470154['forEach'](_0x20fda3 => {
                    _0x1f5a93['appendChild'](_0x20fda3);
                });
            }

            function _0x73766b(_0x2a3555) {
                return parseInt(_0x2a3555['dataset']['timestamp'] || 0x0, 0xa);
            }

            function _0x25d493(_0x155c0d) {
                return parseInt(_0x155c0d['dataset']['likes'] || 0x0, 0xa);
            }
            if (_0x1a8388 && _0x1a8388['addEventListener']('click', _0x3a42f6 => {
                    _0x3a42f6['stopPropagation']();
                    const _0x100d1c = _0x3a42f6['currentTarget']['querySelector']('.sort-dropdown');
                    if (_0x100d1c) {
                        const _0x44df4d = _0x100d1c['classList']['contains']('show');
                        document['querySelectorAll']('.comment-menu-dropdown.show,\x20.sort-dropdown.show')['forEach'](_0x255659 => _0x255659['classList']['remove']('show')), _0x44df4d || _0x100d1c['classList']['add']('show');
                    }
                }), document['querySelectorAll']('.sort-item')['forEach'](_0x330010 => {
                    _0x330010['addEventListener']('click', _0x5b9238 => {
                        _0x5b9238['stopPropagation']();
                        const _0x26a9a9 = _0x330010['dataset']['sort'];
                        document['querySelectorAll']('.sort-item')['forEach'](_0x22feee => _0x22feee['classList']['remove']('active')), _0x330010['classList']['add']('active'), _0x330010['closest']('.sort-dropdown')['classList']['remove']('show'), _0x4b0756(_0x26a9a9);
                    });
                }), _0x27dd7d['addEventListener']('click', _0x49a2d0 => {
                    const _0x138ab7 = _0x49a2d0['target']['closest']('[data-action=\x22toggle-menu\x22]'),
                        _0xb34984 = _0x49a2d0['target']['closest']('[data-action=\x22delete-comment\x22]');
                    if (_0x138ab7) {
                        _0x49a2d0['stopPropagation']();
                        const _0x592b8c = _0x138ab7['nextElementSibling'],
                            _0x259a0a = _0x592b8c['classList']['contains']('show');
                        return document['querySelectorAll']('.comment-menu-dropdown.show,\x20.sort-dropdown.show')['forEach'](_0x13ce81 => _0x13ce81['classList']['remove']('show')), void(_0x259a0a || _0x592b8c['classList']['add']('show'));
                    }
                    if (_0xb34984) {
                        _0x49a2d0['stopPropagation']();
                        const _0x3fdf40 = _0xb34984['closest']('.comment');
                        if (_0x3fdf40) {
                            const _0x1499b3 = _0x5f2cf5(_0x3fdf40),
                                _0x96e91d = getParsedItem(_0x557bce, []),
                                _0x4aded9 = _0x3fdf40['querySelector']('.timestamp')['textContent'],
                                _0x1a089a = _0x96e91d['filter'](_0x3c649c => '\x20•\x20' + _0x1c9cc6(_0x3c649c['timestamp']) !== _0x4aded9);
                            setAndStringifyItem(_0x557bce, _0x1a089a);
                            const _0x21041d = _0x1ee859();
                            delete _0x21041d[_0x1499b3], setAndStringifyItem(_0x596203, _0x21041d), _0x3fdf40['remove'](), _0x2c4786();
                        }
                    }
                }), navigator['userAgent'] && /Chrome|Chromium|Edge|OPR|Opera|Brave/i ['test'](navigator['userAgent'])) {
                const _0x50a864 = () => {
                        window['parent'] && window['parent'] !== window && window['parent']['setRealVh'] && (window['parent']['setRealVh'](), setTimeout(() => window['parent']['setRealVh'] && window['parent']['setRealVh'](), 0x64), setTimeout(() => window['parent']['setRealVh'] && window['parent']['setRealVh'](), 0x12c), setTimeout(() => window['parent']['setRealVh'] && window['parent']['setRealVh'](), 0x1f4));
                    },
                    _0x1d43e1 = {};
                _0x1d43e1['passive'] = !0x0, (_0x5ed80d && (_0x5ed80d['addEventListener']('blur', _0x50a864), _0x5ed80d['addEventListener']('keydown', _0x56b137 => {
                    'Enter' !== _0x56b137['key'] && 'Escape' !== _0x56b137['key'] || setTimeout(_0x50a864, 0xc8);
                })), _0x2e578f && (_0x2e578f['addEventListener']('blur', _0x50a864), _0x2e578f['addEventListener']('keydown', _0x5bd9a9 => {
                    'Enter' === _0x5bd9a9['key'] && setTimeout(_0x50a864, 0xc8);
                })), document['addEventListener']('touchend', () => {
                    setTimeout(_0x50a864, 0x12c);
                }, _0x1d43e1));
            }
            document['addEventListener']('click', function(_0x57d92d) {
                if (!_0x57d92d['target']['closest']('.nav-item')) {
                    const _0x3f53e3 = document['querySelectorAll']('.nav-item');
                    _0x3f53e3['forEach'](_0x2b1098 => _0x2b1098['classList']['remove']('active')), _0x3f53e3['forEach'](_0x693af1 => {
                        const _0x5301ff = _0x693af1['querySelector']('.nav-text');
                        _0x5301ff && 'all' === _0x5301ff['textContent']['toLowerCase']() && _0x693af1['classList']['add']('active');
                    });
                }
            });
            try {
                const _0x27e61a = document['getElementById']('mute-btn'),
                    _0x37fbfe = document['querySelector']('.video-controls-overlay');
                let _0x4bc0c6 = null;
                const _0x174512 = function() {
                        if (!_0x27e61a) return;
                        const _0x147bce = _0x122c61();
                        _0x147bce && (_0x27e61a['classList']['toggle']('muted', _0x147bce['muted']), _0x27e61a['title'] = _0x147bce['muted'] ? 'Unmute' : 'Mute');
                    },
                    _0x216716 = function() {
                        document['body']['classList']['contains']('mobile-device') && _0x37fbfe && (_0x37fbfe['style']['opacity'] = '1', _0x4bc0c6 && (clearTimeout(_0x4bc0c6), _0x4bc0c6 = null), _0x4bc0c6 = setTimeout(() => {
                            _0x37fbfe['style']['opacity'] = '0', _0x4bc0c6 = null;
                        }, 0x7d0));
                    },
                    _0x34acd2 = function() {
                        if (!_0x27e61a) return;
                        const _0x401d3f = _0x122c61();
                        _0x401d3f && (_0x401d3f['muted'] = !_0x401d3f['muted'], _0x174512(), _0x216716());
                    };
                let _0xa7c6cf = _0x122c61();
                if (_0xa7c6cf && _0x27e61a) {
                    const _0xc94f5f = document['querySelector']('.video-player');
                    _0xc94f5f && _0xc94f5f['addEventListener']('click', function(_0x45b606) {
                        !_0x45b606['target']['closest']('.mute-btn') && !_0x45b606['target']['closest']('.carousel-nav') && ((_0x45b606['target']['closest']('video') || 'VIDEO' === _0x45b606['target']['tagName']) && _0x34acd2());
                    }), _0x27e61a['addEventListener']('click', function(_0x47dcc5) {
                        _0x47dcc5['stopPropagation'](), _0x34acd2();
                    });
                    const _0x5637ab = document['getElementById']('gallery-btn'),
                        _0x357fb7 = document['getElementById']('media-player-btn');
                    _0x5637ab && _0x5637ab['addEventListener']('click', function() {
                        _0x216716();
                    }), _0x357fb7 && _0x357fb7['addEventListener']('click', function() {
                        _0x216716();
                    }), setTimeout(() => {
                        _0x174512();
                    }, 0x64);
                    const _0x3d8ded = document['querySelector']('.image-carousel');
                    if (_0x3d8ded) {
                        const _0x38e50b = new WeakSet(),
                            _0x535fa6 = document['body']['classList']['contains']('mobile-device'),
                            _0x570e7e = new MutationObserver(async () => {
                                _0x174512(), await _0x30732c();
                                const _0x1eda80 = _0x122c61(),
                                    _0x1428f7 = {};
                                _0x1428f7['once'] = !0x1, _0x1eda80 && _0x1eda80['classList']['contains']('carousel-video') && !_0x38e50b['has'](_0x1eda80) && (_0x1eda80['addEventListener']('loadedmetadata', async () => {
                                    _0x535fa6 && await new Promise(_0x141fc6 => setTimeout(_0x141fc6, 0x96)), await _0x30732c(), _0x535fa6 && setTimeout(async () => {
                                        await _0x30732c();
                                    }, 0xc8);
                                }, _0x1428f7), _0x38e50b['add'](_0x1eda80));
                            }),
                            _0x42f79b = _0x3d8ded['querySelector']('.carousel-track'),
                            _0x42ac1a = {};
                        _0x42ac1a['attributes'] = !0x0, _0x42ac1a['attributeFilter'] = ['class'], _0x42ac1a['subtree'] = !0x0, _0x42ac1a['childList'] = !0x1, _0x42f79b && _0x570e7e['observe'](_0x42f79b, _0x42ac1a);
                    } else _0xa7c6cf || setTimeout(async () => {
                        _0x122c61() && _0x27e61a && (_0x174512(), await _0x30732c());
                    }, 0x1f4);
                } else _0x27e61a && setTimeout(async () => {
                    if (_0x122c61()) {
                        _0x174512(), await _0x30732c();
                        const _0x1be2e2 = document['querySelector']('.video-player');
                        _0x1be2e2 && _0x1be2e2['addEventListener']('click', function(_0x39387d) {
                            !_0x39387d['target']['closest']('.mute-btn') && !_0x39387d['target']['closest']('.carousel-nav') && ((_0x39387d['target']['closest']('video') || 'VIDEO' === _0x39387d['target']['tagName']) && _0x34acd2());
                        }), _0x27e61a['addEventListener']('click', function(_0x4706c9) {
                            _0x4706c9['stopPropagation'](), _0x34acd2();
                        });
                    }
                }, 0x1f4);
            } catch (_0xe5fa32) {}
        }
    })());
}