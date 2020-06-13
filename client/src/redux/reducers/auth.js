import {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER,
  GET_ALL_USERS,
  EDIT_USER,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  error: {},
  user: null,
  users: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, ...payload, loading: false };
    case GET_USER:
      return { ...state, user: payload, loading: false };
    case GET_ALL_USERS:
      return { ...state, users: payload };
    case EDIT_USER:
      return {
        ...state,
        users: [
          ...state.users.filter((each) => each._id !== payload._id),
          { ...payload },
        ],
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: payload,
      };
    case LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return { ...state };
  }
}
