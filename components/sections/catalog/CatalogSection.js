import Image from "next/image"
import { catalogData } from "@/constans/dataCatalog"

const CatalogSection = ({ handleOrderClick }) => {
	return (
		<section className="py-20 relative bg-white" id="catalog">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h3 className='sd:text-5xl xz:text-3xl font-light'>
						Каталог
					</h3>
					<p className='mt-5 text-lg'>
						Бронируйте пожалуйста технику заранее, чтобы гарантировать доступность для вашего проекта. Наш разнообразный каталог предоставляет широкий выбор экскаваторов и другой спецтехники, подходящей под различные задачи.
					</p>
				</div>
				<div className='mt-20'>
					{
						catalogData.map(el => {
							return (
								<div className='flex sd:flex-row xz:flex-col sd:mb-28 xz:mb-20' key={el.id}>
									<div className='sd:w-1/2 xz:w-full'>
										<Image src={el.img} alt={el.alt} width={200} height={200} className="w-full" />
									</div>
									<div className='sd:ml-12 xz:ml-0 sd:mt-0 xz:mt-8 sd:w-1/2 xz:w-full'>
										<div className='flex sd:flex-row xz:flex-col justify-between sd:items-center xz:items-start'>
											<h4 className='sd:text-3xl xz:text-2xl'>
												{el.title}
											</h4>
											<div className={`badge ${el.status ? 'badge-accent' : 'badge-secondary'} badge-outline sd:mt-0 xz:mt-5`}>
												{
													el.status ? 'свободен' : 'уточняйте'
												}
											</div>
										</div>
										<ul className='sd:mt-8 xz:mt-4'>
											{
												el.info.map(elem => {
													return (
														<li className='flex justify-between mb-2 sd:text-base xz:text-sm' key={elem.id}>
															<p className=''>
																{elem.name}
															</p>
															<p className='font-semibold'>
																{elem.property}
															</p>
														</li>
													)
												})
											}
										</ul>

										<p className='font-light mt-5'>
											Стоимость аренды за час:
										</p>
										<p className='sd:text-xl xz:text-base font-bold mt-1'>
											{el.price}
										</p>
										<div className='mt-5'>
											<button
												className={`btn rounded-full ${el.status ? "btn-primary" : 'btn-secondary'} border-none btn-xl text-white text-lg`}
												onClick={()=>handleOrderClick(`${el.status ? 'Заказать технику' : 'Уточнить наличие'}`)}
											>
												{el.status ? 'Заказать технику' : 'Уточнить наличие'}
											</button>
										</div>
									</div>
								</div>
							)
						})
					}

				</div>

			</div>
		</section>
	)
}

export default CatalogSection