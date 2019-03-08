export const ADD_ITEM = (name, price, id) => {
    return {
        type: 'ADD_ITEM',
        item: { name: name, price: price, id: id }
    }
}
export const DELETE_ITEM = (name, price, id) => {
    return {
        type: 'DELETE_ITEM',
        item: { name: name, price: price, id: id }
    }
}
