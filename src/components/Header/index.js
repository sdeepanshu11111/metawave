import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./style.scss";
import Burger from "../../assets/icons/burger.svg"
import Logo from "../../assets/logo/logo.svg"



const Header = () => {

    const [toggle, setToggle] = React.useState(false)

    const toggleBtn = () => {
        toggle ? setToggle(false) : setToggle(true)
        console.log('hello')

    }



    const [lan, setlan] = React.useState('');

    const handleChange = (event) => {
        setlan(event.target.value);
    };


    return (

        <header>

            <div className='head-top'>


                <div className='center' >
                    <Box sx={{ minWidth: 80, size: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">lan</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={lan}
                                label="lan"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={20}>Hindi</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <div className="ul-parent">



                        <ul>

                            <li>
                                <a href="">Lightpapper</a>
                            </li>
                            <li>
                                <a href="">Whitepapper</a>
                            </li>

                            <li>
                                <a href="">wiki</a>
                            </li>

                            <li>
                                <a href="">Whitepapper</a>
                            </li>


                        </ul>


                        <ul>
                            <li>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                                </a>
                            </li>



                            <li>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                                </a>
                            </li>






                            <li>
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                                </a>
                            </li>


                            <button>
                                <a>Support</a>
                            </button>


                        </ul>




                    </div>


                </div>


            </div>


            <div className='header-bottom'>

                <div className='img'>


                    <img src={Logo} alt="" />




                </div>

                <ul className='links'>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">About</a>
                    </li>

                    <li>
                        <a href="/">What we do</a>
                    </li>

                    <li>
                        <a href="/">Contact us</a>
                    </li>
                </ul>


                <div className="burger" onClick={toggleBtn} >

                    {/* {toggle ? <h1>hello</h1> : <h1>Hello2</h1>} */}
                    <img src={Burger} alt="" />
                </div>



            </div>


                <div className='ulList'>
                       <ul className='links-mobile'>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">About</a>
                    </li>

                    <li>
                        <a href="/">What we do</a>
                    </li>

                    <li>
                        <a href="/">Contact us</a>
                    </li>
                </ul>
                </div>

                




        </header>


    );
};

export default Header;
