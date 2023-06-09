import { ReactNode } from 'react'

import MetaData from 'components/metadata/MetaData'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'

export const defaultMetaData = {
  title: 'RATEPUNK',
  description: 'Refer friends and get rewards',
}

const Layout = ({
  children,
  metadata = {title:defaultMetaData.title, description: defaultMetaData.description}
}: {
  children: ReactNode
  metadata?: {title:string, description:string}
}) => {
  return (
    <div>
      <MetaData title={defaultMetaData.title} description={defaultMetaData.description} />
      <div>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout