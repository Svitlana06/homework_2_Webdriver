exports.config = {
    framework: 'cucumber',
    
    services: ['chromedriver'],
    
    specs: [
        'D:/homework/серпень/homework_2_Webdriver_Know/features/trello.feature'
        
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    
    reporters: ['spec'],
    
    cucumberOpts: {
        
        require: ['D:/homework/серпень/homework_2_Webdriver_Know/features/support/hook.js',
            'D:/homework/серпень/homework_2_Webdriver_Know/features/step-definitions/require-steps.js'
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
