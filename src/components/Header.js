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
        <div>
        <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">Customer Churn Analyzer</NavbarBrand>
            
            <NavbarText>
            <div>
                <AiOutlineUser>{currentUser.email}</AiOutlineUser>
            </div>
            </NavbarText>
        </Navbar>
        </div>
    );
};




