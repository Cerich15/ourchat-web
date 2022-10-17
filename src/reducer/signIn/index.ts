import {isType} from "utils/checker";
import {SignIn, SignInReducer} from "./type";

const initState: SignIn = {
  username: "",
  password: "",
};

const signIn: SignInReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET":
      const {username, password} = action.payload!;
      return {
        username: isType("string", username, state.username),
        password: isType("string", password, state.password),
      };
    default:
      return state;
  }
};

export {initState};
export default signIn;
