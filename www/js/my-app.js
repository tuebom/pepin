// Init App
var myApp = new Framework7({
    modalTitle: 'Pepin',
    // Enable Material theme
    material: true,
    cache: true,
    materialRipple: true,
    scrollTopOnNavbarClick: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});


// GENERAL

// $$(document).on('focus', 'input, textarea', function () {
// //$$(window).on('resize', function () {
  // windowcurrentHeight = $$(this).height();
  // myApp.alert(windowcurrentHeight, 'Window Height On Resize');
  // if (windowcurrentHeight < windowHeight) {
    // windowheightDiff = windowHeight - windowcurrentHeight;
    // $$('.kb').css('height', windowheightDiff + 'px');
  // }
// });

// $$(document).on('blur', 'input, textarea', function () {
  // $$('.kb').css('height', '0px');
// });

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

$$('a.home').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more-home');
});
$$('a.more').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more');
});


// ICONS TRANSITIONS


$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});

myApp.onPageInit('profile', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('photos', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('videos', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('musiques', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('index2', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('article', function (page) {
$$('i.material-icons.fav-article').on('click', function () {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('notifications', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('followers', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('following', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('index2', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});


// PAGES FUNCTION


myApp.onPageInit('article', function (page) {
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: 'Facebook',
        },
        {
            text: 'Twitter'
        },
        {
            text: 'Google Plus'
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});
});
    
myApp.onPageInit('settings', function (page) {

$$('input').on('focus', function () {
  $$('.kb').css('height', '280px');
  //var limit = $$(window).height() - 280;

  //if ($$(this).offset().top > limit) {
    $$('.page-content').scrollTop($$(this).offset().top-56);
  //}
});

$$('input').on('blur', function () {
  $$('.kb').css('height', '0px');
});
});
