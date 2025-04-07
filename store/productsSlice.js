// store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, title: 'School Collection', price: '$80', image: 'kid-01.jpg' },
    { id: 2, title: 'Summer Cap', price: '$30', image: 'kid-02.jpg' },
    { id: 3, title: 'Classic Kid', price: '$50', image: 'kid-03.jpg' },
    { id: 4, title: 'Classic Kid', price: '$50', image: 'kid-03.jpg' },
    { id: 5, title: 'Classic Kid', price: '$50', image: 'kid-03.jpg' },
    // يمكنك إضافة المزيد من المنتجات هنا
  ],
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;