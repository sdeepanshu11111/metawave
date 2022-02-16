import React from 'react'
import Icon from "../../../assets/icons/icons.svg"
import "./style.scss"
import background from "../../../assets/banner/banner.jpg"

const OpenSource = () => {
    return (

        <section className='open'>

            <div className='parent'>
                <div className='card'>
                    <div className='left'>
                        <h2>An open-source protocol built for everyone</h2>
                    </div>

                    <div className='right'>
                        <h2>Polkadot is an open-source project founded by the</h2>
                        <a href="/">Web3 Foundation.</a>
                        <h2>Web3 Foundation has commissioned five teams and over 100 developers to build Polkadot, including:</h2>
                    </div>
                </div>




                <div className='card-icons'>
                    <img src={Icon} alt="" />
                    <img src={Icon} alt="" />
                    <img src={Icon} alt="" />
                    <img src={Icon} alt="" />
                </div>
            </div>


            <div className='banner' style={{ backgroundImage: `url(${background})` }} >

                <div className='banner-card'>


                    <h4>Founded by some of the blockchain industry’s foremost builders</h4>

                    <a href="">Learn About the metawave Team</a>
                </div>



            </div>




        </section>




    )
}

export default OpenSource