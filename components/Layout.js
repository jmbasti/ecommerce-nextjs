import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Ecommerce</Typography>
      </footer>
    </div>
  );
};

export default Layout;
