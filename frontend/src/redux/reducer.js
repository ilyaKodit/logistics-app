import {TEST} from "./actions";

const initialState = {
    test: 'test'
};

export default function (oldState = initialState, action) {
    switch (action.type) {
        case TEST:
            return {

            };

        default:
            return oldState;
    }
};
