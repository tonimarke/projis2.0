import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

import { useAuth } from '../hook/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Router({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { usuario } = useAuth();

  return (
    <ReactDOMRoute
      { ...rest }
      render={({ location }) =>
        isPrivate === !!usuario ?
        ( <Component /> ) :
        ( <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard', state: { from: location }, }} /> )
      }
    />
  );
}

export default Router;
