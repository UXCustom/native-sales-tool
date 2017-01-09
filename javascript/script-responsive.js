/*
  General site functions are applied on every page regardless of page type.

  navMath() - Collapse navigation into dropdown menu if width of all lis exceeds available space
  menuInteraction() - Social and collapsed menu icon interaction
  sponsoredContent() - Sponsored content interaction
  articleListingMath() - Hides listing 7+ for UX. Button interaction for revealing.
  articleListingMathMobile() - Mobile version... 4+ are hidden instead of 7+
*/

var navMath = function() {
  if($(window).width() < 945){
    $('#nativeMenus nav#nativeNavigation ul li').addClass('collapsed');
  }

  var subtractWidth = $('#nativeLogo').outerWidth(true) + $('#nativeSocialShare').outerWidth(true);
  var containerWidth = $('#nativeHeaderCompress').width();
  var availableWidth = containerWidth - subtractWidth;
  var totalItemWidth = 0;

  $('#nativeNavigation ul li').each(function(){
    var $this = $(this);
    totalItemWidth += $this.outerWidth(true);
  });

  if(totalItemWidth > availableWidth){
    $('#nativeMenus').addClass('collapsedMenu');
    $('#nativeMenus nav#nativeNavigation ul li').addClass('collapsed');
  } else {
    $('#nativeHeader #nativeMenus nav#nativeNavigation').css('visibility','visible').removeClass('collapsedMenu');
  }
}

var navTabletTouch = function() {
  var navItems = $('#nativeNavigation > ul > li');

  if($(window).width() > 639){
    navItems.on("touchstart", function (e) {
      "use strict"; //satisfy the code inspectors
      var link = $(this); //preselect the link
      if (link.hasClass('hover')) {
          return true;
      } else {
          link.addClass("hover");
          navItems.not(this).removeClass("hover");
          e.preventDefault();
          return false; //extra, and to make sure the function has consistent return points
      }
    });
  }
}

var menuInteraction = function() {
  var navList = $( 'nav#nativeNavigation ul' ),
  nativeSocialShare = $( '#nativeSocialShare' ),
  shareBar = $( '.share-bar' ),
  nativeCollapsedMenuText = $( '#nativeCollapsedNavigationText' );

  nativeCollapsedMenuText.on('click',function() {
    navList.parent().toggleClass( 'open' );
    shareBar.parent().removeClass( 'open' );
  })

  nativeSocialShare.on('click',function() {
    navList.parent().removeClass( 'open' );
    shareBar.parent().toggleClass( 'open' );
  })
}

var sponsoredContent = function() {
  var sponsoredContentBox = $('#nativeSponsorContent');

  sponsoredContentBox.on('click',function(){
    $('.nativeSponsorInfoPanel').toggleClass('show');
  });
}

var articleListingMathMobile = function() {
  $('.nativeArticleListing').each(function(i){

    $(this).addClass('listing' + (i + 1));

    var assetsListingCount = $('li',this).length;

    if(assetsListingCount > 3) {
      $('.nativeButton', this).addClass('nativeButtonVisible');
      $('.nativeButton', this).on('click',function(){
        $('.listing' + (i + 1) + ' li').slideDown('100', function(){
        });
        // $('.listing' + (i + 1) + ' li').addClass('open');
        $(this).remove();
      });
    } else {
      $('.nativeButton', this).removeClass('nativeButtonVisible');
    }
  })
}

var articleListingMath = function() {
  $('.nativeArticleListing').each(function(i){

    $(this).addClass('listing' + (i + 1));

    var assetsListingCount = $('li',this).length;

    if(assetsListingCount > 6) {
      $('.nativeButton', this).addClass('nativeButtonVisible');
      $('.nativeButton', this).on('click',function(){
        $('.listing' + (i + 1) + ' li').slideDown('100', function(){
        });
        // $('.listing' + (i + 1) + ' li').addClass('open');
        $(this).remove();
      });
    } else {
      $('.nativeButton', this).removeClass('nativeButtonVisible');
    }
  })
}

/*
  Page type specific functions.

  topicPageRightContent () - Positioning of various right rail elements needs to be dynamically calculated due to constraints of design.
  articlePageRightContent() - Same as topicPageRightContent()
  detectAd() - Determine if a non-article page has an ad, if not, hide the ad container to remove reserved ad space
*/

var detectAd = function(){
  if($('.nativeAdContainer #mu-top').length > 0){
    if($('.nativeAdContainer #mu-top > div > iframe div').length > 0){
    } else {
      $('.nativeAdContainer').css('display','none');
    }
  }
}

var topicPageRightContent = function(){
  var headerHeight = $('#nativeTopicHeading').height();
  var rightRailTop = 62 + headerHeight + 30 + 265 + 40; // 62 is the padding above the header, 30 is the margin below the title, 265 is the height of the ad/summary image and 40 is the expected padding between than image and the first of the rightRail sections

  $('#nativeTopicpageMain #nativeTopicRight').css('top', rightRailTop);

  var nativeTopicRight = $('#network').height();
  var newNativeTopicpageMain = rightRailTop + nativeTopicRight + 65; // Starting position of first rightRail section + the height of that section, 65 is the bottom padding, this is calculated just in case the content length of that topic is shorter

  $('#nativeTopicpageMain').css('min-height',newNativeTopicpageMain);
}

