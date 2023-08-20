import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PATH, { PHOTO_PREFIX } from "./pathConstants";
// import Main from "../container/Main";

export const WaitingComponent = (Component) => (props) =>
  (
    <Suspense fallback={<div>please wait loading....</div>}>
      <Component {...props} />
    </Suspense>
  );

const EmptyPage = () => (
  <p>Opps... Something went wrong. Please check your url path again.</p>
);

const App = lazy(() => import("../container/PhotoApp"));

/*
  Layout
*/

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={PHOTO_PREFIX} render={WaitingComponent(App)} />
        <Route render={EmptyPage} />
      </Switch>
    </HashRouter>
  );
};

/*
  Photo Routes
*/
const Homepage = lazy(() => import("../container/Homepage"));
const PhotoDSearch = lazy(() => import("../container/PhotoSearch"));
const PhotoDetail = lazy(() => import("../container/Detail"));

const appRoutes = [
  { path: PATH.HOMEPAGE_PHOTO, render: WaitingComponent(Homepage) },
  { path: PATH.SEARCH_PHOTO, render: WaitingComponent(PhotoDSearch) },
  { path: PATH.DETAIL_PHOTO, render: WaitingComponent(PhotoDetail) },
];

export const AppRoutes = () => (
  <Switch>
    {appRoutes.map((config) => (
      <Route key={`route_${config.path}`} exact {...config} />
    ))}
  </Switch>
);

export default Routes;
