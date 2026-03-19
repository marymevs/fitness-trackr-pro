import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Activity from "./activities/Activity";
import Error404 from "./Error404";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />}></Route>
        <Route path={":activityName"} element={<Activity />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  );
}
