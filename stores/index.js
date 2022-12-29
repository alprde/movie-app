import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";

import movies from "./movies";


export const store = configureStore({
    reducer: {
        movies
    }
})
const makeStore = () => store

export const storeWrapper = createWrapper(makeStore);
