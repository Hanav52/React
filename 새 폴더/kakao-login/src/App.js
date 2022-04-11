import "./App.css";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const REST_API_KEY = "572dfd151f0b3039b01dfb3655e13389";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
        </Route>
        <Route path="/oauth/kakao/callback">
          <Auth />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;