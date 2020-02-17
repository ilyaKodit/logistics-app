import {TEST} from "./actions";

export const LoadingPhotographers = (data) => {
    return {
        type: TEST,
        data: data,
    }
};

