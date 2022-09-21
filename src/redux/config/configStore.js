import { configureStore } from "@reduxjs/toolkit";
import { user } from "../modules/user";



const store = configureStore({
    reducer: { 
       user: user.reducer
    },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;