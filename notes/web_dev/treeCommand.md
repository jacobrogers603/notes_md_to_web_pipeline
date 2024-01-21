---
title: "Tree command file struct print"
---

# jrrtree

I made my own tree. Will print the file structure of a directory. 

I edited my powershell profile and liked it to VSC to accept the alias of `jrrtree` to run my CLI tool.

## usage

usage: jrrtree [-h] [-p <DIRECTORY_PATH>] [-e <EXCLUDED_LIST>]

Print the file structure of a project.

options:
  -h, --help            show this help message and exit
  -p <DIRECTORY_PATH>, --path <DIRECTORY_PATH>
                        Path you wish to print the directory structure of. If left blank, it will use the current directory.
  -e <EXCLUDED_LIST>, --exclude <EXCLUDED_LIST>
                        Comma-separated patterns of files/directories to exclude. You can use wildcard regex format, for example: *.html will exclude all html files. Do not put spaces after the
                        commas.

## set up on windows

1. define the following two files seen below.
2. in setting settings.json in vsc:
```
"terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell",
            "path": "C:\\Users\\roger\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1" // replace with correct path
        }
```
**Please note:***I for some reason had to rename my WindowsPowerShell dir to Powershell for this to work despite using the path above.*

## src code

**tree.py**
```
import argparse
import os
import ctypes
import fnmatch

def is_hidden(filepath):
    if os.name == 'nt':
        try:
            attrs = ctypes.windll.kernel32.GetFileAttributesW(filepath)
            assert attrs != -1
            result = bool(attrs & 2)
        except (AttributeError, AssertionError):
            result = False
        return result
    else:
        return os.path.basename(filepath).startswith('.')

def print_directory(path, exclude_patterns, prefix=''):
    for item in os.listdir(path):
        full_path = os.path.join(path, item)
        if is_hidden(full_path) or any(fnmatch.fnmatch(item, pattern) for pattern in exclude_patterns):
            continue
        print(prefix + "|-- " + item)
        if os.path.isdir(full_path):
            print_directory(full_path, exclude_patterns, prefix + "|   ")

def main():
    parser = argparse.ArgumentParser(prog="jrrtree", description="Print the file structure of a project.")
    parser.add_argument("-p", "--path", type=str, metavar="<DIRECTORY_PATH>", help="Path you wish to print the directory structure of. If left blank, it will use the current directory.", default=".")
    parser.add_argument("-e", "--exclude", type=str, help="Comma-separated list of files/directories to exclude. Supports wildcards like *.ts", default="")
    args = parser.parse_args()

    exclude_patterns = set(args.exclude.split(' ')) if args.exclude else set()
    
    if not exclude_patterns:
        print('Excluded: Nothing\n')
    else:
        print("Excluded: ", exclude_patterns, '\n')

    if os.path.exists(args.path) and os.path.isdir(args.path):
        print(os.path.basename(os.path.abspath(args.path)))
        print_directory(args.path, exclude_patterns)
    else:
        print("Invalid path: ", args.path)


if __name__ == "__main__":
    main()
```

**Microsoft.PowerShell_profile.ps1**

```

function Run-JrrTree {
    param(
        [string[]]$args
    )

    python "C:\Users\roger\Documents\PS scripts\tree.py" @args
}

Set-Alias -Name jrrtree -Value Run-JrrTree

```