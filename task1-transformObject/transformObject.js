let invert = function (obj) {

    let new_obj = {};
    for (var prop in obj) {
        new_obj[obj[prop]] = prop;
    }
    console.log(new_obj);
};
invert({
    "7": "Россия",
    "38": "Украина",
    "1": "США"
});