import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['jwt']
}
   
const persistedReducer = persistReducer(persistConfig, reducers)


const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

export {store, persistor}
