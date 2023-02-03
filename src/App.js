import { useSelector } from 'react-redux';
import './App.css';
import Section1 from './component/Section1';
import Section2 from './component/Section2';

function App() {
  const state = useSelector(state => state)
  return (
      <div>
        {
          state.nextVideo === false ? <Section1 /> :
            <Section2 />
        }
      </div>
  );
}

export default App;
