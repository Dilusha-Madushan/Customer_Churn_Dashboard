import React from "react"
import { Card } from "react-bootstrap"

export default function Home() {

  const styles = {
    sideBarHeight: {
    height: "100vh",
    },
    menuIcon: {
    float: "right",
    margin: "10px",
    },
  };

  return (
    <div style={{position: "absolute" , bottom: "0px" , top: "0px" , alignSelf: "center" , clear: "right"}}>
          <h1 style={{ padding: "20%" }}>Home</h1>
    </div>
  )
}
