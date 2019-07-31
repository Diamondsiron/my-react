import React from  'react'
import './index.css'
import { createBrowserHistory } from 'history';

function Header(){
    const history = createBrowserHistory();
    function goBack(e){
        e.preventDefault();
        console.log('goBack')
        //browserHistory.goBack()
        //BrowserRouter.goBack()
        //this.props.history.goBack()
        history.goBack()
    }

    return (
        <div className="header-nav">
            <div onClick={goBack}>返回</div>        
        </div>
    )
}

export default Header