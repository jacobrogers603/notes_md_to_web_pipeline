---
title: "React Overview"
---

# What is react at a high level

- **A JS library for building UIs.** It is NOT a [framework](../frameworks.md).
- React is specifically focused on the view layer of web applications (i.e., what the user sees and interacts with in the browser). It allows developers to create reusable UI components. 
- It is best at single-page-applications.
- **Component-based**: Uses reusable components that are self-contained blocks of code that manage their own state and combine to form full UIs.
- **Declarative**: you define how you want your UI to look at each state of your app and it automatically updates and renders the right components when your data changes.

# Problems that React solves

- **virtual DOM**: is used by react which is a lightweight copy of the actual [DOM](../DOM_overview.md). This makes updating the DOM faster.
- **reusable comps**: Fixes problems of redundancy.
- **state management**: keeps ui in sync with everything

