import { useEffect, useState } from 'react';
import { Obj, ToText } from '../models/models';
import Text from '../pages/Text';
import style from '../style/Line.module.scss';

export function Map() {
   const response = require('../data/date.json');
   const { button_right, button_left } = style;
   const [counter, setCounter] = useState(1);
   const [filtered, setFiltered] = useState<number | undefined>(1);
   const number = response.length;
   const findObj = response.filter((obj: Obj): boolean => {
      return obj.id === filtered;
   });

   //условия счетчика
   useEffect(() => {
      let filtered = counter;
      if (filtered > 2 || filtered < 1) {
         filtered = 1;
      }
      setFiltered(filtered);
   });

   return (
      <>
         <div className={button_right} onClick={() => setCounter(counter + 1)}></div>
         <div className={button_left} onClick={() => setCounter(counter - 1)}></div>

         {findObj.map((obj: ToText): object => (
            <Text len={number} key={obj.counter} start={obj.start} finish={obj.finish} coun={obj.counter} yaer={obj.yaer} descr={obj.description} yaer1={obj.yaer1} descr1={obj.description1} yaer2={obj.yaer2} descr2={obj.description2} yaer3={obj.yaer3} descr3={obj.description3} />
         ))}
      </>
   );
}

export default Map;
