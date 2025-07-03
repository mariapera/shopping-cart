import { createContext, useContext } from 'react'
import { useState } from 'react'
import { allProducts } from '../assets/data/products'
import { setItemInStorage, getItemFromStorage, getParsedItemFromStorage } from '../utility/localStorageFns'

const CartContext = createContext()

export function CartProvider({ children }) {
	const [allItems, setAllItems] = useState([])

	const setItems = () => setAllItems(allProducts)

	const addToCart = item => {
		setAllItems(prevItems => {
			return prevItems.map(prevItem => {
				if (prevItem.inCart) {
					return prevItem
				}
				return prevItem.id === item.id
					? { ...prevItem, inCart: true }
					: prevItem
			})
		})
	}

	const updateQuantity = (item, amount) => {
		setAllItems(prevItems => {
			return prevItems.map(prevItem => {
				return prevItem.id === item.id ? {...item, quantity: item.quantity + amount} : prevItem
			})
		})
	}

	const removeFromCart = (item) => {
		setAllItems(prevItems => {
			return prevItems.map(prevItem => {
				return prevItem.id === item.id ? {
					...item, quantity: 1, inCart: false} : prevItem
				})
			})
		}

	const setLocalStorage = () => {
		if(allItems.length !== 0) {
			const inCartItems = allItems.filter(item => item.inCart)
			setItemInStorage('cartItems', inCartItems)
		}
	}

	const setCartItemsFromLocalStorage = () => {
		if(getItemFromStorage('cartItems') !== null) {
			const storageItems = getParsedItemFromStorage('cartItems')
			setAllItems(prevItems => {
				return prevItems.map(prevItem => {
					const machedItem = storageItems?.find(storageItem => storageItem.id === prevItem.id)
					return machedItem ? machedItem : prevItem
				})
			})
		}
	}
	

	return (
		<CartContext.Provider
			value={{
				allItems,
				setItems,
				addToCart,
				updateQuantity,
				removeFromCart,
				setLocalStorage,
				setCartItemsFromLocalStorage,
			}}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	return useContext(CartContext)
}
