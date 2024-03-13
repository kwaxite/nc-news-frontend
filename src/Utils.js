export const formatDateAndTime = (iso) => {
    let dateonly = iso.substring(0,10);
    let timeonly = iso.substring(11,16);
    let formattedDateTime = dateonly + " at " + timeonly
    return formattedDateTime
};
