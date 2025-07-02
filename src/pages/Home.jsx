import React from "react";
import FeatureItem from "../components/FeatureItem/FeatureItem";
import Banner from "../components/Banner/Banner";
import icon1 from '../assets/icons/icon-chat.png';
import icon2 from '../assets/icons/icon-money.png';
import icon3 from '../assets/icons/icon-security.png';
import '../components/FeatureItem/FeatureItem.css';


function ItemPage({ image, descriptionImage, title, description }) {
    return (
        <div><Banner className="item" />
            <FeatureItem
                image={icon1}
                descriptionImage="Une icône"
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                image={icon2}
                descriptionImage="Icône 2"
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                image={icon3}
                descriptionImage="Icône 3"
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money is always safe."
            />
        </div>

    )
}

export default ItemPage
