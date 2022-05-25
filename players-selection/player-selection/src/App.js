import { Provider } from 'react-redux';
import {store} from './redux/store'
import './App.css';
import ParentContainer from './component/ParentContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <ParentContainer/>
        
      </div>
    </Provider>
  );
}

export default App;
