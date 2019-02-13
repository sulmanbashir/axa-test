var gulp = require('gulp');
var chalk = require('chalk');
var sh = require('shelljs');

var bro, i = process.argv.indexOf("--bro");
if(i>-1) {
    bro = process.argv[i+1];
}
else {
  bro = "chrome"
}

gulp.task('automated-test', function (done) {
    
    console.log(chalk.cyan('Launching End to end Test ..'));

    console.log(chalk.cyan('As User, I should come on Axa adventure page and see informations about 1958-1980'));
    sh.exec('nightwatch tests/automated-test/test-case1.js --reporter ./lib/reporter.js -e '+ bro);
    if (sh.error()) {
        console.log(chalk.red('nightwatch tests/automated-test/test-case1.js --reporter ./lib/reporter.js -e '+ bro));
        process.exit(1);
    }
    
    console.log(chalk.cyan('As User, I should come on Axa adventure page and see informations about 1980-1990'));
    sh.exec('nightwatch tests/automated-test/test-case2.js --reporter ./lib/reporter.js -e '+ bro);
    if (sh.error()) {
        console.log(chalk.red('nightwatch tests/automated-test/test-case2.js --reporter ./lib/reporter.js -e '+ bro));
        process.exit(1);
    }
    
    console.log(chalk.cyan('As User, I should come on Axa adventure page and see informations about 1990-2000'));
    sh.exec('nightwatch tests/automated-test/test-case3.js --reporter ./lib/reporter.js -e '+ bro);
    if (sh.error()) {
        console.log(chalk.red('nightwatch tests/automated-test/test-case3.js --reporter ./lib/reporter.js  -e '+ bro));
        process.exit(1);
    }
    
    console.log(chalk.cyan('As User, I should come on Axa adventure page and see informations about 2000-2010'));
    sh.exec('nightwatch tests/automated-test/test-case4.js --reporter ./lib/reporter.js  -e '+ bro);
    if (sh.error()) {
        console.log(chalk.red('nightwatch tests/automated-test/test-case4.js --reporter ./lib/reporter.js -e '+ bro));
        process.exit(1);
    } 
    
    console.log(chalk.cyan('As User, I should come on Axa adventure page and see informations about 2010-2018'));
    sh.exec('nightwatch tests/automated-test/test-case5.js --reporter ./lib/reporter.js -e '+ bro);
    if (sh.error()) {
        console.log(chalk.red('nightwatch tests/automated-test/test-case5.js --reporter ./lib/reporter.js -e '+ bro));
        process.exit(1);
    }

    done();
});

