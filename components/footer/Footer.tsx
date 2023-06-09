import Link from 'next/link'

import styles from './footer.module.scss'

import Deescription from './description/Description'
import QuickLinks from './quickLinks/QuickLinks'
import ContentContainer from 'components/layouts/contentContainer/ContentContainer'
import SocialsList from './socials/SocialsList'

import MailIcon from 'public/icons/email-footer.svg'

import InstagramIcon from 'public/icons/instagram.svg'
import FacebookIcon from 'public/icons/facebook.svg'
import LinkedinIcon from 'public/icons/linkedin.svg'
import TwitterIcon from 'public/icons/twitter.svg'
import TiktokIcon from 'public/icons/tiktok.svg'
import CopyRights from 'components/elements/copyRights/CopyRights'

const socialsList = [
	{ type: 'instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/ratepunk/' },
	{ type: 'facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/r8punk/' },
	{ type: 'linkedin', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/company/ratepunk/' },
	{ type: 'twitter', icon: <TwitterIcon />, url: 'https://twitter.com/rate_punk' },
	{ type: 'tiktok', icon: <TiktokIcon />, url: 'https://www.tiktok.com/@rate_punk' },
]

const links = [
	{ title:'Price Comparison', url:'#' },
	{ title:'Chrome Extension', url:'/' },
	{ title:'Safari Extension', url:'#' },
	{ title:'Firefox Extension', url:'#' },
	{ title:'How It Works', url:'#' },
	{ title:'Ratepunk Blog', url:'/blog' }
]

const descriptionText = "Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you're getting the best deal!"

const ratePunkEmail = 'hi@ratepunk.com'

const contactsTitle = "Contacts"
const quickLinksTitle = 'Quick Links'
const socialsTitle = "Socials"

const Footer = () => {
	return (
		<div className={styles.container}>
			<ContentContainer>
				<div className={styles.contentWrapper}>
					<div>
						<Deescription text={descriptionText} />
					</div>

					<div>
						<QuickLinks 
							title={quickLinksTitle}
							listData={links}
						
						/>
					</div>

					<div className={styles.contactsAndSocialsBox}>

						<div className={styles.contacts}>
							<h2>{contactsTitle}</h2>

							<Link href={`mailto:${ratePunkEmail}`}
							 	target="_blank"
								rel="nooopener"
							>
								<MailIcon />
								{ratePunkEmail}
							</Link>
						</div>

						<SocialsList
							title={socialsTitle}
							listData={socialsList}
						 />
					</div>

					<div className={styles.copyRights}>
						<CopyRights />
					</div>
				</div>
			</ContentContainer>
		</div>
	)
}

export default Footer