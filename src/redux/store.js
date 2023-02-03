import { createStore } from "redux";
import reducer from "./reducer/manageReducer";

export const store = createStore(reducer);