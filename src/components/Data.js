import { useState } from 'react';

export function useObsj() {
   const [obj, setObj] = useState(1);
   const [error, setError] = useState(false);
   const [filtered, setFiltered] = useState();

   useEffect(() => {
      fetchObj();
   }, [{}]);

   async function fetchObj() {
      try {
         const response = require('../data/date.json');
         setObj(response);
         console.log(obj);
      } catch (e) {
         setError(true); //допилить, если ошибка
      }
   }

   useEffect(() => {
      let filtered = obj;
      if (one) {
         filtered = filtered.filter((n) => n.stops === 1);
      } else if (two) {
         filtered = filtered.filter((n) => n.stops === 2);
      } else {
         filtered = obj;
      }
      setFiltered(filtered);
   }, [tickets, nonStop, one, two, three, all]);
}
