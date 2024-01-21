"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 bg-black/10 relative' id="otzyvy">
			<div className='container mx-auto'>

				<h4 className='text-center text-2xl sm:text-4xl font-bold mb-14 uppercase text-white'>
					Что говорят о нас клиенты
				</h4>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>
					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0 text-white">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3 '>
								<p className='font-semibold mb-2'>
									Мигель Сергей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Очень довольны услугами компании! Взяли в аренду погрузчик на стройплощадке, и работа шла на удивление быстро. Техника в отличном состоянии, оперативная поддержка и адекватные цены. Рекомендуем!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-white">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Матвей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Арендовали у них экскаватор для земельных работ. Все прошло гладко, оператор был опытным и внимательным. Техника работала без сбоев, что сэкономило нам много времени. Очень довольны сервисом!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-white">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Андрей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Компания предоставляет отличные услуги по аренде строительной техники. Мы брали у них погрузчик для складских работ. Техника была новой, оператор профессиональный, и все выполнено в срок. Будем обращаться еще!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-white">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломач Алексей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Сотрудничество с данной компанией было приятным опытом. Арендовали у них экскаватор для выемки фундамента. Техника прибыла вовремя, была чистой и готовой к работе. Профессиональный подход и уважительное отношение к клиентам!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-white">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Лукашевич Гена
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Отличный выбор для аренды строительной техники! Мы брали у них погрузчик на стройке, и результат превзошел наши ожидания. Техника справилась с задачей на отлично, а цены оказались более чем разумными. С уверенностью рекомендуем всем!
								</p>
							</div>
						</div>
					</div>


				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp