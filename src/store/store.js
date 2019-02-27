import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const persistConfig = {
  key: '1',
  storage
};

const logger = createLogger();
const immutableState = reduxImmutableStateInvariant();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [thunk, immutableState, logger]
    : [thunk];

const configureStore = preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;