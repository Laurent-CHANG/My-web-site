//scroll animation accueil

$(window).scroll(function() {

    var scrollPos = $(this).scrollTop() / 20;
    //console.log(scrollPos);
    
    $('.etoiles').css({
        'background-size' : 110 + scrollPos + '%'
    })
    $('.planete').css({
        'top': 80 - scrollPos + '%'
    })
})

//annimation barre nav responsive

var btn = document.getElementById('btnNav');
var content = document.getElementById('menuContent');
console.log(content);

btn.addEventListener('click', function(){
    content.classList.toggle('is-active');
})