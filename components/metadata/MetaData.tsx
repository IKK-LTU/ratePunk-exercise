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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet"/>
      <meta
        name="description"
        content={description}
      />
      <title>{title}</title>
    </Head>
  )
}

export default Meta