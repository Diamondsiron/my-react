import React from 'react'
import {connect} from 'react-redux'
import { thunk } from '../../redux/actions'

class Thunk extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input : ''}
    }
    componentDidMount() {
        thunk()
    }

    render(){
        return(
            <div>
                thunk
            </div>
        )
    }
}

const mapStateToPros = state => {

}

export default connect(mapStateToPros,thunk)(Thunk)