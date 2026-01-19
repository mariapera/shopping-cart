import { useCartContext } from "../context/useCartContext"

function CartButtons({item, fromCart}) {
  const {addToCart, updateQuantity, removeFromCart} = useCartContext()

  return (
		<div className='absolute top-5 right-5 w-max'>
			<div>
				{!item.inCart ? (
					<button
						type='button'
						className='bg-zinc-400 border rounded-md px-2 py-1 text-white text-sm cursor-pointer hover:bg-zinc-500 transition-colors'
						onClick={() => addToCart(item)}>
						+ Add to cart
					</button>
				) : (
					<div className={`flex flex-col gap-y-1 ${fromCart && 'scale-90'}`}>
						<div className='flex items-center gap-x-1'>
							<button
								type='button'
								className='w-6 grid place-items-center border-zinc-200 border rounded-lg text-sm text-zinc-700 cursor-pointer'
								onClick={() => {
									if (item.quantity === 1) {
										removeFromCart(item)
									} else {
										updateQuantity(item, -1)
									}
								}}>
								-
							</button>
							<p className='flex items-center gap-x-1'>
								<span className='w-6 h-6 grid place-items-center border rounded-full  border-zinc-200 text-xs text-zinc-700 bg-green-100'>
									{item.quantity}
								</span>
								<span className='text-xs text-zinc-600'>in cart</span>
							</p>
							<button
								type='button'
								className='grid place-items-center border-zinc-200 border rounded-lg w-6 text-sm text-zinc-700 cursor-pointer'
								onClick={() => updateQuantity(item, 1)}>
								+
							</button>
						</div>
						<button
							type='button'
							className='self-center px-2 py-1 border rounded-md bg-pink-300 text-white text-xs cursor-pointer hover:bg-pink-400 transition-colors'
							onClick={() => removeFromCart(item)}>
							Remove
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
export default CartButtons