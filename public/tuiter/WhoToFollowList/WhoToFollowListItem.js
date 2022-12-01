const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item list-group-item-action">
            <img class="wd-rec-img"
                 src=${who.avatarIcon}/>
            <div class="wd-rec-text ps-2">
                <b>${who.userName}</b> <i class="fa-solid fa-check"></i>
                <br>
                @${who.handle}
            </div>
            <button class="btn btn-primary wd-float-right rounded-pill">
                Follow
            </button>
        </div>
    `);
}
export default WhoToFollowListItem;