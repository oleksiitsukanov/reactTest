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
      newMesText: 'write here...'
    },
    profilePage: {
      feeds: [
        { id: 1 , name: 'Alexey' , stars: 10 , massege: 'Yo, how are you?'},
        { id: 2 , name: 'Dima' , stars: 3 , massege: 'I`m ok!'},
        { id: 3 , name: 'Andrey' , stars: 100 , massege: 'mee too!'},
        { id: 4 , name: 'Nik' , stars: 25 , massege: 'I`m fine!'},
      ],
      newPostText: 'Messege',
      newPostName: 'Your Name'
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
    debugger;
    this._callSubscriber = observer;
  },

  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        name: this._state.profilePage.newPostName,
        stars: 20,
        massege: this._state.profilePage.newPostText
      }
      this._state.profilePage.feeds.push(newPost);
      this._state.profilePage.newPostText = '';
      this._state.profilePage.newPostName = '';
      this._callSubscriber(this);
    }
    else if(action.type === 'CHAGE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.postText;
      this._state.profilePage.newPostName = action.postName;
      this._callSubscriber(this);
    }
    else if(action.type === 'ADD-MESS'){
      let mess ={
        massege: this._state.dialogPage.newMesText
      }
      this._state.dialogPage.mes.push(mess);
      this._state.dialogPage.newMesText = '';
      this._callSubscriber(this);
    }
    else if(action.type === 'CHANGE-NEW-MWSS-TEXT'){
      debugger;
      this._state.dialogPage.newMesText = action.messText;
      this._callSubscriber(this);
    }
  }
};



export default store;