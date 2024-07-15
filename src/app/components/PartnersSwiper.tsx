import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
const ImageHoverGray = styled(Image)`
    object-fit: contain;
    height: 70px;
    transition: ease-in-out .5s;
    filter: grayscale(0);

    cursor: pointer;
    &:hover{
        filter: grayscale(1);
    }
`
const PartnerSwiper = ({PartnerPaths} : {PartnerPaths: string[]}) => {
    return (<Swiper
        spaceBetween={50}


        breakpoints={{
            // when window width is >= 320px
            320: {
                autoplay: {
                    delay: 5000
                },

                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                autoplay: false,
                slidesPerView: 6,
                centeredSlides: false
            }
        }}
        autoplay={{
            delay: 1000
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {PartnerPaths.map((el, ind) => (<SwiperSlide key={ind}         style={{display: 'flex',justifyContent: 'center'}}>
            <ImageHoverGray src={`./partners-logotips/${el}`} fluid alt=''/>
        </SwiperSlide>))}
    </Swiper>)
}
export {PartnerSwiper,ImageHoverGray}