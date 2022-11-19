import {connect, ConnectedProps, ConnectedComponent} from "react-redux";

import {MapDispatch, MapState} from "./types";

const mapState: MapState = ({auth, router, store}) => ({
  auth,
  router,
  store,
});

const mapDispatch: MapDispatch = (dispatch) => ({
  dispatch: (action) => dispatch(action),
});

const connected = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connected>;
type Connected = {
  (component: React.ComponentType<Props>): ConnectedComponent<
    React.ComponentType<Props>,
    Props
  >;
};

const connector: Connected = (component) => {
  return connected(component);
};

export type {Props};
export default connector;
