import {
    resolveAssetPath
} from '../../scripts/utils/youtubeNavigation.js';
import {
    setAndStringifyItem
} from '../../scripts/utils/domUtils.js';
import {
    navigateTo
} from './router.js';
export function initializeSearch(_0x468635, _0x212585) {
    if (_0x468635['value'] = '', _0x468635['_searchInitialized']) return;
    _0x468635['_searchInitialized'] = !0x0;
    let _0x523bfa = window['configManager'] ?.['get']('app.author') || 'Mitch\x20Ivin',
        _0x283170 = !0x1,
        _0x4074a2 = -0x1,
        _0x9a2281 = [];

    function _0x228c2d() {
        if (!window['allProjects'] || 0x0 === window['allProjects']['length']) return;
        _0x9a2281 = [], _0x212585['innerHTML'] = '';
        const _0x12548c = [],
            _0x3e81d7 = new Set();
        window['allProjects']['filter'](_0x17c10b => _0x17c10b['title'] && 'Coming\x20Soon' !== _0x17c10b['title'])['forEach'](_0x24ae2b => {
            _0x3e81d7['has'](_0x24ae2b['title']) || (_0x3e81d7['add'](_0x24ae2b['title']), _0x12548c['push'](_0x24ae2b));
        }), _0x12548c['forEach'](_0x1481db => {
            const _0x389086 = document['createElement']('div');
            _0x389086['className'] = 'search-suggestion';
            const _0x5ca2c7 = document['createElement']('div');
            _0x5ca2c7['className'] = 'suggestion-icon';
            const _0x2e91de = 'client' === _0x1481db['workType'] ? 'ppclient.webp' : 'pppersonal.webp',
                _0x36ed39 = document['createElement']('img');
            _0x36ed39['src'] = resolveAssetPath('assets/apps/projects/icons/' + _0x2e91de), _0x36ed39['alt'] = _0x1481db['workType'] + '\x20project\x20avatar', _0x5ca2c7['appendChild'](_0x36ed39);
            const _0x2861c9 = document['createElement']('div'),
                _0x4a1762 = document['createElement']('div');
            _0x4a1762['className'] = 'suggestion-text', _0x4a1762['textContent'] = _0x1481db['title'];
            const _0x526fa4 = document['createElement']('div');
            _0x526fa4['className'] = 'suggestion-subtitle';
            const _0x362d5f = _0x1481db['workType'] ? _0x1481db['workType']['charAt'](0x0)['toUpperCase']() + _0x1481db['workType']['slice'](0x1) : 'Personal',
                _0x410ded = _0x1481db['category'] || 'Web';
            _0x526fa4['textContent'] = _0x362d5f + '\x20•\x20' + _0x410ded, _0x2861c9['appendChild'](_0x4a1762), _0x2861c9['appendChild'](_0x526fa4), _0x389086['appendChild'](_0x5ca2c7), _0x389086['appendChild'](_0x2861c9), _0x389086['addEventListener']('click', function() {
                _0x468635['value'] = _0x523bfa, _0x198b45();
                const _0x10f072 = (_0x1481db['workType'] ? _0x1481db['workType']['charAt'](0x0)['toUpperCase']() + _0x1481db['workType']['slice'](0x1) : 'Personal') + '\x20•\x20' + (_0x1481db['category'] || 'Web'),
                    _0x3b3659 = _0x1481db['src'] || (_0x1481db['media'] && _0x1481db['media'][0x0] ? _0x1481db['media'][0x0]['src'] : ''),
                    _0x2e89c6 = resolveAssetPath(_0x3b3659),
                    _0x3896fd = 'client' === _0x1481db['workType'] ? 'ppclient.webp' : 'pppersonal.webp',
                    _0x21b903 = resolveAssetPath('assets/apps/projects/icons/' + _0x3896fd),
                    _0x276b24 = {
                        'title': _0x1481db['title'],
                        'channel': 'Mitch\x20Ivin',
                        'thumbnail': _0x2e89c6,
                        'avatar': _0x21b903,
                        'views': _0x10f072,
                        'project': _0x1481db
                    };
                setAndStringifyItem('currentVideo', _0x276b24), navigateTo('/video');
            }), _0x212585['appendChild'](_0x389086), _0x9a2281['push'](_0x389086);
        }), _0x9a2281['length'] > 0x0 && _0x212585['classList']['add']('show');
    }

    function _0x198b45() {
        _0x212585['classList']['remove']('show'), _0x4074a2 = -0x1, _0x9a2281['forEach'](_0x371473 => _0x371473['classList']['remove']('highlighted'));
    }

    function _0x41bd4f() {
        _0x9a2281['forEach']((_0x3c04a1, _0x101082) => {
            _0x101082 === _0x4074a2 ? _0x3c04a1['classList']['add']('highlighted') : _0x3c04a1['classList']['remove']('highlighted');
        });
    }
    _0x468635['addEventListener']('input', function() {
        if (_0x283170) return;
        const _0x484417 = this['value'],
            _0x188cb4 = _0x484417['length'];
        if (_0x188cb4 <= _0x523bfa['length']) {
            const _0x2be307 = _0x523bfa['substring'](0x0, _0x188cb4);
            _0x484417 !== _0x2be307 && (_0x283170 = !0x0, this['value'] = _0x2be307, _0x283170 = !0x1);
        } else _0x283170 = !0x0, this['value'] = _0x523bfa, _0x283170 = !0x1;
        this['value']['length'] > 0x0 ? _0x228c2d() : _0x198b45();
    }), _0x468635['addEventListener']('keydown', function(_0x5aadbb) {
        if (_0x212585['classList']['contains']('show')) {
            if ('ArrowDown' === _0x5aadbb['key']) return _0x5aadbb['preventDefault'](), _0x4074a2 = Math['min'](_0x4074a2 + 0x1, _0x9a2281['length'] - 0x1), void _0x41bd4f();
            if ('ArrowUp' === _0x5aadbb['key']) return _0x5aadbb['preventDefault'](), _0x4074a2 = Math['max'](_0x4074a2 - 0x1, -0x1), void _0x41bd4f();
            if ('Enter' === _0x5aadbb['key'] && _0x4074a2 >= 0x0) return _0x5aadbb['preventDefault'](), void _0x9a2281[_0x4074a2]['click']();
            if ('Escape' === _0x5aadbb['key']) return _0x5aadbb['preventDefault'](), void _0x198b45();
        }
        'Backspace' !== _0x5aadbb['key'] && 'Delete' !== _0x5aadbb['key'] && (this['value']['length'] < _0x523bfa['length'] ? (_0x5aadbb['preventDefault'](), _0x283170 = !0x0, this['value'] = _0x523bfa['substring'](0x0, this['value']['length'] + 0x1), this['value']['length'] > 0x0 && _0x228c2d(), _0x283170 = !0x1) : this['value']['length'] >= _0x523bfa['length'] && _0x5aadbb['preventDefault']());
    }), document['addEventListener']('click', function(_0xe375c6) {
        _0x468635['contains'](_0xe375c6['target']) || _0x212585['contains'](_0xe375c6['target']) || _0x198b45();
    }), _0x468635['addEventListener']('focus', function() {
        this['value']['length'] > 0x0 && _0x228c2d();
    }), _0x468635['addEventListener']('keypress', function(_0x28f8f8) {
        _0x28f8f8['key'];
    });
}