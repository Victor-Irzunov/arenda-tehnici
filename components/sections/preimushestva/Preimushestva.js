import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='py-16 relative bg-[#d9d9d9]' id="preimushestva">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h3 className='text-2xl sm:text-4xl font-bold mb-4 uppercase text-[#9D0D79] shadow-text'>
						Преимущества <br className="sd:hidden xz:block"/> сайта-визитки
					</h3>
					<p className='text-sm sm:text-lg mb-6 md:mb-14'>
						Сайт-визитка - это небольшой сайт, сфокусированный на ключевой информации. На сайте-визитке будет краткое описание товаров или услуг, преимуществ компании, а также контактные данные.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>

					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/browser.svg' alt='Простота и удобство' width={80} height={80} />
							<h4 className="card-title text-[#9D0D79] mt-3">
								Простота и удобство
							</h4>
							<p className="text-sm base-content">
								Сайт-визитка предоставляет только основную информацию, что делает его легко воспринимаемым и удобным для посетителей.
							</p>
						</div>
					</div>


					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/speed.svg' alt='Быстрое Создание' width={95} height={95} />
							<h4 className="card-title text-[#9D0D79]">
								Быстрое Создание
							</h4>
							<p className="text-sm base-content">
								Создание сайта-визитки обычно занимает меньше времени и ресурсов по сравнению с полноценным веб-сайтом.
							</p>
						</div>

					</div>



					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/contacts.svg' alt='Контактная Информация' width={100} height={100} />
							<h4 className="card-title text-[#9D0D79]">
							Контактная Информация
							</h4>
							<p className="text-sm base-content">
							Ваш сайт-визитка будет содержать информацию о ваших контактах, делая процесс связи с вами легким и прямым. Посетители могут найти ваш номер телефона, адрес электронной почты, а также ссылки на социальные сети.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}