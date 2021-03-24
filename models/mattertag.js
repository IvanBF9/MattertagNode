const mongoose = require('mongoose');

const Mattertag = mongoose.model('Mattertag', {
    Sid : String,
    Label : String,
    Description : String,//To insert url on desc []
    Color : String,//Use thhis format r:0 g:162 b:255
    Position : String,//Use this format x:1.286 y:-0.314 z:1.557
    Html : String,//Simple Html
    Mediasrc : String,//Source du media
    Mediatype : String,//Types : "NONE" , "PHOTO", "RICH", "VIDEO"

});

/* Pour Medialabel et Mediasrc pour en mettre plusieurs utiliser le format suivant
label1,label2,label3
source1,source2,source3*/

module.exports = Mattertag;