import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./frontend/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./frontend/context";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { authActions } from "./frontend/store/authSlice";
import { useDispatch } from "react-redux";
import { Loader } from "./frontend/components";
import {
  LANDING,
  SIGNIN,
  SIGNUP,
  NOTFOUND,
  HOMEPAGE,
  TRASH,
  ARCHIVE,
  LABEL,
  POMODORO,
} from "./frontend/routes";

const Landing = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/landing")
);
const Homepage = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/homepage")
);
const Signin = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/authentication/Signin")
);
const Signup = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/authentication/Signup")
);
const Trash = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/trash")
);
const Archive = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/archive")
);
const NotFound = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/notfound")
);
const Label = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/label")
);
const Pomodoro = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/pages/pomodoro")
);
const PrivateRoute = lazy(() =>
  import(/* webpackPrefetch: true */ "./frontend/routes/PrivateRoute")
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageAuth = localStorage.getItem("token");
    if (localStorageAuth) {
      dispatch(authActions.getToken(localStorageAuth));
      const localStorageUser = localStorage.getItem("user");
      dispatch(
        authActions.getUser(
          localStorageUser ? JSON.parse(localStorageUser) : null
        )
      );
    }
  }, [dispatch]);

  return (
    <div className="App" app-theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={LANDING} element={<Landing />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={SIGNIN} element={<Signin />} />
          <Route path={NOTFOUND} element={<NotFound />} />

          <Route path={LANDING} element={<PrivateRoute />}>
            <Route path={HOMEPAGE} element={<Homepage />} />
            <Route path={TRASH} element={<Trash />} />
            <Route path={ARCHIVE} element={<Archive />} />
            <Route path={LABEL} element={<Label />} />
            <Route path={POMODORO} element={<Pomodoro />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer style={{ fontWeight: "500", fontSize: "1.15rem" }} />
    </div>
  );
}

export default App;
