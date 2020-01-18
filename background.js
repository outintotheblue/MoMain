let imageArray = ['bcn.jpg','concert.JPG', 'etd.png', 'kyte.png', 'musicidio.png', 'subarctic.png', 'wave.png'],
base = './crossfadewebsite/',
secs = 4;

imageArray.forEach(function(img){
    new Image().src = base +img;
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