function PostSummaryItem(post) { 
    return (`
    <li class="list-group-item">
    <div class="row">
        <div class="col-8"> 
            <div class="text-secondary">${post.topic}</div>
            <span class="fw-bolder pt-1 pb-1">
            ${post.userName}
                <i class="fas fa-check-circle"> </i>
            </span>
            <span class="text-secondary"> - ${post.time}</span>     
            <div class="fw-bolder">${post.title}</div>     
        </div>
        <div class="col-4">
            <img class="w-100 rounded" src=${post.image} alt="ReactJS">
    </div>
</li>

    `);
}

export default PostSummaryItem;
