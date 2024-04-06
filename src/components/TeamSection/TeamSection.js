import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/team'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>Team</span>
                            <h2>Meet with our Brilliant Tem Members</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xs-12">
                        <div className="team-grids">
                            {Team.map((team, aitem) => (
                                <div className="grid" key={aitem}>
                                    <div className="img-social">
                                        <div className="img-holder">
                                            <img src={team.tImg} alt="" />
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h3>{team.name}</h3>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;