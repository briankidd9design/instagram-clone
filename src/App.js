import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/edit-profile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/not-found';

function App() {
  // return <div>app</div>;
  return (
  <Router>
    <Switch>
          <Route exact path="/" component={FeedPage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/:username" component={ProfilePage} />
          <Route exact path="/p/:postId" component={PostPage} />
          <Route exact path="/accounts/edit" component={EditProfilePage} />
          <Route exact path="/accounts/login" component={LoginPage} />
          <Route exact path="/accounts/emailsignup" component={SignUpPage} />
          <Route exact path="/*" component={NotFoundPage} />
    </Switch>
  </Router>
  )
}

export default App;
