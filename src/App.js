import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import AdminRoute from "./auth/AdminRoute";
import AdminLayout from "./layouts/adminLayout";
import AppLayout from "./layouts/applayout/index";
// su dung lazyload ko import truc tiep
// import AdminCourses from './pages/adminCourses';
// import AdminUser from './pages/adminUser';
// import Course from './pages/course';
// import Courses from './pages/courses';
// import Home from './pages/home';
// import Loginpage from './pages/loginPage/Loginpage';

const Home = lazy(() => import("./pages/home"));
const AdminUser = lazy(() => import("./pages/adminUser"));
const Course = lazy(() => import("./pages/course"));
const Courses = lazy(() => import("./pages/courses"));
const Loginpage = lazy(() => import("./pages/loginPage/Loginpage"));
const AdminCourses = lazy(() => import("./pages/adminCourses"));
function App() {
    return (
        <Suspense fallback={<div>Loading..................</div>}>
            <BrowserRouter>
                <Switch>
                    {/* route admin */}
                    <Route path="/admin">
                        <AdminLayout>
                            <Switch>
                                <Redirect
                                    exact
                                    from="/admin"
                                    to="/admin/courses"
                                />
                                <AdminRoute path="/admin/courses">
                                    <AdminCourses />
                                </AdminRoute>
                                <Route path="/admin/users">
                                    <AdminUser />
                                </Route>
                            </Switch>
                        </AdminLayout>
                    </Route>
                    {/* route mains */}
                    <Route path="/">
                        <AppLayout>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>
                                <Route path="/courses">
                                    {/* /:category */}
                                    <Courses />
                                </Route>
                                <Route path="/course">
                                    {/* /:id */}
                                    <Course />
                                </Route>
                                <Route path="/login">
                                    <Loginpage />
                                </Route>
                            </Switch>
                        </AppLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
