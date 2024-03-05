

// SLIDER PARA DESKTOP

"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination} from "swiper/modules";

// Import Swiper styles
import "./slideshow.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({ title, images, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={`${className} `}>
      <Swiper
       style={{
        width: '100vw',
        height: '500px'
       }}
        pagination
        autoplay= {{
          delay: 2500,
        }}
        thumbs={{ 
          swiper: thumbsSwiper  && !thumbsSwiper.destroy ? thumbsSwiper : null
        }}
        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
        className="mySwiper2 "
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={800}
              alt={title}
              src={`/products/${image}`}
              className="rounded-lg object-fill  m-auto  max-w-[1024px] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
          {/* swipper de abajo */}
     


    </div>
  );
};
