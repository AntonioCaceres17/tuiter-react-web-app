function WhoToFollowListItem(who) {
return (`

<li class="list-group-item">
    <div class="row flex-nowrap">
    <div class="col-2">
        <img height=45px width=45px class="rounded-circle" src=${who.avatarIcon} alt="Elon Musk">
    </div>
    <div class="col-8">
        <div class="">${who.userName}<i class="fas fa-check-circle"> </i>
        </div>
        <div class="text-secondary">${who.handle}</div>
    </div>
    <div class="col-2">
        <button type="button" class="btn btn-primary rounded-pill btn-md float-end">Follow</button>
    </div>
</div>
</li>

`);}

export default WhoToFollowListItem;