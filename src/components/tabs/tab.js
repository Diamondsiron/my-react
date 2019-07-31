import React from 'react';

function Tab(props) {
    console.log(props)
    function handlerClicd(props){
        console.log('wanne')
    }

    return (
        <div className='tab' onClick={handlerClicd}>
           {props.value}
        </div>
    )
}
export default Tab