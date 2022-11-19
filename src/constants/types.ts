type Event<Key, Val> = {
  (key: Key): (value: Val) => void;
};

type SetState<Key, Value> = {
  (key: Key, val: Value): void;
};

export type {Event, SetState};
