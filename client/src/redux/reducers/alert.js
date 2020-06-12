import {
  REMOVE_ALERT,
  SET_ALERT,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../actions/types";

const initialState = {
  alerts: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return { ...state, alerts: [...state.alerts, payload] };
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((each) => each.id !== payload),
      };
    default:
      return { ...state };
  }
}
