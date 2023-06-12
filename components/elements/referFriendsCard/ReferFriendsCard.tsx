import { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './referFriendsCard.module.scss'

import EmailSvg from 'public/icons/email.svg'
import CopyLinkInput from './copyLink/CopyLinkInput';

import axiosClient from 'api/axiosClient';
import { collectDataApi } from 'api/collectData';

import LoaderSvg from 'public/icons/loaderCircle.svg'

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues = {
	email: '',
}

const ReferFriendsCard = () => {

	const [ referalLink, setReferalLink] = useState<string>('')
	const [apiError, setApiError] =  useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)


// JSONBIN dont have put request :D. That's why i made this hack

	const putEmails = async (emailsArray: Array<string>) => {
		await collectDataApi.updateEmails(emailsArray)
			.then(()=> { 
				setReferalLink('https://ratepunk.com/referral');
				setIsLoading(false)
			}	
			).catch(err => setApiError(err.message))
	}

	const getEmails = async ( newEmail: string ) => {
		if(newEmail){
			await collectDataApi.getEmails()
			.then((resp)=> {
				const oldEmailsArray = resp.data.record
				const isAlredyExist = resp.data.record.includes(newEmail)
				
				if(isAlredyExist) return putEmails(oldEmailsArray)

				oldEmailsArray.push(newEmail)
		
				return putEmails(oldEmailsArray)
			}	
			).catch(err => setApiError(err.message))

		}
}

	const onSubmit = async (values: { email: string }) => {
		if(values.email){
			setIsLoading(true)
			getEmails(values.email)
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				REFER FRIENDS AND GET REWARDS
			</h1>

			<h4 className={styles.description}>
				Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.
			</h4>

			<p className='error'>
				{apiError}
			</p>

			{referalLink 
			? <CopyLinkInput link={referalLink} />
			: 
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
						{isLoading ? <LoaderSvg className={styles.loadingSpinner}/> : 'Get Referral Link'}
					</button>
         </form>
				 )}
				 </Formik>
			}


			<p className={styles.limitationText}>
				Limits on max rewards apply.
			</p>
		</div>
	)
}

export default ReferFriendsCard