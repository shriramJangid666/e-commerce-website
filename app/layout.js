'use client'
import './globals.css'
import Navbar from './nav/Nav'
import { Auth0Provider } from '@auth0/auth0-react';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Auth0Provider
          domain="dev-odotb6wa8wdtcu54.us.auth0.com"
          clientId="ya6yyS8pMsQDEFK1TBQZL9g6rmP8Q8dc"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <Navbar />
          {children}
        </Auth0Provider>,
      </body>
    </html>
  )
}
