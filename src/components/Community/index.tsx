'use client';

import React from 'react';
import { A11y, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import CommunityCard from './card';

interface CommunityProps {
  data: any[];
}
const Community: React.FC<CommunityProps> = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.title}>
          <CommunityCard
            key={item.title}
            title={item.title}
            image={item.imageUrl}
            href={item.href}
            alt={item.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Community;
