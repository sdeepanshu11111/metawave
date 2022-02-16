import React from 'react'
import Github from "../../assets/logo/gitIcon.svg"
import "./style.scss"

const Footer = () => {
    return (

        <footer>

            <div className='foot-div'>

                <div className='ul-div'>
                    <ul>
                        <h2>General</h2>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Support</li>
                        <li>Build</li>
                        <li>Career</li>
                    </ul>

                    <ul>
                        <h2>Technology</h2>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Support</li>
                        <li>Build</li>
                        <li>Career</li>
                    </ul>
                </div>



                <div className='ul-div2'>
                    <ul>
                        <h2>Community</h2>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Support</li>
                        <li>Build</li>
                        <li>Career</li>
                    </ul>

                    <ul className='social'>

                        <li>

                            <a href="/">
                                <img src={Github} alt="" />
                            </a>

                        </li>
                        <li>

                            <a href="/">
                                <img src={Github} alt="" />
                            </a>

                        </li>
                        <li>

                            <a href="/">
                                <img src={Github} alt="" />
                            </a>

                        </li>
                        <li>

                            <a href="/">
                                <img src={Github} alt="" />
                            </a>

                        </li>
                        <li>

                            <a href="/">
                                <img src={Github} alt="" />
                            </a>

                        </li>
                    </ul>
                </div>





            </div>




        </footer>



    )
}

export default Footer