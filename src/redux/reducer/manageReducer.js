import { NEXT_VIDEO, PLAY_AND_PAUSE, SHOW_FORM } from "../actionType";

const initialState = {
    nextVideo: false,
    showForm: false,
    playPause: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_VIDEO:
            return {
                ...state,
                nextVideo: true
            }

        case SHOW_FORM:
            return {
                ...state,
                showForm: true
            }
        case PLAY_AND_PAUSE:
            return {
                ...state,
                playPause: false
            }
        default:
            return state
    }
}

export default reducer;