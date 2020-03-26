import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import freandsReducer from "./freandsReducer";
import usersReducer from './usersReducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  freandsPage: freandsReducer,
  usersPage: usersReducer
});

let store = createStore(redusers);

export default store;