import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './appStoreBadge.module.scss'

type AppStoreBadgeProps = { 
	icon: ReactNode,
	storeTitle: string,
	linkUrl: string
}

const AppStoreBadge = ({icon, storeTitle, linkUrl}: AppStoreBadgeProps) => {
	return (
			<Link passHref href={linkUrl}> 
				<div className={styles.container}>
					{icon}
					<div>
						<p className={styles.title}>available in the</p>
						<h3 className={styles.storeName}>
							{storeTitle}
						</h3>
					</div>
				</div>
			</Link>
	)
}

export default AppStoreBadge