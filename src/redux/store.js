import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import freandsReducer from "./freandsReducer";


let store = {
  _state: {
    dialogPage: {
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
    },
    profilePage: {
      feeds: [
        { id: 1 , name: 'Alexey' , stars: 10 , massege: 'Yo, how are you?'},
        { id: 2 , name: 'Dima' , stars: 3 , massege: 'I`m ok!'},
        { id: 3 , name: 'Andrey' , stars: 100 , massege: 'mee too!'},
        { id: 4 , name: 'Nik' , stars: 25 , massege: 'I`m fine!'},
      ],
      newPostText: '',
      newPostName: ''
    },
    freandsPage: [
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan1' , id: 1},
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan2' , id: 2},
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan3' , id: 3}
    ]
  },

  _callSubscriber(){},

  getNewMessText(){
    return this._state.dialogPage.newMesText;
  },

  getFreands(){
    return this._state.freandsPage;
  },

  getDialogsNames(){
    return this._state.dialogPage.dial;
  },

  getDialogsMess(){
    return this._state.dialogPage.mes;
  },

  getProfileFeeds(){
    return this._state.profilePage.feeds;
  },

  getProfileMess(){
    return this._state.profilePage.newPostText;
  },

  getProfileName(){
    return this._state.profilePage.newPostName;
  },
  

  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.freandsPage = freandsReducer(this._state.freandsPage, action);
    this._callSubscriber(this);
  }
};

export default store;