import { Context, createWrapper } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { reducer, RootState } from "./reducers";

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

// export type AppDispatch = typeof 
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types