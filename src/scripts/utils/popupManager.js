const PopupManager = {
    isInitialized: false,

    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        const style = document.createElement('style');
        style.textContent = `
            .xp-popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                font-family: 'Tahoma', sans-serif;
            }
            
            .xp-popup-window {
                background: #ECE9D8;
                border: 1px solid #0055EA;
                border-radius: 3px;
                box-shadow: 2px 2px 8px rgba(0,0,0,0.4);
                min-width: 320px;
                max-width: 90%;
                display: flex;
                flex-direction: column;
            }
            
            .xp-popup-header {
                background: linear-gradient(to bottom, #0058EE 0%, #3593FF 4%, #288EFF 18%, #127DFF 100%);
                color: white;
                padding: 4px 8px;
                font-weight: bold;
                font-size: 13px;
                text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 24px;
                box-sizing: border-box;
            }
            
            .xp-popup-content {
                padding: 20px 15px;
                display: flex;
                align-items: flex-start;
                gap: 15px;
                flex: 1;
            }
            
            .xp-popup-icon {
                width: 32px;
                height: 32px;
                flex-shrink: 0;
            }
            
            .xp-popup-message {
                flex: 1;
                font-size: 12px;
                line-height: 1.4;
                color: #000;
            }
            
            .xp-popup-buttons {
                padding: 12px;
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                background: #ECE9D8;
            }
            
            .xp-popup-button {
                padding: 4px 12px;
                min-width: 75px;
                border: 1px solid #003C74;
                border-radius: 3px;
                background: linear-gradient(to bottom, #fff 0%, #ece9d8 100%);
                cursor: pointer;
                font-family: inherit;
                font-size: 11px;
                color: #000;
                outline: none;
            }
            
            .xp-popup-button:hover {
                box-shadow: inset 0 0 2px rgba(255, 235, 160, 0.5);
                border-color: #0055EA;
            }
            
            .xp-popup-button:active {
                background: #dadada;
                box-shadow: inset 1px 1px 1px rgba(0,0,0,0.1);
            }
            
            .xp-popup-button.primary {
                border: 2px solid #003C74;
            }
        `;
        document.head.appendChild(style);
    },

    showPopup(config) {
        if (!this.isInitialized) this.init();

        const overlay = document.createElement('div');
        overlay.className = 'xp-popup-overlay';

        const windowDiv = document.createElement('div');
        windowDiv.className = 'xp-popup-window';

        // Header
        const header = document.createElement('div');
        header.className = 'xp-popup-header';
        header.textContent = config.title || 'Windows XP';

        // Content
        const content = document.createElement('div');
        content.className = 'xp-popup-content';

        if (config.icon) {
            const iconImg = document.createElement('img');
            iconImg.src = config.icon;
            iconImg.className = 'xp-popup-icon';
            iconImg.draggable = false;
            content.appendChild(iconImg);
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = 'xp-popup-message';
        messageDiv.innerHTML = config.message || '';
        content.appendChild(messageDiv);

        // Buttons
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'xp-popup-buttons';

        const closePopup = () => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        };

        if (config.buttons && config.buttons.length > 0) {
            config.buttons.forEach(btnConfig => {
                const btn = document.createElement('button');
                btn.className = 'xp-popup-button';
                if (btnConfig.primary) btn.classList.add('primary');
                btn.textContent = btnConfig.text;

                btn.onclick = () => {
                    if (typeof btnConfig.onClick === 'function') {
                        btnConfig.onClick();
                    }
                    closePopup();
                };

                buttonsDiv.appendChild(btn);
            });
        } else {
            // Default OK button
            const btn = document.createElement('button');
            btn.className = 'xp-popup-button';
            btn.textContent = 'OK';
            btn.onclick = closePopup;
            buttonsDiv.appendChild(btn);
        }

        windowDiv.appendChild(header);
        windowDiv.appendChild(content);
        windowDiv.appendChild(buttonsDiv);
        overlay.appendChild(windowDiv);

        document.body.appendChild(overlay);
    }
};

const handler = {
    get: function (target, prop, receiver) {
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        }
        // Fallback for unknown method calls (obfuscated code)
        return function (title, icon) {
            target.showPopup({
                title: title || 'Application',
                message: `This application "${title}" is not optimized for mobile devices.`,
                icon: icon,
                buttons: [
                    {
                        text: 'OK',
                        primary: true,
                        action: 'close'
                    }
                ]
            });
        };
    }
};

export default new Proxy(PopupManager, handler);
