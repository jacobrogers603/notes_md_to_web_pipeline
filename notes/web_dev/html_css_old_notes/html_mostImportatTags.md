# Most Used Tags

- <h1> to <h6>
- <p> paragraph, can contain multiple lines
- <br /> force a line break (self closing tag)
- <pre> literal text block, multi line, used for code or poems
- <blockquote> can contain multilines and other markups like a paragraph or list
- <ul> unordered list... just bullet points
    <li>list item 1</li>
    <li>list item 2</li>
  </ul>
- <ol> of same format ^, adds numbers
- <a href="url">description</a> link
- <img src="filepath" alt="description" /> image (self-closing)
- <b> bold text
- <i> italics text
- <code> code block, literal inline text
- <span> general markup for inline text. It is similar to the bold tag b but without any meaning
- <div> used for grouping elements

## ALL TAGS: 
HTML Tags Complete List
By Xah Lee. Date: 2011-06-26. Last updated: 2022-07-10.

This page is a COMPLETE list of HTML 5 tags.
HTML Structure, Meta info

<!doctype html>
    DOCTYPE delaration. This must be the first line. 
html
    Wrapper tag for entire file. (only DOCTYPE goes before it.) [see HTML Basics] 
head
    Wrapper tag for meta info 
meta
    Must be inside head tag.

    <meta charset="utf-8" />

link
    Must be inside head tag.
    For link to style sheet and others. [see CSS Basics]

    <link rel="stylesheet" type="text/css" href="basic.css">

title
    Must be inside head tag.
    Document title. Most important. Every page must have this. 
base
    Must be inside head tag.
    Base URL. Not often used.

    <base href="http://example.com/" />

style
    Must be inside head tag.
    CSS stylesheet.

    <style>
    #x266 {
    display: inline-block;
    margin:15px;
    }
    </style>

    [see CSS Basics] 
body
    Must be used right after the head element.
    Wrapper tag for page content 

example of a typical page.

<!doctype html>
<html>

<head>

<meta charset="utf-8" />
<meta name=viewport content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="../lbasic.css" />

<title>Sample HTML</title>

</head>

 <body>
  <h1>Sample HTML</h1>
  <p>Earth is round</p>
 </body>

</html>

Page Structure

nav
    Navigation bar 
header
    Page's header 
footer
    Page's footer 
main
    Main section 
aside
    Sidebar 
article
    Article body 
section
    Section body (example: a chapter or section). 

[see HTML: Page Structure Tags]
Title/Section Heading

h1
    Headline 1 
h2
    Headline 2 
h3
    Headline 3 
h4
    Headline 4 
h5
    Headline 5 
h6
    Headline 6 

[See also: HTML: How to Markup Subtitle]
Text Block

div
    Generic block markup. Use with CSS 
p
    Paragraph 
pre
    Monospace block 
blockquote
    Quote passages, excerpt 

hr
    Horizontal rule 

Lists

ul
    Unordered list. [see HTML: List: ul ol li] 
ol
    Ordered list. 
li
    List item. (use inside ul or ol) 

dl
    Definition list. [see HTML: Definition List: dl dt dd] 
dt
    Definition term. Use inside dl 
dd
    Definition description. Use inside dl 

Inline Markup

span
    Generic text markup. Use with CSS to change appearance. 
a
    Link (anchor) 

em
    emphasize. 
strong
    important. 
b
    bold 
i
    italic 
u
    underline for book title, misspelled word, …. 
s
    strike-thru [see HTML: s strike del Tags] 
del
    deleted text 
ins
    newly inserted text (in contrast to del) 
mark
    highlight 
small
    smaller 

sup
    superscript 
sub
    subscript 

dfn
    definition term 
code
    computer code 
var
    variable 
samp
    sample code. Used to show computer output. 
kbd
    keyboard input. Used to show computer keystroks. 
q
    "short inline quote". [see “q” example] 
cite
    book title (or title of: article, essay, song, script, film, TV show, game, artwork, etc.) 

