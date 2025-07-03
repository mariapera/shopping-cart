import CartButtons from "./CartButtons"

function CartItem({item, fromCart=false}) {
    const {name, imageUrl: image, price} = item
  return (
		<div className='group relative grid place-items-center border border-zinc-200 rounded-md bg-white p-24'>
			<img
				src={image}
				alt='Product Image'
				width={300}
				height={300}
				className={`${
					!fromCart
						? 'group-hover:-translate-y-2 transition-all duration-500'
						: ''
				}`}
			/>
			<div className='absolute left-5 bottom-5 grid place-items-start gap-y-1'>
				<h2 className={`text-zinc-700 ${!fromCart ? 'text-sm' : 'text-xs'}`}>
					{name}
				</h2>
				<span className={`text-pink-400 ${!fromCart ? 'text-sm' : 'text-xs'}`}>${price}</span>
			</div>
			<CartButtons item={item} fromCart={fromCart}/>
		</div>
	)
}
export default CartItem