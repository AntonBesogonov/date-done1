import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import mySwiper from '../style/mySwiper.scss';
import style from '../style/Text.module.scss';
import { IData } from '../models/models';

function Text( props : IData) {
   const { name, period, date_one, date_two, counter, year, description } =
      style;
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
      <div>
         <div className={name}>Исторические даты</div>
         <div className={period}>
            <div className={date_one}>{start}</div>
            <div className={date_two}>{finish}</div>
         </div>
         <div className={counter}>
            {coun}/0{len}
         </div>
         <div>
            <Swiper
               navigation={true}
               modules={[Navigation]}
               className={mySwiper}
            >
               <SwiperSlide>
                  <div className={year}>{yaer}</div>
                  <div className={description}>{descr}</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className={year}>{yaer1}</div>
                  <div className={description}>{descr1}</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className={year}>{yaer2}</div>
                  <div className={description}>{descr2}</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className={year}>{yaer3}</div>
                  <div className={description}>{descr3}</div>
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
}

export default Text;
