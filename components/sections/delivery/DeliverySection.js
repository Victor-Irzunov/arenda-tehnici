

const DeliverySection = ({handleOrderClick}) => {
	return (
		<section className="bg-secondary sd:py-28 xz:py-20 relative">
			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='sd:px-14 xz:px-3'>
						<h5 className='sd:text-5xl xz:text-4xl font-light text-white '>
							Доставка в любой регион Беларуси
						</h5>
					</div>
					<div className='mt-16'>
						<button
							className="btn bg-[#fff] btn-lg border-none rounded-full text-2xl"
							onClick={()=>handleOrderClick('Заказать доставку')}
						>
							Заказать доставку
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DeliverySection