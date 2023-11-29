---
title: "CSS Image"
---

# images in css

by default if you adjust only width or height, it will also adjust the other to keep the image from becoming distorted.

**object-fit**: this covers the scenarios when you need to crop off some of the image if you have a certain W x H req. Some possible values: cover (center the image and crop anything past the boundaries), contain (shrinks the image to fit)

**object-position**: when using the above property, this aligns the image if it can't all be shown.

## scaling an image when hovering
TO make an image grow when being hover over: 

In the image in css:
transition: transform 0.3s ease; 

In the image:hover:
transform: scale(1.1); 

### Make an image scale but crop when it goes past the borders of its container
overflow: hidden;
