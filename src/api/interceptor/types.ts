type Resolve = {
  (store: object): (config: object) => void;
};

type Reject = {
  (store: object): (response: object) => void;
};

export type {Resolve, Reject};
