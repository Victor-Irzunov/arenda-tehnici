import { BtnComp } from "@/components/btn/BtnComp"
import Image from "next/image"

const FotoSection = ({handleOrderClick}) => {
	return (
		<section className="bg-[#F17C0D] py-20 min-h-screen relative">
			<div className='container mx-auto'>
				<div className=''>
					<div className='flex sd:flex-row xz:flex-col justify-between sd:mb-4 xz:mb-0'>
						<div className='my-2'>
							<Image src='/fotoSection/1.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
						<div className='my-2'>
							<Image src='/fotoSection/2.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
						<div className='my-2'>
							<Image src='/fotoSection/3.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col justify-between'>
						<div className='my-2'>
							<Image src='/fotoSection/4.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
						<div className='my-2'>
							<Image src='/fotoSection/5.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
						<div className='my-2'>
							<Image src='/fotoSection/6.webp' className="shadow-xl" alt='Фото техники' width={370} height={370} />
						</div>
					</div>
				</div>

				<div className='mt-16 text-white text-center'>
					<h6 className='sd:text-5xl xz:text-3xl'>
						Информация для арендаторов
					</h6>
					<p className='mt-6'>
						Если у нас временно нет нужной вам техники, не переживайте. Просто позвоните нам, и мы сделаем все возможное, чтобы предоставить вам необходимое оборудование в течение дня. Мы гарантируем выгодные тарифы и профессиональный сервис для вашего проекта.
					</p>
				</div>
				<div className='mt-16 text-center'>
					<BtnComp title='Нужна помощь' handleOrderClick={handleOrderClick} />
				</div>
			</div>
		</section>
	)
}

export default FotoSection