---
title: "react props"
---

How we pass parameters from App.js back to individual components.

# Example

If in App.js we do this with title:

    import Header from './components/Header'
    ...
    <Header title="Hey" />
    ...


That gets taken in as an argument in the Header.jsx component and will display on the app using "Hey." Use **props** as an argument to the function, and use **curly braces and props.title** in the code to use things sent from App.js.

    const Header = (props) => {
        return (
            <header>
                <h1>{props.title}</h1>
            </header>
        )
    }
    export default Header

can clean up the argument by not passing in props and instead passing in an object:

    const Header = ({ title }) => {
        return (
            <header>
                <h1>{title}</h1>
            </header>
        )
    }
    export default Header

# default props

If no argument is sent in from App.js, you can specify what should be shown by default. So for example, in a component file below the arrow function create an object like this:

    ComponentName.defaultProps = {
        propName: "default val"
    }

# prop types

We can define what the datatype should be for a prop.

To import prop types with ES7 with emmet

    impt

## Example

    import PropTypes from 'prop-types'
    ...
    Header.propTypes = {
        title: PropTypes.string
    }

You can also use *.isRequired* at the end of a propType in the json object