var articlePageRightContent = function(){
  var headerHeight = $('#nativeArticleHeading').height();

  if($('.articleAuthor').length > 0){
    var rightRailTop = $('.articleAuthor').offset().top - 155;
  } else {
    var rightRailTop = 62 + headerHeight; // 62 is the padding above the header    
  }

  $('#nativeArticlepageMain .nativeAdContainer').css('top', rightRailTop);

  if ($('#nativeArticlepageMain .nativeAdContainer > div').length == 0) {
    $('#nativeArticlepageMain .microsite-summary-image').css({'top': rightRailTop, 'visibility':'visible'});
  } else {
    $('#nativeArticlepageMain .microsite-summary-image').css({'top': rightRailTop, 'visibility':'hidden'});
  }

  var firstContentTop = rightRailTop + 265 + 40; // Bottom of header, 265 is height of the ad/summary image of which only 1 will be displayed, 40 is the expected padding between that element and the #network section
  $('#nativeArticlepageMain #network').css('top',firstContentTop);

  var networkHeight = $('#network').height();
  var secondContentTop = firstContentTop + networkHeight; // Starting position of first rightRail section + the height of that section, 40 is the bottom padding
  $('#nativeArticlepageMain #vendor-resources-bar').css('top',secondContentTop);

  var nativeArticleSummaryImageHeight = 0;
  var nativeArticleNetworkHeight = 0;
  var nativeArticleVendorResourcesHeight = 0;

  if($('.microsite-summary-image').length > 0) {
    nativeArticleSummaryImageHeight = $('.microsite-summary-image').height() + 40;
  }

  if($('#network').length > 0) {
    nativeArticleNetworkHeight = $('#network').height() + 40;
  }

  if($('#vendor-resources-bar').length > 0) {
    nativeArticleVendorResourcesHeight = $('#vendor-resources-bar').height();
  }

  var newNativeArticlepageMain = rightRailTop + nativeArticleNetworkHeight + nativeArticleSummaryImageHeight + nativeArticleVendorResourcesHeight + 65; // All possible right side elements + 65 pixels of expected bottom padding

  $('#nativeArticlepageMain').css('min-height',newNativeArticlepageMain);
}

var abstractHeaderHTML = function(){
  var environmentPath = 'cdn.ttgtmedia.com/microsites/';
  var micrositeName = 'nativeadredesign';

  var url = window.location.href;
  var urlSplit = url.split('/');
  var localClickThruName = urlSplit[5];
  var productionClickThruSite = urlSplit[2];
  var productionClickThruName = urlSplit[3];

  if(url.indexOf("uxcustom/microsites") > -1) {
    clickThruName = localClickThruName;
  } else if(url.indexOf("techtarget.com") > -1) {
    clickThruName = productionClickThruName;
  } else {
    clickThruName = '';
  }

  var clickThru = "http://" + productionClickThruSite + "/" + clickThruName;

  if ($('body#bprAbstractOneReg').length > 0){
    $('#abstractHeader').html('<header id="nativeHeader"><div id="nativeHeaderCompress"><div id="nativeLogo"><a href="' + clickThru + '"><img src="http://' + environmentPath + micrositeName + '/images/content/clientLogo.png"></a></div><div id="nativeSponsorContent"><p class="nativeSponsorTagline"><span>Sponsored Content</span><i class="icon-info sponsorInfoClosedContent"></i></p><div class="nativeSponsorInfoPanel"><p>Sponsored content is a special advertising section provided by IT vendors. It features educational content and interactive media.<i class="icon-closeButton"></i></p></div></div></div></header>');

    sponsoredContent();
  }
}

var menuHoverMaintainer = function(){
  var $menu = $('#nativeMenus nav > ul');

  $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
  });

  function activateSubmenu(row) {
      var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId)

      // Show the submenu
      if($(window).width() > 639){
        $submenu.css({
          display: "block"
        });
      }

      // Keep the currently activated row's highlighted look
      $row.find("> a").addClass("maintainHover");
  }

  function deactivateSubmenu(row) {
      var $row = $(row),
          submenuId = $row.data("submenuId"),
          $submenu = $("#" + submenuId);

      // Hide the submenu and remove the row's highlighted look
      $submenu.css("display", "none");
      $row.find("> a").removeClass("maintainHover");
  }
}

$( document ).ready(function() {

  navMath();
  navTabletTouch();
  menuInteraction();
  articlePageRightContent();
  topicPageRightContent();
  sponsoredContent();
  abstractHeaderHTML();

  if($(window).width() < 1280){
    menuHoverMaintainer();
  }

  $(document).click(function(evt){
    if(evt.target.id == "nativeCollapsedNavigationText" || $(evt.target).is('.icon-play')) {
     return;
    }
    $('#nativeNavigation, nativeNavigation > ul > li').removeClass('open');
    $("#nativeNavigation > ul > li > ul").css("display","");
    $("a.maintainHover").removeClass("maintainHover");
  });

  var $footer = $('.latest-wrapper'),
      $window = $(window),
      $micrositeWrapper = $('#micrositeWrapper'),
      triggerPoint = $('#nativeArticlepageMain').height() * .6;
      $overlay = $('#overlay'),
      overlayCloseBtn = $('#overlay a');

  var showOverlay = function(){
    $overlay.animate({
      bottom:0
    },1000);
  }

  var checkListing = function(){
    if ($window.width() < 625) {
      articleListingMathMobile();
    } else {
      articleListingMath();
    }
  }

  checkListing();

  overlayCloseBtn.on('click', function(e){
    $overlay.remove();
  });

  $(window).on('scroll', function(){
    if(($window.scrollTop() + $window.height()) >= triggerPoint){
      showOverlay();
    }
  });

  $( window ).resize(function() {
    checkListing();
    navMath();
    navTabletTouch();
    topicPageRightContent();
    articlePageRightContent();
    menuHoverMaintainer();
  });
});
