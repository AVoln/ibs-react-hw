import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'Project/store';
import App from 'Project/App';
import { customTheme } from 'Project/customTheme';

import { ThemeProvider } from 'styled-components';
import 'Project/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
