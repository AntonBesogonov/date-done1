
import Map from './components/Map';
import Line from './pages/Line';
import style from './style/App.module.scss';

function App() {
   const { wrapper } = style;
   return (
      <div className={wrapper}>
         <Line />
         <Map />
      </div>
   );
}

export default App;
