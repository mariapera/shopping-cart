import { useEffect } from 'react'
import CartItem from './components/CartItem'
import { useCart } from './context/cartContext'
import ShoppingCart from './components/ShoppingCart'
import {
	getItemFromStorage,
	getParsedItemFromStorage,
} from './utility/localStorageFns'

function App() {
	const { allItems, setItems, setCartItemsFromLocalStorage } = useCart()

	useEffect(() => {
		setItems()
		if (
			getItemFromStorage('cartItems') !== null &&
			getParsedItemFromStorage('cartItems')?.length !== 0
		) {
			setCartItemsFromLocalStorage()
		}
	}, [])

	return (
		<div className='grid place-items-center py-20 '>
			<h1 className='mb-16 px-10 lg:text-5xl md:text-4xl text-3xl italic text-center text-gray-500 '>
				Trend Alert: Must-Have Outfits of the Season
			</h1>
			<ShoppingCart />
			<div className='lg:px-6 px-10 grid xl:grid-cols-3 lg:grid-cols-2 place-items-start gap-10'>
				{allItems.map(item => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default App
