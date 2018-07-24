import { createStore } from 'redux';
import reducer from '../reducers/index';

const storeConfig = createStore(reducer);

export default storeConfig;
