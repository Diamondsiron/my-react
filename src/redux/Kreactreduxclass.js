import React from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps =
state=>state, mapDispatchToProps = {}) =>
(WrapComponent) => {
return class ConnectComponent extends
React.Component{
    // class组件中声明静态contextTypes可以获取上下⽂
    Context
static contextTypes = {
    store: PropTypes.object
}
constructor(props, context){
    super(props, context)
    this.state = {
    props:{}
    } 
}
componentDidMount(){
    const {store} = this.context
     store.subscribe(()=>this.update())
    this.update()
}
update(){
const {store} = this.context
// state => ({num: state.counter})
const stateProps =
mapStateToProps(store.getState())
// {add:()=>({type:'add'})}
// {add:(...args) =>
dispatch(creator(...args))}

const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
    this.setState({
        props:{
        ...this.state.props, // 之前的值
        ...stateProps, // num: state.counter
        ...dispatchProps // add:(...args) =>
        dispatch(creator(...args))
        }
    })
}
    render(){
        return <WrapComponent {...this.state.props}> </WrapComponent> 
    } 
} 
}
export class Provider extends React.Component{
    static childContextTypes = {
    store: PropTypes.object
}
getChildContext() {
    return { store: this.store }
}
constructor(props, context) {
super(props, context)
    this.store = props.store
}
render() {
    return this.props.children
}

}
//实现bindActionCreators
function bindActionCreator(creator, dispatch){
    return (...args) => dispatch(creator(...args))
}
export function
bindActionCreators(creators,dispatch){
// {add:()=>({type:'add'})}
// {add:(...args) => dispatch(creator(...args))}
    return Object.keys(creators).reduce((ret,item)=>{
        ret[item] =
        bindActionCreator(creators[item],dispatch)
        return ret
    },{})
}