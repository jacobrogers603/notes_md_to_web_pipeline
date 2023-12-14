"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function formatName(name) {
    // Insert spaces before capital letters in camelCase words
    name = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // Replace underscores and slashes with spaces
    name = name.replace(/[_\/]/g, ' ');
    // Capitalize the first letter of each word
    return name.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
}
function createTableOfContents(dir, basePath, indent) {
    if (basePath === void 0) { basePath = ''; }
    if (indent === void 0) { indent = ''; }
    var tableOfContents = '';
    var files = fs.readdirSync(dir);
    files.forEach(function (file) {
        var filePath = path.join(dir, file);
        var stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            tableOfContents += "".concat(indent, "- ").concat(file, "/\n");
            tableOfContents += createTableOfContents(filePath, path.join(basePath, file), indent + '    ');
        }
        else if (file.endsWith('.md')) {
            var relativePath = path.join(basePath, file);
            var fileNameWithoutExtension = file.replace('.md', '');
            var htmlRelativePath = "".concat(relativePath.replace('.md', '.html'));
            // Markdown link labeled "md file" and HTML link
            tableOfContents += "".concat(indent, "- [").concat(formatName(fileNameWithoutExtension), "](").concat(htmlRelativePath, ") ([md file](").concat(relativePath, "))\n");
        }
    });
    return tableOfContents;
}
var toc = createTableOfContents('./notes', './notes');
console.log(toc);
// Clear the file.
fs.writeFileSync('index.md', '', { encoding: 'utf8' });
// Prepend the desired header
var header = '---\ntitle: "Notes Table of Contents"\n---\n';
var contentWithHeader = header + toc;
if (!fs.existsSync('index.md')) {
    fs.writeFileSync('index.md', contentWithHeader, { flag: 'w' });
}
else {
    console.log('index.md already exists. Overwriting it with new content.');
    fs.writeFileSync('index.md', contentWithHeader, { flag: 'w' });
}
