import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

export default () => (
  <Layout>
    <Head title={'Uh oh!'} />
    <h1>Uh oh!</h1>
    <p>Is my portfolio so dazzling that you lost your way?</p>
    <p>Or is it those clunky interwebz just not working as they should</p>
    <p>
      Either way give your router a good 'ol reset and{' '}
      <Link to={'/'}>COME BACK!</Link>
    </p>
  </Layout>
);
