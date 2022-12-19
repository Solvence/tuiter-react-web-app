import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                        ${active === 'home'?'active':''}`}>
                <i class="fa fa-home wd-float-left pt-1 pe-1"></i>
                Home
            </a>
            <a className={`list-group-item
                        ${active === 'explore'?'active':''}`}>
                <i class="fa fa-hashtag wd-float-left pt-1 pe-1"></i>
                Explore
            </a>
            <a className={`list-group-item
                        ${active === 'notifications'?'active':''}`}>
                <i class="fa fa-bell wd-float-left pt-1 pe-1"></i>
                Notifications
            </a>
            <a className={`list-group-item
                        ${active === 'messages'?'active':''}`}>
                <i class="fa fa-envelope wd-float-left pt-1 pe-1"></i>
                Messages
            </a>
            <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`}>
                <i class="fa fa-bookmark wd-float-left pt-1 pe-1"></i>
                Bookmarks
            </a>
            <a className={`list-group-item
                        ${active === 'lists'?'active':''}`}>
                <i class="fa fa-list wd-float-left pt-1 pe-1"></i>
                Lists
            </a>
            <a className={`list-group-item
                        ${active === 'profile'?'active':''}`}>
                <i class="fa fa-user wd-float-left pt-1 pe-1"></i>
                Profile
            </a>
            <a className={`list-group-item
                        ${active === 'more'?'active':''}`}>
                <i class="fa fa-dot-circle wd-float-left pt-1 pe-1"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;