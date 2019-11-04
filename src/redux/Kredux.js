export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState = undefined;
    let currentListeners = []

    function getState(){
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.map(lis => lis())
        return action
    }

    function subscribe(listener) {
        currentListeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        const midApi = {
            getState: store.getState,
            dispatch: store.dispatch
        }
        const middlewareChain = middlewares.map(mw => mw(midApi))
        const dispatch = compose(...middlewareChain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

function compose(...funcs) {
    const len = funcs.length
    if (len === 0) {
        return arg => arg
    } else if (len === 1) {
        return funcs[0]
    } else {
        return funcs.reduce((a, b) => (...args) => b(a(...args)))
    }
}