/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import Modal from '../../../shared/modal';

import photo1 from './images/kcdzurich01.jpg';
import photo2 from './images/kcdzurich02.jpg';
import photo4 from './images/kcdzurich04.jpg';
import photo5 from './images/kcdzurich05.jpg';
import photo6 from './images/kcdzurich06.jpg';
import photo8 from './images/kcdzurich08.jpg';
import photo12 from './images/kcdzurich12.jpg';
import photo13 from './images/kcdzurich13.jpg';
import photo14 from './images/kcdzurich14.jpg';
import photo15 from './images/kcdzurich15.jpg';
import photo16 from './images/kcdzurich16.jpg';
import photo19 from './images/kcdzurich19.jpg';
import photo20 from './images/kcdzurich20.jpg';
import photo21 from './images/kcdzurich21.jpg';
import photo23 from './images/kcdzurich23.jpg';
import photo24 from './images/kcdzurich24.jpg';
import photo26 from './images/kcdzurich26.jpg';
import photo27 from './images/kcdzurich27.jpg';
import photo28 from './images/kcdzurich28.jpg';
import photo31 from './images/kcdzurich31.jpg';
import photo32 from './images/kcdzurich32.jpg';
import photo33 from './images/kcdzurich33.jpg';
import photo38 from './images/kcdzurich38.jpg';
import photo39 from './images/kcdzurich39.jpg';
import photo40 from './images/kcdzurich40.jpg';
import photo41 from './images/kcdzurich41.jpg';
import photo46 from './images/kcdzurich46.jpg';
import photo47 from './images/kcdzurich47.jpg';
import photo48 from './images/kcdzurich48.jpg';
import photo49 from './images/kcdzurich49.jpg';
import photo50 from './images/kcdzurich50.jpg';
import photo51 from './images/kcdzurich51.jpg';
import photo53 from './images/kcdzurich53.jpg';
import photo55 from './images/kcdzurich55.jpg';
import photo56 from './images/kcdzurich56.jpg';
import photo58 from './images/kcdzurich58.jpg';
import photo60 from './images/kcdzurich60.jpg';
import photo61 from './images/kcdzurich61.jpg';
import photo65 from './images/kcdzurich65.jpg';
import photo67 from './images/kcdzurich67.jpg';
import photo68 from './images/kcdzurich68.jpg';
import photo70 from './images/kcdzurich70.jpg';
import photo73 from './images/kcdzurich73.jpg';
import photo77 from './images/kcdzurich77.jpg';
import photo79 from './images/kcdzurich79.jpg';
import photo81 from './images/kcdzurich81.jpg';
import ArrowRight from './svg/arrow-right.inline.svg';

const TITLE = 'Photo gallery';
const ITEMS = [
  { photo: photo1 },
  { photo: photo2 },
  { photo: photo4 },
  { photo: photo5 },
  { photo: photo6 },
  { photo: photo8 },
  { photo: photo12 },
  { photo: photo13 },
  { photo: photo14 },
  { photo: photo15 },
  { photo: photo16 },
  { photo: photo19 },
  { photo: photo20 },
  { photo: photo21 },
  { photo: photo23 },
  { photo: photo24 },
  { photo: photo26 },
  { photo: photo27 },
  { photo: photo28 },
  { photo: photo31 },
  { photo: photo32 },
  { photo: photo33 },
  { photo: photo38 },
  { photo: photo39 },
  { photo: photo40 },
  { photo: photo41 },
  { photo: photo47 },
  { photo: photo48 },
  { photo: photo46 },
  { photo: photo49 },
  { photo: photo50 },
  { photo: photo51 },
  { photo: photo53 },
  { photo: photo55 },
  { photo: photo56 },
  { photo: photo58 },
  { photo: photo60 },
  { photo: photo61 },
  { photo: photo65 },
  { photo: photo67 },
  { photo: photo68 },
  { photo: photo70 },
  { photo: photo73 },
  { photo: photo77 },
  { photo: photo79 },
  { photo: photo81 },
];

const Gallery = () => {
  const sliderRef = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activePhoto, setActivePhoto] = useState('');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(null);

  const handleModalShow = (photo) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setActivePhoto(photo);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  const handleSliderChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    setSlidesPerView(swiper.params.slidesPerView);
  };

  return (
    <section className="safe-paddings relative bg-white py-16 md:py-24 sm:py-16">
      <div className="container flex flex-col">
        <header className="flex items-baseline justify-between">
          <h2 className="text-6xl font-bold leading-tight text-primary-1 md:text-2xl">{TITLE}</h2>
          <p>
            <span className="text-primary mr-1.5 text-3xl font-semibold">
              {`${activeSlideIndex + 1}${
                slidesPerView >= 2 ? `–${activeSlideIndex + slidesPerView}` : ''
              }`}
            </span>
            <span className="text-lg font-semibold text-primary-5">/ {ITEMS.length}</span>
          </p>
        </header>
        <div className="relative mt-14 xl:mt-10 lg:mt-8 md:mt-4">
          <button
            className="prev-slide group-prev absolute -left-[70px] top-0 bottom-0 z-20 m-auto flex h-9 w-9 items-center justify-center rounded-full text-[#b5b5b5] transition-colors duration-200 disabled:opacity-50"
            type="button"
          >
            <span className="sr-only">Prev</span>
            <ArrowRight className="h-auto w-full -rotate-180 lg:w-6" />
          </button>
          <button
            className="next-slide group-next absolute -right-[70px] top-0 bottom-0 z-20 m-auto flex h-9 w-9 items-center justify-center rounded-full text-[#b5b5b5] transition-colors duration-200 disabled:opacity-50"
            type="button"
          >
            <span className="sr-only">Next</span>
            <ArrowRight className="h-auto w-full lg:w-6" />
          </button>
          <Swiper
            ref={sliderRef}
            spaceBetween={32}
            slidesPerView={4}
            slidesPerGroup={4}
            modules={[Navigation]}
            navigation={{
              nextEl: '.next-slide',
              prevEl: '.prev-slide',
            }}
            breakpoints={{
              200: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
              },
              540: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            onInit={(swiper) => setSlidesPerView(swiper.params.slidesPerView)}
            onSlideChange={(swiper) => handleSliderChange(swiper)}
          >
            {ITEMS.map(({ photo }, index) => (
              <SwiperSlide key={index} virtualIndex={index} onClick={() => handleModalShow(photo)}>
                <img
                  className="w-full cursor-pointer"
                  src={photo}
                  width={280}
                  height={186}
                  loading="lazy"
                  alt="Gallery item"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Modal
          modalData={{
            activePhoto,
            sliderRef,
            sliderIndex: activeSlideIndex,
          }}
          isVisible={isModalVisible}
          onModalHide={handleModalHide}
        />
      </div>
    </section>
  );
};

export default Gallery;
