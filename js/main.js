function editProfile(){
    window.location = "./userProfile.html";
}

function logoutUser(){
    window.location = "./login.html"
}

function loginUser(){
//    alert(document.getElementsByTagName("input")[0].value)
//    alert('test');
//    alert($("#loginUsername").val())
    window.location = "./index.html"

}

function signUp(){
        window.location = "./signUp.html"
}

function signUpComplete(){
    window.location = "./index.html"

}


$(document).ready(function() {
    $("#BrowseScreenTab").click(function(){
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#BrowseScreenTab').css('background-color','#990000');
        loadBrowseTabScreen();

    });
    $("#RecentPlayTab").click(function(){
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#RecentPlayTab').css('background-color','#990000');
        loadRecentPlayTabScreen();

    });
    $("#SongTab").click(function(){
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#SongTab').css('background-color','#990000');
        loadSongScreen();

    });
        $("#AlbumTab").click(function(){
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#AlbumTab').css('background-color','#990000');
        loadAlbumTabScreen();

    });
        $("#ArtistTab").click(function(){
//        alert("ArtistTab");
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#ArtistTab').css('background-color','#990000');
        loadArtistTabScreen();

    });
    $("#StationTab").click(function(){
        alert("StationTab");

    });
    $("#LocalFileTab").click(function(){
        alert("LocalFileTab");

    });
    $("#PlayList1").click(function(){
        $('.userSongWrapperList').css('background-color','#1c1c1c');
        $('#PlayList1').css('background-color','#990000');
        loadPlayListPrototype();

    });
    

});
 