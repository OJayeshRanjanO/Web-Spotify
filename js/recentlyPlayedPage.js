function loadRecentPlayTabScreen(){
    $('#centerSideContent').empty();
    $("#centerSideContent").append('<div class=centerSideContentWrapper id=RecentlyPlayedPageTop>\
                                        <div id="contentTitle">\
                                            <div id="contentTitleWrapper" style="border-bottom:transparent; font-size:45px;">RecentlyPlayed</div>\
                                        </div>\
                                   </div>');
    $("#centerSideContent").append('<div class=centerSideContentWrapper>\
                                        <div class="RecentlyPlayedPageContent">\
                                            <div class=RecentlyPlayedContentPicture style="background-image: url(./images/recentlyPlayedCover.jpg);"></div>\
                                            <div class=RecentlyPlayedContentDescription>\
                                                <div class=RecentlyPlayedContentName>Immortalized</div>\
                                                <div class=RecentlyPlayedContentType>Radio</div>\
                                            </div>\
                                        </div>\
                                        <div class="RecentlyPlayedPageContent">\
                                            <div class=RecentlyPlayedContentPicture style="background-image: url(./images/albumCover2.jpg);"></div>\
                                            <div class=RecentlyPlayedContentDescription>\
                                                <div class=RecentlyPlayedContentName>Hand Of Blood</div>\
                                                <div class=RecentlyPlayedContentType>PlayList</div>\
                                            </div>\
                                        </div>\
                                        <div class="RecentlyPlayedPageContent">\
                                            <div class=RecentlyPlayedContentPicture style="background-image: url(./images/albumCover4.jpg);"></div>\
                                            <div class=RecentlyPlayedContentDescription>\
                                                <div class=RecentlyPlayedContentName>American Idiot</div>\
                                                <div class=RecentlyPlayedContentType>Playlist</div>\
                                            </div>\
                                        </div>\
                                    </div>');
}