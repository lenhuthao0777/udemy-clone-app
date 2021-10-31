import { lazy } from "react";
import { v4 as uuid } from "uuid";

const Home = lazy(() => import("pages/home"));
const AdminUsers = lazy(() => import("pages/adminUser"));
const Course = lazy(() => import("pages/course"));
const Courses = lazy(() => import("pages/courses"));
const Loginpage = lazy(() => import("pages/loginPage"));
const AdminCourses = lazy(() => import("pages/adminCourses"));
const Cart = lazy(() => import("pages/checkout"));
const SignUp = lazy(() => import("pages/signupPage"));
const SearchCourses = lazy(() => import("pages/SearchCourses"));
const NotFound = lazy(() => import("pages/pageNotFound"));
// const AddCourses = lazy(() => import("./pages/addCourses"));
// const AddUsers = lazy(() => import("./pages/addUsers"));

const routes = {
  home: {
    id: uuid(),
    path: "/",
    exact: true,
    childRoute: [
      {
        id: uuid(),
        path: "/",
        exact: true,
        component: () => <Home />,
      },
      {
        id: uuid(),
        path: "/courses/:category",
        exact: false,
        component: () => <Courses />,
      },
      {
        id: uuid(),
        path: "/search/:courseName",
        exact: false,
        component: () => <SearchCourses />,
      },
      {
        id: uuid(),
        path: "/course/:id",
        exact: false,
        component: () => <Course />,
      },
      {
        id: uuid(),
        path: "/login",
        exact: false,
        component: () => <Loginpage />,
      },
      {
        id: uuid(),
        path: "signup",
        exact: false,
        component: () => <SignUp />,
      },
      {
        id: uuid(),
        path: "/cart",
        exact: false,
        component: () => <Cart />,
      },
      {
        id: uuid(),
        path: "",
        exact: false,
        component: () => <NotFound />,
      },
    ],
  },
  admin: {
    id: uuid(),
    path: "/admin",
    exact: true,
    childRoute: [
      {
        id: uuid(),
        path: "/admin/courses",
        exact: false,
        component: () => <AdminCourses />,
      },
      {
        id: uuid(),
        path: "/admin/users",
        exact: false,
        component: () => <AdminUsers />,
      },
      {
        id: uuid(),
        path: "",
        exact: false,
        component: () => <NotFound />,
      },
    ],
  },
};
export default routes;
