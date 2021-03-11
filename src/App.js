import { BrowserRouter, Route, Switch } from "react-router-dom";
import Episodes from "./components/episodes";
import Main from "./components/main"
import Header from "./components/ui/header"
import Navbar from "./components/ui/navbar";
import Deaths from './components/deaths';
import Quotes from "./components/quotes";

const App = () => {
  return (
   <BrowserRouter>
     <Header />
     <Navbar />
     <Switch>
       <Route path="/" exact strict component={ Main }/>
       <Route path="/episodes" exact component={ Episodes }/>
       <Route path="/deaths" exact component={ Deaths }/>
       <Route path="/quotes" exact component={ Quotes }/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
