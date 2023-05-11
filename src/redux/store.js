import {applyMiddleware, createStore} from "redux";
import MealsReducer from "./reducer/mealReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk"


const store = createStore(
    MealsReducer,
    composeWithDevTools(applyMiddleware(thunk))

)

export default store