import React, {useState, useContext, useEffect} from "react"


const Context = React.createContext()

export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps = {}
) => Cmp => props => {
    const store = useContext(Context)
    const getMoreProps = () => {
        const stateProps = mapStateToProps(store.getState())
        const dispatchProps = bindActionCreators(
            mapDispatchToProps,
            store.dispatch
        )
        return {
            ...stateProps,
            ...dispatchProps
        }
    }
    useEffect(() => {
        store.subscribe(() => {
            setMoreProps({...getMoreProps, ...getMoreProps()})
        })
    },[])
    const [moreProps, setMoreProps] = useState(getMoreProps())
    return <Cmp {...props}{...moreProps} />
}

function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}

function bindActionCreators(actionCreators, dispatch) {
    let obj = {}
    for (let key in actionCreators) {
        obj[key] = bindActionCreator(actionCreators[key], dispatch)
    }
    return obj
}