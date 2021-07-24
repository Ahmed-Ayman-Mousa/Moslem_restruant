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
function meats(){
    let element = "";
    let menuListText = "";
    document.getElementById("all").style.border = "none";
    document.getElementById("fishes").style.border = "none";
    document.getElementById("egyptionfood").style.border = "none";
    document.getElementById("discounts").style.border = "none";
    document.getElementById("meat").setAttribute("style", "border-bottom: 5px solid red");
    for (i = 0; i <= 3; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ meatImagesLink[i] + '">\
        <p>'+ meatNames[i] + '</p>\
        <div>'+ meatPrices[i] + '</div>\
    </div>';
        menuListText = menuListText + element;
    }
    document.getElementById("menulist").innerHTML = menuListText;
}