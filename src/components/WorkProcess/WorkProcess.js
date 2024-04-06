import React from 'react'

const WorkProcess = (props) => {
    return (
        <section className="work-process-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>Work Process</span>
                            <h2>How It Works</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="work-process-grids clearfix">
                            <div className="grid">
                                <div className="count">
                                    <span>1</span>
                                </div>
                                <h4>Easy Online Booking</h4>
                                <p>Recently cut out of an illustrated magazine and housed in a nice, gilded frame</p>
                            </div>
                            <div className="grid">
                                <div className="count">
                                    <span>2</span>
                                </div>
                                <h4>Get a cleaner</h4>
                                <p>Recently cut out of an illustrated magazine and housed in a nice, gilded frame</p>
                            </div>
                            <div className="grid">
                                <div className="count">
                                    <span>3</span>
                                </div>
                                <h4>Enjoy Cleanliness</h4>
                                <p>Recently cut out of an illustrated magazine and housed in a nice, gilded frame</p>
                            </div>
                            <div className="separator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;