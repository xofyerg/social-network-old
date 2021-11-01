const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
