import { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './referFriendsCard.module.scss'

import EmailSvg from 'public/icons/email.svg'
import CopyLinkInput from './copyLink/CopyLinkInput';



const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues = {
	email: '',
}

const ReferFriendsCard = () => {

	const [ referalLink, setReferalLink] = useState<string>('')

	const onSubmit = () => {
		setReferalLink('https://ratepunk.com/referral');
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				REFER FRIENDS AND GET REWARDS
			</h1>

			<h4 className={styles.description}>
				Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.
			</h4>

			<Formik
       initialValues={initialValues}
       onSubmit={onSubmit}
			 validationSchema={validationSchema}
     >
       {({
         values,
         errors,
         handleChange,
         handleSubmit,
       }) => (
         <form onSubmit={handleSubmit}>
					 {referalLink 
			? <CopyLinkInput link={referalLink} />
			: <>
					<p className='error'>
						{errors.email}
					</p>

					<div className={styles.inputBox}>
						<EmailSvg />

						<input
							className={styles.emailInput}
							type="email"
							name="email"
							onChange={handleChange}
							value={values.email}
							placeholder="Enter your email address"
						/>
					</div>
					
					<button className={styles.getLinkButton} type="submit">
						Get Referral Link
					</button>
				</>
			}
         </form>
       )}
     </Formik>


			<p className={styles.limitationText}>
				Limits on max rewards apply.
			</p>
		</div>
	)
}

export default ReferFriendsCard