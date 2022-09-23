---
id: slashauth
title: SlashAuth
description: SlashAuth provides authentication and authorization for dApps.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
SlashAuth allows developers to quickly authenticate users with their wallets and create role-based access control based off of on-chain data. A developer can use SlashAuth to securely log a user in and verify that they have the necessary tokens (ERC20, ERC721, ERC1155) to gain access to the site.

SlashAuth works with existing wallets such as Metamask, Coinbase Wallet, and WalletConnect. It also supports tokens on Ethereum and Polygon with more networks coming soon.

For more documentation, please visit our [docs](https://docs.slashauth.com/docs)

## 1. Create SlashAuth app

Navigate to the [SlashAuth Dashboard](https://app.slashauth.com) and create a new app. Take note of the ClientID and Client Secret as we will use them below.

## 2. Install the React SDK

Install the Javascript Library via NPM
```bash
npm i @slashauth/slashauth-react
```

## 3. Configure the SlashAuthProvider component

The SlashAuth SDK uses [React Context](https://reactjs.org/docs/context.html) to manage state and expose it to your components. In order to integrate /auth into your app, you must provide the context at the root of your app:

```typescript
// file:index.tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SlashAuthProvider } from '@slashauth/slashauth-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <SlashAuthProvider 
    clientID={/* YOUR CLIENT ID */}
  >
    <App />
  </SlashAuthProvider>
);
```

## 4. Add login with wallet

The SlashAuth SDK gives you tools to quickly implement authentication via Metamask wallet in your React application. The simplest implementation is to log the user in directly in their browser. We use the function `loginNoRedirectNoPopup()` from the `useSlashAuth()` hook to accomplish this.

```typescript
// file:LoginButton.tsx
import { useSlashAuth } from "@slashauth/slashauth-react";

export const LoginButton = () => {
  const { loginNoRedirectNoPopup } = useSlashAuth();

  return <button className="login-button" onClick={() => loginNoRedirectNoPopup()}>Login With Wallet</button>;
};
```

## 5. Show authentication information

The SlashAuth SDK exposes information about the current user and their logged in status via data returned by the `useSlashAuth()` hook. Because this data propagates via React Context, any time it changes your components will be notified and rerender. Let's create a status component

```typescript
// file:LoginStatus.tsx
import { useSlashAuth } from "@slashauth/slashauth-react";
import { useEffect, useState } from "react";

export const LoginStatus = () => {
  const [accessToken, setAccessToken] = useState('');

  const {
    connectedWallet,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useSlashAuth();

  // A way to instantly detect when the access token changes so we
  // can store it in state to display to the screen.
  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((at: string) => {
        setAccessToken(at);
      });
    } else {
      setAccessToken('');
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return (
      <div>
        <span>'Loading...'</span>
      </div>
    );
  }

  return (
    <div>
      <div style={{display: 'block'}}>
        <div>Is Wallet Connected? {connectedWallet ? 'Yes' : 'No'}</div>
        {connectedWallet && <div >Wallet address: {connectedWallet}</div>}
        <div>Is Logged In? {isAuthenticated ? 'Yes' : 'No'}</div>
        {isAuthenticated && <div style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}} onClick={() => {navigator.clipboard.writeText(accessToken)}}>Click to copy access token</div>}
      </div>
    </div>
  );
}
```

## 6. Logout button

The SlashAuth SDK exposes logout functionality that logs the user out both locally and invalidates their tokens remotely. Let's build a button to add this functionality.

```typescript
// file:LogoutButton.tsx
import { useSlashAuth } from "@slashauth/slashauth-react";

export const LogoutButton = () => {
  const { logout } = useSlashAuth();

  return <button onClick={() => logout()}>Logout</button>;
};
```

## 7. Tying it all together

A simple way to see this all work together is updating your app's entry point to display this information.

```typescript
import { useSlashAuth } from '@slashauth/slashauth-react';
import { LoginStatus } from './LoginStatus';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';


function App() {
  const { isAuthenticated } = useSlashAuth();

  return (
    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <LoginStatus />
    </div>
  );
}

export default App;
```

Congratulations! You're successfully integrated with SlashAuth.

You can find the full example of this code in our [GitHub repo](https://github.com/slashauth/slashauth-react-quickstart-example).