---
title: "The JS / TS spread operator"
---

# The JS / TS spread operator

The spread operator, **...**, allows us to quickly copy all or part of an existing array or object into another array or object. 

It takes all the elements inside an array or object and puts them in the new thing.

    const nums: number[] = [1, 2, 3]

    const nums2: number[] = [...nums, 4, 5, 6] -> [1,2,3,4,5,6]