import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="/">Tuiter</a>
            <a className={`list-group-item
                        ${active === 'home'?'active':''}`} href="/tuiter/home">
                <i class="fa fa-home wd-float-left pt-1 pe-1"></i>
                Home
            </a>
            <a className={`list-group-item
                        ${active === 'explore'?'active':''}`} href="/tuiter/explore">
                <i class="fa fa-hashtag wd-float-left pt-1 pe-1"></i>
                Explore
            </a>
            <a className={`list-group-item
                        ${active === 'notifications'?'active':''}`} href="/">
                <i class="fa fa-bell wd-float-left pt-1 pe-1"></i>
                Notifications
            </a>
            <a className={`list-group-item
                        ${active === 'messages'?'active':''}`} href="/">
                <i class="fa fa-envelope wd-float-left pt-1 pe-1"></i>
                Messages
            </a>
            <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`} href="/">
                <i class="fa fa-bookmark wd-float-left pt-1 pe-1"></i>
                Bookmarks
            </a>
            <a className={`list-group-item
                        ${active === 'lists'?'active':''}`} href="/">
                <i class="fa fa-list wd-float-left pt-1 pe-1"></i>
                Lists
            </a>
            <a className={`list-group-item
                        ${active === 'profile'?'active':''}`} href="/">
                <i class="fa fa-user wd-float-left pt-1 pe-1"></i>
                Profile
            </a>
            <a className={`list-group-item
                        ${active === 'more'?'active':''}`} href="/">
                <i class="fa fa-dot-circle wd-float-left pt-1 pe-1"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;