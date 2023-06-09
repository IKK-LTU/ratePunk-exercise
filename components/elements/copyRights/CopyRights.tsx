import styles from './copyRights.module.scss'

const currentYear = new Date().getFullYear()

const CopyRights = () => (
		<p className={styles.paragraph}>
			 © {currentYear} Ratepunk. All Rights Reserved.
		</p>
	)

export default CopyRights