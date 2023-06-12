import { ReactNode } from 'react'

import styles from './StepComponent.module.scss'

type StepComponentProps = {
	icon: ReactNode
	reverseOrder?: boolean,
	orderText: string
	title: string
	description: string
}

const StepComponent = ({ icon, orderText, title, description, reverseOrder }: StepComponentProps) => {
	return (
		<div className={[styles.container, reverseOrder ? styles.reverseOrder : undefined].join(' ')}
		>
			<div>
			{icon}
			</div>

			<div className={styles.instructionBox}>
				<h3 className={styles.orderIndicatorText}>
					{orderText}
				</h3>	
				<h2 className={styles.title}>
					{title}
				</h2>
				<p className={styles.description}>
					{description}
				</p>
			</div>
			
		</div>
	)
}

export default StepComponent