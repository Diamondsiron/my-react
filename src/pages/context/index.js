import React from 'react'



const Context = () => {
    const Theme = React.createContext('light') 
    return (
        <Theme.Provider value='dark'>
            <Toolbar/>
        </Theme.Provider>
    )
}

const Toolbar = (props) => {
    //console.log(Theme,'Toolbar')
    return (
        
        <div>
            <ThemeButton/>
        </div>
       
    )
}

const ThemeButton = () => {
    //console.log(this.Theme,'ThemeButton')
    
    return (
        
        <div>
            <button >123</button>
        </div>
        
    )
}

export default Context