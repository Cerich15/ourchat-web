import {isType} from "utils/checker";

import authSaga from "./saga";
import {AuthReducer, AuthState} from "./types";

const initState: AuthState = {
  data: {},
  error: "",
  loading: false,
};

const auth: AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET-AUTH":
      const {data, error, loading} = action.payload!;
      return {
        data: {
          authenticated: isType(
            "boolean",
            data?.authenticated,
            state.data?.authenticated,
          ),
        },
        error: isType("string", error, state.error),
        loading: isType("string", loading, state.loading),
      };

    default:
      return state;
  }
};

export {initState as authInitState, authSaga};
export default auth;
