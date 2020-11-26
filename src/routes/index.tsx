import React, {lazy, Suspense, LazyExoticComponent} from 'react';
import {Redirect} from 'react-router-dom';
import Home from '../layouts/Home';

const SuspenseComponent = (Component: LazyExoticComponent<any>) => (props: any) => (
  <Suspense fallback={null}>
    <Component {...props} />
  </Suspense>
);

const Find = lazy(() => import("../views/find"));
const Mv = lazy(() => import("../views/mv"));
const Login = lazy(() => import("../views/login"));
const Mine = lazy(() => import("../views/mine"));
const DailyRecommendation = lazy(() => import("../views/dailyRecommendation"));
const SongList = lazy(() => import("../views/songList"));

export const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/find"}/>
      },
      {
        path: "/find",
        component: SuspenseComponent(Find),
        routes: [
          {
            path: "/find/:id",
          }
        ]
      },
      {
        path: "/mv",
        component: SuspenseComponent(Mv),
        routes: [
          {
            path: "/mv",
          }
        ]
      },
      {
        path: "/login",
        component: SuspenseComponent(Login),
        routes: [
          {
            path: "/login",
          }
        ]
      },
      {
        path: "/mine",
        component: SuspenseComponent(Mine),
        routes: [
          {
            path: "/mine",
          }
        ]
      },
      {
        path: "/dailyRecommendation",
        component: SuspenseComponent(DailyRecommendation),
        routes: [
          {
            path: "/dailyRecommendation",
          }
        ]
      },
      {
        path: "/songList",
        component: SuspenseComponent(SongList),
        routes: [
          {
            path: "/songList",
          }
        ]
      }
    ]
  },
];
