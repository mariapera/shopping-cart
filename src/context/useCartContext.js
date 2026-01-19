import { useContext } from 'react'
import { CartContext } from './cartContext.jsx'

export function useCartContext() {
	return useContext(CartContext)
}
