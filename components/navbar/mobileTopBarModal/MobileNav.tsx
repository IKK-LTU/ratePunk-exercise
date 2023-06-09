import { ReactNode } from 'react'

import Link from 'next/link'

import styles from './mobileNav.module.scss'

import LogosSvg from 'public/icons/logo.svg'
import CloseSvg from 'public/icons/close.svg'


type MobileNavProps = {
	isOpen: boolean,
	children: ReactNode
	onClose: () => void
}

const MobileNav = ({ isOpen, children, onClose }: MobileNavProps  ) => {
	return isOpen ? (
		<div className={styles.container}>
			<div className={styles.contentWrapper}>
				<div className={styles.header}>
						<Link passHref href='/'>
							<LogosSvg />
						</Link>
						<button  onClick={onClose}>
							<CloseSvg />
						</button>	
				</div>
				{children}
			</div>
		</div>
	)
	: null
}

export default MobileNav