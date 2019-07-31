import React from 'react';

function CarCard(props){
    return (
        <div className="car-card">
            <div>车牌号:{props.value.mainWorkorderDto.licensePlate}</div>
            <div>车辆描述:{props.value.userName}</div>
            <div>订单编号:{props.value.childworkorderCode}</div>
            <div>进场时间:{props.value.gmtCreate}</div>
        </div>
    )
}
// function CarCard(props) {
//     console.log(props)
//     const fruitStateVariable = props.fruitStateVariable;
//     const CarCard = fruitStateVariable.map((num) => (
//         <ListItem key={num.id}
//                 value={num}/>
//       ));
//     return (
//         <CarCard />
//     )
// }

export default CarCard