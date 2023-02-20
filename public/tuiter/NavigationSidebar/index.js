const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item list-group-item-action" href="/">
          <i class="fab fa-twitter"></i></a>
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->

               
         <a class="list-group-item list-group-item-action" href="/">
            <i class="fas fa-home text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Home</span></a>
        <a class="list-group-item active list-group-item-action">
            <i class="fas fa-hashtag text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Explore</span></a>

        <a class="list-group-item list-group-item-action" href="/">
            <i class="fas fa-bell text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Notifcations</span></a>

        <a class="list-group-item list-group-item-action" href="/">
            <i class="fas fa-envelope text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Messages</span></a>

        <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-bookmark text-blue"></i>
                <span class="d-xl-inline d-none d-sm-none d-done">Bookmarks</span></a>

        <a class="list-group-item list-group-item-action" href="/">
            <i class="fa fa-list text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Explore</span></a>

        <a class="list-group-item list-group-item-action" href="/">
            <i class="fas fa-user text-blue"></i>
            <span class="d-xl-inline d-none d-sm-none d-done">Profile</span></a>

        <a class="list-group-item list-group-item-action" href="/">
                <i class="fas fa-circle text-blue"></i>
                <span class="d-xl-inline d-none d-sm-none d-done">More</span></a>
    
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tuit</a>
      </div>
      </div>
    `);
   }
   export default NavigationSidebar;


