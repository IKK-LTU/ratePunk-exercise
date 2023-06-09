import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './quickLinks.module.scss'

type QuickListProps = {
	title: string
	listData: Array<
		{
			title: string
			url: string
		}
	>
}

const QuickLinks = ({title, listData}: QuickListProps) => {
	const router = useRouter()
	
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				{title}
			</h2>

			{listData.map(({ title, url })=>(
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