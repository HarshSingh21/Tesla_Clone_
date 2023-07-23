import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from '../Footer';
import ModelSVideo from './ModelSVideo';

function Home() {
    return (
        <Container>
        <ModelSVideo
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundVideo="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
            {/* <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            /> */}
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`