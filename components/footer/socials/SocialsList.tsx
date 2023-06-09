import { ReactNode } from 'react'

import styles from './socialList.module.scss'

type SocialListType = { 
	title: string,
	listData: Array<
		{
			type: string, 
			icon: ReactNode,
			url: string
		}
	>
}

const SocialsList = ({ title, listData }: SocialListType) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>

			<ul>
				{listData.map(({icon, type, url}) => (
					<li key={type}>
						<a href={url}>
							{icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SocialsList