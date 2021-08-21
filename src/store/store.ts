import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
