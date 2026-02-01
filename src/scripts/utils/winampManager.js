
export class WinampManager {
    constructor() {
        this.webamp = null;
        this.container = null;
        this.isRendered = false;
    }

    async init() {
        // Don't initialize here - we'll do it when rendering
    }

    async loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = (e) => reject(e);
            document.head.appendChild(script);
        });
    }

    async render() {
        // If Webamp is already rendered, just show it
        if (this.isRendered && this.webamp) {
            // Webamp is already on screen, just focus it
            return;
        }

        // Create container for Webamp on the desktop
        this.container = document.createElement('div');
        this.container.id = 'webamp-container';
        this.container.style.cssText = `
            position: absolute;
            top: 100px;
            left: 100px;
            z-index: 1000;
        `;

        // Add to the windows container (on top of desktop)
        const windowsContainer = document.getElementById('windows-container') || document.body;
        windowsContainer.appendChild(this.container);

        // Define monkey_patch_render function required by the Webamp bundle
        // This function was patched into the bundle to support visualizer overlay
        if (!window.monkey_patch_render) {
            window.monkey_patch_render = (obj) => obj.render();
        }

        // Check if Webamp library is loaded
        if (window.Webamp) {
            // Load Butterchurn (Milkdrop) if not already loaded
            try {
                if (!window.butterchurn) {
                    await this.loadScript('./src/apps/winamp/lib/butterchurn.min.js');
                }
                if (!window.butterchurnPresets) {
                    await this.loadScript('./src/apps/winamp/lib/butterchurnPresets.min.js');
                }
            } catch (e) {
                console.error("Failed to load Butterchurn scripts:", e);
            }

            const webampOptions = {
                initialTracks: [
                    {
                        metaData: {
                            artist: "DJ Mike Llama",
                            title: "Llama Whippin' Intro"
                        },
                        url: "./src/apps/winamp/mp3/llama-2.91.mp3",
                        duration: 5.322286
                    }
                ],
                initialSkin: {
                    url: "./src/apps/winamp/skins/base-2.91.wsz"
                },
                zIndex: 1000,
            };

            // Add Butterchurn options if loaded
            if (window.butterchurn && window.butterchurnPresets) {
                webampOptions.__butterchurnOptions = {
                    importButterchurn: () => Promise.resolve(window.butterchurn),
                    getPresets: () => {
                        const presets = window.butterchurnPresets.getPresets();
                        return Object.keys(presets).map(name => {
                            return {
                                name,
                                butterchurnPresetObject: presets[name]
                            };
                        });
                    },
                    butterchurnOpen: true
                };
            }

            this.webamp = new window.Webamp(webampOptions);

            // Handle Webamp closing
            this.webamp.onClose(() => {
                console.log("Webamp closed");
                this.cleanup();
                // Remove taskbar item if exists
                const taskbarItem = document.getElementById('taskbar-winamp-window');
                if (taskbarItem) {
                    taskbarItem.remove();
                }
            });

            // Render Webamp
            await this.webamp.renderWhenReady(this.container);
            this.isRendered = true;

            // Create a taskbar item for Winamp
            this.createTaskbarItem();

            // Add CSS to contain MilkDrop within the desktop instead of browser fullscreen
            this.addMilkdropContainmentStyles();

            // Watch for MilkDrop window and contain it
            this.setupMilkdropObserver();

            console.log("Webamp rendered directly on desktop with Milkdrop support");
        } else {
            console.error("Webamp library not loaded");
        }
    }

    createTaskbarItem() {
        const taskbarItemsContainer = document.getElementById('taskbar-items') ||
            document.querySelector('.taskbar-items');
        if (!taskbarItemsContainer) return;

        // Check if taskbar item already exists
        if (document.getElementById('taskbar-winamp-window')) return;

        const taskbarItem = document.createElement('div');
        taskbarItem.id = 'taskbar-winamp-window';
        taskbarItem.className = 'taskbar-item active';
        taskbarItem.setAttribute('data-window-id', 'winamp-window');
        taskbarItem.innerHTML = `
            <span class="taskbar-item-icon">
                <img src="./assets/gui/start-menu/winamp.png" alt="Winamp" />
            </span>
            <span class="taskbar-item-title">Winamp</span>
        `;

        taskbarItem.addEventListener('click', () => {
            // Toggle Winamp minimized state (if we implement it later)
            console.log('Winamp taskbar item clicked');
        });

        taskbarItemsContainer.appendChild(taskbarItem);
    }

    cleanup() {
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        if (this.milkdropObserver) {
            this.milkdropObserver.disconnect();
            this.milkdropObserver = null;
        }
        this.webamp = null;
        this.container = null;
        this.isRendered = false;
    }

    close() {
        if (this.webamp) {
            this.webamp.close();
        }
        this.cleanup();
    }

    addMilkdropContainmentStyles() {
        // Add CSS to prevent fullscreen and contain MilkDrop
        const styleId = 'webamp-milkdrop-containment';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* Prevent MilkDrop from going fullscreen - contain it within desktop */
            #webamp #milkdrop-window,
            #webamp-container #milkdrop-window,
            .webamp-desktop-milkdrop {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                max-width: 100vw !important;
                max-height: calc(100vh - 40px) !important; /* Leave room for taskbar */
                z-index: 999 !important;
            }

            /* Override any fullscreen styles */
            #webamp:fullscreen,
            #webamp-container:fullscreen,
            #milkdrop-window:fullscreen {
                position: absolute !important;
                width: 100% !important;
                height: calc(100vh - 40px) !important;
                top: 0 !important;
                left: 0 !important;
            }

            /* Container for MilkDrop when opened */
            .webamp-milkdrop-container {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 40px !important; /* Above taskbar */
                z-index: 998 !important;
                pointer-events: auto;
            }

            /* Keep Webamp windows visible on top of MilkDrop */
            #webamp .window {
                z-index: 1001 !important;
            }

            /* Fix for the MilkDrop desktop window that Webamp creates */
            #webamp .draggable {
                z-index: 1001 !important;
            }

            /* Fix visual glitch/artifact in Equalizer title bar */
            #webamp #equalizer-window,
            #webamp .equalizer-window,
            #webamp [class*="equalizer"] {
                overflow: hidden !important;
            }

            /* Ensure all Webamp windows have proper overflow containment */
            #webamp .window,
            #webamp-container .window {
                overflow: hidden !important;
                box-sizing: border-box !important;
            }

            /* Fix title bar rendering artifacts */
            #webamp .window .title-bar,
            #webamp .draggable .title-bar,
            #webamp-container .title-bar {
                overflow: hidden !important;
                max-width: 100% !important;
            }

            /* Ensure window frames don't extend beyond bounds */
            #webamp .gen-window,
            #webamp-container .gen-window {
                overflow: hidden !important;
            }

            /* Fix for equalizer window specifically */
            #webamp #equalizer-window .gen-window-base,
            #webamp-container #equalizer-window {
                overflow: hidden !important;
                clip-path: inset(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    setupMilkdropObserver() {
        // Observe for MilkDrop window creation and contain it
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if it's a MilkDrop related element
                        if (node.id === 'milkdrop-window' ||
                            node.classList?.contains('milkdrop') ||
                            node.querySelector?.('#milkdrop-window')) {
                            console.log('MilkDrop window detected, containing...');
                            this.containMilkdrop(node);
                        }

                        // Also check for any element going fullscreen
                        if (document.fullscreenElement) {
                            console.log('Exiting fullscreen to keep MilkDrop contained');
                            document.exitFullscreen().catch(() => { });
                        }
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Store observer for cleanup
        this.milkdropObserver = observer;

        // Also prevent fullscreen requests
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement && this.isRendered) {
                // If we're in Webamp mode, exit fullscreen and contain
                console.log('Preventing fullscreen, exiting...');
                document.exitFullscreen().catch(() => { });
            }
        });
    }

    containMilkdrop(element) {
        const windowsContainer = document.getElementById('windows-container') || document.body;

        // If element is body-level, move it to windows container
        if (element.parentElement === document.body) {
            element.classList.add('webamp-desktop-milkdrop');
            windowsContainer.appendChild(element);
        }

        // Ensure proper styling
        element.style.position = 'absolute';
        element.style.zIndex = '999';
    }
}

export const winampManager = new WinampManager();
