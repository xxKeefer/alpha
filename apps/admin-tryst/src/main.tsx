import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import {Helmet} from 'react-helmet'

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <Helmet>
      {/* head tag stuff here */}
    </Helmet>
    <ChakraProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
