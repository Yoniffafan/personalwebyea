 var images = ['background1.jpg', 'background3.jpg'];
 $('#headerwrap').css({'background': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center top'});
