import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, persistedState, middleware);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
