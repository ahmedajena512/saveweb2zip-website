const defaults = {
    'iframe': {
        'template': 'iframe-standard',
        'dimensions': {
            'width': 0x226,
            'height': 0x190
        },
        'minDimensions': {
            'width': 0xfa,
            'height': 0xc8
        }
    }
},
    makeId = _0x4c2bc4 => _0x4c2bc4 + '-window',
    createProgram = (_0x17c31b, _0x300bb9, _0x41bffd, _0x4d7620 = {}) => ({
        'id': makeId(_0x17c31b),
        'title': _0x300bb9,
        'icon': './assets/gui/' + _0x41bffd,
        ...defaults['iframe'],
        'minDimensions': {
            ...defaults['iframe']['minDimensions'],
            ..._0x4d7620['minDimensions'] || {}
        },
        ..._0x4d7620
    }),
    VIEW_DROPDOWN = [{
        'key': 'maximize',
        'text': 'Maximize',
        'enabled': !document['documentElement']['classList']['contains']('mobile-device'),
        'action': 'maximizeWindow'
    }, {
        'key': 'minimize',
        'text': 'Minimize',
        'enabled': !0x0,
        'action': 'minimizeWindow'
    }],
    FILE_DROPDOWN_EXIT_ONLY = [{
        'key': 'print',
        'text': 'Print',
        'enabled': !0x1,
        'action': 'filePrint'
    }, {
        'key': 'pageSetup',
        'text': 'Print\x20Setup',
        'enabled': !0x1,
        'action': 'pageSetup'
    }, {
        'type': 'separator'
    }, {
        'key': 'exit',
        'text': 'Exit',
        'enabled': !0x0,
        'action': 'exitProgram'
    }],
    programData = {
        'mediaPlayer': createProgram('mediaPlayer', 'Media\x20Player', 'start-menu/mediaPlayer.webp', {
            'appPath': 'src/apps/mediaPlayer/mediaPlayer.html',
            'dimensions': {
                'width': 0x339,
                'height': 0x22c
            },
            'resizable': !0x1
        }),

        'cmd': createProgram('cmd', 'Command\x20Prompt', 'start-menu/cmd.webp', {
            'appPath': 'src/apps/cmd/cmd.html',
            'dimensions': {
                'width': 0x26c,
                'height': 0x1a4
            },
            'minDimensions': {
                'width': 0x1a4,
                'height': 0x12c
            },
            'resizable': !0x1
        }),
        'paint': createProgram('paint', 'Paint', 'start-menu/paint.webp', {
            'appPath': 'src/apps/paint/index.html',
            'resizable': !0x0,
            'dimensions': {
                'width': 0x316,
                'height': 0x258
            },
            'minDimensions': {
                'width': 0x1f4,
                'height': 0x190
            },
            'statusBarText': document['documentElement']['classList']['contains']('mobile-device') ? 'Powered\x20by\x20JS\x20Paint\x20(MIT\x20License)' : 'Powered\x20by\x20JS\x20Paint\x20(MIT\x20License)\x20-\x20<a\x20href=\x22https://jspaint.app\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x20noreferrer\x22\x20style=\x22color:\x20#0000ff;\x20text-decoration:\x20underline;\x22>jspaint.app</a>',
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': [{
                        'text': 'New...',
                        'action': 'paintNew',
                        'enabled': !0x1
                    }, {
                        'text': 'Save',
                        'action': 'fileSave',
                        'enabled': !0x1
                    }, {
                        'text': 'Print',
                        'action': 'filePrint',
                        'enabled': !0x1
                    }, {
                        'type': 'separator'
                    }, {
                        'text': 'Close',
                        'action': 'exitProgram',
                        'enabled': !0x0
                    }]
                }, {
                    'key': 'edit',
                    'text': 'Edit',
                    'enabled': !0x1
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': [{
                        'text': 'Maximize',
                        'action': 'maximizeWindow',
                        'enabled': !0x0
                    }, {
                        'text': 'Minimize',
                        'action': 'minimizeWindow',
                        'enabled': !0x0
                    }]
                }, {
                    'key': 'tools',
                    'text': 'Tools',
                    'enabled': !0x1
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            }
        }),
        'minesweeper': createProgram('minesweeper', 'Minesweeper', 'start-menu/minesweeper.png', {
            'appPath': 'src/apps/minesweeper/index.html',
            'dimensions': {
                'width': 280,
                'height': 341
            },
            'resizable': false
        }),
        'solitaire': createProgram('solitaire', 'Solitaire', 'start-menu/solitaire.png', {
            'appPath': 'src/apps/solitaire/index.html',
            'dimensions': {
                'width': 585,
                'height': 405
            },
            'resizable': true
        }),
        'winamp': createProgram('winamp', 'Winamp', 'start-menu/winamp.png', {
            'appPath': 'src/apps/winamp/index.html',
            'dimensions': {
                'width': 0,
                'height': 0
            },
            'resizable': false,
            'frameless': true,
            'template': 'none'
        }),
        'about': createProgram('about', 'About\x20Me', 'desktop/about.webp', {
            'dimensions': {
                'width': 0x2c6,
                'height': 0x288
            },
            'minDimensions': {
                'width': 0x1ae,
                'height': 0x190
            },
            'statusBarText': 'Learn\x20more\x20about\x20Mitch',
            'appPath': 'src/apps/about/about.html',
            'toolbarConfig': {
                'buttons': [{
                    'key': 'previous',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/back.webp',
                    'text': 'Back',
                    'action': 'nav:prev'
                }, {
                    'key': 'next',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/forward.webp',
                    'text': 'Forward',
                    'action': 'nav:next'
                }, {
                    'type': 'separator',
                    'desktopOnly': !0x0
                }, {
                    'key': 'projects',
                    'enabled': !0x0,
                    'icon': './assets/gui/desktop/projects.webp',
                    'text': 'My\x20Projects',
                    'action': 'openProjects'
                }, {
                    'key': 'resume',
                    'enabled': !0x0,
                    'icon': './assets/gui/desktop/resume.webp',
                    'text': 'My\x20Resume',
                    'action': 'openResume'
                }, {
                    'type': 'separator'
                }, {
                    'key': 'folder',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/up.webp',
                    'text': null,
                    'action': 'null'
                }]
            },
            'addressBarConfig': {
                'enabled': !0x0,
                'icon': './assets/gui/desktop/about.webp',
                'title': 'About\x20Me',
                'canNavigate': !0x1
            },
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': FILE_DROPDOWN_EXIT_ONLY
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': VIEW_DROPDOWN
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            }
        }),
        'resume': createProgram('resume', 'My\x20Resume', 'desktop/resume.webp', {
            'dimensions': {
                'width': 0x2c2,
                'height': 0x2ec
            },
            'minDimensions': {
                'width': 0x131,
                'height': 0x15e
            },
            'statusBarText': document['documentElement']['classList']['contains']('mobile-device') ? 'Tap\x20to\x20zoom,\x20then\x20drag\x20to\x20view\x20other\x20areas' : 'Click\x20to\x20zoom,\x20then\x20drag\x20to\x20view\x20other\x20areas',
            'appPath': 'src/apps/resume/resume.html',
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': FILE_DROPDOWN_EXIT_ONLY
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': VIEW_DROPDOWN
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            },
            'toolbarConfig': {
                'buttons': [{
                    'key': 'zoom',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/search.webp',
                    'text': 'Zoom',
                    'desktopOnly': !0x0,
                    'action': 'toggleZoom'
                }, {
                    'key': 'save',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/save.webp',
                    'text': 'Save',
                    'action': 'saveResume'
                }, {
                    'type': 'separator',
                    'desktopOnly': !0x0
                }, {
                    'key': 'print',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/print.webp',
                    'text': 'Print',
                    'desktopOnly': !0x0,
                    'tooltip': 'Print\x20(Disabled)'
                }]
            }
        }),
        'image-viewer': createProgram('image-viewer', 'Image\x20Viewer', 'start-menu/photos.webp', {
            'dimensions': {
                'width': 0x280,
                'height': 0x2bc
            },
            'minDimensions': {
                'width': 0x140,
                'height': 0x1b8
            },
            'statusBarText': 'Ready',
            'appPath': 'src/apps/imageViewer/imageViewer.html',
            'toolbarConfig': {
                'buttons': [{
                    'key': 'previous',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/back.webp',
                    'text': 'Back',
                    'action': 'nav:back'
                }, {
                    'key': 'forward',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/forward.webp',
                    'text': 'Next',
                    'action': 'nextImage'
                }, {
                    'key': 'print',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/print.webp',
                    'text': null,
                    'desktopOnly': !0x0
                }, {
                    'key': 'zoom',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/search.webp',
                    'text': 'Zoom',
                    'desktopOnly': !0x0,
                    'action': 'toggleZoom'
                }, {
                    'key': 'save',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/save.webp',
                    'text': null,
                    'desktopOnly': !0x0
                }]
            },
            'addressBarConfig': {
                'enabled': !0x0,
                'icon': './assets/gui/start-menu/photos.webp',
                'title': 'C:\x5cUsers\x5cMitch\x5cAssets',
                'canNavigate': !0x1
            },
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': [{
                        'key': 'open',
                        'text': 'Open',
                        'enabled': !0x1,
                        'action': 'fileOpen'
                    }, {
                        'key': 'send',
                        'text': 'Send',
                        'enabled': !0x1,
                        'action': 'fileSend'
                    }, {
                        'key': 'print',
                        'text': 'Print',
                        'enabled': !0x1,
                        'action': 'filePrint'
                    }, {
                        'type': 'separator'
                    }, {
                        'key': 'exit',
                        'text': 'Exit',
                        'enabled': !0x0,
                        'action': 'exitProgram'
                    }]
                }, {
                    'key': 'edit',
                    'text': 'Edit',
                    'enabled': !0x1
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': VIEW_DROPDOWN
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            }
        }),
        'projects': createProgram('projects', 'My\x20Projects', 'desktop/projects.webp', {
            'dimensions': {
                'width': 0x35c,
                'height': 0x2fe
            },
            'minDimensions': {
                'width': 0x1e0,
                'height': 0x21c
            },
            'statusBarText': 'Select\x20a\x20project\x20to\x20view,\x20navigate\x20between\x20projects\x20with\x20the\x20toolbar',
            'appPath': 'src/apps/Youtube/index.html',
            'addressBarConfig': {
                'enabled': !0x0,
                'icon': './assets/gui/desktop/projects.webp',
                'title': 'https://www.myprojects.com',
                'canNavigate': !0x1
            },
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': [{
                        'text': 'New\x20Window',
                        'action': 'newWindow',
                        'enabled': !0x1
                    }, {
                        'text': 'Save\x20As...',
                        'action': 'fileSaveAs',
                        'enabled': !0x1
                    }, {
                        'type': 'separator'
                    }, {
                        'text': 'Page\x20Setup...',
                        'action': 'pageSetup',
                        'enabled': !0x1
                    }, {
                        'text': 'Print...',
                        'action': 'filePrint',
                        'enabled': !0x1
                    }, {
                        'type': 'separator'
                    }, {
                        'text': 'Exit',
                        'action': 'exitProgram',
                        'enabled': !0x0
                    }]
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': VIEW_DROPDOWN
                }, {
                    'key': 'tools',
                    'text': 'Tools',
                    'enabled': !0x1
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            },
            'toolbarConfig': {
                'buttons': [{
                    'key': 'home',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/home.webp',
                    'text': 'Home',
                    'action': 'navigateHome'
                }, {
                    'type': 'separator',
                    'desktopOnly': !0x0
                }, {
                    'key': 'previous',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/back.webp',
                    'text': 'Back',
                    'action': 'nav:prev'
                }, {
                    'key': 'next',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/forward.webp',
                    'text': 'Forward',
                    'mobileText': '',
                    'action': 'nav:next'
                }, {
                    'key': 'themeToggleMobile',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/views.webp',
                    'text': 'Light/Dark',
                    'action': 'theme:toggle',
                    'tooltip': 'Toggle\x20Light/Dark\x20Theme',
                    'mobileOnly': !0x0
                }, {
                    'key': 'favorites',
                    'enabled': !0x1,
                    'icon': './assets/gui/toolbar/favorites.webp',
                    'text': 'Favorites',
                    'desktopOnly': !0x0,
                    'tooltip': 'Favorites\x20(Disabled)'
                }, {
                    'type': 'separator',
                    'desktopOnly': !0x0
                }, {
                    'key': 'themeToggle',
                    'enabled': !0x0,
                    'icon': './assets/gui/toolbar/views.webp',
                    'text': 'Light/Dark',
                    'desktopOnly': !0x0,
                    'action': 'theme:toggle',
                    'tooltip': 'Toggle\x20Light/Dark\x20Theme'
                }]
            }
        }),
        'doodledev': createProgram('doodledev', 'My\x20Links!', 'toolbar/favorites.webp', {
            'dimensions': {
                'width': 0x46c,
                'height': 0x318
            },
            'minDimensions': {
                'width': 0x35c,
                'height': 0x2bc
            },
            'statusBarText': 'My\x20Socials\x20and\x20Links',
            'appPath': 'src/apps/doodledev/doodledev.html',
            'addressBarConfig': {
                'enabled': !0x0,
                'icon': './assets/gui/toolbar/favorites.webp',
                'title': 'https://a7md.vercel.app',
                'canNavigate': !0x0
            },
            'menuBarConfig': {
                'items': [{
                    'key': 'file',
                    'text': 'File',
                    'enabled': !0x0,
                    'dropdown': FILE_DROPDOWN_EXIT_ONLY
                }, {
                    'key': 'view',
                    'text': 'View',
                    'enabled': !0x0,
                    'dropdown': VIEW_DROPDOWN
                }, {
                    'key': 'help',
                    'text': 'Help',
                    'enabled': !0x1
                }]
            }
        }),
        'chess': createProgram('chess', 'Chess', 'desktop/chess.webp', {
            'dimensions': {
                'width': 450,
                'height': 520
            },
            'minDimensions': {
                'width': 350,
                'height': 450
            },
            'statusBarText': 'Play Chess against the computer',
            'appPath': 'src/apps/chess/chess.html',
            'mobileConfig': {
                'position': {
                    'type': 'special',
                    'preset': 'mobile-full-screen'
                },
                'draggable': false,
                'resizable': false
            }
        })
    };
export default programData;