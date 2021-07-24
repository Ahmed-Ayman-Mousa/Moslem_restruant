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
function fishes() {
    let element = "";
    let menuListText = "";
    document.getElementById("all").style.border = "none";
    document.getElementById("meat").style.border = "none";
    document.getElementById("egyptionfood").style.border = "none";
    document.getElementById("discounts").style.border = "none";
    document.getElementById("fishes").setAttribute("style", "border-bottom: 5px solid red");
    for (i = 0; i <= 4; i++) {
        element = '<div class="item" onclick="toDelvery(this)"> \
        <img src="'+ fishImagesLink[i] + '">\
        <p>'+ fishNameList[i] + '</p>\
        <div>'+ fishPrices[i] + '</div>\
    </div>';
        menuListText = menuListText + element;
    }
    document.getElementById("menulist").innerHTML = menuListText;
}

