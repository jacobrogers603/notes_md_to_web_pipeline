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
            tableOfContents += `${indent}- ${formatName(file)}\n`;
            tableOfContents += createTableOfContents(filePath, path.join(basePath, file), indent + '    ');
        } else if (file.endsWith('.md')) {
            const relativePath = path.join(basePath, file);
            const fileNameWithoutExtension = file.replace('.md', '');
            const htmlRelativePath = `${relativePath.replace('.md', '.html')}`;
            // Markdown link labeled "md file" and HTML link
            tableOfContents += `${indent}- [${formatName(fileNameWithoutExtension)}](${htmlRelativePath}) ([md file](${relativePath}))\n`;
        }
    });

    return tableOfContents;
}


const toc = createTableOfContents('./notes', './notes');
console.log(toc);

// Clear the file.
fs.writeFileSync('index.md', '', { encoding: 'utf8' });

// Prepend the desired header
const header = '---\ntitle: "Notes Table of Contents"\n---\n';
const contentWithHeader = header + toc;

if (!fs.existsSync('index.md')) {
    fs.writeFileSync('index.md', contentWithHeader, { flag: 'w' });
} else {
    console.log('index.md already exists. Overwriting it with new content.');
    fs.writeFileSync('index.md', contentWithHeader, { flag: 'w' });
}
