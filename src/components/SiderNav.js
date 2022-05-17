import { useState } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Alert from 'react-popup-alert'
import { Button } from "react-bootstrap"

const SideNavigation = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })

    async function handleLogout() {
        

        try {
        await logout()
        navigate('/login');
        } catch {

            onShowAlert('error')
       
        }
    }

    function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Logout is failed!',
          show: true
        })
      }

    const [collapsed, setCollapsed] = useState(false);

    // added styles 
    const styles = {
        sideBarHeight: {
        height: "95vh",
        },
        menuIcon: {
        float: "right",
        margin: "10px",
        },
    };
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <>
            <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
            <SidebarHeader>
            <div className="logotext">
                                {/* small and big change using menucollapse state */}
                                <p>{menuCollapse ? "Dash" : "Dashboard"}</p>
                                </div>
                                <div className="closemenu" onClick={menuIconClick}>
                                    {/* changing menu collapse icon on click */}
                                {menuCollapse ? (
                                    <FiArrowRightCircle/>
                                ) : (
                                    <FiArrowLeftCircle/>
                                )}
                                </div>
            </SidebarHeader>
            <SidebarContent>
                                <Menu iconShape="square">
                                <MenuItem active={true}>
                                    <Link to="/home" >Home</Link>
                                </MenuItem>
                                <MenuItem ><Link to="/summarizer" >Summarizer</Link></MenuItem>
                                <MenuItem ><Link to="/predict" >Predict</Link></MenuItem>
                                </Menu>
                            </SidebarContent>
            <SidebarFooter>
                                <Menu iconShape="square">
                                <MenuItem>
                                    <div className="w-100 text-center mt-2">
                                        <Button variant="link" onClick={handleLogout} style={{background: "black"  , borderColor: "black"}}>
                                            Log Out
                                        </Button>
                                    </div>
                                </MenuItem>
                                </Menu>
            </SidebarFooter>
            </ProSidebar>

            <Alert
                        header={'Error'}
                        btnText={'Close'}
                        text={alert.text}
                        type={alert.type}
                        show={alert.show}
                        onClosePress={onCloseAlert}
                        pressCloseOnOutsideClick={true}
                        showBorderBottom={true}
                        alertStyles={{}}
                        headerStyles={{}}
                        textStyles={{}}
                        buttonStyles={{}}
            />
        </>
        
    );
};

export default SideNavigation;