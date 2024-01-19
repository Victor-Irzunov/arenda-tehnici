

const BookingSection = () => {
	return (
		<section className="bg-primary sd:py-28 xz:py-20 relative">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between items-center'>
					<div className='sd:w-3/5 xz:w-full xz:text-center sd:text-left'>
						<h2 className='sd:text-5xl xz:text-4xl font-light text-white '>
							Закажите экскаватор по выгодному тарифу, позвонив нам
						</h2>
					</div>
					<div className='sd:mt-0 xz:mt-16'>
						<a href="tel:8029" className="btn bg-[#3C496F] btn-lg border-none rounded-full text-white text-2xl">
							+375 29 000-00-00
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BookingSection