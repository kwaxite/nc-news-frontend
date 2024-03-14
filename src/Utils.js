export const formatDateAndTime = (iso) => {
    let dateonly = iso.substring(0,10);
    let timeonly = iso.substring(11,16);
    let formattedDateTime = dateonly + " at " + timeonly
    return formattedDateTime
};

// export const patchVote = (article_id) => {
//     const patchBody = {inc_votes: 1 }
//     return newVote
//     .patch(`/articles/${article_id}`, patchBody)
//     .then((data) => {
//         return data.article
//     })
// }