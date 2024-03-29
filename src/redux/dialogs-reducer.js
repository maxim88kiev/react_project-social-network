const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi 22'},
        {id: 3, message: 'Hi 33'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE, newMessageBody});
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default dialogsReducer;