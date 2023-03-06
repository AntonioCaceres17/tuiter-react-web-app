import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
   return (`
   <div class="row">
   <ul class= "list-group">
    <li class="list-group-item">
        <div class=" fw-bolder">Who to follow</div>
    </li>
    ${(who.map(
        item=>WhoToFollowListItem(item))
        .join(''))}
   </div>
   `)}

   export default WhoToFollowList;