const initialState = {
    cart: [],
    total: 0
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                cart: state.cart.concat(action.item),
                total: state.total += action.item.price
            }
        case 'DELETE_ITEM':
            return {
                cart: state.cart.filter(item => item.id !== action.item.id),
                total: state.total -= action.item.price
            }

        default:
            return state

    }
}