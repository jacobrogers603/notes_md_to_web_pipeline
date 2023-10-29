# CSS Specificity
If styles are being set on the same element in multiple places in a css file then the browser will assign a style to it based on a priority list:

The css Selector that is the **MOST SPECIFIC** has the highest priority.

**id name > class name > element name**

*For example:*

    .para-type1 {
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 0;
    }

    #specific-para-type1 {
        margin-bottom: 30px;
    }

------------------

    <p class="para-type1" id="specific-para-type1">
      Text
    </p>

-----------------
In this scenario the text will get the margin-bottom of 30px because it chooses the most specific one.

