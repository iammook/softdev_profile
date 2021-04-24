
import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const SidebarData = [
    {
        title: "บัญชีของฉัน",
        icon: <ArrowForwardIosIcon style={{ fontSize: 18 }}/>,
        link: "/profile_main"
    },
    {
        title: "สนใจ",
        icon: <ArrowForwardIosIcon style={{ fontSize: 18 }}/>,
        link: "/profile_like" 
    },
    {
        title: "ร้านค้าของฉัน",
        icon: <ArrowForwardIosIcon style={{ fontSize: 18 }}/>,
        link: "/profile_Store"
    },
    {
        title: "สถานะการชำระเงิน",
        icon: <ArrowForwardIosIcon style={{ fontSize: 18 }}/>,
        link: "/profile_Payment"
    },
    {
        title: "ออกจากระบบน",
        icon: <ArrowForwardIosIcon style={{ fontSize: 18 }}/>,
        link: "/profile_Logout"
    },

]
