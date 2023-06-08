import {ReactNode} from 'react'

import styles from 'contentContainer.module.scss'

const ContentContainer = ({ children }:{ children: ReactNode }) => {
	return (
		<div className={styles.container} >
			{children}
		</div>
	)
}

export default ContentContainer