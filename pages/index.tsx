import {ReactNode} from 'react';

import Image from 'next/image'

import styles from '../styles/Home.module.scss';

import Layout from './layout';

const Home = () => {
  return (
    <main className={styles.container} >
     <h1> Hello </h1>
    </main>
 
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