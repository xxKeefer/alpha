import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@tryst/components/auth-context'
import { Helmet } from 'react-helmet'

import App from './app/app'

ReactDOM.render(
  <StrictMode>
    <Helmet>{/* head tag stuff here */}</Helmet>
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
