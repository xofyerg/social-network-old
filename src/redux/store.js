import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 22 },
        { id: 2, message: "It's my first post", likesCount: 6 },
      ],
      newPostText: "My new post!",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimas" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Misha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Thank you very much" },
        { id: 3, message: "OMG CATS" },
      ],
      newMessageBody: "I send your my dick answer me!",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Friendo" },
        { id: 2, name: "Capybara" },
        { id: 3, name: "Kruglov" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed!");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
