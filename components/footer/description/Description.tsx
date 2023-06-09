import styles from './description.module.scss'

import LogoSvg from 'public/icons/logo.svg'

import CopyRights from 'components/elements/copyRights/CopyRights'

type DescriptionProps = {
	text: string
}

const Description = ({ text }: DescriptionProps) => {
	return (
		<div className={styles.container}>
			<LogoSvg />

			<p>
				{text}
			</p>

			<div className={styles.copyRights}>
				<CopyRights/>
			</div>
		</div>
	)
}

export default Description