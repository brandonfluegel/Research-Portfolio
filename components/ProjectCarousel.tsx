"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AmazonProjectSection from './AmazonProjectSection';
import UberProjectSection from './UberProjectSection';
import NASAProjectSection from './NASAProjectSection';
import MercedesProjectSection from './MercedesProjectSection';
import HarvardProjectSection from './HarvardProjectSection';

export default function ProjectCarousel() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><AmazonProjectSection /></SwiperSlide>
      <SwiperSlide><UberProjectSection /></SwiperSlide>
      <SwiperSlide><NASAProjectSection /></SwiperSlide>
      <SwiperSlide><MercedesProjectSection /></SwiperSlide>
      <SwiperSlide><HarvardProjectSection /></SwiperSlide>
    </Swiper>
  );
}
