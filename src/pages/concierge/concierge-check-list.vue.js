import React , { useState, useEffect, useReducer }from 'react';
import axios from '../../plugins/axios'
import CarCard from '../../components/car-card/index'
import Tabs from '../../components/tabs/index'
import HeaderSearch from '../../components/header-search'
import { createBrowserHistory } from 'history';
//import PropTypes from 'prop-types';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment' : return state + 1;
    case 'decrement' : return state -1;
    case 'reset' : return 0;
    default: throw new Error('Unexpetced action')
  }
}

function List(props) {
  console.log("props",props);
    const [count, dispatch] = useReducer(reducer, initialState)  
  //const [state, setState] = useState({ count: 0, data: [1, 2, 3] });
    const history = createBrowserHistory();
    let [fruitStateVariable,setCount] = useState([]); // 返回一个有两个元素的数组
    let tabs = [1,2,3]

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      console.log('effect',fruitStateVariable)
      handle()
    },[]);
    //let numbers = []
    function handle(){
      let url = `/api/moby-mall/postsale/api/v1/postsale/task/list/PRECHECK/ALL`
      axios.get(url).then(res=>{
        console.log(res)
        setCount(res.data.payload.list)
        fruitStateVariable = res.data.payload.list
        console.log(fruitStateVariable,'fruitStateVariable')
      },err=>{
        console.log(err)
      })
    };

    function handlerClick(){
      props.history.push('/checkIn')
        // history.push('/checkIn')
    }

    const listItems = fruitStateVariable.map((num) => (
      <CarCard key={num.id}
              value={num}/>
    ));


    let callback = () => {
      console.log('callback')
    }
    
    
    

    return (
     
      <div className="App" >
        <HeaderSearch/>
        <Tabs list={tabs} callback={callback}></Tabs>
        <div onClick={handlerClick}>{listItems}</div>
        concierge-check-list.vue
        {count}
        <button onClick={()=>dispatch('increment')}>+1</button>
        <button onClick={()=>dispatch('decrement')}>-1</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
      </div>
    );
  }
  
  export default List;