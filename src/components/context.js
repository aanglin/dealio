import {createContext, useState} from 'react'
import useLocalStorageState from 'use-local-storage-state'

export const Context = createContext({})

export function ContextProvider({children}) {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart',{defaultValue:[]});
    return (
    <Context.Provider value={{selectedProducts,setSelectedProducts}}>{children}</Context.Provider>
    )
}