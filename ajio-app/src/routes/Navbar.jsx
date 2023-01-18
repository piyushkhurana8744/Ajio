import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "../styles/Navbar.css";
export default function Navbar2() {
    let x = useSelector((data) => {
        return data.isAuth;
    })
    let [auth, setAuth] = useState(localStorage.getItem("auth") || false)
    console.log(auth)
    return (
        <div className="navbar" style={{ width: "100%", height: "90px", position: "fixed", top: "0", borderTop: "3px solid #2c4152", backgroundColor: "#fff", fontFamily: "SourceSansPro", boxShadow: "0 3px 6px 0 rgb(0 0 0 / 20%)", borderBottom: "1px solid #e0e0e0", zIndex: "101", marginTop: "-0.5px" }}>
            <div className="ajio_logo" style={{ width: "150px" }} >
                <Link to="/"><img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" width="130px" height="38px" alt="" style={{ boxSizing: "border-box", margin: "0px 0px 0px", cursor: "pointer", marginLeft: "10px" }} /></Link>
            </div>
            <div className='nav_header_right_outer' style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: "50px", marginLeft: "440px" }}>
                <div className='nav_header_right' style={{ height: "40px", width: "712px", display: "flex", fontFamily: "SourceSansPro", marginLeft: "160px", }}>

                    {/* <div className='space_box' style= {{border: "1px solid black",height: "40px", width: "50px"}}>

                </div> */}
                    <div className='nav_links' style={{ display: "flex", justifyContent: "space-between", alignContent: "center", width: "670px", marginRight: "20px", marginLeft: "-150px" }}>
                        <Link to={"/men"} style={{ textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px" }}>MEN</Link>
                        <Link to={"/women"} style={{ textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px" }}>WOMEN</Link>
                        <Link to={"/kids"} style={{ textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px" }}>KIDS</Link>
                        <Link to={"/indie"} style={{ textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px" }}>INDIE</Link>
                        <Link to="/" style={{ textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px" }}>HOME AND KITCHEN</Link>
                    </div>
                    <div className='nav_searchbar' style={{ display: "flex" }}>
                        <input type="text" placeholder='Search AJIO' style={{ height: "30px", width: "250px", borderRadius: "17px", border: "1px solid #2c4152", fontFamily: "Helvetica,sans-serif", backgroundColor: "#fffded", fontSize: "14px", padding: "5px" }} />
                        {/* <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydbUMW2Zs1TT-YXZ_H7D3xwSOh8nPwwD5Rg&usqp=CAU" height= "15px" alt="" style ={{position: "absolute", marginLeft: "-40px", marginTop: "-6px" }}/></div> */}
                    </div>
                    <div className='nav_buttons' style={{ display: "flex", width: "120px", justifyContent: "space-evenly", alignItems: "center" }}>
                        <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
                        <Link to="/cart"><div className='icon_cart' style={{ backgroundColor: "grey", height: "34px", width: "34px", borderRadius: "17px" }}>
                            <img src="data:image/png;base64,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" style={{ borderRadius: "17px", width: "40px" }} />
                        </div></Link>

                    </div>
                </div>

            </div>
            <div className='guest_header' style={{ width: "500px", display: "flex", flexDirection: "row-reverse", marginTop: "-40px", height: "30px", justifyContent: "space-evenly", marginLeft: "-390px" }}>
                <div></div>
                <div style={{ backgroundColor: "black" }}><Link to="" style={{ textDecoration: "none", color: "black", fontFamily: "SourceSansPro", fontSize: "12px", color: "#fff" }}>Vist AJIOLUXE</Link></div>
                <div><Link to="/contact" style={{ textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px" }}>Contact Us</Link></div>
                <div style={{ marginTop: "3px", textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px", cursor: "pointer" }}> 
                Sign In</div>
                <div><Link to="" style={{ textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px" }}>My Account</Link></div>

            </div>

        </div>
    )
}
