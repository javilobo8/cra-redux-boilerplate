import CoreLayout from '../layouts/CoreLayout';
import LandingRoute from './Landing';

export const createRoutes = (store) => (
  {
    path: '/',
    component: CoreLayout,
    indexRoute: LandingRoute(store),
    childRoutes: []  
  }
);

export default createRoutes;
