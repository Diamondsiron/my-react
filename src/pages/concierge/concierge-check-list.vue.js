import React , { useState, useEffect }from 'react';
import axios from '../../plugins/axios'
import CarCard from '../../components/car-card/index'
import Tabs from '../../components/tabs/index'
//import PropTypes from 'prop-types';

function List() {
   
  //const [state, setState] = useState({ count: 0, data: [1, 2, 3] });
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
      let url = `/api/moby-mall/postsale/api/v1/postsale/task/list/PRECHECK/PREPARED`
      axios.get(url).then(res=>{
        console.log(res)
        setCount(res.data.payload.list)
        fruitStateVariable = res.data.payload.list
        console.log(fruitStateVariable,'fruitStateVariable')
      },err=>{
        console.log(err)
      })
    };
    
    const listItems = fruitStateVariable.map((num) => (
      <CarCard key={num.id}
              value={num}/>
    ));


    let callback = () => {
      console.log('callback')
    }
    
    
    

    return (
     
      <div className="App" >
        <Tabs list={tabs} callback={callback}></Tabs>
        <div>{listItems}</div>
        concierge-check-list.vue
      </div>
    );
  }
  
  export default List;