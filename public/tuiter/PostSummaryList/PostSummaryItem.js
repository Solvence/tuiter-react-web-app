const PostSummaryItem = (post) => {
    return(`
        <div class="wd-post-type-img">
            <img class="wd-post-img pt-2 pb-2 ps-2 pe-2"
                 src=${post.image}/>
            <div class="ps-2 pt-2">
                ${post.topic}
                <br>
                <b class="wd-bold-text pb-1">${post.userName} <i class="fas fa-circle"></i> </b> - ${post.time}
                <br>
                <b class="wd-bold-text pb-1">${post.title}</b>
            </div>
        </div>
    `);
}
export default PostSummaryItem;