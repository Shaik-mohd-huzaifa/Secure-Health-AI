import {createStore} from "redux"
import { RootReducer } from "./rootReducer"


export const Store = createStore(RootReducer)