const glob = require('glob');

const files = glob.sync('D:/homework/серпень/homework_2_Webdriver_Know/features/step-definitions/**/*.js');

files.forEach(file => {
    require(file);
});
