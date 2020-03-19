let rerenderTree;

let state = {
  data: {
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
      newPostText: 'Messege'
    },
    freandsPage: [
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan1' , id: 1},
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan2' , id: 2},
      { avatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png' , name: 'Ivan3' , id: 3}
    ]
  },

  getNewMessText(){
    return this.data.dialogPage.newMesText;
  },

  getFreands(){
    return this.data.freandsPage;
  },

  getDialogsNames(){
    return this.data.dialogPage.dial;
  },

  getDialogsMess(){
    return this.data.dialogPage.mes;
  },

  getProfileFeeds(){
    return this.data.profilePage.feeds;
  },

  getProfileMess(){
    return this.data.profilePage.newPostText;
  },

  addPost(){
    let newPost = {
      id: 5,
      name: 'Vitalik',
      stars: 20,
      massege: this.data.profilePage.newPostText
    }
    this.data.profilePage.feeds.push(newPost);
    this.data.profilePage.newPostText = '';
    rerenderTree(this);
  },
  
  changeNewPostText(postText){
    this.data.profilePage.newPostText = postText;
    rerenderTree(this);
  },
  
  addMess(){
    let mess ={
      massege: this.data.dialogPage.newMesText
    }
    this.data.dialogPage.mes.push(mess);
    this.data.dialogPage.newMesText = '';
    rerenderTree(this);
  },
  
  chengeNewMessText(messText){
    this.data.dialogPage.newMesText = messText;
    rerenderTree(this);
  }
};

export const subscribe = (observer) => {
  debugger;
  rerenderTree = observer;
}


export default state;