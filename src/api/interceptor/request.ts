import {Reject, Resolve} from "./types";

const resolve: Resolve = () => () => {};

const reject: Reject = () => () => {};

export {resolve, reject};
