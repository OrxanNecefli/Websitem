$(document).ready(function() {
    $('li').parent().css('list-style-type', 'none')
    $('p:last').siblings().css({ 'border': "2px solid darkgray", 'background-color': 'darkblue' })
})