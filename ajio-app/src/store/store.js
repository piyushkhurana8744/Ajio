import React from 'react'
import { legacy_createStore as mystore } from "redux"
import { reducer } from "./reducer"
export const store = mystore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());