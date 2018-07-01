'use strict'

$(function(){
        
$('#page-one-btn').click(function(){
    frameswitch("side-sites/site-one.html")
})
$('#page-two-btn').click(function(){
    frameswitch("side-sites/site-two.html")
})
$('#page-three-btn').click(function(){
    frameswitch("side-sites/site-three.html")
})
    
function frameswitch (address) {
    $('#wrapper').empty();
    $('#wrapper').html('<iframe class="frame" src=' + address + ' frameborder="0"></iframe>')    
};    
})