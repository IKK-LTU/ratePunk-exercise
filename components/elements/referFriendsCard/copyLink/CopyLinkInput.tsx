import React from 'react'

import styles from './copyLinkInput.module.scss'

import SuccesSvg from 'public/icons/success.svg'

type CopyLinkInputProps = {
	link: string
}

const CopyLinkInput = ({ link }: CopyLinkInputProps) => {

	const onClickCopy = () => {
		navigator.clipboard.writeText(link)
	}

	return (
		<>
			<div className={styles.successBox}>
					<SuccesSvg />
					Your email is confirmed!
				</div>
				
				<div className={styles.linkBox}>
					<input
						className={styles.getLinkInput}
						name='referalLink'
						type="text"
						value={link}
						/>
					<button 
						className={styles.copyButton}
						onClick={onClickCopy}
					>
						Copy
					</button>
				</div>
		</>
	)
}

export default CopyLinkInput