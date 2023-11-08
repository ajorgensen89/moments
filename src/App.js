import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const CurrentUserContext = createContext();
// export const SetCurrentUserContext = createContext();

function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  // const handleMount = async () => {
  //   try {
  //     const { data } = await axios.get("dj-rest-auth/user/");
  //     setCurrentUser(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   handleMount();
  // }, []);

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    //   <SetCurrentUserContext.Provider value={setCurrentUser}>
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <PostsPage message="No results found. Adjust your search." />} />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust your search or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust your search or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
    //   </SetCurrentUserContext.Provider>
    // </CurrentUserContext.Provider>
  );
}

export default App;