import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice";
import CategoriesSlice from "./slices/CategoriesSlice";
import SearchSlice from "./slices/SearchSlice";
const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category: CategoriesSlice,
        search:SearchSlice
    },
});
export default Store;