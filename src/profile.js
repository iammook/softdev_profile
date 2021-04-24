import './profile.css'
import {SidebarData} from './Components/SidebarData';
import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

//img
import Wall_dog from './img/wallpaper.jpg'
import Profile_Dog from './img/profile3.jpg'

//font
library.add(fas, fab, far);

function profile(){
    const Account = () =>{
        console.log("Hello in sayHello")
    }
    return (
        <div>   
            <div className = 'container'></div>
            <div class ='content'>
                <h1>บัญชีของฉัน</h1>
            </div>
            <div className = "content2">
                <div className="tab_one">
                    <label>
                        <div className='img_border'>
                            <img className='img-wrap' src={Profile_Dog}/>
                        </div>  
                        {/* <input id="photo-upload" type="file" onChange={this.handleInputChange}/>  */}
                    </label>
                    <div className="profile_bar">
                        <ul className="SidebarList">
                            {SidebarData.map((val,key)=> {
                                return(
                                <li
                                    key={key}
                                    className ="row"
                                    id={window.location.pathname == val.link ? "active" : ""}
                                    onClick={() =>{
                                        window.location.pathname = val.link;
                                    }}
                                >
                                    <div id="icon">
                                        {val.icon}
    
                                  </div> 
                                    <div id="title"> 
                                        {val.title}
                                    </div>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab_two">                  
                    {/* <div className = "space"></div> */}
                </div>
            </div>
        </div>
    )
}

export default profile;
