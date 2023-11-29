---
title: "Tech stack"
---

We need to choose a tech stack.

There are considerations to take into account such as hirability and scalability.
We want to make our own businesses, but also need to land a remote job in the short term to gain the time freedom.

# Possible Stacks
## Svelte, TS, tailwind, 

## browser environment
static site = same content, always same
dynamic site = will populate parts of the site differently for different users (ie youtube)

the user types in the URL, looks up domain name, finds IP address, routes to that IP address w/ routing process, sends HTTP request from client, reaches server, the server analyzes it and preforms needed server side logic for specific user (if dynamic), will sends info back to client, displays.

for static site, the server sends back html, css, and js to the client, the client's browser will parse all that and render the web page to the user. This is sent to the client zipped up.

html is a tree, css is layering ontop of the html tree, will style nodes of that tree.

For a dynamic site there are components that have fields that get filled in based on the user. For youtube, some backend lang will determine which things to fill in the fields with. An HTML template is filled in.

there are different templating languages, an entire template for the web page and the template is made and all sent together

react creates a virtual dom in memory, will update the actual dom to reflect the virtual dom. The entire dom gets rerendered any time there is a change in the virtual dom, the whole dom gets reloaded. With vue only that specific component gets re rendered. Svelte does it down to the level of elements. 

## react
react does something called virtual DOM, this 