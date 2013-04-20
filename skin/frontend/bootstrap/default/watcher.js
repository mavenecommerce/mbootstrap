//
// 
// --------------------------------------------------

// 
// Requirements
// --------------------------------------------------
// * Require Watchr        https://github.com/bevry/watchr         -- Need Watchr — better file system watching for Node.js
// * Require Lessc:        http://lesscss.org/                     -- Need for compile .less files to .css (more powerful than recess). Open URL and scroll to "Server-side usage" section
//
// * Require Growl:        http://growl.info/downloads             -- Optional. Need for OSX notifications. If you don`t need it remove all "growlnotify ..." commands

//
// Program
// --------------------------------------------------

// Options
// -------------------------
var watchr  = require('/usr/local/lib/node_modules/watchr');
var exec    = require('child_process').exec;

function execCallback (error, stdout, stderr) {
    
    // this javascript replaces all 3 types of line breaks with a space
    var stdout = stdout;
    stdout = stdout.replace(/(\r\n|\n|\r)/gm," ");
    
    //
    // print result to command line
    console.log(stdout);

    //
    // if error happend
    if (stderr !== "") {
      console.log('stderr: ' + stderr);
    } else if (error !== null) {
      console.log('exec error: ' + error);
    };
};

//
// Define folders fot watching. You can define any folder(s) that you need to watch.
var folders = [ "less/" ];


// Program code
// -------------------------

console.log('Start to watch...');

watchr.watch({
    paths: folders,
    listeners: {
        error: function(err){
            console.log('an error occured:', err);
        },
        change: function(changeType,filePath,fileCurrentStat,filePreviousStat){
            exec('lessc -x --yui-compress less/styles.less css/styles.css && growlnotify -m "Build complete." && printf "[' + changeType + ']\t\t"&& date "+\033[32m✔\033[39m Build complete | %H:%M:%S." ', execCallback);
        }
    },
    next: function(err,watchers){
        if (err) {
            return console.log("watching everything failed with error", err);
        } else {
            console.log('Watching run successfully. If something is happend i will tell you :)');
            console.log("--------------------------------------------------\n");
        }
    }
});