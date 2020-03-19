const ADD_MESS = 'ADD-MESS';
const CHANGE_NEW_MESS_TEXT = 'CHANGE-NEW-MESS-TEXT';

let initialState = {
  dial: [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Kirill' },
    { id: 3, name: 'Kostya' },
    { id: 4, name: 'Petya' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Ira' },
    { id: 7, name: 'Ivan K.' }
  ],
  mes: [
    { massege: 'Hello everyone!1'},
    { massege: 'Hello everyone!2'},
    { massege: 'Hello everyone!3'},
  ],
  newMesText: ''
}

export const dialogReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_MESS:
      let mess ={
        massege: state.newMesText
      }
      state.mes.push(mess);
      state.newMesText = '';
      return state;
    case CHANGE_NEW_MESS_TEXT:
      state.newMesText = action.messText;
      return state;
    default:
      return state;
  }
}

export const dialogActionCreator = () => {
  return {
    type: ADD_MESS
  }
}

export const changeNewDialogMessActionCreator = (text) => {
  return {
    type: CHANGE_NEW_MESS_TEXT, 
    messText: text
  }
}

export default dialogReducer;