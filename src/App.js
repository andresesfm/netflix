import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthLister } from './hooks';


function App() {
  const { user } = useAuthLister()
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={
          <IsUserRedirect user={user} loggedIdPath={ROUTES.BROWSE}>
            <Signin />
          </IsUserRedirect>} />
        <Route exact path={ROUTES.SIGIN_UP} element={<IsUserRedirect user={user} loggedIdPath={ROUTES.BROWSE}>
          <Signup />
        </IsUserRedirect>} />
        <Route exact path={ROUTES.BROWSE} element={
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
