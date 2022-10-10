


export default function reducer(state, action) {
    switch (action.type) {

        case "loading":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "success":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case "cart":
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
                cartTemp: [...state.cartTemp, action.payload],
                total : totfun(state.cartData)
            }
        case "delete":
            return {
                ...state,
                cartData: deleteFunc(state.cartData, action.payload),
                total : totfun(state.cartData)
            };
        case "plus":
            return {
                ...state,
                cartData: changefunc(state.cartData, action.payload),
                total : totfun(state.cartData)
            };
        case "rating_hl":
            return {
                ...state,
                data: funRL(state.data),
                isLoading: false
            };
        case "rating_lh":
            return {
                ...state,
                data: funLH(state.data),
                isLoading: false
            };
        case "price_lh":
            return {
                ...state,
                data: priceLH(state.data),
                isLoading: false
            };
        case "price_hl":
            return {
                ...state,
                data: priceHL(state.data),
                isLoading: false
            }
        default: return state

    }
}

function totfun(data) {
    let validate = data.reduce((acc, elem) => {
        return acc = acc + (Number(elem.price)*Number(elem.q))
    },0)
    return validate
}


function deleteFunc(data, name) {
    const validate = data.filter((elem) => {
        return elem.strMeal != name
    })
    return validate
}


function changefunc(data, temp) {
    const validate = data.map((elem) => {
        if (elem.strMeal === temp.name) {
            return { ...elem, q: Number(elem.q) + Number(temp.val) }
        } else {
            return elem
        }
    });
    return validate
}

function funRL(data) {
    data.sort((a, b) => {
        return b.rating - a.rating
    })

    return data
}

function funLH(data) {
    data.sort((a, b) => {
        return a.rating - b.rating
    })

    return data
}



function priceHL(data) {
    data.sort((a, b) => {
        return b.price - a.price
    })

    return data
}

function priceLH(data) {
    data.sort((a, b) => {
        return a.price - b.price
    })

    return data
}