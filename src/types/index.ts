type Event<ActionEvent> = {
  (ae: ActionEvent): (value: any) => void;
};

type SetState<Key, Value> = {
  (key: Key, val: Value): void;
};

export type {Event, SetState};
