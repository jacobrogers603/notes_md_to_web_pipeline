# CSS Display Property

In html there are three types of elements:
1. Block element: by default takes up the entire line in their container, this is forced, even if there is no margin
2. Inline-block element: only takes up as much space as needed on the line; can appear beside eachother on the same line
3. Inline element: Appear within a line of a text.. like span, or strong

Paragraphs, p, are by default a block element.

## Display
Can set **display** property to change the type of element it is behaving as.

    .classP1,
    .classP2 {
        display: inline-block;
    }

^ Will force both classes that are on paragraph elements to become inline-block elements instead.
*Note the comma notation that  allows two css selectors to get the same styles without having to retype them.*