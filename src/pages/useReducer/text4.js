import React, {useReducer} from 'react'

const init = ''
const reducer = (state, action) => action 
const TextInput = ({value, onChangeText}) =>(
    <input type='text' value={value} onChange={e=>onChangeText(e.target.value)} />
)

const Example4 = () => {
    const [firstName, changeFirstName] = useReducer(reducer,init)
    const [lastName, changeLastName] = useReducer(reducer,init)
    return (
        <div>
            First Name:{firstName}
            <TextInput value={firstName} onChangeText={changeFirstName}/>
            Last Name:{lastName}
            <TextInput value={lastName} onChangeText={changeLastName}/>
        </div>
    )
}
export default Example4