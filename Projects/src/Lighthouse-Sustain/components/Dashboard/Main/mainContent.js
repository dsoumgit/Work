import React from 'react';
import RequestTracker from './RequestTracker/requestTracker';
import AgingReport from './AgingReport/agingReport';
import SLATracker from './SLATracker/slaTracker';
import PointsTracker from './PointsTracker/pointsTracker';

const MainContent = () => {
    return(
        <React.Fragment>
            <RequestTracker />
            <AgingReport />
            <SLATracker />
            <PointsTracker />
        </React.Fragment>
    )
}

export default MainContent;