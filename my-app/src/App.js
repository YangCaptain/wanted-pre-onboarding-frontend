import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // 로컬 스토리지에 토큰이 있는지 확인

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          {isAuthenticated ? <Redirect to="/todo" /> : <Signup />}
        </Route>
        <Route path="/signin">
          {isAuthenticated ? <Redirect to="/todo" /> : <Signin />}
        </Route>
        {/* 기타 페이지 라우팅 설정 */}
      </Switch>
    </Router>
  );
}

export default App;
