# Transitions
 When using pseudo-classes, which change from one style to another, we can make the transition smooth and not instant.

 **They should usually be put in the class itself, not the psuedo class.**

### It takes 2 arguments:
1. the **property** to target for the transition
2. the **time** it takes to do the transition

 for example:

    button {
        background-color: red;
        transition: opacity 1s;
    }

    button: hover {
        opacity: 0.5;
    }

