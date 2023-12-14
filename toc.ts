import * as fs from 'fs';
import * as path from 'path';


function formatName(name: string): string {
    // Insert spaces before capital letters in camelCase words
    name = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Replace underscores and slashes with spaces
    name = name.replace(/[_\/]/g, ' ');

    // Capitalize the first letter of each word
    return name.replace(/\b\w/g, l => l.toUpperCase());
}

function createTableOfContents(dir: string, basePath: string = '', indent: string = ''): string {
    let tableOfContents = '';
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            const formattedName = formatName(file);
            tableOfContents += `${indent}- ${formattedName}\n`;
            tableOfContents += createTableOfContents(filePath, path.join(basePath, file), indent + '    ');
        } else if (file.endsWith('.md')) {
            const formattedName = formatName(file.replace('.md', ''));
            const relativePath = path.join(basePath, file);
            tableOfContents += `${indent}- [${formattedName}](${relativePath})\n`;
        }
    });

    return tableOfContents;
}


const toc = createTableOfContents('./notes', './notes');
console.log(toc);

fs.writeFileSync('index.md', '', { encoding: 'utf8' });
fs.writeFileSync('index.md', toc);
