import { createSlice } from '@reduxjs/toolkit';

const INITAIL_STATE ={
    cartList :[],
    cartCount : 0
}
const cartSlice = createSlice({
    name: "cart",//unique state
    initialState: INITAIL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item)=> item.id == action.payload.id);
            if (itemExist){
                state.cartList.forEach((item) =>{
                    if(item?.id === action.payload.id) {
                        item.count = 1
                    }
                });
            }else{
            state.cartList.push({
                ...action.payload,
                count: 1

            });
        }
            // console.log(action);
        },
        increment: (state, action) => {
            const productID = action.payload
            state.cartList.forEach((item) =>{
                if(item?.id === productID) {
                    item.count++
                }
            })
        },
        decrement: (state,action) => {
            const productID = action.payload
            state.cartList.forEach((item) =>{
                if(item?.id === productID) {
                    item.count--
                }
            })
        },

    }

})
export const {addToCart, increment, decrement} = cartSlice.actions;
export default cartSlice.reducer;