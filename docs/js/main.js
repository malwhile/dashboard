
var imgss = new Array('angelbeatsweapon.jpg')
var imgs = new Array (
//    'wolfgirl.jpg',
//    'mononokewolf.jpg',
    'wolfgeo.jpg',
    'shatteranime.jpg',
    'animeviolin.jpg',
    'animewolfnative.jpg',
//    'animeheadphones.png',
    'animeisolation.jpg',
    'angelbeatspiano.jpg',
//    'jaguargeo.jpg',
//    'jaguartree.jpg',
);

if (document.getElementById) {
    window.onload = swap 
};

function swap() {
    x = ( Math.floor( Math.random() * imgs.length ) );
    randomimage = ( imgs[x] );
    document.getElementById("main").style.backgroundImage = "url(./images/"+ randomimage +")"; 
}

