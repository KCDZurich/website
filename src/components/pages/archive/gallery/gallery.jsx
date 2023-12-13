/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from 'react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';

import Modal from 'components/shared/modal';

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
import Arrow from './svg/arrow.inline.svg';

import './gallery.css';

const title = 'photo gallery';
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

  const pagination = {
    clickable: true,
    renderBullet(index, className) {
      return `<button class="w-4 h-4 mx-1 border-solid border-2 border-black ${className}" type="button"><span class="sr-only">Choose slide number ${
        index + 1
      }</span></button>`;
    },
  };

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
  };

  return (
    <section className="safe-paddings relative mt-[120px] lg:my-16 md:mt-10 sm:mt-8">
      <div className="container">
        <header className="relative z-10 flex items-center justify-between sm:flex-col sm:items-start">
          <div>
            <h2 className="font-sans-cyber text-[52px] font-bold leading-denser tracking-tight lg:text-5xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-7 max-w-[600px] text-xl leading-normal lg:text-lg">
              Welcome to our photo gallery, where we are excited to share highlights from our events
              of the past year.
            </p>
          </div>
          <div className="mt-14 flex items-center gap-x-3 sm:mt-8">
            <button
              className="prev-slide group-prev flex h-9 w-[72px] items-center justify-center border-2 border-black text-black transition-colors duration-200 disabled:opacity-20"
              type="button"
            >
              <span className="sr-only">Prev slide</span>
              <Arrow className="rotate-180" width={10} height={20} aria-hidden />
            </button>
            <button
              className="next-slide group-next flex h-9 w-[72px] items-center justify-center border-2 border-black text-black transition-colors duration-200 disabled:opacity-20"
              type="button"
            >
              <span className="sr-only">Next slide</span>
              <Arrow width={10} height={20} aria-hidden />
            </button>
          </div>
        </header>
        <div className="relative -mt-16 bg-archive-gallery bg-contain bg-center bg-no-repeat p-[52px] xl:-mt-4 lg:mt-8 lg:bg-cover lg:pb-4 sm:mt-2 sm:px-4">
          <Swiper
            className="mt-24 h-[580px] !pb-20 md:mt-4 md:h-[460px] md:!pb-4 sm:h-[500px] [@media(max-width:540px)]:h-auto"
            ref={sliderRef}
            grid={{
              rows: 2,
            }}
            navigation={{
              nextEl: '.next-slide',
              prevEl: '.prev-slide',
            }}
            pagination={pagination}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={4}
            modules={[Grid, Navigation, Pagination]}
            breakpoints={{
              200: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                grid: { rows: 1 },
              },
              540: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                grid: { rows: 2 },
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
