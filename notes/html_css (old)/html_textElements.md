# HTML Text Elements
These exist inside a line of text and modify that part of the text.

*For example:*

    <p>
      Lorem ipsum dolor <strong>sit amet consectetur</strong> adipisicing elit. Error, saepe.
    </p>

The strong tag makes that text bold.

## List of HTML Text Elements:
- <b> - Bold text \<b\>
- <strong> - Important text \<strong\>
- <i> - Italic text \<i\>
- <em> - Emphasized text \<em\>
- <mark> - Marked text \<mark\>
- <small> - Smaller text \<small\>
- <del> - Deleted text \<del\>
- <ins> - Inserted text \<ins\>
- <sub> - Subscript text \<sub\>
- <sup> - Superscript text \<sup\>

## Span
Has no inherent styling. Allows you to assign it a class or id name and style it youself in css.

    <p>
      Lorem ipsum dolor <span class="spanTest">sit amet consectetur</span> adipisicing elit. Totam velit culpa eveniet adipisci!
    </p>

    .spanTest {
        color: red;
    }

    .spanTest: hover {
        text-decoration: underline;
    }

Can be used to add extra spacing between words in sentences using a margin in span styling. 