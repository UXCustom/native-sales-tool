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
    $(".demo-site-nav-list-item.selected, .demo-site-nav .icon").on("mousedown", function(){
      if ($('.demo-site-nav').hasClass("hideNav")) {
        showSiteTypeNav();
      }
      else {
        hideSiteTypeNav();
      }
    })

  }
  var userSelectsSiteType = function() {
    $('.demo-site-nav-list-item:not(.selected)').on('mousedown',function() {
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
  // end Site Type Nav functionality

  function makeWhite() {
    $('#nativeHeader').css({'background':'#fff', 'color':'#000'});
    $('#nativeMenus nav#nativeNavigation ul').css({'background': '#f7f7f7'});
    $('#nativeMenus nav#nativeNavigation ul li').css({'border-bottom': '1px solid #ccc'});
    $('#nativeMenus nav#nativeNavigation ul li > ul').css({'background': '#fff'});
    $('#nativeMenus nav#nativeNavigation ul li a').css({'color': '#4d4d4d'});
    $('#nativeCollapsedNavigationText').css({'color': '#4d4d4d'});
    $('#nativeSocialShare').css({'background': 'none'});
    $('#nativeSocialShare ul li a').css({'background': '#999', 'color': '#fff'});
    $('#nativeMenus nav#nativeNavigation ul').css({'background': '#f7f7f7'});
    $('#nativeMenus nav#nativeNavigation ul li > ul li:nth-of-type(4) a').css({'color': '#a0a0a0'});
    $('#nativeSocialShare > i').css({'color': '#00b3ac'});
    $('#nativeSocialShare.open > i').css({'color': '#4d4d4d'});
    $('#nativeSocialShare .share-bar').css({'background': '#f7f7f7'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul li:hover ul > li').css({'border-bottom': '1px solid #ccc'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul').css({'background': 'none'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation:last-child a').css({'border-right': '1px solid #ccc'});
    $('#nativeSponsorContent').css({'background':'white'});
    $('#nativeSponsorContent p').css({'color':'#666'});
  }

  function makeBlack() {
    $('#nativeHeader').css({'background':'#000', 'color':'#fff'});
    $('#nativeMenus nav#nativeNavigation ul').css({'background': '#4d4d4d'});
    $('#nativeMenus nav#nativeNavigation ul li').css({'border-bottom': '1px solid #808080'});
    $('#nativeMenus nav#nativeNavigation ul li > ul').css({'background': '#4d4d4d'});
    $('#nativeMenus nav#nativeNavigation ul li a').css({'color': '#fff'});
    $('#nativeCollapsedNavigationText').css({'color': '#fff'});
    $('#nativeSocialShare').css({'background': 'none'});
    $('#nativeSocialShare ul li a').css({'background': '#fff', 'color': '#4d4d4d'});
    $('#nativeMenus nav#nativeNavigation ul').css({'background': '#1a1a1a'});
    $('#nativeMenus nav#nativeNavigation ul li > ul li:nth-of-type(4) a').css({'color': '#b3b3b3'});
    $('#nativeSocialShare > i').css({'color': '#fff'});
    $('#nativeSocialShare.open > i').css({'color': '#00b3ac'});
    $('#nativeSocialShare .share-bar').css({'background': '#4d4d4d'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul li:hover ul > li').css({'border-bottom': '1px solid #2d2d2d'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation > ul').css({'background': 'none'});
    $('#nativeHeaderCompress #nativeMenus nav#nativeNavigation:last-child a').css({'border-right': '1px solid #666'});
    $('#nativeSponsorContent').css({'background':'black'});
    $('#nativeSponsorContent p').css({'color':'#ccc'});
  }

  $('#colorChoice').on('change', function() {
    if ($(this).val() == 'White') {
      makeWhite();
      localStorage.setItem('layout', 'White');
    } else if ($(this).val() == 'Black') {
      makeBlack();
      localStorage.setItem('layout', 'Black');
    }
	});

  // Local Storage for Layout Config
	if (localStorage.getItem("layout") != null) {
		if (localStorage.getItem("layout") == 'White') {
      makeWhite();
		} else if (localStorage.getItem("layout") == 'Black'){
      makeBlack();
		}
	}
  // Get Sales Tool Selected Settings and open Email via Footer "Email" Link
  var getSettings = function() {
    var siteType = $('.demo-site-nav-list-item.selected').text(),
        colorChoice = $('#colorChoice option:selected').val();
    var mailto = 'mailto:?body=Site Type: '+ siteType+'%0D%0A' +'Color Choice: '+colorChoice;
    $('.demo-footer-button.demo-button-email').attr('href',mailto);
  }
  getSettings();

  // Change Hero Image on Sales Tool Drop-down selection
  var onClickChangeHero = function() {
    var heroImageOptions = [
      {
        'id': '1',
        'src': 'images/hero/hero_images_01.jpg'
      },
      {
        'id': '2',
        'src': 'images/hero/hero_images_02.jpg'
      },
      {
        'id': '3',
        'src': 'images/hero/hero_images_03.jpg'
      },
      {
        'id': '4',
        'src': 'images/hero/hero_images_04.jpg'
      },
      {
        'id': '5',
        'src': 'images/hero/hero_images_05.jpg'
      },
      {
        'id': '6',
        'src': 'images/hero/hero_images_06.jpg'
      },
      {
        'id': '7',
        'src': 'images/hero/hero_images_07.jpg'
      },
      {
        'id': '8',
        'src': 'images/hero/hero_images_08.jpg'
      }
    ]

    $('#heroImageChoice').change(function() {
      var clickedOption = $('#heroImageChoice option:selected').val(),
          totalOptions = heroImageOptions.length;

      for (i=0;i<totalOptions;i++) {
        if (heroImageOptions[i].id === clickedOption) {
          $('#heroImageContainerInner img').attr('src',heroImageOptions[i].src);
        }
      }
    });
  }
  onClickChangeHero();

});
