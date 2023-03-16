import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper';
import mySwiper from '../style/mySwiper.scss';
import style from '../style/Text.module.scss';
import { IData } from '../models/models';
import CountUp from 'react-countup';

function Text(props: IData) {
   const {
      name,
      period,
      date_one,
      date_two,
      counter,
      year,
      description,
      block_left,
      block_right,
      trans,
   } = style;
   const {
      len,
      start,
      finish,
      coun,
      yaer,
      descr,
      yaer1,
      descr1,
      yaer2,
      descr2,
      yaer3,
      descr3,
   } = props;

   return (
      <>
         <div className={name}>Исторические даты</div>
         <div className={period}>
            <div className={date_one}>
               <CountUp end={start} duration={3} separator='' start={1990} />
            </div>
            <div className={date_two}>
               <CountUp end={finish} duration={3} separator='' start={1990} />
            </div>
         </div>
         <div className={counter}>
            {coun}/0{len}
         </div>
         <div>
            <div className={block_left}></div>
            <div className={block_right}></div>
         </div>

         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            freeMode={true}
            pagination={{
               clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className={mySwiper}
         >
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{yaer}</div>
                  <div className={description}>{descr}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{yaer1}</div>
                  <div className={description}>{descr1}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{yaer2}</div>
                  <div className={description}>{descr2}</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={trans}>
                  <div className={year}>{yaer3}</div>
                  <div className={description}>{descr3}</div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}

export default Text;
