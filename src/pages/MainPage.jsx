// page login buat disini
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import backgroundImage from './path/to/background2.png';



function MainPage() {
    

    return (
        <>
            <div 
                className='wrapper'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover'
                }} 
>
                <p>halo</p>
				
			</div>

            
        </>
    );
}

export default MainPage;