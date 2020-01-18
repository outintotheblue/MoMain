let imageArray = ['bcn.png','concert.png', 'etd.png', 'levitat.png', 'subarctic.png', 'wave.png'],
base = './crossfadewebsite/pngs/',
secs = 5;

imageArray.forEach(function(img){
    new Image().src = base + img;
});


function crossfade() {
    window.clearTimeout();
    let k = 0;
    for (i=0; i <imageArray.length; i++) {
        setTimeout(function() {
            document.getElementById('main-text').style.background ='url(' + base +imageArray[k] + ') no-repeat center center fixed';
            document.getElementById('main-text').style.backdroundSize ='cover';
            if ((k +1) === imageArray.length) {setTimeout(function() {
                crossfade()}, (secs *1000))} else {k++;}
        }, (secs * 1000) * i)
    }
}

crossfade();