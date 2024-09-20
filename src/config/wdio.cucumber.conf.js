exports.config = {
    framework: 'cucumber',
    
    services: ['chromedriver'],
    
    specs: [
        '../../features/trello.feature'
        
    ],
    
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
        }
    }],
    
    reporters: ['spec'],
    
    cucumberOpts: {
        
        require: ['features/support/hook.js',
            'features/step-definitions/change_settings_steps.js',
            'features/step-definitions/create_board_steps.js',
            'features/step-definitions/create_card_steps.js',
            'features/step-definitions/create_list_steps.js',
            'features/step-definitions/edit_profile_steps.js',
            'features/step-definitions/filter_cards_steps.js',
            'features/step-definitions/seek_board_steps.js',
            'features/step-definitions/sign_up_steps.js',
        ],
        backtrace: false,
        requireModule: [],
        tags: ['@login'],
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    onPrepare: function () {
        console.log('Test Suite is starting!');
    },
    onComplete: function () {
        console.log('Test Suite has ended!');
    }
};
