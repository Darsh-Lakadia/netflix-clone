import "./navbar.css"
import { FaPowerOff } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        function setShow() {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        }

        window.addEventListener("scroll", setShow);
        return () => {
            window.removeEventListener("scroll", setShow);
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="logo-container">

                <img
                    className="nav__logo"
                    src="https://res.cloudinary.com/darshlakadia/image/upload/v1657984481/logo_yzsbjf.png"
                    alt="Netflix Logo"
                />
            </div>
            <div className="iconnavbar" >
                <button>
                    <FaPowerOff />
                </button>
            </div>
        </div>
    )
}

export default Navbar