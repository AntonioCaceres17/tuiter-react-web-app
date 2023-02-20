import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/posts.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center">
            <div class="col-11">
            <span class="input-group-text position-absolute bg-transparent text-muted border-0 mt-1">
            <i class="fas fa-search"></i>
            </span>

            <input class="form-control rounded-pill ps-5" placeholder= "Search Tuiter"/>

            </div>
    
            <div class="col-1 mt-1">
                <i class="fas fa-cog fa-lg"></i>
            </div>
        </div>
           
           <ul class="nav mt-1 mb-2 nav-tabs">


           <li class="nav-item ">
               <a class="nav-link active" href="#">
                   For you
               </a>
           </li>
           <li class="nav-item mt-0">
               <a class="nav-link" href="#">
                   Trending
               </a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">
                   News</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">Sports</a>
           </li>
           <li class="nav-item d-none d-md-block">
               <a class="nav-link" href="#">Entertainment</a>
           </li>
        </ul>
            

        <div class="position-relative mt-2 ">
              <img src="../../imgs/starship.webp" width="100%"/>
              <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>

            </div>




           <div class="list-group">
           ${PostSummaryList(post)}
           </div>
    `);
}
export default ExploreComponent;

