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
            '../../features/step-definitions/require-steps.js'
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
