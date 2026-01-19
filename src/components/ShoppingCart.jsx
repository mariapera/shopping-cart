import { useEffect, useState } from 'react'
import { ShoppingCartIcon, XIcon } from 'lucide-react'
import CartItem from './CartItem'
import { formatCurrency } from '../utility/formatCurrency'
import { useCartContext } from '../context/useCartContext'

function ShoppingCart() {
	const [isOpen, setIsOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	const { allItems, setLocalStorage } = useCartContext()

	useEffect(() => {
		const inCartItems = allItems.filter(item => item.inCart)
		if (inCartItems.length === 0) {
			setIsOpen(false)
		}
		setCartItems(inCartItems?.reverse())

		const price = inCartItems.reduce((acc, item) => {
			return (acc += item.price * item.quantity)
		}, 0)
		setTotalPrice(price)

		setLocalStorage()
	}, [allItems, setLocalStorage])

	const showQuantityInCartItems = () => {
		const quantity = cartItems.reduce((acc, item) => {
			return acc += item.quantity
		}, 0)
		return quantity
	}


	return (
		<>
			{cartItems.length > 0 && (
				<div
					className={`w-[300px] h-screen  fixed top-0 z-30 border-l-4 border-red-200 rounded-tl-lg bg-gray-200 transition-all duration-500 ${
						isOpen ? 'right-0' : '-right-[300px]'
					}`}>
					<div className='h-16 absolute top-0 left-0 right-4 z-10 grid place-items-center bg-white rounded-lg border border-gray-300'>
						<h3 className='text-lg text-center text-gray-600'>Shopping Cart</h3>
						<button
							type='button'
							className='w-9 h-9 absolute top-3 right-5 z-20 grid place-items-center border border-gray-300 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors'
							onClick={() => setIsOpen(false)}>
							<XIcon className='text-white' />
						</button>
					</div>
					<button
						type='button'
						className='w-9 h-9 absolute top-3 -left-14 z-20 grid place-items-center border border-gray-300 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-all duration-500'
						onClick={() => setIsOpen(true)}>
						<ShoppingCartIcon className='text-white' />
						<span className='w-6 h-6 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-xs text-white bg-pink-400 hover:bg-pink-500 cursor-pointer transition-colors'>
							{/* {cartItems.length > 9 ? '9+' : cartItems.length} */}
							{showQuantityInCartItems() > 99
								? '99+'
								: showQuantityInCartItems()}
						</span>
					</button>

					<div className='h-screen pt-20 pb-24 px-4 flex flex-col gap-y-3 overflow-y-scroll'>
						{cartItems?.map(item => (
							<CartItem key={item.id} item={item} fromCart={true} />
						))}
					</div>
					<div className='h-20 absolute left-0 right-4 bottom-0 z-10 grid place-items-center bg-white rounded-lg border border-gray-300'>
						<h3 className='text-lg text-gray-500'>
							Total: {formatCurrency(totalPrice)}
						</h3>
						<button className='px-2 py-1 bg-blue-300 text-white text-sm rounded-md hover:bg-blue-400 cursor-pointer transition-colors'>
							Buy now
						</button>
					</div>
				</div>
			)}
		</>
	)
}
export default ShoppingCart
