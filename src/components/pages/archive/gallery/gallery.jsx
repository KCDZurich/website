/* eslint-disable import/no-unresolved */
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState, useRef } from 'react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';

import Modal from 'components/shared/modal';

import Arrow from './svg/arrow.inline.svg';

import './gallery.css';

const title = 'photo gallery';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "archive-2023" }, extension: { eq: "jpg" } }) {
        nodes {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 260)
          }
        }
      }
    }
  `);
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
            {data.allFile.nodes.map((photo, index) => {
              const image = getImage(photo);

              return (
                <SwiperSlide
                  key={index}
                  virtualIndex={index}
                  data-full-size-image={photo.publicURL}
                  onClick={() => handleModalShow(photo.publicURL)}
                >
                  <GatsbyImage className="cursor-pointer" image={image} alt="Gallery item" />
                </SwiperSlide>
              );
            })}
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
