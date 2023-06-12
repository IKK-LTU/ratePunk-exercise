import {useState, useEffect} from 'react'

import styles from './copyLinkInput.module.scss'

import SuccesSvg from 'public/icons/success.svg'

type CopyLinkInputProps = {
	link: string
}

const CopyLinkInput = ({ link }: CopyLinkInputProps) => {
	const [isCopied, setIsCopied] = useState<boolean>(false)

	const onClickCopy = () => {
		navigator.clipboard.writeText(link).then(() => setIsCopied(true))
	}

	useEffect(() => {
		if(isCopied){
			setTimeout(() => {
				setIsCopied(false)
			}, 1000);
		}
	},[isCopied])

	return (
		<>
			<div className={styles.successBox}>
					<SuccesSvg />
					Your email is confirmed!
				</div>
				
				<div className={styles.linkBox}>
				{isCopied &&
					<p className={styles.tooltip}>
						Link copied
					</p>
					}
					<input
						className={styles.getLinkInput}
						name='referalLink'
						type="text"
						readOnly
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