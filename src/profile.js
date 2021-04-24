import './profile.css';
import '../../../fonts/Abel-Regular.ttf';
import '../homePage/homeLayout.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SidebarData} from './SidebarData';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// import Bell_icon_src from '../homePage/img/bell-icon.png'
// import Logo_icon_src from '../homePage/img/top-icon.png'

import Wall_dog from './img/wallpaper.jpg'
import Profile_Dog from './img/profile3.jpg'

import Profile_leftside_pic_src from './img/cat.jpg'
import Profile_item1_src from './img/item1.jpg'
import Profile_item2_src from './img/item2.jpg'
import Profile_icon_src from './img/profile.jpg'
import Profile_wallpaper_src from './img/wall.jpg'

import PopUp from './popUp'


library.add(fas, fab, far);

const Profile = () => {

    const [classStyle, setClassStyle] = useState('menu-header')
    const [astStyle, setAstStyle] = useState('ast')
    const [notPaidDogData, setNotPaidDogData] = useState([{ name: 'หมาชนิดแรก', picture: Profile_item1_src, price: 7000, amount: 1 },
    { name: 'หมาชนิดสอง', picture: Profile_item2_src, price: 12000, amount: 1 }])

    const [paidDogData, setPaidDogData] = useState([{ name: 'หมาชนิดแรกจ่ายและ', picture: Profile_item1_src, price: 8000, amount: 1 },
    { name: 'หมาชนิดสองจ่ายและ', picture: Profile_item2_src, price: 15000, amount: 1 }])

    const [totalPaid, setTotalPaid] = useState(12000 + 7000)
    const [popUp, setPopUp] = useState(false)
    const [canceledPaidDog, setCanceledPaidDog] = useState([])

    const [moneyTab, setMoneyTab] = useState([true, false, false])

    const setToggle = () => {
        classStyle == 'menu-header' ? setClassStyle('menu-header active') : setClassStyle('menu-header')
        classStyle == 'menu-header active' ? setAstStyle('ast-fullbg') : setAstStyle('ast')
        console.log({ astStyle })
    }

    const cancelPaidDog = (selectedItem) => {
        let tempNotPaidDogData = []
        let shallowCanceledPaidDog = canceledPaidDog
        for (let i = 0; i < notPaidDogData.length; i++) {
            if (notPaidDogData[i] !== selectedItem) {
                tempNotPaidDogData.push(notPaidDogData[i])
            }
            else shallowCanceledPaidDog.push(selectedItem)
        }
        setNotPaidDogData(tempNotPaidDogData)
        setCanceledPaidDog(shallowCanceledPaidDog)

        let curTotalPaid = 0
        if (tempNotPaidDogData.length > 0) {
            tempNotPaidDogData.map(each => {
                let curTotal = curTotalPaid + (each.price * each.amount)
                setTotalPaid(curTotal)
            })
        }
        else setTotalPaid(0)
    }

    const showPopUp = (type) => {
        if (type === 'Buy') {
            setPopUp(true)
            getTotalPaid()
        }
    }

    const getTotalPaid = () => {
        return totalPaid
    }

    const moneySwitch = (selectedTab) => {
        if (selectedTab === 1) {
            setMoneyTab([true, false, false])
        }
        else if (selectedTab === 2) {
            setMoneyTab([false, true, false])
        }
        else {
            setMoneyTab([false, false, true])
        }
    }

    const delCanceledPaidDog = (item) => {
        let tempCanceledPaidDogData = []
        let tempNotPaidDogData = notPaidDogData
        for (let i = 0; i < canceledPaidDog.length; i++) {
            if (canceledPaidDog[i] !== item) {
                tempCanceledPaidDogData.push(canceledPaidDog[i])
            }
            else tempNotPaidDogData.push(canceledPaidDog[i])
        }
        setCanceledPaidDog(tempCanceledPaidDogData)
        setNotPaidDogData(tempNotPaidDogData)

        let curTotalPaid = 0
        tempNotPaidDogData.map(each => {
            curTotalPaid = curTotalPaid + (each.price * each.amount) 
        })
        setTotalPaid(curTotalPaid)
        console.log(curTotalPaid)
    }

    return (
        <div>
            <div className = 'container'></div>
            <div class ='content'>
                <h1>บัญชีของฉัน</h1>
            </div>
            <div className = "content2">
                {popUp && <PopUp setPopUp={setPopUp} getTotalPaid={totalPaid} />}
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
                <div className="tab_two2">                  
                <div className='right-pad'>
                            {moneyTab[0] &&
                                <div className='temp-money-pane'>
                                    <div className='money-tab'>
                                        <text className='money-header-selected'>ที่ต้องชำระ</text>
                                        <text className='money-header' onClick={() => moneySwitch(2)}>ชำระแล้ว</text>
                                        <text className='money-header' onClick={() => moneySwitch(3)}>ยกเลิก</text>
                                    </div>
                                    <div className='money-info-pane'>
                                        <div className='money-table-row'>
                                            <div class='col1-tools-header' />
                                            <div class='col2-pic-header' />
                                            <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                            <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                            <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                            <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                        </div>
                                        {notPaidDogData.map(each => {
                                            return (
                                                <div className='money-table-row'>
                                                    <div class='col1-tools' onClick={() => cancelPaidDog(each)}>X</div>
                                                    <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                    <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                    <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                    <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                    <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='money-info-pane-bottom'>
                                        <div className='money-table-row'>
                                            <div class='money-bottom-blog'>ยอดชำระ</div><div className='money-bottom-value'>{totalPaid}</div>
                                        </div>
                                        <div className='money-table-row'>
                                            <div class='money-bottom-blog'>ยอดชำระทั้งหมด</div><div className='money-bottom-value'>{totalPaid}</div>
                                        </div>

                                    </div>
                                    <div className='money-pane'>
                                        <button class="money-button" onClick={() => showPopUp('Buy')}>
                                            ซื้อสุนัข
                                        </button>
                                    </div>
                                </div>}

                            {moneyTab[1] && <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => moneySwitch(1)}>ที่ต้องชำระ</text>
                                    <text className='money-header-selected'>ชำระแล้ว</text>
                                    <text className='money-header' onClick={() => moneySwitch(3)}>ยกเลิก</text>
                                </div>
                                <div className='money-info-pane'>
                                    <div className='money-table-row'>
                                        <div class='col1-tools-header' />
                                        <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                    </div>
                                    {paidDogData && paidDogData.map(each => {
                                        return (
                                            <div className='money-table-row'>
                                                <div class='col1-tools' />
                                                <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='money-pane'/>
                            </div>}

                            {moneyTab[2] && <div className='temp-money-pane'>
                                <div className='money-tab'>
                                    <text className='money-header' onClick={() => moneySwitch(1)}>ที่ต้องชำระ</text>
                                    <text className='money-header' onClick={() => moneySwitch(2)}>ชำระแล้ว</text>
                                    <text className='money-header-selected' >ยกเลิก</text>
                                </div>
                                <div className='money-info-pane'>
                                    <div className='money-table-row'>
                                        <div class='col1-tools-header' />
                                        <div class='col2-pic-header' />
                                        <div className='col3-name-header'><div class='.center-div-black'>สุนัข</div></div>
                                        <div className='col4-price-header'><div class='.center-div-black'>ราคา</div></div>
                                        <div className='col5-amount-header'><div class='.center-div-black'>จำนวน</div></div>
                                        <div className='col6-total-header'><div class='.center-div-black'>ทั้งหมด</div></div>
                                    </div>
                                    {(canceledPaidDog.length>0) && canceledPaidDog.map(each => {
                                        return (
                                            <div className='money-table-row'>
                                                <div class='col1-tools' onClick={() => delCanceledPaidDog(each)}>X</div>
                                                <div class='col2-pic'><img className='money-table-pic' src={each.picture} /></div>
                                                <div className='col3-name'><div className='.center-div-black'>{each.name}</div></div>
                                                <div className='col4-price'><div className='.center-div-pink'>{each.price}</div></div>
                                                <div className='col5-amount'><div className='.center-div-black'>{each.amount}</div></div>
                                                <div className='col6-total'><div className='.center-div-pink'>{each.amount * each.price}</div></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                            </div>}
                        </div>
                </div>
            </div>
        </div >

    );
}

export default Profile

