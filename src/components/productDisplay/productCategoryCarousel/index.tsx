import CategoryItem from './categoryItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductCategoryCarousel = () => {
  return (
      <Swiper
        spaceBetween={16}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <CategoryItem text='É agitado'/>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem text='Morde'/>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem text='Late muito'/>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem text='É ansioso'/>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem text='É estressado'/>
        </SwiperSlide>
        ...
      </Swiper>
  );
};


export default ProductCategoryCarousel;