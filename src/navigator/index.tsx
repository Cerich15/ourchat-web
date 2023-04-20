import {HistoryRouter as Router} from "redux-first-history/rr6";

import {Routes, Route} from "react-router-dom";

import {connector, Props} from "ducks";
import {Login} from "pages";
import Home from "pages/Home";

const Navigator: React.FC<Props> = ({history}) => {
  return (
    <Router history={history!}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default connector(Navigator);
