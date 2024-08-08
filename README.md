# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# // * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

# // * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

# // * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

# // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered

# 2 types  of export 
#   1. export default 
#   2. Name export ex. ;-  export const CDN_URL || import me ---> impoort {CDN_URL} from ../../utils/constant

# React Hooks
(Normal js functions)
 - useState() - supper powerful state variable in react
 - useEffect()


# whenever the state variable is update  react will re render the component
# 2 type of Routing in web page
    -Client Sde Routing ->
    -Server side Routing -> 

# lecture 11 data is new oil
    - high order component:- higher order component  is a  function that take a component and return a component
    -export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

# Redux Toolkit 
 - Install @reduxjs/toolkit  and react-redux
 - Build our store
 - Connect our storeto our app
 - slice (cartSlice)
 - dispatch (action)
 - selector

# Types of tetsing (devloper)
 - Unit testing
 - Integration Testing
 - End to End Testing :- 

 # Setting up Testing in  our app
    - Install React Tesing Library
    - Installed jest
    - Installed Babel dependencies
    - Configure Babel
    - jest configuration
    
      