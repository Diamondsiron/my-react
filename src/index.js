// import React ,{useState}from 'react'
// import ReactDOM from 'react-dom'


// function App(props){
//   let [count,setCount] = useState(0)
//   return <div>
//     <h1>{props.title}</h1>
//     <p>{count}</p>
//     <button onClick={()=>setCount(count+1)}>add</button>
//   </div>
// }

// ReactDOM.render(<App title="hello" />, document.getElementById('root'))


import React from './lib/index'
const ReactDOM = React



class Demo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count:1
    }
  }
  handleClick = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return <div>
      <h2 onClick={this.handleClick}>{this.state.count}</h2>
    </div>
  }
}
Demo = React.transfer(Demo)

function App(props){
  const [count, setCount] = React.useState(1)
  return <div id="container" className="red">
    <h1>{props.title}, {count}</h1>
    <button onClick={()=>setCount(count+1)}>??</button>
    
    
  </div>
}
let element = <App title="hello" />






ReactDOM.render( element, document.getElementById('root'))