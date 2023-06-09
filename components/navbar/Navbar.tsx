import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './navbar.module.scss'

import ContentContainer from 'components/layouts/contentContainer/ContentContainer'

import LogosSvg from 'public/icons/logo.svg'
import BurgerMenuSvg from 'public/icons/menu.svg'

import MobileNav from './mobileTopBarModal/MobileNav'

const headerLinks: Array<{title:string , pathName: string}> = [
	{ title: 'Chrome Extension', pathName: '/'},
	{ title: 'Price Comparison', pathName: '/#'},
	{ title: 'Blog', pathName: '/blog'},
]

const Navbar = () => {

	const [isMobileNavOpen, setIsMObileNavOpen] = useState<boolean>(false)

	const router = useRouter()


	const toggleMobileModal = ( ) =>  setIsMObileNavOpen(!isMobileNavOpen)

	return (
		<div className={styles.container}>
			<ContentContainer>
				<div className={styles.headerWrapper}>

					<Link passHref href='/'>
						<LogosSvg />
					</Link>

					<ul className={styles.headerMenu}>
						{headerLinks.map(({title, pathName})=>(
							<li key={title} >
								<Link href={pathName} 
								style={{color: router?.pathname === pathName ? '#4eb3e3' : 'black'}}
								>
									{title}
								</Link>
							</li>
							))
						}
					</ul>

						<MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileModal}>
								<ul className={styles.headerMenu_mobile}>
								{headerLinks.map(({title, pathName})=>(
										<li key={title} onClick={toggleMobileModal}>
											<Link href={pathName} 
											style={{color: router?.pathname === pathName ? '#4eb3e3' : 'black'}}
											>
												{title}
											</Link>
										</li>
									))
								}
								</ul>
						</MobileNav>

					<button className={styles.burgerMenu_button} onClick={toggleMobileModal}>
						<BurgerMenuSvg />
					</button>
				</div>
			</ContentContainer>
		</div>
	)
}

export default Navbar