// project-file-updater.js
var xml2js = require("xml2js");

module.exports.readVersion = function (contents) {
    var version = "0.0.0";
    xml2js.parseString(
        contents,
        function(err, result) {
            var json = result;
            version = json.project.version;
        });
    return version.toString();
};

module.exports.writeVersion = function (contents, version) {
    var newContent = "";
    xml2js.parseString(
        contents,
        function(err, result) {
            // Update JSON representation of the file
            var json = result;
            json.project.version = version;

            // Rebuild content based on new representation
            var builder = new xml2js.Builder();
            newContent = builder.buildObject(json);
        });
    return newContent;
};