

export const LOADING_ACTION = { type: "loading" }

export const SUCCESS_ACTION = (item) => {
    return {
        type: "success",
        payload: item
    }
}

export const ADD_ACTION = (elem) => {
    return {
        type: "cart",
        payload: elem,

    }
}

export const DELETE_ACTION = (name) => {
    return {
        type: "delete",
        payload: name
    }

}

export const CHANGE_PRICE = (elem) => {
    return {
        type: 'change_price',
        payload: elem
    }
}