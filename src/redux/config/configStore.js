import { configureStore } from "@reduxjs/toolkit";
import { user } from "../modules/user";
import cardlist from "../modules/cardlist"
import partilist from "../modules/partilist"



const store = configureStore({
    reducer: { 
       user: user.reducer,
       cardlist,
       partilist
    },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;