import React from "react";
import { useNavigate } from "react-router";
import MenuButton from "./Menu";

function Header() {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/login');
    }
    
    return (
        <div>
            <header className="header">
                <MenuButton />
                <div className="logo-box">
                    <h1 id="logoname">Healthcare Management System</h1>
                </div>
                <div className="login-box">
                    <button onClick={onClickLogin} id="login">Login</button>
                </div>
            </header>
        </div>
    );
};

export default Header;
