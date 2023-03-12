
import style from '../style/Line.module.scss';

export function Line() {

   const { vertical, horizontal, circle, gradient, line_right, line_left, right_arrow, left_arrow } = style;

   return (
      <>
         <div className={vertical}></div>
         <div className={horizontal}></div>
         <div className={circle}></div>
         <div className={gradient}></div>
         <div className={line_right}></div>
         <div className={line_left}></div>
         <div className={right_arrow}></div>
         <div className={left_arrow}></div>
      </>
   );
}

export default Line;
