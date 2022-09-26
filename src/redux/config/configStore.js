import { configureStore } from "@reduxjs/toolkit";
import { user } from "../modules/user";
import cardlist from "../modules/cardlist";
import detail from "../modules/detail";



const store = configureStore({
    reducer: { 
       user: user.reducer,
       cardlist,
       detail
    },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;