import { BtnComp } from "@/components/btn/BtnComp"
import Image from "next/image"


const PrizyvSections = ({handleOrderClick}) => {
	return (
		<section className="relative sd:py-20 xz:py-16 bg-white min-h-screen">
			<div className='container mx-auto'>

				<div className='sd:px-48 xz:px-0'>
					<Image src='/fon4.webp' alt='Фото для призыва к действию' width={2000} height={862} className="w-full" />
				</div>
				<div className='sd:mt-20 xz:mt-8 text-center sd:px-10 xz:px-0'>
					<h6 className='sd:text-5xl xz:text-3xl'>
						Требуется аренда строительной техники прямо сейчас?
					</h6>
					<p className='mt-8 text-lg sd:px-28 xz:px-2'>
						Нажмите кнопку "Заказать технику" или позвоните{' '}<br className="sd:hidden xz:block" />
						<a href="tel:8029" className="underline font-bold">
							+37529 000-00-00
						</a>
						, и в ближайшее время наш специалист свяжется с вами, предложит оптимальный вариант, и мы гарантируем, что вы останетесь довольны.
					</p>
				</div>

				<div className='mt-12 text-center'>
					<BtnComp title='Заказать технику' handleOrderClick={handleOrderClick} />
				</div>
			</div>
		</section>
	)
}

export default PrizyvSections