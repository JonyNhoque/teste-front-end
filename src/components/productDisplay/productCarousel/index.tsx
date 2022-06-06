import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductItemData from '../../../../public/produtos.json';
import Button from '../../body/button';

type ProductItemProps = {
  productName: string,
  photo: string,
  price: number,
}

const Item = ({productName, photo, price}: ProductItemProps) =>{
  return(
      <div className='productItem'>
          <div className='productItem__imgHolder'>
              <img src={photo} />
              <a href='' />
          </div>
          <div className='productItem__productTitle'>
              <h3>{productName}</h3>
          </div>
          <div className='productItem__price'>
              <h3>Por </h3>
              <h2>R${price}</h2>
          </div>
          <div className='productItem__price'>
              <h3>R$85,69</h3>
              <h4>Para assinantes</h4>
          </div>
          <Button text='Adicionar' />
      </div>
  )
}


const ProductCarousel = () => {
  return (
      <Swiper
        spaceBetween={16}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {/* <SwiperSlide>
          {ProductItemData.map((data: any, key: any) =>(
            <Item 
              key={`item-${key}`}
              photo={data.photo}
              productName={data.productName}
              price={data.price}
            />
          ))}
        </SwiperSlide> */}
        <SwiperSlide>
          produto 2
        </SwiperSlide>
        <SwiperSlide>
          produto 3
        </SwiperSlide>
        <SwiperSlide>
          produto 4
        </SwiperSlide>
        ...
      </Swiper>
  );
};


export default ProductCarousel;