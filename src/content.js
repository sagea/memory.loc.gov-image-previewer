
/*
    Simple app that adds a preview image for all of the links found on http://memory.loc.gov/

    .tif download url:
    http://memory.loc.gov/master/pnp/cph/3g10000/3g12000/3g12900/3g12901u.tif

    Preview image url:
    http://cdn.loc.gov/service/pnp/cph/3g10000/3g12000/3g12900/3g12901r.jpg

*/

var imgTags = document.getElementsByTagName('img');
var aTags = document.getElementsByTagName('a');
var origin = window.location.href;

var imageOriginBase = origin
        .replace('memory', 'cdn')
        .replace('master', 'service');


// Hide preloaded image tags
// This is done to reduce clutter on the page.
each(imgTags, function(node, index){
    node.style.display = 'none';
});


// Add preview images
each(aTags, function(node){
    var html = node.innerHTML;
    if(html.indexOf('u.tif') > -1){
        var imageName = html.replace('u.tif', 'r.jpg'),
            imgElement = document.createElement('img');

        imgElement.src = imageOriginBase + imageName;

        node.appendChild(imgElement);
    }
});


// ---------------------------------------
// -- Utility
// ---------------------------------------

function each(arr, callback){
    for(var i = 0, l = arr.length; i < l; i++){
        callback(arr[i], i, arr);
    }
}
