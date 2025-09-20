import React from 'react';
import Overview from './Abouts/Overview';
import OurGallery from './OurGallery/OurGallery';
import OurAllClients from './OurAllClients/OurAllClients';
import OurStatsSection from './Abouts/OurStatsSection/OurStatsSection';
import AllServicesCard from './AllServicesCard/AllServicesCard';
import VisionMission from './VisionMission/VisionMission';
import CoreValues from './CoreValues/CoreValues';

const Abouts = () => {
    return (
        <div>
            <Overview></Overview>
            <VisionMission></VisionMission>
            <CoreValues></CoreValues>
            <OurGallery></OurGallery>
            <OurAllClients></OurAllClients>
            <OurStatsSection></OurStatsSection>
            <AllServicesCard></AllServicesCard>
        </div>
    );
};

export default Abouts;