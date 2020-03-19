import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import freandsReducer from "./freandsReducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  freandsPage: freandsReducer
});

let store = createStore(redusers);

export default store;