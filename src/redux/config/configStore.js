import { configureStore } from "@reduxjs/toolkit";
import { user } from "../modules/user";
import cardlist from "../modules/cardlist";
import detail from "../modules/detail";
import partilist from "../modules/partilist"
import application from "../modules/application"



const store = configureStore({
    reducer: { 
       user: user.reducer,
       cardlist,
       partilist,
       detail,
       application
    },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;