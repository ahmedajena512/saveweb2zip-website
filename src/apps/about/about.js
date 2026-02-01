import {
    transformAssetPath
} from '../../scripts/utils/domUtils.js';
import {
    sanitizeHTML
} from '../../scripts/utils/sanitizer.js';
import _0x5176ad from '../../scripts/utils/appLoader.js';

function expandCard(card) {
    if (!card) return;
    card["classList"]["remove"]("collapsed");
    const _0x5ee951 = card["querySelector"]('.left-panel__card__header__img');
    _0x5ee951 && (card['classList']['contains']("left-panel__card--social") ? _0x5ee951["src"] = '../../../assets/apps/about/pullup-alt.webp' : _0x5ee951["src"] = "../../../assets/apps/about/pullup.webp");
}

function toggleCard(card) {
    if (!card) return;
    card["classList"]["toggle"]("collapsed");
    const _0x4a5f3e = card["classList"]['contains']("collapsed"),
        _0x2fe6b7 = card["querySelector"](".left-panel__card__header__img");
    _0x2fe6b7 && (card["classList"]["contains"]("left-panel__card--social") ? _0x2fe6b7["src"] = _0x4a5f3e ? '../../../assets/apps/about/pulldown-alt.webp' : "../../../assets/apps/about/pullup-alt.webp" : _0x2fe6b7["src"] = _0x4a5f3e ? "../../../assets/apps/about/pulldown.webp" : "../../../assets/apps/about/pullup.webp");
}
document["addEventListener"]("DOMContentLoaded", async () => {
    const aboutData = {};
    aboutData["skills"] = ["JavaScript", "Python", "React", "Node.js", "SQL"], aboutData["skillsIcons"] = ["assets/apps/about/skill1.webp", "assets/apps/about/skill2.webp", "assets/apps/about/skill3.webp", "assets/apps/about/skill4.webp", "assets/apps/about/skill5.webp", "assets/apps/about/skill6.webp", "assets/apps/about/skill7.webp", "assets/apps/about/skill8.webp"], aboutData['software'] = ["VS Code", "Figma", "Docker", "Git", "Postman"], aboutData["softwareIcons"] = ["assets/gui/start-menu/vanity-apps/creative-cloud.webp", 'assets/gui/start-menu/vanity-apps/vscode.webp', 'assets/gui/start-menu/vanity-apps/cursor.webp', 'assets/gui/start-menu/vanity-apps/claude.webp', 'assets/gui/start-menu/vanity-apps/chatgpt.webp', "assets/gui/start-menu/vanity-apps/copilot.webp", "assets/gui/start-menu/vanity-apps/docker.webp", "assets/gui/start-menu/vanity-apps/wordpress.webp", "assets/gui/start-menu/vanity-apps/blender.webp"];
    const socialCard = document["getElementById"]('social-links-card'),
        skillsCard = document["getElementById"]("skills-card"),
        softwareCard = document["getElementById"]("software-card");
    if (!document["querySelector"](".left-panel")) return;
    const addressBarElement = window["parent"]?.["document"]?.["querySelector"]("#about-window .addressbar");
    let loader = null;
    addressBarElement && (loader = new _0x5176ad('about', addressBarElement, () => {
        const postData = {};
        postData["type"] = "app-fully-loaded", postData["appId"] = "about-window", window["parent"] && window["parent"] !== window && window["parent"]["postMessage"](postData, '*');
    }), loader["startLoading"](0x5));
    const isMinimized = document["documentElement"]["classList"]["contains"]("mobile-device");
    let socialLinks = [];
    const brandingManager = window["parent"]?.["brandingManager"] || window["brandingManager"];

    // Fallback social links if brandingManager doesn't return them
    const fallbackSocials = [{
        'key': "instagram",
        'name': "Instagram",
        'icon': "assets/gui/start-menu/instagram.webp",
        'url': "https://instagram.com/mitchivin",
        'showInAbout': true
    }, {
        'key': "github",
        'name': "Github",
        'icon': 'assets/gui/start-menu/github.webp',
        'url': "https://github.com/mitchivin",
        'showInAbout': true
    }];

    if (brandingManager) {
        const instagramUrl = brandingManager["getBrandingValue"]("socials.instagram");
        const githubUrl = brandingManager["getBrandingValue"]("socials.github");

        if (instagramUrl || githubUrl) {
            socialLinks = [{
                'key': "instagram",
                'name': "Instagram",
                'icon': "assets/gui/start-menu/instagram.webp",
                'url': instagramUrl,
                'showInAbout': true
            }, {
                'key': "github",
                'name': "Github",
                'icon': 'assets/gui/start-menu/github.webp',
                'url': githubUrl,
                'showInAbout': true
            }]["filter"](_0x43aeb2 => _0x43aeb2["url"]);
        } else {
            socialLinks = fallbackSocials;
        }
    } else {
        socialLinks = fallbackSocials;
    }
    if (socialCard && socialLinks["length"] > 0x0 && !isMinimized) {
        const _0x318585 = socialLinks['filter'](_0x495de8 => _0x495de8['showInAbout'] && _0x495de8["icon"])["map"](_0x34df2f => transformAssetPath(_0x34df2f['icon']));
        loader && _0x318585["length"] > 0x0 ? await loader["loadAssets"](_0x318585, 0x28, 0x2d) : loader && loader["setProgress"](0x2d);
        const socialContent = socialCard["querySelector"](".left-panel__card__content-inner");
        socialContent && (socialContent["innerHTML"] = '', socialLinks["forEach"](_0x38d218 => {
            if (!_0x38d218["showInAbout"]) return;
            const _0x4cfb73 = document['createElement']('a');
            _0x4cfb73["href"] = _0x38d218["url"], _0x4cfb73['target'] = '_blank', _0x4cfb73["rel"] = "noopener noreferrer", _0x4cfb73['className'] = 'left-panel__card__row\x20social-link', _0x4cfb73['dataset']["socialKey"] = _0x38d218["key"], _0x4cfb73["dataset"]["socialUrl"] = _0x38d218["url"], _0x4cfb73["dataset"]["socialLabel"] = _0x38d218["name"];
            const _0xf653ed = document["createElement"]("img");
            _0xf653ed['className'] = "left-panel__card__img", _0xf653ed["src"] = transformAssetPath(_0x38d218["icon"]), _0xf653ed["alt"] = _0x38d218["name"];
            const _0x2dcd99 = document["createElement"]("span");
            _0x2dcd99['className'] = "left-panel__card__text", _0x2dcd99["textContent"] = _0x38d218['name'], _0x4cfb73["appendChild"](_0xf653ed), _0x4cfb73["appendChild"](_0x2dcd99), socialContent["appendChild"](_0x4cfb73);
        }));
    } else loader && isMinimized && loader["setProgress"](0x2d);
    if (aboutData) {
        loader && loader["setProgress"](0x37);
        const bioContent = document["querySelector"](".section_text");
        if (bioContent) {
            bioContent['innerHTML'] = '';
            const paragraphs = brandingManager?.['getBrandingValue']('about.paragraphs') || [
                "I'm a passionate Software Developer and Flutter enthusiast with a strong focus on building modern, high-quality mobile and web applications. I enjoy turning complex ideas into smooth, functional, and user-friendly experiences.",
                "With a solid background in phone software and hardware, along with hands-on experience in iOS, Flutter, and web technologies, I pay close attention to performance, stability, and clean design in every project I work on.",
                "I have experience working across both frontend and backend development, allowing me to build applications that are not only visually appealing but also well-structured, scalable, and reliable.",
                "When I'm not coding, I'm usually exploring new technologies, improving UI/UX designs, experimenting with AI-powered applications, or working on personal projects that challenge my skills and creativity."
            ];
            paragraphs["forEach"]((_0x16525c, _0x1b95f0) => {
                const _0x5cf170 = document["createElement"]('div');
                _0x5cf170['className'] = "about-paragraph-row";
                const _0x581993 = document["createElement"]("span");
                _0x581993["className"] = 'about-paragraph-text', /[<>]/["test"](_0x16525c) ? _0x581993["innerHTML"] = sanitizeHTML(_0x16525c) : _0x581993["textContent"] = _0x16525c, _0x5cf170["appendChild"](_0x581993), bioContent["appendChild"](_0x5cf170);
            });
        }
        if (skillsCard && aboutData['skills'] && aboutData['skillsIcons'] && !isMinimized) {
            const _0x4b2fc7 = aboutData["skillsIcons"]["map"](_0x3172eb => transformAssetPath(_0x3172eb));
            loader && _0x4b2fc7['length'] > 0x0 ? await loader["loadAssets"](_0x4b2fc7, 0x41, 0x46) : loader && loader['setProgress'](0x46);
            const _0x73faa2 = skillsCard["querySelector"](".left-panel__card__content-inner");
            _0x73faa2 && (_0x73faa2["innerHTML"] = '', aboutData["skills"]["forEach"]((_0x1516c2, _0x495628) => {
                const _0x22bd62 = document["createElement"]("div");
                _0x22bd62["className"] = 'left-panel__card__row';
                const _0x5f32e9 = document["createElement"]("img");
                _0x5f32e9["className"] = "left-panel__card__img", _0x5f32e9["alt"] = _0x1516c2, _0x5f32e9["src"] = transformAssetPath(aboutData["skillsIcons"][_0x495628] || '');
                const _0x5cc8cb = document["createElement"]("span");
                _0x5cc8cb["className"] = "left-panel__card__text", _0x5cc8cb["textContent"] = _0x1516c2, _0x22bd62["appendChild"](_0x5f32e9), _0x22bd62["appendChild"](_0x5cc8cb), _0x73faa2['appendChild'](_0x22bd62);
            }));
        } else loader && isMinimized && loader["setProgress"](0x46);
        if (softwareCard && aboutData["software"] && aboutData["softwareIcons"] && !isMinimized) {
            const _0x1b503a = aboutData['softwareIcons']["map"](_0xac46f0 => transformAssetPath(_0xac46f0));
            loader && _0x1b503a['length'] > 0x0 ? await loader["loadAssets"](_0x1b503a, 0x50, 0x55) : loader && loader["setProgress"](0x55);
            const _0x94110e = softwareCard["querySelector"]('.left-panel__card__content-inner');
            _0x94110e && (_0x94110e["innerHTML"] = '', aboutData["software"]["forEach"]((_0x475191, _0x4c7a97) => {
                const _0x4a02c0 = document["createElement"]("div");
                _0x4a02c0['className'] = 'left-panel__card__row';
                const _0x4166cd = document['createElement']("img");
                _0x4166cd["className"] = "left-panel__card__img", _0x4166cd["alt"] = _0x475191, _0x4166cd["src"] = transformAssetPath(aboutData["softwareIcons"][_0x4c7a97] || '');
                const _0x1c3201 = document["createElement"]("span");
                _0x1c3201["className"] = "left-panel__card__text", _0x1c3201["textContent"] = _0x475191, _0x4a02c0["appendChild"](_0x4166cd), _0x4a02c0['appendChild'](_0x1c3201), _0x94110e["appendChild"](_0x4a02c0);
            }));
        } else loader && isMinimized && loader["setProgress"](0x55);
    }
    if (isMinimized || (socialCard && expandCard(socialCard), skillsCard && expandCard(skillsCard), softwareCard && expandCard(softwareCard)), !isMinimized) {
        if (socialCard) {
            const _0x13acff = socialCard["querySelector"]('.left-panel__card__header');
            _0x13acff && _0x13acff["addEventListener"]("click", () => toggleCard(socialCard));
        }
        if (skillsCard) {
            const _0x5b2c54 = skillsCard['querySelector']('.left-panel__card__header');
            _0x5b2c54 && _0x5b2c54["addEventListener"]("click", () => toggleCard(skillsCard));
        }
        if (softwareCard) {
            const _0x22157e = softwareCard["querySelector"](".left-panel__card__header");
            _0x22157e && _0x22157e["addEventListener"]("click", () => toggleCard(softwareCard));
        }
    }
    loader && (loader["setProgress"](0x5f), setTimeout(() => {
        loader['complete']();
    }, 0x12c));
}), document["addEventListener"]('click', () => {
    const _0x413e72 = {};
    _0x413e72['type'] = 'resume-interaction';
    window.parent && window.parent !== window && window.parent.postMessage(_0x413e72, '*');
});