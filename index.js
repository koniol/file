var fs = require("fs");
var colors = require("colors");
var StatMode = require("stat-mode");


function writeDirectoryTreeToFile(){

    fs.readdir(".",function (err,data) {
        if(err) throw err;
        data.forEach(function (content) {
            fs.appendFile("data.txt", content+"\n", function (err) {
                    if(err) throw err;
                    console.log("Zapisano");
            });
        });

    });
}

writeDirectoryTreeToFile();


function writeDirectoryTreeToFile1(){

    fs.readdir(".",function (err,data) {
        if(err) throw err;

            fs.appendFile("data1.txt", data.toString(), function (err) {
                if(err) throw err;
                console.log("Zapisano");
            });


    });
}
writeDirectoryTreeToFile1();

// fs.stat("./js-1_20.jpg", function (err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
//     var t = statMode.owner;
//     console.log(t);
// });
//
// fs.readFile("test.txt","UTF-8", function (err, data) {
//     if(err) throw err;
//     console.log(data.yellow);
//
//     fs.appendFile("test.txt","Po zapisie", function (err) {
//         if(err) throw err;
//         console.log("Zapisiano".green);
//         fs.readFile("test.txt","UTF-8", function (err, data) {
//             if (err) throw err;
//             console.log(data.yellow);
//         });
//     });
// });




