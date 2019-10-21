import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import users from './users';
import posts from './posts';


const config = { 
	key: 'root', 
	storage, 
};

const Reducers = combineReducers({
	posts,
	users,
})


export default persistReducer(config, Reducers)