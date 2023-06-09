import {ReactNode} from 'react';

import styles from 'styles/Home.module.scss';

import Layout from 'components/layouts/layout';
import ContentContainer from 'components/layouts/contentContainer/ContentContainer'

const Home = () => {
  return (
    <ContentContainer>
        <h1> Blog </h1>
    </ContentContainer>
 
 )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home