ruby
    Pronunciation markup for Asian languages. [see ruby example] 
rt
    Used inside ruby tag, for pronunciation. 
rp
    Used inside ruby tag, for older browser support. 

br
    Line break 
wbr
    Line-break hint. Browsers can render line break at this point. 

bdo
    Text direction 
bdi
    Text direction 

Table

table
    Table [see HTML Table] 
caption
    Table caption 
tr
    Table row 
td
    Table cell 
th
    Table cell header 
thead
    Table header. [see thead, tbody, tfoot] 
tfoot
    Table footer 
tbody
    Table body 
colgroup
    Group table columns for styling. [see colgroup, col] 
col
    Used inside colgroup 

Image

img
    Inline image. [see HTML: Image Tag] 
picture
    Inline image with multiple versions. [see HTML: Picture Tag] 
figure
    For independent illustartion, image, video, code example, etc. [see Figure] 
figcaption
    Caption for figure. 
map
    Image map. [see Image Map] 
area
    Used inside map. [see Image Map] 

Audio, Video, Special Objects

video
    Embed video. HTML Video Tag 
audio
    Embed audio. HTML Audio Tag 
source
    Used inside video or audio tags. [see HTML Video Tag] 
track
    Used with video and audio tag, for things like subtitle. 

script
    [see JavaScript Basics by Example] 
noscript
    Example: <noscript>displayed when JavaScript is off</noscript>. This is an ancient tag. Mostly used in early 2000s only. It was used when browsers may not support JavaScript, or user have JavaScript turned off. 
object
    Embedded object. [see “Object” tag for “Iframe”] 
param
    Parameter, used with object tag 
embed
    Interactive content or plugin 
iframe
    Embed a page; inner window. [see HTML: Iframe] 
canvas
    Interactive graphics, games. [see Canvas Example] 

abbr
    Example: <abbr title="eXtensible Markup Language">XML</abbr>. [see abbr Example] 
address
    Markup for contact of article or page. [see HTML: address Tag] 

meter
    Gauge indicator. [see HTML: meter Tag] 
progress
    Progress bar. [HTML: progress Tag] 
time
    Date/time. [see HTML: time] 

Forms

form
    User input. [see HTML Form Example] 
button
    Render as Button. Used together with JavaScript. 
input
    Generic input (text, radio box, checkbox, submit button) [see HTML: Input Tag] 
textarea
    Large text input. [see HTML: Textarea] 
select
    Menu. [see HTML: Selection, Popup Menu] 
option
    Menu item. Used with select. 
optgroup
    Menu item group label. 
label
    A label for a form input 

fieldset
    Used inside <form> tag to group input elements. 
legend
    Title in a <fieldset> 
datalist
    Dropdown list, group several <option> elements. 
menu
    ? Menu list 
output
    A tag used as a container for JavaScript generated result. 
details
    A toggle to show/hide more info. 
summary
    Used inside <details> element. The content of summary element is shown when the details toggle is closed. 

HTML5 Custom Data Attribute

HTML5 Custom Data Attribute
Obsolete HTML5 Tags

command
    ? Creating a user input, such as buttons. 
keygen
    Generate a encryption key. 

HTML 4 Tags Obsolete in HTML 5

acronym
    Use abbr 
applet
    Use embed or object. [see “Object” tag for “Iframe”] 
bgsound
    Use HTML Audio Tag 
basefont
    Use CSS: font-family instead. 
big
    Use CSS: font-size instead. 
center
    Use CSS. [see Centering with CSS] 
dir
    Directory list. Use ul 
font
    Use CSS font-family 
frame
    Use HTML: Iframe. 
frameset
    Example: HTML: Frameset to Split Windows. HTML 5 does not support anything similar. Use HTML: Iframe as a workaround. 
noframes
    Used with frameset. 
strike
    Use s. [see s strike del] 
tt
    Stands for “teletype”, rendered in monospace font. Use code or samp tag instead, or use CSS: font-family. 
xmp
    Use pre with CSS. 
