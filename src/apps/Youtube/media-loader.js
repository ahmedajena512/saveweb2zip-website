import {
    resolveAssetPath
} from '../../scripts/utils/youtubeNavigation.js';

function isVideoMedia(src) {
    if (!src) return !0x1;
    return /\.(mp4|webm|avi|mov|ogg|ogv)$/i ['test'](src);
}

function hasMixedMedia(_0x5a4951) {
    if (!_0x5a4951['media'] || !Array['isArray'](_0x5a4951['media'])) return !0x1;
    const _0x2a477b = _0x5a4951['media']['some'](_0x7ca5e8 => isVideoMedia(_0x7ca5e8['src'])),
        _0x36ab32 = _0x5a4951['media']['some'](_0x42b747 => !isVideoMedia(_0x42b747['src']));
    return _0x2a477b && _0x36ab32;
}

function shouldShowCarousel(_0x5771fa) {
    return ('image' === _0x5771fa['type'] || hasMixedMedia(_0x5771fa)) && _0x5771fa['media'] && Array['isArray'](_0x5771fa['media']) && _0x5771fa['media']['length'] > 0x0;
}

function shouldShowVideo(_0xfc6d71) {
    return !hasMixedMedia(_0xfc6d71) && ('video' === _0xfc6d71['type'] && _0xfc6d71['media'] && Array['isArray'](_0xfc6d71['media']) && _0xfc6d71['media']['length'] > 0x0);
}

function getMediaItems(_0x443139) {
    return _0x443139['media'] && Array['isArray'](_0x443139['media']) ? _0x443139['media']['map'](_0x53c456 => {
        const _0x325417 = isVideoMedia(_0x53c456['src']),
            _0x118fab = {
                'src': resolveAssetPath(_0x53c456['src']),
                'alt': _0x53c456['alt'] || _0x443139['title'] || (_0x325417 ? 'Project\x20Video' : 'Project\x20Image'),
                'type': _0x325417 ? 'video' : 'image'
            };
        return _0x325417 && (_0x53c456['poster'] && (_0x118fab['poster'] = resolveAssetPath(_0x53c456['poster'])), _0x118fab['mimeType'] = getVideoMimeType(_0x53c456['src'])), _0x118fab;
    }) : [];
}

function getVideoItems(_0x276d25) {
    return _0x276d25['media'] && Array['isArray'](_0x276d25['media']) ? _0x276d25['media']['map'](_0x2ced76 => ({
        'src': resolveAssetPath(_0x2ced76['src']),
        'poster': resolveAssetPath(_0x2ced76['poster']),
        'alt': _0x2ced76['alt'] || _0x276d25['title'] || 'Project\x20Video',
        'type': getVideoMimeType(_0x2ced76['src'])
    })) : [];
}

function getVideoMimeType(src) {
    if (!src) return 'video/mp4';
    switch (src['split']('.')['pop']()['toLowerCase']()) {
        case 'mp4':
        default:
            return 'video/mp4';
        case 'webm':
            return 'video/webm';
        case 'ogg':
        case 'ogv':
            return 'video/ogg';
        case 'avi':
            return 'video/avi';
        case 'mov':
            return 'video/quicktime';
    }
}

function getPrimaryVideoSource(_0x16495e) {
    const _0x4b68ac = getVideoItems(_0x16495e);
    return 0x0 === _0x4b68ac['length'] ? null : _0x4b68ac[0x0];
}
const _0xece268 = {};
_0xece268['shouldShowCarousel'] = shouldShowCarousel, _0xece268['shouldShowVideo'] = shouldShowVideo, _0xece268['getMediaItems'] = getMediaItems, _0xece268['getPrimaryVideoSource'] = getPrimaryVideoSource;
export default _0xece268;