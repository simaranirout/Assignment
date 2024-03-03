$(document).ready(function() {
    // Add new tab
    $('#add-tab-btn').click(function() {
        var tabsCount = $('.tabs-list li').length;
        var newTabId = 'tab-' + (tabsCount + 1);
        var newTabContent = '<li id="' + newTabId + '">Tab ' + (tabsCount + 1) + ' <span class="close-tab">&times;</span></li>';
        $('.tabs-list').append(newTabContent);
        $('.tab-content').removeClass('active');
        $('.tabs-list li').removeClass('active');
        $('.tabs-container').append('<div class="tab-content active"><input type="text" id="urlInput" placeholder="Enter URL"><button onclick="loadURL()">Load</button><iframe id="iframe-' + (tabsCount + 1) + '" src=""></iframe></div>');
        $('#' + newTabId).addClass('active');
    });

    // Switch tabs
    $(document).on('click', '.tabs-list li', function() {
        var tabId = $(this).attr('id');
        $('.tab-content').removeClass('active');
        $('.tabs-list li').removeClass('active');
        $('#' + tabId).addClass('active');
        $('#' + tabId + ' + .tab-content').addClass('active');
    });

    // Close tab
    $(document).on('click', '.close-tab', function(event) {
        event.stopPropagation();
        var tabId = $(this).parent().attr('id');
        $('#' + tabId).remove();
        $('#' + tabId + ' + .tab-content').remove();
    });
    $('.tabs-menu a').click(function(event) {
        event.preventDefault();
        
        // Toggle active class on tab buttons
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        
        // display only active tab content
        var activeTab = $(this).attr("href");
        $('.tab-content').not(activeTab).css("display","none");
        $(activeTab).fadeIn();
        
      });    
});

//Load URL in iframe
function loadURL() {
    // Get the URL input value
    var url = document.getElementById('urlInput').value;
    
    // Set the URL for the iframe
    document.getElementById('myIframe').src = url;
    
    // Open the URL in a new tab
    window.open(url, '_blank');
}