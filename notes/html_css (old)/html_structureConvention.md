# Proper strucutre of HTML files

- All files start with \<!DOCTYPE html\>

- Create an html element \<html\>\</html\>
    - Create a head element \<head\>\</head\>
    - Create a body element \<body\>\</body\>

## Body element
Will contain all visible elements on the page

## Head element
- includes the **title tag** for the tab on the browser
- includes the **style element** if we're putting css in the same file
- includes the **meta** elements...
- can load **fonts** by copying exact code into the head element.
- includes **link element** that will link a css file (void element doesn't require a closing tag): rel = what kind of thing we are linking, href is the link to said file. 

ex:

    <link rel="stylesheet" href="style.css">