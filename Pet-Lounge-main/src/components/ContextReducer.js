import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.petName, 
                days: action.days, packages: action.packages, 
                price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "UPDATE":
            let arr = [...state]
            arr.find((pet, index) => {
                if (pet.id === action.id) {
                    console.log(pet.days, parseInt(action.days), action.price + (pet.price))
                    arr[index] = { ...pet,days:parseInt(action.days) + pet.days, price: action.price + pet.price }
                }
                return arr
            })
            return arr
        case "DROP":
            let empArray = []
            return empArray
        default:
            console.log("Error in Reducer")
    }

}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);