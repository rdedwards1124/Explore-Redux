// DOM elements
const valueEl = document.getElementById('value')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const plusFiveBtn = document.getElementById('plus-five')
const minusFiveBtn = document.getElementById('minus-five')
const incrementOdd = document.getElementById('increment-odd')
const incrementAsync = document.getElementById('increment-async')

// initial state value
const initialState = {
    value: 0
}

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'counter/incrementedFive':
            return { value: state.value + 5 }
        case 'counter/decrementedFive':
            return { value: state.value - 5 }
        default:
        return state
    }
}

// action object definitions
const addAction = {
  type: 'counter/incremented'
}

const subAction = {
  type: 'counter/decremented'
}

const addFiveAction = {
  type: 'counter/incrementedFive'
}

const subFiveAction = {
  type: 'counter/decrementedFive'
}

// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
}

// establishing dispatch functions
const addOne = () => {
  store.dispatch(addAction)
}

const subOne = () => {
  store.dispatch(subAction)
}

const addFive = () => {
  store.dispatch(addFiveAction)
}

const subFive = () => {
  store.dispatch(subFiveAction)
}

const incrementIfOdd = () => {
  if(store.getState().value % 2 !== 0) {
    store.dispatch(addAction)
  }
}

const incrementOneSecond = () => {
  setTimeout(() => {
    store.dispatch(addAction)
  }, 1000);
}

// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)
plusFiveBtn.addEventListener('click', addFive)
minusFiveBtn.addEventListener('click', subFive)
incrementOdd.addEventListener('click', incrementIfOdd)
incrementAsync.addEventListener('click', incrementOneSecond)

// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)