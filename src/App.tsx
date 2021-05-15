import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from './shared/NavBar/NavBar'
import RegisterComponent from './components/AuthComponent/RegisterComponent'
import SignInComponent from './components/AuthComponent/SignInComponent'
import HomePage from './Pages/HomePage'
import { getLoadUser } from './redux/auth/action'
import YourFeedPage from './Pages/YourFeedPage'
import { IRootState } from './shared/types/rootState.interface'
import TagFeedComponent from './components/TagFeedComponent/TagFeedComponent'

function App() {
  const isLoggedIn = useSelector((state: IRootState) => state.user.isLoggedIn)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!isLoggedIn) {
      dispatch(getLoadUser())
    }
  }, [dispatch, isLoggedIn])

  return (
    <>
     <NavBar /> 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/login" component={SignInComponent} />
        <Route path="/feed" component={YourFeedPage} />
        <Route path="tags/:slug" component={TagFeedComponent} />
      </Switch>
    </>
  );
}

export default App
