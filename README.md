Hi !

In this document, you will find how to install and use automated test. If you have any question, please send me an email.

Pre-conditions :
- npm is installed
- node.js is installed
- google chrome is installed
- safari is installed
- firefox is installed

Get started :

Installation of NightWatch JS :
cd project-root-folder/
npm install nightwatch --save-dev
npm install


Run test : (all test are in tests/automated-test folder)
cd /project_root/

/*we are going to run yout test with Google Chrome*/
gulp automated-test --bro chrome

/*we are going to run yout test with Safari*/
gulp automated-test --bro safari

/*we are going to run yout test with Firefox*/
gulp automated-test --bro Firefox

note : take a look to gulpfile.js to see how I create a task and run each test.

Reports Files :

All reports are in reports/ (chrome, firefox, safari)
After each running, you have to take all report file and save in other place and delete them from folders!
Why ? I don't a lot of time to create a specific folder for each running date.. sorry.

Also, all specs created by Sulman Bashir, are IMPORTANT to test. I also add test for others element essentials,
but not for all like (social network, header menu button, etc ..).




