import { createSlice } from '@reduxjs/toolkit';

const womensSilce = createSlice({
    name : 'womens',
    initialState:[
        { id: 1, title: 'Elegant Dress', price: '$150', image: 'women-01.jpg' },
        { id: 2, title: 'Casual Blouse', price: '$60', image: 'women-02.jpg' },
        { id: 3, title: 'Stylish Jeans', price: '$80', image: 'women-03.jpg' },
        { id: 4, title: 'Summer Skirt', price: '$45', image: 'women-01.jpg' },
        { id: 5, title: 'Chic Jacket', price: '$120', image: 'women-02.jpg' },
    ],
    reducers: {},
})

export const selectWomensProducts = (state) => state.womens;
export default womensSilce.reducer;