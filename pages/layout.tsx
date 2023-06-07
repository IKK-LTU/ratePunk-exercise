import { ReactNode } from 'react'

import MetaData from '../components/layout/MetaData'


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
      {children}
      </div>
    </div>
  )
}

export default Layout