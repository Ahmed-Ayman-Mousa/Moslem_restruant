var moreEgyptionFoodLinks = [
    "https://img.atyabtabkha.com/hUbxtNA20d5dWRoCxgk-ZNDNgEA=/640x360/https://harmony-assets-live.s3.amazonaws.com/image_source/99/ca/99ca9afdee6e97c802b21b3901f7cccda29e8c46.jpg",
    "https://static.webteb.net/images/content/ramadanrecipe_recipe_5_719.jpg",
    "https://www.aljamila.com/sites/default/files/styles/1100x732/public/053_1418926307_1.jpg"
];

var moreEgyptionFoodName = [
    "كشري مصري",
    "ملوخيه",
    "شوربه عدس "
];

var moreEgyptionFoodPrices = [
    "55454545464151281 EGB",
    "548648446464 EGB",
    "454546446465456 EGB"
];
function egyptionFood(){
    let element = "";
    let menuListText = "";
    document.getElementById("all").style.border = "none";
    document.getElementById("meat").style.border = "none";
    document.getElementById("fishes").style.border = "none";
    document.getElementById("discounts").style.border = "none";
    document.getElementById("egyptionfood").setAttribute("style", "border-bottom: 5px solid red");
    for (i = 0; i <= 2; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ moreEgyptionFoodLinks[i] + '">\
        <p>'+ moreEgyptionFoodName[i] + '</p>\
        <div>'+ moreEgyptionFoodPrices[i] + '</div>\
    </div>';
        menuListText = menuListText + element;
    }
    document.getElementById("menulist").innerHTML = menuListText;
}