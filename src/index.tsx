import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DevSupport } from '@react-buddy/ide-toolbox';
import { setupStore } from './store';
import Root from './routes/root';
import { ComponentPreviews, useInitial } from './dev';

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

root.render(
  <Provider store={store}>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <RouterProvider router={router} />
    </DevSupport>
  </Provider>
);
