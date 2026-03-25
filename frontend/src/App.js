import { Spin } from "antd";
import AdminLayout from "layouts/adminLayout";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "Routes";
import AdminRoute from "./auth/AdminRoute";
import AppLayout from "./layouts/applayout/index";

function App() {
  const { home, admin } = routes;
  return (
    <Suspense fallback={<Spin className="loading" size="large" />}>
      <BrowserRouter>
        <Switch>
          {/* route admin */}
          <Route path="/admin">
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                {admin.childRoute.map((route) => (
                  <AdminRoute
                    key={route.id}
                    path={route.path}
                    exact={route.exact}
                  >
                    {route.component()}
                  </AdminRoute>
                ))}
              </Switch>
            </AdminLayout>
          </Route>
          {/* route mains */}
          <Route path="/">
            <AppLayout>
              <Switch>
                {home.childRoute.map((route) => {
                  return (
                    <Route key={route.id} path={route.path} exact={route.exact}>
                      {route.component()}
                    </Route>
                  );
                })}
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
