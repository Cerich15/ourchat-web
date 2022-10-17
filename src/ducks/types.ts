type MapState = {};

type MapDispatch = {};

type Reducer<State, Action> = {
  (state: State, action: Action): State;
};

type ActionProps<State> = {
  payload?: State;
  path?: string;
  params?: any;
};

type Action<Type, State> = {
  type: Type;
} & ActionProps<State>;

type State<Entity, AddProps = {}> = {
  data?: Entity;
  page?: number;
  size?: number;
  total_data?: number;
  error?: string;
  loading?: boolean;
} & AddProps;

type Dispatch<Type, State> = {
  (payload: ActionProps<State>): Action<Type, State>;
};

export type {Reducer, Action, State, Dispatch};
