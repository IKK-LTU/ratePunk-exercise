import {ReactNode} from 'react';

import styles from 'styles/Home.module.scss';

import Layout from 'components/layouts/layout';
import ContentContainer from 'components/layouts/contentContainer/ContentContainer'
import AppsBanner from 'components/elements/appsBanner/AppsBanner';

const Home = () => {
  return (
    <div>

    <ContentContainer>
        <h1> Hello </h1>
    </ContentContainer>
    <AppsBanner />
    </div>
 
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