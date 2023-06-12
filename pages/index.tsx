import { ReactNode } from 'react';

import styles from 'styles/Home.module.scss';

import Layout from 'components/layouts/layout';
import ContentContainer from 'components/layouts/contentContainer/ContentContainer'
import AppsBanner from 'components/elements/appsBanner/AppsBanner';
import StepComponent from 'components/elements/guidanceSteps/StepComponent';

import InviteSvg from 'public/icons/invite.svg'
import CollectCoinsSvg from 'public/icons/collect-coins.svg'
import VoucherSvg from 'public/icons/voucher.svg'
import ReferFriendsCard from 'components/elements/referFriendsCard/ReferFriendsCard';


const stepsToGetReward = [
  {
    icon: <InviteSvg />,
    orderText: "Step 1",
    title:'INVITE FRIENDS',
    description: 'Refer friends with your unique referral link.'
  },
  {
    icon: <CollectCoinsSvg />,
    orderText: "Step 2",
    title:'COLLECT COINS',
    description: 'Get 1 coin for each friend that installs our extension using your referral link.',
    reverseOrder: true,
  },
  {
    icon: <VoucherSvg />,
    orderText: "Step 3",
    title:'GET VOUCHER',
    description: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
  }
]

const Home = () => {
  return (
    <div>

    <ContentContainer>
      <div className={styles.container}>
          <ReferFriendsCard />
        
        <div className={styles.stepsBoxWrapper}>
          {stepsToGetReward.map((props)=> (
            <StepComponent key={props.orderText} {...props} />
          ))}
        </div>
      </div>
    </ContentContainer>
    <AppsBanner />
    </div>
 
 )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home