import { ReactNode } from 'react';

import Layout from 'components/layouts/layout';
import ContentContainer from 'components/layouts/contentContainer/ContentContainer'

const Home = () => {
  return (
    <ContentContainer>
        <div style={{height:'80vh', padding: '3rem'}}>
          <h1>
            RatePunk blog page
          </h1>
        </div>
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