import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './quickLinks.module.scss'

const links = [
	{title:'Price Comparison', url:'#'},
	{title:'Chrome Extension', url:'/'},
	{title:'Safari Extension', url:'#'},
	{title:'Firefox Extension', url:'#'},
	{title:'How It Works', url:'#'},
	{title:'Ratepunk Blog', url:'/blog'}
]

const QuickLinks = () => {
	const router = useRouter()
	
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Quick Links
			</h2>

			{links.map(({ title, url })=>(
				<Link
				 key={title} 
				 href={url} 
				 className={router.pathname === url ? styles.selected : undefined}
				 >
					{title}
				</Link>
			))}
		</div>
	)
}

export default QuickLinks