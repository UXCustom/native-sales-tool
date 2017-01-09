$(document).ready(function() {

  $('.reset').on('click', function() {
		localStorage.clear();
		window.location.reload();
	});

  $('.pull').on('click', function() {
    $('#editWindow').toggleClass('open');
  });

  // start Site Type Nav functionality
  var switchSiteType = function(oldSelection) {
    var siteTypes = [
      {
        "id": "1",
        "name": "article",
        "url": "http://productdevelopment.techtarget.com/projects/custom/prototypes/articleBased/sales-tool/"
      },
      {
        "id": "2",
        "name": "embeddedCenter",
        "url": "http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Center"
      },
      {
        "id": "3",
        "name": "embeddedDark",
        "url": "http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Dark"
      },
      {
        "id": "4",
        "name": "embeddedLight",
        "url": "http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Light"
      },
      {
        "id": "5",
        "name": "nativeAd",
        "url": "http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/native/"
      }
    ];
    var totalSiteTypes = $(siteTypes).length;
    var newSelection = $(".demo-site-nav-list-item.selected").attr("data-id");
    for (i = 0; i < totalSiteTypes; i++) {
      var option = siteTypes[i];
      if ((option.id === newSelection) && (option.id != oldSelection)) {
        window.open (siteTypes[i].url,'_self',false);
      }
    }
  }
  var hideSiteTypeNotSelected = function() {
    if($(".demo-site-nav-list li").hasClass('selected')){
      $(".demo-site-nav-list-item").hide();
      $(".demo-site-nav-list-item.selected").show();
    }
  }
  var showSiteTypeNav = function() {
    $(".demo-site-nav-list-item").show();
    $(".demo-site-nav").removeClass("hideNav").addClass("show");
    $('.demo-site-nav .icon').removeClass("icon-arrow-down").addClass("icon-arrow-up");
  }
  var hideSiteTypeNav = function() {
    hideSiteTypeNotSelected();
    $(".demo-site-nav").removeClass("show").addClass("hideNav");
    $('.demo-site-nav .icon').removeClass("icon-arrow-up").addClass("icon-arrow-down");
  }
  var toggleMenuOnArrowClick = function() {
    $(".demo-site-nav .icon").on("mousedown", function(){
      if ($('.demo-site-nav').hasClass("hideNav")) {
        showSiteTypeNav();
      }
      else {
        hideSiteTypeNav();
      }
    })

  }
  var userSelectsSiteType = function() {
    $('.demo-site-nav-list-item').on('mousedown',function() {
      var oldSelection = $(".demo-site-nav-list-item.selected").attr("data-id");
      $(".demo-site-nav-list-item").removeClass("selected");
      $(this).addClass("selected");
      switchSiteType(oldSelection);
      //hideSiteTypeNav();
      $(".demo-site-nav").removeClass("show").addClass("hideNav");
      $('.demo-site-nav .icon').removeClass("icon-arrow-up").addClass("icon-arrow-down");
      hideSiteTypeNotSelected();
    });
  }

  hideSiteTypeNotSelected();
  userSelectsSiteType();
  toggleMenuOnArrowClick();

  $('#colorChoice').on('change', function() {
    if ($(this).val() == 'White') {
      $('#nativeHeader').css({'background':'#fff', 'color':'#000'});
      $('#nativeMenus nav#nativeNavigation ul').css({'background': '#f7f7f7'});
      $('#nativeMenus nav#nativeNavigation ul li').css({'border-bottom': '1px solid #ccc'});
      $('#nativeMenus nav#nativeNavigation ul li > ul').css({'background': '#fff'});
      $('#nativeMenus nav#nativeNavigation ul li a').css({'color': '#4d4d4d'});
      $('#nativeCollapsedNavigationText').css({'color': '#4d4d4d'});
      $('#nativeSocialShare').css({'background': '#f7f7f7'});
      $('#nativeSocialShare ul li a').css({'background': '#999', 'color': '#fff'});
      $('#nativeMenus nav#nativeNavigation ul').css({'background': '#f7f7f7'});
      $('#nativeMenus nav#nativeNavigation ul li > ul li:nth-of-type(4) a').css({'color': '#a0a0a0'});
      $('#nativeSocialShare > i').css({'color': '#00b3ac'});
      $('#nativeSocialShare.open > i').css({'color': '#4d4d4d'});
      $('#nativeSocialShare .share-bar').css({'background': '#f7f7f7'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul li:hover ul > li').css({'border-bottom': '1px solid #ccc'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul').css({'background': '#f7f7f7'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation:last-child a').css({'border-right': '1px solid #ccc'});

      localStorage.setItem('layout', 'White');
    } else if ($(this).val() == 'Black') {
      $('#nativeHeader').css({'background':'#000', 'color':'#fff'});
      $('#nativeMenus nav#nativeNavigation ul').css({'background': '#4d4d4d'});
      $('#nativeMenus nav#nativeNavigation ul li').css({'border-bottom': '1px solid #808080'});
      $('#nativeMenus nav#nativeNavigation ul li > ul').css({'background': '#4d4d4d'});
      $('#nativeMenus nav#nativeNavigation ul li a').css({'color': '#fff'});
      $('#nativeCollapsedNavigationText').css({'color': '#fff'});
      $('#nativeSocialShare').css({'background': '#4d4d4d'});
      $('#nativeSocialShare ul li a').css({'background': '#fff', 'color': '#4d4d4d'});
      $('#nativeMenus nav#nativeNavigation ul').css({'background': '#1a1a1a'});
      $('#nativeMenus nav#nativeNavigation ul li > ul li:nth-of-type(4) a').css({'color': '#b3b3b3'});
      $('#nativeSocialShare > i').css({'color': '#fff'});
      $('#nativeSocialShare.open > i').css({'color': '#00b3ac'});
      $('#nativeSocialShare .share-bar').css({'background': '#4d4d4d'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul li:hover ul > li').css({'border-bottom': '1px solid #2d2d2d'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul').css({'background': '#1a1a1a'});
      $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation:last-child a').css({'border-right': '1px solid #666'});

      localStorage.setItem('layout', 'Black');
    }
	});

  // Local Storage for Layout Config
	// if (localStorage.getItem("layout") != null) {
	// 	if (localStorage.getItem("layout") == 'A') {
  //     $("#featuredAssets").css('display','block');
  //     $("#assetsListing").css('display','block');
	// 		$('#layoutChoice option').eq(0).prop('selected', true);
	// 	} else if (localStorage.getItem("layout") == 'B'){
  //     $("#featuredAssets").css('display','block');
  //     $("#assetsListing").css('display','none');
	// 		$('#layoutChoice option').eq(1).prop('selected', true);
	// 	} else {
  //     $("#featuredAssets").css('display','none');
  //     $("#assetsListing").css('display','block');
  //     $('#layoutChoice option').eq(2).prop('selected', true);
  //   }
	// }


});
