import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../components";
const Landing = lazy(() => import("../pages/landing"));
const Homepage = lazy(() => import("../pages/homepage"));
const Signin = lazy(() => import("../pages/authentication/Signin"));
const Signup = lazy(() => import("../pages/authentication/Signup"));
const Trash = lazy(() => import("../pages/trash"));
const Archive = lazy(() => import("../pages/archive"));
const NotFound = lazy(() => import("../pages/notfound"));
const Label = lazy(() => import("../pages/label"));
const Pomodoro = lazy(() => import("../pages/pomodoro"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));


// Routes
export const LANDING = "/";
export const HOMEPAGE = "/homepage";
export const SIGNUP = "/signup";
export const SIGNIN = "/signin";
export const TRASH = "/trash";
export const ARCHIVE = "/archive";
export const LABEL = "/label";
export const POMODORO = "/pomodoro";
export const NOTFOUND = "*";

export default function AvailableRoutes() {
  return (
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
  );
}
