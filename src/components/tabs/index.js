import React from 'react';
import Tab from './tab'
function Tabs(props){

    const TABS = props.list.map(num=>(
        <Tab key={num} value={num}  onClick={handlerClicds}></Tab>
    ))
    function handlerClicd(){
        console.log('haha')
        props.callback()
    }
    function handlerClicds(){
        
        console.log('wanne1')
    }
    return (
        <div className='tabs'>
            <div className="tabs__line" onClick={handlerClicd} style={{width: '120px',transform: 'translateX(0px)',transitionDuration: '0.3s'}}></div> 
            {TABS}
        </div>
    )
}

export default Tabs