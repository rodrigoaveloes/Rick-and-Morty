import { useState } from "react";
import logo from '../assets/logo-2.png';

export const Nav = () => {

        const [isOpen, setIsOpen] = useState(false);
   
    return(
     

<div>
    <nav className="bg-white dark:bg-gray-800  shadow my-auto flex ">
                <div className="w-full justify-center flex items-center mx-auto">
                <a href="">
                <img className="w-52 my-6" src={logo} alt="Workflow"/>            
                </a>
        </div>
    </nav>
</div>

    )
}