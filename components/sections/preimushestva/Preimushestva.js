import Image from "next/image";

export default function Preimushestva() {
  return (
    <section className="py-20 bg-[#d9d9d9] relative sd:min-h-[80vh] xz:min-h-[250vh]" id="preimushestva">
      <div className="container mx-auto absolute -top-24 left-1/2 -translate-x-1/2">
        <div className="flex sd:flex-row xz:flex-col justify-between">
          <div className="rounded-none card bg-primary shadow-2xl px-3 sd:mb-0 xz:mb-6 sd:pt-10 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/3 xz:w-full">
            <figure>
              <Image src="/svg/driver.svg" alt="Опытные водители" width={120} height={120} />
            </figure>
            <div className="card-body text-white text-center">
              <h2 className="font-extrabold text-3xl">
                Опытные водители
              </h2>
              <p className="font-semibold sd:text-lg xz:text-base mt-3">
                Наши водители экскаваторов обладают обширным опытом, способны быстро и эффективно решать любые поставленные задачи.
              </p>
            </div>
          </div>

          <div className="rounded-none card  bg-[#F17C0D] shadow-2xl px-3 sd:mb-0 xz:mb-6 sd:pt-10 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/3 xz:w-full">
            <figure>
              <Image src="/svg/tools.svg" alt="Исправная техника" width={120} height={120} />
            </figure>
            <div className="card-body text-white text-center">
              <h2 className="font-extrabold text-3xl">
                Исправная техника
              </h2>
              <p className="font-semibold sd:text-lg xz:text-base mt-3">
                Наши машины всегда находятся в отличном состоянии, готовые к эффективному выполнению задач.
              </p>
            </div>

          </div>

          <div className="rounded-none card  bg-emerald-600 shadow-2xl px-3 sd:mb-0 xz:mb-6 sd:pt-10 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/3 xz:w-full">
            <figure>
              <Image src="/svg/bank.svg" alt="Экономия" width={120} height={120} />
            </figure>
            <div className="card-body text-white text-center">
              <h2 className="font-extrabold text-3xl">
                Выгодные условия
              </h2>
              <p className="font-semibold sd:text-lg xz:text-base mt-3">
                Аренда наших экскаваторов предоставляет уникальную возможность экономии для вас. Низкие тарифы и эффективное использование техники обеспечивают высший уровень экономической выгоды.
              </p>
            </div>
          </div>


        </div>

        <div className='flex sd:flex-row xz:flex-col justify-between pt-20'>
          <div className='flex sd:w-1/3 xz:w-full items-center sd:mx-2 xz:mx-0 mb-3'>
            <Image
              src='/svg/delivery.svg'
              alt='Быстрая доставка техники'
              width={90} height={90}
              className="mr-3"
            />
            <p className='font-semibold sd:text-2xl xz:text-xl'>
              Быстрая доставка техники
            </p>
          </div>
          <div className='flex sd:w-1/3 xz:w-full items-center sd:mx-2 xz:mx-0 mb-3'>
            <Image
              src='/svg/money.svg'
              alt='Без скрытых платежей'
              width={90} height={90}
              className="mr-3"
            />
            <p className='font-semibold sd:text-2xl xz:text-xl'>
              Без скрытых платежей
            </p>
          </div>
          <div className='flex sd:w-1/3 xz:w-full items-center sd:mx-2 xz:mx-0 mb-3'>
            <Image
              src='/svg/support.svg'
              alt='Круглосуточная поддержка клиентов'
              width={100} height={100}
              className="mr-3"
            />
            <p className='font-semibold sd:text-2xl xz:text-xl'>
            Круглосуточная поддержка клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
