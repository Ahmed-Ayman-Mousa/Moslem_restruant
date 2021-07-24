function toDelvery(obj) {
    var name = obj.getElementsByTagName("p")[0].innerHTML;
    var price = obj.getElementsByTagName("div")[0].innerHTML;
    localStorage.setItem('item_name',name);
    localStorage.setItem('item_price',price);
    window.location = "../html/delvery.htm";
}
function toDelvery2(obj) {
    var name = obj.getElementsByTagName("p")[0].innerHTML;
    var price = obj.getElementsByTagName("div")[0].innerHTML;
    price = price.split("<br>")
    localStorage.setItem('item_name',name);
    localStorage.setItem('item_price',price[1]);
    window.location = "../html/delvery.htm";
}