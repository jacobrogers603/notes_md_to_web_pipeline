---
title: "React Overview"
---

# What is react at a high level

- **A JS library for building UIs.** It is NOT a [framework](../frameworks.md).
- React is specifically focused on the view layer of web applications (i.e., what the user sees and interacts with in the browser). It allows developers to create reusable UI components. 
- It is best at single-page-applications.
- **Component-based**: Uses reusable components that are self-contained blocks of code that manage their own state and combine to form full UIs.
- **Declarative**: you define how you want your UI to look at each state of your app and it automatically updates and renders the right components when your data changes.
- A JS bundle must be loaded by the client's browser for react pages to work.

# Problems that React solves

- **virtual DOM**: is used by react which is a lightweight copy of the actual [DOM](../DOM_overview.md). This makes updating the DOM faster. Allows you to update parts of the page without reloading the page.
- **reusable comps**: Fixes problems of redundancy.
- **state management**: keeps ui in sync with everything
- **JSX**: allows you to write code that is formatted like html but is actually js

## Components

- Can be created with either classes or functions.
- They can have **states** which is an object that determines how a component renders and behaves.

## File structure explanation

- **package.json**: shows your dependencies and scripts (you can define commands here too). 
- **public**: 
-- **index.html**: The single page of the single-page-all that is being loaded. Note how there is a div with id root.
- **src**: where we put components and states
-- **index.js**: we are grabbing the div id="root" from the index.html and we are inserting out app into that div (App.js)
-- **App.js**: Where we do most of the editing. contains the ROOT APP COMPONENT. All components that we end up creating will be in the main root app component. This file contains a function where it looks like there is HTML written; it is actually JSX. All code must be contained within the app div (or empty angle-brackets) because JSX expressions must have only one parent element.

