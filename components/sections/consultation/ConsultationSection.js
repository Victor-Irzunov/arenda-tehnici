import Image from "next/image"


const ConsultationSection = ({handleOrderClick}) => {
	return (
		<section className=" bg-white pt-36 pb-24 relative min-h-screen">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col sd:mx-32 xz:mx-0'>
					<div className='relative sd:w-1/2 xz:w-full'>
						<div className='bg-primary sd:w-[380px] sd:h-[420px] shadow-2xl xz:[150px] xz:h-[300px]' />
						<div className='absolute sd:-top-20 xz:-top-[4.25rem] left-8'>
							<Image src='/manager.webp' className="shadow-2xl" alt='Менеджер для консультации по аренде' width={380} height={380} />
						</div>
					</div>

					<div className='relative'>
						<div className="card w-auto bg-base-100 shadow-xl rounded-none sd:absolute -left-20 xz:static">
							<div className="card-body">
								<h5 className="sd:text-5xl xz:text-3xl mb-5">
									Профессиональная консультация
								</h5>
								<p className="text-gray-600">
									Наши эксперты готовы предоставить вам профессиональную консультацию по аренде спецтехники. Мы поможем определить оптимальное решение для вашей задачи, расскажем о условиях аренды и подробно ответим на все ваши вопросы.
								</p>
								<div className="card-actions justify-end mt-9">
									<button
										className="btn btn-primary rounded-full text-white"
										onClick={()=>handleOrderClick('Получить консультацию')}
									>
										Получить консультацию
									</button>
								</div>
								<p className='mt-10 font-light text-xl'>
								Я жду вашего звонка!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConsultationSection