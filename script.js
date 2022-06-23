var character = document.getElementById("character");
var enemy = document.getElementById("enemy");
var shadow = document.getElementById("shadow");
var playground = document.getElementById("game");
var st = document.getElementById("st");
var x=0;
function start(){
    playground.style="background-image: none";
    // enemy.classList.add("animate_en");
    character.style="display:block;";
    enemy.style="display:block;";
    st.style="display:none;";
}

function jump(){
    if( x == 0){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        setTimeout(function(){
            character.classList.remove("animate")
        },800)
    }
}

function checkDead(){
    var ch_pos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var enemy_pos = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if(enemy_pos < 25 && enemy_pos > 0 && ch_pos >=220){
        character.classList.remove("animate");
        enemy.classList.remove("animate_en");
        document.getElementById("score").innerHTML= "Game Over, click on me if you want to play again";
        shadow.style="display:block;";
        x=1;
    }
}

function restart(){
    enemy.classList.add("animate_en");
    document.getElementById("score").innerHTML= "";
    shadow.style="display:none;";
    x=0;
}
setInterval(checkDead,1);