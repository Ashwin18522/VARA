import React from 'react';
import SubscriptionText from './textpart/SubscriptionText.jsx' ;
import Subscription from './choices/Subscription.jsx';

function SubscriptionBox() {
  return(
    <div>
    <SubscriptionText/>
    <Subscription/>
    </div>
  );
}

export default SubscriptionBox;