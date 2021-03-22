const mongoose = require('mongoose');

const Mattertag = mongoose.model('Mattertag', {
    label : String,
    description : String,//To insert url on desc []
    color : String,//Use thhis format r:0 g:162 b:255
    position : String,//Use this format x:1.286 y:-0.314 z:1.557
    html : String,//Simple Html
    medialabel : String,//label du lien src
    mediasrc : String,//Source du media
    mediatype : String,//Types : "NONE" , "PHOTO", "RICH", "VIDEO"

});

/* Pour Medialabel et Mediasrc pour en mettre plusieurs utiliser le format suivant
label1,label2,label3
source1,source2,source3*/

module.exports = Mattertag;