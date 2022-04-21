import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PlayListItem from './Components/PlayListItem'
import Auth from './Components/Auth'

 const App = () => {
  const isLogin = useSelector((state)=> state.auth.isLogin);
  return (
        <Router>
            <Switch>
                <Route path="/" component={Auth} exact/>
                <Route path="/create-playlist">
                    {isLogin ? <PlayListItem/> : <Redirect to ="/" />}
                </Route>
                <Route path="*" component={() => (<h1>Error 404</h1>)} />
            </Switch>
        </Router>
  );
}


export default App;

  