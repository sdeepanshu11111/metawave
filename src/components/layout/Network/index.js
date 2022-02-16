import React from 'react'
import "./style.scss"
import Gover from "../../../assets/network/governce.svg"

const Network = () => {
    return (


        <section className='network'>
            <div className='parent'>
                <div className='row'>
                    <h2>Powering the Metawave network
                    </h2>

                    <p>The DOT token serves three distinct purposes:
                    </p>

                    <p>governance over the network, staking and bonding</p>

                </div>


                <div className='card-parent'>

                    <div class className="card">

                        <img src={Gover} alt="" />
                        <h4>Governance</h4>
                        <p>Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.</p>

                    </div>


                    <div class className="card">

                        <img src={Gover} alt="" />
                        <h4>Governance</h4>
                        <p>Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.</p>

                    </div>


                    <div class className="card">

                        <img src={Gover} alt="" />
                        <h4>Governance</h4>
                        <p>Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.</p>

                    </div>



                </div>


                <div className='learn'>
                    <h2>Learn more about the DOT token</h2>

                    <div className='discover'>
                        <a href="">Discover DOT</a>

                    </div>
                </div>



            </div>

        </section>


    )
}

export default Network