import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { filmsReducer } from "./filmsReducer";
import { mainInitialState, mainReducer } from "./mainReducer";
import { movieReducer } from "./movieReducer";
import { seriesInitialState, seriesReducer } from "./seriesReducer";

const initialState: RootState = {
  films: {
    filmsAwait: {
      value: null,
      error: null,
    },
    filmsPopular: {
      value: null,
      error: null,
    },
    filmsTop: {
      value: null,
      error: null
    }
  },
  movie: {
    movie: {
      value: null,
      error: null,
    }
  },
  series: seriesInitialState,
  main: mainInitialState
}

const rootReducer = combineReducers({
  films: filmsReducer,
  movie: movieReducer,
  series: seriesReducer,
  main: mainReducer
})

export const reducer = (state: RootState = initialState, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// export const reducer = (state: RootState = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//       return {...state, ...action.payload};
//     default:
//       return state;
//   }
// };

export type RootState = ReturnType<typeof rootReducer>