"use strict";
$(document).ready(function(){


    var c = document.getElementById('backgroundreleaseshref');
    var d = document.getElementById('releaseshref');
    d.addEventListener('mouseover', addAnimreleaseshref);
    function addAnimreleaseshref() {
        c.classList.add('animatedreleaseshref');
        d.removeEventListener('mouseover', addAnimreleaseshref);
    }
    var e = document.getElementById('backgroundbuildinghref');
    var f = document.getElementById('buildinghref');
    f.addEventListener('mouseover', addAnimbuildinghref);
    function addAnimbuildinghref() {
        e.classList.add('animatedbuildinghref');
        f.removeEventListener('mouseover', addAnimbuildinghref);
    }
    var g = document.getElementById('backgroundcontributorshref');
    var h = document.getElementById('contributorshref');
    h.addEventListener('mouseover', addAnimcontributorshref);
    function addAnimcontributorshref() {
        g.classList.add('animatedcontributorshref');
        h.removeEventListener('mouseover', addAnimcontributorshref);
    }


    var dl1bg = document.getElementById('backgrounddownloadbtn1');
    var dl1 = document.getElementById('downloadbtn1');
    dl1.addEventListener('mouseover', addAnimdownloadbtn1);
    function addAnimdownloadbtn1() {
        dl1bg.classList.add('animateddownloadbtn');
        dl1.removeEventListener('mouseover', addAnimdownloadbtn1);
    }
    var dl2bg = document.getElementById('backgrounddownloadbtn2');
    var dl2 = document.getElementById('downloadbtn2');
    dl2.addEventListener('mouseover', addAnimdownloadbtn2);
    function addAnimdownloadbtn2() {
        dl2bg.classList.add('animateddownloadbtn');
        dl2.removeEventListener('mouseover', addAnimdownloadbtn2);
    }
    var dl3bg = document.getElementById('backgrounddownloadbtn3');
    var dl3 = document.getElementById('downloadbtn3');
    dl3.addEventListener('mouseover', addAnimdownloadbtn3);
    function addAnimdownloadbtn3() {
        dl3bg.classList.add('animateddownloadbtn');
        dl3.removeEventListener('mouseover', addAnimdownloadbtn3);
    }
    var dl4bg = document.getElementById('backgrounddownloadbtn4');
    var dl4 = document.getElementById('downloadbtn4');
    dl4.addEventListener('mouseover', addAnimdownloadbtn4);
    function addAnimdownloadbtn4() {
        dl4bg.classList.add('animateddownloadbtn');
        dl4.removeEventListener('mouseover', addAnimdownloadbtn4);
    }
    var dl5bg = document.getElementById('backgrounddownloadbtn5');
    var dl5 = document.getElementById('downloadbtn5');
    dl5.addEventListener('mouseover', addAnimdownloadbtn5);
    function addAnimdownloadbtn5() {
        dl5bg.classList.add('animateddownloadbtn');
        dl5.removeEventListener('mouseover', addAnimdownloadbtn5);
    }
    var dl6bg = document.getElementById('backgrounddownloadbtn6');
    var dl6 = document.getElementById('downloadbtn6');
    dl6.addEventListener('mouseover', addAnimdownloadbtn6);
    function addAnimdownloadbtn6() {
        dl6bg.classList.add('animateddownloadbtn');
        dl6.removeEventListener('mouseover', addAnimdownloadbtn6);
    }
    var dl7bg = document.getElementById('backgrounddownloadbtn7');
    var dl7 = document.getElementById('downloadbtn7');
    dl7.addEventListener('mouseover', addAnimdownloadbtn7);
    function addAnimdownloadbtn7() {
        dl7bg.classList.add('animateddownloadbtn');
        dl7.removeEventListener('mouseover', addAnimdownloadbtn7);
    }


    var i = document.getElementById('releaseshref');
    var j = document.getElementById('buildinghref');
    var k = document.getElementById('contributorshref');
    i.addEventListener('click', loadReleases);
    j.addEventListener('click', loadBuilding);
    k.addEventListener('click', loadContributors);
    function loadReleases() {
        $('html,body').animate({
            scrollTop: $('body').position().top += 70
        });
    }
    function loadBuilding() {
        $('html,body').animate({
            scrollTop: $('body').position().top += $('.building').position().top + 80
        });
    }
    function loadContributors() {
        $('html,body').animate({
            scrollTop: $('body').position().top += $('.contributors').position().top + 80
        });
    }
    if (window.location.href.indexOf("#releases") > -1 ) {
        loadReleases();
    }
    if (window.location.href.indexOf("#building") > -1 ) {
        loadBuilding();
    }
});
