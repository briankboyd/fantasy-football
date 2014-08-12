var Converter=require("csvtojson").core.Converter;
var fs = require("fs");
var csvConverter=new Converter({constructResult:true}); // The parameter false will turn off final result construction. It can avoid huge memory consumption while parsing. The trade off is final result will not be populated to end_parsed event.

var readStream = fs.createReadStream("ff-14.csv");

var writeStream = fs.createWriteStream("ff-14.json");

readStream.pipe(csvConverter).pipe(writeStream);
//fs.writeFileSync('ff-14.json',readStream.pipe(csvConverter).pipe(writeStream));