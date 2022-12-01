import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div>
                <i class="fa fa-magnifying-glass position-absolute wd-margin-top-2-half ms-3"></i>
                <input class="wd-search ps-5" placeholder="Search Tuiter" >

                <a href="explore-settings.html" class="">
                    <i class="fa fa-2x fa-gear position-absolute mt-1 ms-4"></i>
                </a>
            </div>
        </div>

        <ul class="nav nav-tabs mb-1 mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative">
            <div class="position-absolute wd-big-img-text bottom-0 start-0 ms-2 mb-2">SpaceX\'s Starship</div>
            <img class="w-100 mt-2"
                 src="../../images/spacex-starship.webp"/>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
