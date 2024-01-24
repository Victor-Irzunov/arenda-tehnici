import Preimushestva from "@/components/sections/Preimushestva/Preimushestva";
import Catalog from "@/components/sections/Catalog/Catalog";
import Image from "next/image";

export default function Home() {
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // const handleOrderClick = (product) => {
  //   setSelectedProduct(product);
  //   document.getElementById("my_modal_3").showModal();
  // };
  // const closeModal = () => {
  //   document.getElementById("my_modal_3").close();
  // };
  return (
    <main className="" id="main">

      <section className="min-h-screen relative">
        <div className='w-full bg-cover fon bg-center' />

        <div className='container mx-auto relative'>

          <div className='sd:pt-32 xz:pt-24'>
            <h1 className='uppercase sd:text-7xl xz:text-4xl text-white font-semibold relative z-20'>
              сайт{' '}-{' '}
              <span className="text-[#9D0D79]">
                визитка
              </span>
            </h1>
            <div className='sd:w-40 sd:h-10 xz:w-20 xz:h-5 bg-[#9D0D79] absolute sd:-bottom-3 xz:bottom-0 left-3 z-10' />
          </div>
        </div>

        <div className='container mx-auto relative mt-10'>
          <div className=''>
            <p className='text-[#9D0D79] sd:text-2xl xz:text-xl font-semibold'>
              Получайте новых клиентов из <span className="text-white">Google</span> и <span className="text-white">Яндекс</span>
            </p>
            <div className='sd:w-[45vw] xz:w-full mt-8'>
              <p className='text-white/90 sd:text-base xz:text-sm'>
                Прокачайте свой бизнес с невероятным сайтом! Закажитн у нас уникальную сайт-визитку, которая не только выделит ваш бренд, но и привлечет множество новых клиентов. Не упускайте возможность увеличить прибыль и расширить свой круг клиентов – сделайте первый шаг к успеху прямо сейчас!
              </p>
            </div>
            <div className='mt-9 flex'>
              <button className="btn btn-primary rounded-none sd:text-lg xz:text-base">
                +375 33 351-15-97
              </button>
              <button className="btn btn-secondary uppercase btn-outline rounded-none ml-4">
                написать
              </button>
            </div>
          </div>

          <div className='sd:mt-32 xz:mt-20'>
            <p className='text-white font-light tracking-wider  sd:text-base xz:text-sm'>
              Срок разработки и запуска сайта 2-3 рабочих дня. Стоимость сайта-визитки 199,00 рублей.
            </p>
          </div>
        </div>
      </section>

      <Preimushestva />
      <Catalog />

      <section className="relative bg-white py-20 xz:py-10">

        <div className='container mx-auto text-center'>
          <button className="btn animate-bounce btn-circle mb-3">
            <Image src='/svg/arrow.svg' alt='Стрелка вниз' width={20} height={20} />
          </button>
          <p className='text-[#9D0D79] uppercase text-xl mx-auto sd:w-2/3 xz:w-full'>
          Этот сайт - образец сайта-визитки всего за 199 рублей. Закажите уникальную веб-визитку прямо сейчас и раскройте перед собой двери к новым клиентам и возможностям.
          </p>
        </div>
      </section>

      {/* <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      /> */}
    </main>
  )
}
