
const _chessItem = {
    type: 'program',
    programName: 'chess',
    icon: './assets/gui/desktop/chess.webp',
    label: 'Chess',
    disabled: !1
};
const items = [_chessItem];

// Reconstructed logic of buildMenuHTML based on startMenu.js source
function buildMenuHTML(items, itemClass, ulClass) {
    // Original obfuscated logic (approximate):
    // return '<ul class="' + ulClass + '">' + items.map(item => {
    //      if (item.type === 'separator') return '<li class="' + itemClass + ' separator"></li>';
    //      if (item.type === 'program') {
    //          return '<li class="' + itemClass + ' ' + (item.disabled ? 'disabled' : '') + 
    //                 '" data-action="' + item.programName + '">' +
    //                 '<img src="' + item.icon + '" alt="' + item.label + '">' + 
    //                 item.label + '</li>';
    //      }
    //      if (item.type === 'url') {
    //          return '<li class="' + itemClass + '" data-url="' + item.url + '">' +
    //                 '<img src="' + item.icon + '" alt="' + item.label + '">' + 
    //                 item.label + '</li>';
    //      }
    //      return '';
    // }).join('') + '</ul>';

    // Based on startMenu.js lines 200-203:
    // _0x3d4fe3[_0x3af720(0x1ab)] -> type
    // matches 'separator' (0x14e?)
    // matches 'program' (0x17e?) which has 'action' (0x1a1) or 'programName' (0x150)? No.

    // Let's assume standard behavior:
    return `<ul class="${ulClass}">` + items.map(item => {
        if (item.type === 'program') {
            return `<li class="${itemClass}${item.disabled ? ' disabled' : ''}" data-action="${item.programName}"><img src="${item.icon}" alt="${item.label}">\n${item.label}</li>`;
        }
        return '';
    }).join('') + `</ul>`;
}

console.log(buildMenuHTML(items, 'games-menu-item', 'games-menu-items'));
