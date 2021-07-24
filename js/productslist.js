var fishImagesLink = [
    "https://img-global.cpcdn.com/recipes/c8a5ac9752bc5551/1200x630cq70/photo.jpg",
    "https://modo3.com/thumbs/fit630x300/174915/1524393724/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B4%D9%88%D9%8A_%D8%B3%D9%85%D9%83_%D8%A7%D9%84%D8%A8%D9%84%D8%B7%D9%8A.jpg",
    "https://www.supermama.me/system/App/Entities/Recipe/images/000/106/185/watermarked/%D8%A7%D9%84%D8%AC%D9%85%D8%A8%D8%B1%D9%8A-%D8%A7%D9%84%D9%85%D8%B4%D9%88%D9%8A-%D8%B2%D9%8A-%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B9%D9%85.jpg",
    "https://modo3.com/thumbs/fit630x300/106913/1466392606/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D9%82%D8%B4%D9%8A%D8%B1_%D8%A7%D9%84%D8%AC%D9%85%D8%A8%D8%B1%D9%8A.jpg",
    "https://msry.org/wp-content/uploads/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%AD%D9%84%D9%85-%D8%A3%D9%83%D9%84-%D8%A7%D9%84%D8%B3%D9%85%D9%83-%D8%A7%D9%84%D9%85%D8%B4%D9%88%D9%8A2.jpg",

];
var fishNameList = [
    "شبار مشوي",
    "شبار سنجاري",
    "جمبري مشوي",
    "جمبري سنجاري",
    "طباره مشويه"
];

var fishPrices = [
    "10000000000000000 EGB",
    "4055451215 EGB",
    "452255 EGB",
    "5525848 EGB",
    "55252452 EGB"
];

// -----------------------------------------

var meatImagesLink = [
    "https://www.tareekaa.com/wp-content/uploads/2019/07/%D8%A7%D9%84%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D9%85%D8%B4%D9%88%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%81%D8%B1%D9%86.jpg",
    "https://www.supermama.me/system/App/Entities/Recipe/images/000/106/116/watermarked/%D8%A7%D9%84%D8%A8%D8%B1%D8%AC%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%8A%D9%83%D8%B1%D9%88%D9%8A%D9%81.jpg",
    "https://i.ytimg.com/vi/mnn0k94L4_o/maxresdefault.jpg",
    "https://img.youm7.com/ArticleImgs/2019/2/6/694910-Fried-Chicken.jpg"
];
var meatNames = [
    "كفته مصريه",
    "برجر كبير",
    "فراخ مشويه",
    "فراخ مقليه"
]

var meatPrices = [
    "4151515554544215465456645645 EGB",
    "5665516555445454545 EGB",
    "2131533151245615315113 EGB",
    "516548454845462115321 EGB"
]

// -----------------------------------------

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

// -----------------------------------------


    let menuListText = "";
    let element = "";

    for (i = 0; i <= 4; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ fishImagesLink[i] + '">\
        <p>'+ fishNameList[i] + '</p>\
        <div>'+ fishPrices[i] + '</div>\
    </div>';
        menuListText = menuListText + element;
    }
    for (i = 0; i <= 3; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ meatImagesLink[i] + '">\
        <p>'+ meatNames[i] + '</p>\
        <div>'+ meatPrices[i] + '</div>\
    </div>'
        menuListText = menuListText + element;
    }
    for (i = 0; i <= 2; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ moreEgyptionFoodLinks[i] + '">\
        <p>'+ moreEgyptionFoodName[i] + '</p>\
        <div>'+ moreEgyptionFoodPrices[i] + '</div>\
    </div>'
        menuListText = menuListText + element;
    }
    document.getElementById("menulist").innerHTML = menuListText;