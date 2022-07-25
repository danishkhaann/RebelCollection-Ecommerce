export const addCart = (product) =>{
    return{
        type:"ADDCART",
        payload : product
    }
}

export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload: product
    }
}