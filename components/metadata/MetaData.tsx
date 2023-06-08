import Head from 'next/head'

import favIcon from 'public/favicon.ico'
const Meta = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href={favIcon.src}
      />
      <meta
        name="description"
        content={description}
      />
      <title>{title}</title>
    </Head>
  )
}

export default Meta