import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } };
    case 'REMOVE_USER':
      return { ...state, user: null };
    default:
      return state;
  }
};

const profileSettingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE_SETTING':
      console.log('TOGGLE_PROFILE_SETTING ' + state);
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  profileSettings: profileSettingReducer,
});

const store = createStore(rootReducer);

export default store;