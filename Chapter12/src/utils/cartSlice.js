import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    //state
    initialState:{
        items:[]
    },
    //reducer which is object it takes a different types of action.(ex-addItem,removeItem,clearCart)
    reducers:{
        //reducer function modifie our state based on action.
        //we are mutating the state over here.
        //reducer takes two parameter state and action.
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length = 0;//[]
        }
    }
})

//here we have exported our actions.
export const {addItem,removeItem,clearCart} = cartSlice.actions;

//exported reducer.
export default cartSlice.reducer;

/**
Inside cartSlice first we have added name of cartSlice and then we have added initialState and then we are making reducer
object which is collection of action and then finally we will exported our action and reducer.
 */