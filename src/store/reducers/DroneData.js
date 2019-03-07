import { toast } from "react-toastify";
import * as actions from "../actions";

const initialState = {
  loading: false,
  data: {}
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataReceived = (state, action) => {
  toast("Drone data is updated");
  const { payload } = action;
  //  just took 10 latest records due to time constraints
  const latestRecords = payload.data[0];
  return {
    ...state,
    data: latestRecords,
    loading: false
  };
};

const handlers = {
  [actions.FETCH_DRONE_DATA]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
