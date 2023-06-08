import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './navbar.module.scss'

import ContentContainer from 'components/layout/contentContainer/ContentContainer'

import logosSvg from 'public/icons/logo.svg'
import burgerMenuSvg from 'public/icons/menu.svg'

const headerLinks: Array<{title:string , pathName: string}> = [
	{ title: 'Chrome Extension', pathName: '/'},
	{ title: 'Price Comparison', pathName: '/#'},
	{ title: 'Blog', pathName: '/blog'},
]

const Navbar = () => {

	const router = useRouter()

	return (
		<div className={styles.container}>
			<ContentContainer>
				<div className={styles.headerWrapper}>

				<Link passHref href='/'>
					<Image src={logosSvg} alt="ratepunk logo"/>
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

					<button className={styles.burgerMenu_button} >
						<Image src={burgerMenuSvg} alt="burger menu icon"/>
					</button>
				</div>
			</ContentContainer>
		</div>
	)
}

export default Navbar