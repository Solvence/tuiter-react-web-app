const NavigationSidebar = () => {
    return(`
       <div class="list-group">
           <a class="list-group-item" href="/">
               <i class="fab fa-twitter"></i></a>

           <a href="../home.html" class="list-group-item list-group-item-action">
               <i class="fa fa-home wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Home</span>
           </a>
           <a class="list-group-item list-group-item-action active">
               <i class="fa fa-hashtag wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Explore</span>
           </a>
           <a href="../notifications.html" class="list-group-item list-group-item-action">
               <i class="fa fa-bell wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Notifications</span>
           </a>
           <a href="../messages.html" class="list-group-item list-group-item-action">
               <i class="fa fa-envelope wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Messages</span>
           </a>
           <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
               <i class="fa fa-bookmark wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Bookmarks</span>
           </a>
           <a href="../lists.html" class="list-group-item list-group-item-action">
               <i class="fa fa-list wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Lists</span>
           </a>
           <a href="../profile.html" class="list-group-item list-group-item-action">
               <i class="fa fa-user wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">Profile</span>
           </a>
           <a href="../more.html" class="list-group-item list-group-item-action">
               <i class="fa fa-dot-circle wd-float-left pt-1"></i>
               <span class="ps-2 d-none d-xl-block wd-float-left">More</span>
           </a>
       </div>

       <div class="d-grid mt-2">
         <a href="tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
       </div>
    `);
}
export default NavigationSidebar;