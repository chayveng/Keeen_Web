import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DashboardLayoutcopy from 'src/layouts/DashboardLayoutcopy';

import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/home/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

import AdminLayout from 'src/layouts/AdminLayout';
import FormLayout from 'src/layouts/FormLayout';

import TestLayout from 'src/layouts/TestLayout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('src/views/keen/home'))
  },
  {
    exact: true,
    path: '/callback',
    component: lazy(() => import('src/views/keen/callback'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/keen/login'))
  },
  {
    exact: true,
    path: '/profile',
    component: lazy(() => import('src/views/keen/profile')),
    layout: DashboardLayoutcopy
  },
  {
    exact: true,
    path: '/test',
    component: lazy(() => import('src/views/keen/Test.js'))
  },
  {
    exact: true,
    path: '/barcode',
    component: lazy(() => import('src/views/keen/testbarcode/Home'))
  },
  {
    exact: true,
    path: '/html5barcode',
    component: lazy(() => import('src/views/keen/BarcodeTest'))
  },
  {
    exact: true,
    path: '/html5barcodetest',
    component: lazy(() => import('src/views/keen/testbarcode/Testhtml5'))
  },
  {
    exact: true,
    path: '/barcode_generato',
    component: lazy(() => import('src/views/keen/testbarcode/BarcodeGenerator'))
  },
  {
    exact: true,
    path: '/barcode_scanner',
    component: lazy(() => import('src/views/keen/testbarcode/BarcodeScanner'))
  },
  {
    exact: true,
    path: '/radiotest',
    component: lazy(() => import('src/views/keen/RadioCheckTest.js'))
  },
  {
    exact: true,
    path: '/test/:userID',
    component: lazy(() => import('src/views/keen/TableTest.js'))
  },
  {
    exact: true,
    path: '/liquidDispenser/:jobID',
    component: lazy(() => import('src/views/keen/FormCheck/FormOne')),
    layout: FormLayout
  },
  {
    exact: true,
    path: '/proSink/:jobID',
    component: lazy(() => import('src/views/keen/FormCheck/FormTwo')),
    layout: FormLayout
  },
  {
    exact: true,
    path: '/proMax/:jobID',
    component: lazy(() => import('src/views/keen/FormCheck/FormTwo2')),
    layout: FormLayout
  },
  {
    exact: true,
    path: '/hydroMaster/:jobID',
    component: lazy(() => import('src/views/keen/FormCheck/FormThree')),
    layout: FormLayout
  },
  {
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/product',
        component: lazy(() => import('src/views/keen/product/product_list'))
      },
      {
        exact: true,
        path: '/product/productadd',
        component: lazy(() => import('src/views/keen/product/product_add'))
      },
      {
        exact: true,
        path: '/product/productdetail/:productID',
        component: lazy(() => import('src/views/keen/product/product_detail'))
      },
      {
        exact: true,
        path: '/datalist',
        component: lazy(() => import('src/views/keen/datalist/shoplist'))
      },
      {
        exact: true,
        path: '/datalist/branchlist',
        component: lazy(() => import('src/views/keen/datalist/shopbranchlist/'))
      },
      {
        exact: true,
        path: '/joblist',
        component: lazy(() => import('src/views/keen/job/joblist'))
      },

      {
        exact: true,
        path: '/joblist/jobdetail/:jobID',
        component: lazy(() => import('src/views/keen/job/jobdetail'))
      },

      {
        exact: true,
        path: '/joblist/jobadd',
        component: lazy(() => import('src/views/keen/job/jobadd'))
      },
      {
        exact: true,
        path: '/youtube',
        component: lazy(() => import('src/views/keen/youtube'))
      },
      {
        exact: true,
        path: '/manual',
        component: lazy(() => import('src/views/keen/manual')),
        // layout: DashboardLayoutcopy,
      },
      {
        exact: true,
        path: '/datalist/branchlist/shopdata',
        component: lazy(() => import('src/views/keen/datalist/shopdata/'))
      },

      {
        exact: true,
        path: '/customerlist',
        component: lazy(() => import('src/views/keen/Customer/customer_list'))
      },
      {
        exact: true,
        path: '/customerlist/customerdetail',
        component: lazy(() => import('src/views/keen/Customer/customer_detail'))
      },
      {
        exact: true,
        path: '/personnal',
        component: lazy(() => import('src/views/keen/personnal/index'))
      },
      {
        exact: true,
        path: '/detaileperson/:userID',
        component: lazy(() => import('src/views/keen/personnal/detailPerson/detaileperson'))
      },
      {
        exact: true,
        path: '/addper',
        component: lazy(() => import('src/views/keen/personnal/addPerson/addPerson'))
      },
      {
        exact: true,
        path: '/customerlist',
        component: lazy(() => import('src/views/keen/Customer/customer_list'))
      },
      {
        exact: true,
        path: '/customerlist/customerdetail/:customerID',
        component: lazy(() =>
          import('src/views/keen/Customer/customer_detail/')
        )
      },
      {
        exact: true,
        path: '/addcustomer',
        component: lazy(() => import('src/views/keen/Customer/customer_add'))
      },
      {
        exact: true,
        path: '/addshop',
        component: lazy(() => import('src/views/keen/addshopdata/addshop'))
      }
    ]
  },
  {
    exact: true,
    path: '/addshop',
    component: lazy(() => import('src/views/keen/addshopdata/addshop/'))
  },
  // {
  //   path: '*',
  //   routes: [
  //     {
  //       exact: true,
  //       path: '/',
  //       component: lazy(() => import('src/views/keen/home')),
  //     },
  //     {
  //       exact: true,
  //       path: '/callback',
  //       component: lazy(() => import('src/views/keen/callback'))
  //     },

  //     {
  //       component: () => <Redirect to="/404" />
  //     }
  //   ]
  // }
];

export default routes;
