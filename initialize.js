$(document).ready(function() {
      $('#fullpage').fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
        menu: '#menu',
        scrollingSpeed: 1500,
        verticalCentered: false,
        autoScrolling: false,
        fitToSection: false
      });

    });