

export default function reducer(state, action) {

    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            };
        case "success":
            return {
                ...state,
                result: action.payload,
                isLoading: false,
                isError: false,
                isAuth: true,

            };
        case "error":
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,

            };
        case "SIGN_OUT":
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: false,
            }
        default: return state

    }
}