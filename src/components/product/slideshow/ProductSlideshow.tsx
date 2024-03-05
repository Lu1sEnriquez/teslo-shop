

// SLIDER PARA DESKTOP

"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay} from "swiper/modules";

// Import Swiper styles
import "./slideshow.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({ title, images, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={`${className} `}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#c2c2c2", //cambia el color de las flechas
            "--swiper-pagination-color": "#fff",
            alignItems: "center"
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay= {{
          delay: 2500,
        }}
        thumbs={{ 
          swiper: thumbsSwiper  && !thumbsSwiper.destroy ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 "
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={1024}
              height={1024}
              alt={title}
              src={`/products/${image}`}
              className="rounded-lg object-fill  m-auto  max-w-[1024px] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
          {/* swipper de abajo */}
      <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={300}
              height={300}
              alt={title}
              src={`/products/${image}`}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
            </Swiper>


    </div>
  );
};
