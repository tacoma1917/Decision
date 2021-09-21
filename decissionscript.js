function Roll () {
    var dice = Math.random();
    dice = (dice * 6) +1;
    dice = Math.floor(dice);
    document.getElementById("dice6_result").innerHTML=dice;

}
function Flip (){
    var coin = Math.random();
    coin = (coin *2) + 1;
    coin = Math.floor(coin);
    var coin2 = Math.random();
    coin2 = (coin2 * 2) + 1;
    coin2 = Math.floor(coin2);
    if (coin === coin2){
        document.getElementById("coin_result").innerHTML="Heads";
    }
    else{
        document.getElementById("coin_result").innerHTML="Tails"
    }
    
}

function Choose (){
    var list_string = document.getElementById("list_input").value;
    const list = list_string.split(','); 
    index = list.length;
    var indexer= Math.random();
    indexer = (indexer * index);
    indexer= Math.floor(indexer);
    var item = list[indexer];
    document.getElementById("selection_result").innerHTML=item;
}
function Lotto (){
    var lotto_choice3= document.getElementById("pick_3").checked;
    var lotto_choice4= document.getElementById("pick_4").checked;
    if (lotto_choice3 === true){
        var pick3="";
        var a = Math.random();
        a=(a *10);
        a = Math.floor(a);
        var b = Math.random();
        b = (b * 10);
        b = Math.floor(b);
        var c = Math.random();
        c = (c *10);
        c = Math.floor(c);
        pick3=a + "-" + b + "-" + c;
        document.getElementById("lotto_pick").innerHTML=pick3;}
    else if (lotto_choice4 === true){
        var aa = Math.random();
        aa=(aa*10);
        aa=Math.floor(aa);
        var bb = Math.random();
        bb=(bb*10);
        bb=Math.floor(bb);
        var cc=Math.random();
        cc=(cc*10);
        cc=Math.floor(cc);
        var dd=Math.random();
        dd=(dd*10);
        dd=Math.floor(dd);
        var pick4=aa + "-" + bb + "-" + cc + "-" + dd;
        document.getElementById("lotto_pick").innerHTML=pick4;}

    else {
        var aaa = Math.random();
        aaa = (aaa*10);
        aaa=Math.floor(aaa);
        var bbb = Math.random();
        bbb = (bbb*10);
        bbb=Math.floor(bbb);
        var ccc=Math.random();
        ccc=(ccc*10);
        ccc=Math.floor(ccc);
        var ddd=Math.random();
        ddd=(ddd*10);
        ddd=Math.floor(ddd);
        var pick5=aaa + "-" + bbb + "-" + ccc + "-" + ddd;
        document.getElementById("lotto_pick").innerHTML=pick5;}
}
    
    