import React from 'react';
import './stripe-button.style.scss';

import logo from '../../assets/crown.svg';
import StripeCheckout from 'react-stripe-checkout';

// Token is on the success after the payment. This handles by the backend. 
// In this case, we just display the alert.
const onToken = () => {
    alert('Successfully paid!');
}
                // 
const StripeButton = ({ price }) => {

    // Stripe accepts the payment as the total in cents 
    const priceForStripe = price * 100;
    // publishable key is getting it from the account (test key)
    const publishableKey = 'pk_test_oP7D091D0RQGWM103dC7v92E';

    return(
        <StripeCheckout
            label="Pay Now"
            name="eCommerce App"
            description={`Your total is $${price}`}
            image={logo}
            billingAddress
            shippingAddress
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} />
    )
}

export default StripeButton;