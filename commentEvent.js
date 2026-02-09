const btn_comment = document.getElementById("btn-comment").addEventListener("click", function(){
    const comment_area = document.getElementById("comment-area")
    const writtenComment = comment_area.value
    // console.log(writeComment)
    const addComment = document.getElementById("comments")

    const commentHolder = document.createElement("p")
    commentHolder.innerText = writtenComment;

    addComment.appendChild(commentHolder);

    comment_area.value = '';


    // console.log(writtenComment)

    // addComment.innerText = writeComment;
    // addComment.appendChild(writeComment)

})
