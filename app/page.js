"use client"
import FotoSection from "@/components/sections/fotoSection/FotoSection"
import BookingSection from "@/components/sections/booking/BookingSection"
import CatalogSection from "@/components/sections/catalog/CatalogSection"
import ConsultationSection from "@/components/sections/consultation/ConsultationSection"
import DeliverySection from "@/components/sections/delivery/DeliverySection"
import Preimushestva from "@/components/sections/preimushestva/Preimushestva"
import SliderComp from "@/components/sliderComp/SliderComp"
import PrizyvSections from "@/components/sections/prizyv/PrizyvSections"
import { useState } from "react"
import Modal from "@/components/modal/Modal"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon bg-center' />

      <section className='relative xz:pt-10 xs:pt-20 min-h-[80vh]'>
        <div className='container mx-auto'>

          <div className='mx-auto sd:w-2/3 xz:w-full text-center'>
            <h1 className='text-white sd:text-6xl xz:text-5xl font-bold'>
              Аренда <span className="text-yellow-500">спецтехники</span><br/>  с водителем
            </h1>

            <div className='sd:mt-52 xz:mt-40'>
              <a
                className="btn bg-yellow-500 border-none rounded-full sd:btn-lg font-bold sd:text-2xl xz:text-xl"
                href="tel:8029"
              >
                +375 29 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>

      <Preimushestva />
      <BookingSection />
      <CatalogSection handleOrderClick={handleOrderClick} />
      <DeliverySection handleOrderClick={handleOrderClick} />
      <ConsultationSection handleOrderClick={handleOrderClick} />
      <FotoSection handleOrderClick={handleOrderClick} />
      <SliderComp />
      <PrizyvSections handleOrderClick={handleOrderClick} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  )
}
