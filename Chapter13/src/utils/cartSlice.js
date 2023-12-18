import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    //state
    initialState:{
        items:[]
    },
    //it is reducers which is object it takes a different types of action or multiple reducer.(ex-addItem,removeItem,clearCart)
    reducers:{
        //reducers function modifie our state based on action.
        //we are mutating the state over here.
        //reducer takes two parameter state and action.
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            //we cannot read state directly like this.
            //console.log(state)
            //if we have to read state we will use "current" function which come from 'reduxjs/toolkit
            // console.log(current(state))
            state.items.pop()
        },
        clearCart:(state)=>{
            //state = [] we cannot modified state directly here it will modified only local state.
            //console.log(current(state))
            state.items.length = 0; //[]

            // return [] whaterver we will return will replace in state
        }
    }
})

//Here we have exported our actions.
export const {addItem,removeItem,clearCart} = cartSlice.actions;

//exported reducer.
export default cartSlice.reducer;

/**
Inside cartSlice first we have added name of cartSlice and then we have added initialState and then we are making reducer
object which is collection of action and then finally we will exported our action and reducer.
 */