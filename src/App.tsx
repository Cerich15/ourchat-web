import {Provider} from "react-redux";

import {Props} from "ducks";
import Navigator from "navigator";

const App: React.FC<Props> = ({store, history}) => {
  return (
    <Provider store={store!}>
      <Navigator history={history!} />
    </Provider>
  );
};

export default App;
