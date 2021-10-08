import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from 'app/containers/navbar';
import { LoginAndRegister } from 'app/containers/loginAndRegister';

export function PageSign() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <LoginAndRegister />
    </>
  );
}