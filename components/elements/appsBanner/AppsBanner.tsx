import ContentContainer from 'components/layouts/contentContainer/ContentContainer';
import styles from './appsBanner.module.scss';

import AppStoreBadge from './AppStoreBadge';

import ChromeIcon from 'public/icons/chrome.svg'
import AppleIcon from 'public/icons/apple.svg';
import ReviewStar from 'public/icons/reviewStar.svg'

const AppsBanner = () => {
	return (
		<div className={styles.backgroundColorWrapper}>
			<ContentContainer>
				<div className={styles.container}>
					<div className={styles.appBadge}>
						<AppStoreBadge
						 storeTitle="chrome web store"
						 linkUrl='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck'
						 icon={<ChromeIcon/>}
						/>
					</div>

					<div className={styles.appBadge}>
						<AppStoreBadge
						 	storeTitle="apple app store"
						  icon={<AppleIcon/>}
							linkUrl="https://apps.apple.com/app/ratepunk/id1607823726"
						/>
					</div>

					<div className={styles.reviewsBox}>
						<div className={styles.reviewStarsWrapper}>
							{Array.apply(null, Array(5)).map((_,index)=> (
								<ReviewStar key={index} />
								))}
						</div>
						
						<p>
							Chrome Store reviews
						</p>
						</div>
				</div>
			</ContentContainer>
		</div>
	)
}

export default AppsBanner