import React from 'react'
import PropTypes from 'prop-types';

const Theme = React.createContext('light') 

class Context extends React.Component {
   
    render(){
        return (
            <Theme.Provider value='dark'>
                <Toolbar/>
            </Theme.Provider>
        )
    }
    
}

const Toolbar = (props) => {
    //console.log(Theme,'Toolbar')
    return (
        
        <React.Fragment>
            <ThemeButton/>
        </React.Fragment>
       
    )
}

class ThemeButton  extends React.Component {
    
    static contextType = Theme;
    render() {
        return <div theme={this.context} >{this.context}111</div>;
      }
}

export default Context