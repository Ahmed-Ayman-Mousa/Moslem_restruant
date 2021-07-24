var x;
function checkRadio() {
    if (document.getElementById("pad-py-1").checked) {
        document.getElementById("card").hidden = false;
        x=true
    } else {
        document.getElementById("card").hidden = true;
        x=false
    }
}

function addTaleb() {
    var phoneNumber = document.getElementById("phone-number").value;
    var phoneRe = phoneNumber.match(/[0-9]+/g);
    var address = document.getElementById("address").value;
    if (x === true){
        var cardNumber =document.getElementById("card-number").value;
        var cardPassword =document.getElementById("card-password").value;
        var cardNumberRe = cardNumber.match(/[0-9]+/g);
        var cardPasswordRe = cardPassword.match(/[0-9]+/g);
        if (phoneNumber === "" && address === "" && cardNumber === "" && cardPassword === "") {
            alert("من فضلك ادخل البيانات");
        }
        else if (phoneNumber === "" && address === "" && cardNumberRe === null && cardPassword === "") {
            alert("ادخل رقم الطاقه صحيح و ادخل باقي البيانات");
        }
        else if (phoneNumber === "" && address === "" && cardNumber === "" && cardPasswordRe === null) {
            alert("ادخل الرقم السري صحيح و ادخل باقي البيانات");
        }
        else if (phoneRe === null && address === "" && cardNumber === "" && cardPassword === "") {
            alert("ادخل رقم الهاتف صحيح و ادخل باقي البيانات");
        }
        else if (phoneNumber === "" && address === "" && cardNumberRe === null && cardPasswordRe === null) {
            alert("ادخل رقم البطاقه و الرقم السري صحيحين و ادخل باقي البيانات");
        }
        else if (phoneRe === null && address === "" && cardNumberRe === null && cardPassword === "") {
            alert("ادخل رقم الهاتف صحيح و رقم الرقم السري ادخل باقي البيانات");
        }
        else if (phoneRe === null && address === "" && cardNumber === "" && cardPasswordRe === null) {
            alert("ادخل رقم الهاتف صحيح و رقم الرقم السري ادخل باقي البيانات");
        }
        else if (phoneNumber === "" && address === "" && cardNumberRe === null) {
            alert("ادخل رقم الهاتف و العنوان و رقم البطاقه صحيح");
        }
        else if (phoneNumber === "" && address === "" && cardNumber === "") {
            alert("ادخل رقم الهاتف و العنوان و رقم البطاقه");
        }
        else if (phoneRe === null && address === "" && cardNumber === "") {
            alert("ادخل رقم البطاقه و العنوان و رقم الهاتف صحيح");
        }
        else if (phoneRe === null && address === "" && cardPassword === "") {
            alert("ادخل الرقم السري و العنوان و ادخل رقم الهاتف صحيح ");
        }
        else if (phoneNumber === "" && address === "" && cardPasswordRe === null) {
            alert("ادخل الرقم السري صحيح  و ادخل رقم الهاتف صحيح و ادخل العنوان ");
        }
        else if (phoneRe === null && address === "" && cardPasswordRe === null) {
            alert("ادخل الرقم السري و العنوان و ادخل رقم الهاتف صحيح ");
        }
        else if (phoneRe === null && address === "") {
            alert("ادخل رقم الهاتف صحيح و ادخل العنوان");
        }
        else if (phoneNumber === "" && address === "") {
            alert("ادخل رقم الهاتف صحيح والعنوان");
        }
        else if (cardNumber === "" && address === "") {
            alert("ادخل رقم البطاقه و العنوان");
        }
        else if (cardNumberRe === null && address === "") {
            alert("ادخل رقم البطاقه صيحيح و ادخل العنوان");
        }
        else if (cardPassword === "" && address === "") {
            alert("ادخل الرقم السري و العنوان");
        }
        else if (cardPasswordRe === null && address === "") {
            alert("ادخل الرقم السري صحيح و ادخل العنوان العنوان");
        }
        else if(phoneNumber === ""){
            alert("ادخل رقم الهاتف");
        }
        else if(phoneRe === null){
            alert("ادخل رقم الهاتف صحيح");
        }
        else if(address === ""){
            alert("ادخل العنوان");
        }
        else if(cardNumber === ""){
            alert("ادخل رقم البطاقه");
        }
        else if(cardNumberRe === null){
            alert("ادخل رقم البطاقه صحيح");
        }
        else if(cardPassword === ""){
            alert("ادخل الرقم السري");
        }
        else if(cardPasswordRe === null){
            alert("ادخل الرقم السري صحيح");
        }
        else {
            alert("لقد تم ارسال طلبك");
        }
    }
    else{
        if (phoneNumber === "" && address === "") {
            alert("رقم الهاتف و العنوان فارغين");
        }
        if (phoneRe === null && address === "") {
            alert("رقم الهاتف غير صحيح و العنوان فارغ");
        }
        else if (phoneNumber === "") {
            alert("رقم الهاتف فارغ");
        }
        else if (phoneRe === null) {
            alert("رقم الهاتف غير صحيح");
        }
        else if ( address === ""){
            alert("العنوان فارغ");
        }
        else{
            alert("لقد تم ارسال طلبك");
        }
    }
}
var itemName = localStorage.getItem("item_name");
var price = localStorage.getItem("item_price");
document.getElementById("name-price").innerHTML = '<br> اسم المنتج:' + itemName +'<br>'+ "السعر:" + price;