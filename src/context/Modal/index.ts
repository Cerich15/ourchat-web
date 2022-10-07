import {createContext} from "react";
import {Props} from "./types";

const initialState: Props = {
  visible: false,
  onShow() {},
  onHide() {},
};

const Modal = createContext(initialState);

export default Modal;
