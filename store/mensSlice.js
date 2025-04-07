// store/mensSlice.js
import { createSlice } from '@reduxjs/toolkit';

const mensSlice = createSlice({
  name: 'mens',
  initialState: [
    { id: 1, title: 'Classic Spring', price: '$120', image: 'men-01.jpg' },
    { id: 2, title: 'Air Force 1 X', price: '$90', image: 'men-02.jpg' },
    { id: 3, title: 'Love Nana 20', price: '$70', image: 'men-03.jpg' },
    { id: 4, title: 'T-Shirt', price: '$20', image: 'men-01.jpg' },
    { id: 5, title: 'Jeans', price: '$40', image: 'men-02.jpg' },
    { id: 6, title: 'Jeans', price: '$40', image: 'men-02.jpg' },
    { id: 7, title: 'Jeans', price: '$40', image: 'men-02.jpg' },
    { id: 8, title: 'Jeans', price: '$40', image: 'men-02.jpg' },
  ],
  reducers: {},
});

export const selectMensProducts = (state) => state.mens;
export default mensSlice.reducer;