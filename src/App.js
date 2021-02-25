import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Tab from "./components/Tab";
import Home from "./components/Home";
import Email from "./components/Email";
import Table from "./components/Table";
import Video from "./components/Video";
import Image from "./components/Image";
import Text from "./components/Text";

function App() {
  const Tablist = () => <Tab />;
  const Body = () => {
    return (
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/text" component={Text} />
        <Route path="/images" component={Image} />
        <Route path="/videos" component={Video} />
        <Route path="/table" component={Table} />
        <Route path="/email" component={Email} />
      </Switch>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Tablist />
          <Body />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
