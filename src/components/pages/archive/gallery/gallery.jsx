/* eslint-disable import/no-unresolved */
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Modal from 'components/shared/modal';

import Arrow from './svg/arrow.inline.svg';

import './gallery.css';

const title = 'photo gallery';

const Gallery = () => {
  const sliderThumbnailData = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "archive-2023" }, extension: { eq: "jpg" } }
        sort: { relativePath: ASC }
      ) {
        nodes {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 234, aspectRatio: 1, transformOptions: { cropFocus: CENTER })
          }
        }
      }
    }
  `);
  const sliderRef = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNextButtonDisable, setIsNextButtonDisable] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          afterChange: (currentSlideIndex) => {
            setCurrentSlideIndex(currentSlideIndex);
            sliderRef?.current.props.children.length / 2 - currentSlideIndex <= 3
              ? setIsNextButtonDisable(true)
              : setIsNextButtonDisable(false);
          },
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          afterChange: (currentSlideIndex) => {
            setCurrentSlideIndex(currentSlideIndex);
            sliderRef?.current.props.children.length / 2 - currentSlideIndex <= 2
              ? setIsNextButtonDisable(true)
              : setIsNextButtonDisable(false);
          },
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          rows: 1,
          afterChange: (currentSlideIndex) => {
            setCurrentSlideIndex(currentSlideIndex);
            sliderRef?.current.props.children.length - currentSlideIndex <= 2
              ? setIsNextButtonDisable(true)
              : setIsNextButtonDisable(false);
          },
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          rows: 1,
          infinite: true,
          afterChange: (currentSlideIndex) => {
            setCurrentSlideIndex(currentSlideIndex);
            setIsNextButtonDisable(false);
          },
        },
      },
    ],
    afterChange: (currentSlideIndex) => {
      setCurrentSlideIndex(currentSlideIndex);
      sliderRef?.current.props.children.length / 2 - currentSlideIndex <= 4
        ? setIsNextButtonDisable(true)
        : setIsNextButtonDisable(false);
    },
  };

  const handleModalShow = (photo, index) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setClickedIndex(index);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setClickedIndex(0);
  };

  return (
    <section className="safe-paddings relative mb-[100px] mt-[120px] lg:mb-32 lg:mt-16 md:mt-10 sm:mt-8 xs:mb-8">
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
              className="flex h-9 w-[72px] items-center justify-center border-2 border-black text-black transition-colors duration-200 disabled:opacity-20"
              type="button"
              disabled={currentSlideIndex === 0}
              onClick={() => sliderRef?.current?.slickPrev()}
            >
              <span className="sr-only">Prev slide</span>
              <Arrow className="rotate-180" width={10} height={20} aria-hidden />
            </button>
            <button
              className="flex h-9 w-[72px] items-center justify-center border-2 border-black text-black transition-colors duration-200 disabled:opacity-20"
              type="button"
              disabled={isNextButtonDisable}
              onClick={() => sliderRef?.current?.slickNext()}
            >
              <span className="sr-only">Next slide</span>
              <Arrow width={10} height={20} aria-hidden />
            </button>
          </div>
        </header>
        <div className="relative bg-archive-gallery bg-contain bg-center bg-no-repeat p-[52px_30px] lg:bg-cover lg:py-20 sm:mt-6 sm:px-4 xs:p-5">
          <Slider className="mt-10 lg:mt-5" ref={sliderRef} {...sliderSettings}>
            {sliderThumbnailData.allFile.nodes.map((photo, index) => {
              const image = getImage(photo);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleModalShow(photo.publicURL, index)}
                >
                  <GatsbyImage className="cursor-pointer" image={image} alt="Gallery item" />
                </button>
              );
            })}
          </Slider>
        </div>
        <Modal
          modalData={{
            isPhotoGallery: true,
            slideIndex: clickedIndex,
          }}
          isVisible={isModalVisible}
          onModalHide={handleModalHide}
        />
      </div>
    </section>
  );
};

export default Gallery;
