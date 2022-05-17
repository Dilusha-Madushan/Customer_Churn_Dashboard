import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext"

export default function Header(){

    const { currentUser } = useAuth();

    return (
        <>
        <Navbar light expand="md" style={{height: "7vh" , backgroundColor: "#663d00"}}>
            <NavbarBrand href="/" className="text-warning">Customer Churn Analyzer</NavbarBrand>
            
            <NavbarText className="ms-auto pe-3 text-white">
            {currentUser.email || 'User'}
            </NavbarText>
            <div>
                <AiOutlineUser color="white"></AiOutlineUser>
            </div>
        </Navbar>
        </>
    );
};




