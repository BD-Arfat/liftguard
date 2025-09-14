import React from 'react';
import Overview from './Abouts/Overview';
import OurGallery from './OurGallery/OurGallery';
import OurAllClients from './OurAllClients/OurAllClients';
import OurStatsSection from './Abouts/OurStatsSection/OurStatsSection';
import AllServicesCard from './AllServicesCard/AllServicesCard';

const Abouts = () => {
    return (
        <div>
            <Overview></Overview>
            <OurGallery></OurGallery>
            <OurAllClients></OurAllClients>
            <OurStatsSection></OurStatsSection>
            <AllServicesCard></AllServicesCard>
        </div>
    );
};

export default Abouts;