import React from 'react'
import {Button} from 'antd'

const foo = Cmp => props => {
    return (
      <div className="border">
        <Cmp {...props} />
      </div>
    );
  };
  const foo2 = Cmp => props => {
    return (
      <div className="border" style={{ border: "solid 1px red" }}>
        <Cmp {...props} />
      </div>
    );
  };



class Child extends React.Component {
    render(){
        return(
            <div>
                123
            </div>
        )
            
    }
}

@foo2
class HocPage extends React.Component {
    render(){
        return(
            <div>
                <h1>HocPage</h1>
                <Child />
                <Button type="dashed">click</Button>
            </div>
        )
            
    }
}

export default HocPage