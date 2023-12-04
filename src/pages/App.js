import { Provider } from 'react-redux';
import {ROUTER_NAVIGATION, store} from '../config'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ROUTER_NAVIGATION/>
    </Provider>
  );
}

export default App;
