import {
    initRouter
} from './router.js';
import {
    initializeSidebar
} from './sidebar.js';
import {
    initializeSharedEventListeners
} from './youtube-utils.js';
import {
    initYoutubeMobileDetection
} from '../../scripts/utils/youtubeDeviceDetection.js';
import {
    applyTheme
} from '../../scripts/utils/themeManager.js';
initYoutubeMobileDetection(), document['addEventListener']('DOMContentLoaded', () => {
    initRouter(), initializeSidebar(), initializeSharedEventListeners();
    const _0x3e738f = () => {
        const _0x58ed84 = window['parent'] ?.['document'] ?.['body'] ?.['classList'] ?.['contains']('light-theme');
        void 0x0 !== _0x58ed84 && applyTheme(_0x58ed84);
    };
    _0x3e738f(), document['addEventListener']('visibilitychange', () => {
        document['hidden'] || _0x3e738f();
    });
});