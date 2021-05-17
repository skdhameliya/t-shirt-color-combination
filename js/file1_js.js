function changeText(){
    userText = document.getElementById("userText").value;
    if(userText == ""){
        userText = "PRESIDENT";
    }
    document.getElementById("text1").innerHTML = userText;
}


/*tShirt = [
        "./img/t1.png",
        "./img/t2.png",
        "./img/t3.png"
    ];*/
    // tShirt = [
    // 	"#5b2b2b",
    // 	"#ac1c1c",
    // 	"#fa3a3a"
    // ];
function changeTshirt(){
    // alert(document.getElementById("text1").style.fontFamily);
    // var tNo = Math.floor(Math.random() * 3);
    // document.getElementById("tshirtImage").src = tShirt[tNo];
    f1 = randomStr(6, '1234567890abcdef');
    document.getElementById("tshirtImage").style.background ="#"+f1;
    document.getElementById("tshirtColor").innerHTML ="<b>T-shirt Color :</b> #"+f1;
    // console.log(tNo);
}

function randomStr(len, arr) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans += arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
}

function changeFontColor(){
    randomFontColor = randomStr(6, '1234567890abcdef');
    document.getElementById("text1").style.color = "#"+randomFontColor;
    document.getElementById("fontColor").innerHTML ="<b>Font Color :</b> #"+randomFontColor;
}

function changeFontBackColor(){
    randomFontBackColor = randomStr(6, '1234567890abcdef');
    document.getElementById("text1").style.backgroundColor = "#"+randomFontBackColor;
    document.getElementById("fontBackColor").innerHTML ="<b>Font Back Color :</b> #" + randomFontBackColor;
}

function changeFontBackWidth(w1){
    document.getElementById("text1").style.width = w1+"px";
    document.getElementById("f_Width").innerHTML = w1;
}
function changeFontBackHeight(h1){
    document.getElementById("text1").style.height = h1+"px";
    document.getElementById("f_Height").innerHTML = h1;
}

fonts = [
         'Big Shoulders Stencil Text, cursive',
         'Black And White Picture, sans-serif',
         'Black Ops One, cursive',
         'Bungee Inline, cursive',
         'Bungee Shade, cursive',
         'Butcherman, cursive',
         'Ceviche One, cursive',
         'Chelsea Market, cursive',
         'Creepster, cursive',
         'Eater, cursive',
         'Ewert, cursive',
         'Faster One, cursive',
         'Freckle Face, cursive',
         'Frijole, cursive',
         'Grenze Gotisch, cursive',
         'Gugi, cursive',
         'Major Mono Display, monospace',
         'Monofett, cursive',
         'Monoton, cursive',
         'Nosifer, cursive',
         'Piedra, cursive',
         'Potta One, cursive',
        'Ribeye Marrow, cursive',
        'Rye, cursive',
        'Slackey, cursive',
        'Vast Shadow, cursive',
        'Wallpoet, cursive'
    ];
    // S==m-=it D__-h=-ame-liya
function changeFontFamily(){
    f1 = Math.floor(Math.random() * fonts.length);
    document.getElementById("text1").style.fontFamily = fonts[f1];
    document.getElementById("fontFamily").innerHTML ="<b>Font Family :</b> " + fonts[f1];
}

function changeLetterSpace (scrolVal) {
    document.getElementById("text1").style.letterSpacing = scrolVal + "px";
    document.getElementById("scrolVal").innerHTML = scrolVal;
    document.getElementById("text1").style.textAlign = "center";
}

function changeFontSize(f_s){
    document.getElementById("text1").style.fontSize = f_s + "px";
    document.getElementById("f_Size").innerHTML = f_s;
}

mar_t_b=-260;
mar_l_r = 0;
document.getElementById("text1").style.marginTop = mar_t_b + "px";
document.getElementById("text1").style.marginLeft = mar_l_r + "px";
function moveUp(){
    if((mar_t_b) <= (-310)){
        mar_t_b=-260;
    }else{
        mar_t_b-=2;
    }
    document.getElementById("text1").style.marginTop = mar_t_b + "px";
}
// function changeToUp(i){
// 	document.getElementById("c_up").innerHTML = i;
// 	// if((i) <= (-310)){
// 		// i=-260;
// 	// }else{
// 		i-=250;
// 	// }
// 	document.getElementById("text1").style.marginTop = i + "px";
// } 

function moveDown(){
    if((mar_t_b) >= (-70)){
        mar_t_b=-260;
    }else{
        mar_t_b+=2;
    }
    document.getElementById("text1").style.marginTop = mar_t_b + "px";
}
function moveLeft(){
    if((mar_l_r) <= (-100)){
        mar_l_r=0;
    }else{
        mar_l_r-=2;
    }
    document.getElementById("text1").style.marginLeft = mar_l_r + "px";
}
function moveRight(){
    if(mar_l_r>=100){
        mar_l_r = 0;
    }else{
        mar_l_r+=2;
    }
    document.getElementById("text1").style.marginLeft = mar_l_r + "px";
}
function changeRandom(){
    changeTshirt()
    changeText();
    changeFontColor();
    changeFontBackColor();
    changeFontFamily();
}