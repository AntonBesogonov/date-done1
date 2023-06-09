import { useEffect, useState } from 'react';
import { Obj, ToText } from '../models/models';
import Text from '../pages/Text';
import style from '../style/Line.module.scss';

export function Map() {
   const response = require('../data/date.json');
   const [filtered, setFiltered] = useState<number | undefined>(1);
   const [counter, setCounter] = useState(1);
   const { button_right, button_left } = style;   
   const number = response.length;
   
   //поиск по id объекта
   const findObj = response.filter((obj: Obj): boolean => {
      return obj.id === filtered;
   });

   //условия счетчика
   useEffect(() => {
      let filtered = counter;
      if (filtered > number || filtered < 1) {
         setCounter(1);
      }
      setFiltered(filtered);
   }, [counter]);

   return (
      <>
         <div
            className={button_right}
            onClick={() => setCounter(counter + 1)}
         ></div>
         <div
            className={button_left}
            onClick={() => setCounter(counter - 1)}
         ></div>

         {findObj.map((obj: ToText): object => (
            <Text
               len={number}
               key={obj.counter}
               start={obj.start}
               finish={obj.finish}
               coun={obj.counter}
               yaer={obj.yaer}
               descr={obj.description}
               yaer1={obj.yaer1}
               descr1={obj.description1}
               yaer2={obj.yaer2}
               descr2={obj.description2}
               yaer3={obj.yaer3}
               descr3={obj.description3}
            />
         ))}
      </>
   );
}

export default Map;
