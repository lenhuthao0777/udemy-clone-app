import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import AdminRoute from "./auth/AdminRoute";
import AdminLayout from "./layouts/adminLayout";
import AppLayout from "./layouts/applayout/index";


const Home = lazy(() => import("./pages/home"));
const AdminUser = lazy(() => import("./pages/adminUser"));
const Course = lazy(() => import("./pages/course"));
const Courses = lazy(() => import("./pages/courses"));
const Loginpage = lazy(() => import("./pages/loginPage/Loginpage"));
const AdminCourses = lazy(() => import("./pages/adminCourses"));
const ShoppingCart = lazy(() => import("./pages/checkout"));
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
                                <Route path="/course/:id">
                                    {/* /:id */}
                                    <Course />
                                </Route>
                                <Route path="/login">
                                    <Loginpage />
                                </Route>
                                <Route path="/cart">
                                    <ShoppingCart />
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
