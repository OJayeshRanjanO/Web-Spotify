function loadSongScreen(){
//    alert("LoadSongScreen");
    $('#centerSideContent').empty();
    $("#centerSideContent").append('<div class=centerSideContentWrapper id=SongsPageTop></div>')
        $('#SongsPageTop').append('<div id="contentTitle"></div>')
            $('#contentTitle').append('<div id="contentTitleWrapper" style="border-bottom:transparent; font-size:45px;">Songs</div>')
        $('#SongsPageTop').append("<button class='buttonStyle1' id='SongsPlayButton'>Play</button>");
    $("#centerSideContent").append('<div class=centerSideContentWrapper id=SongsPageBottom></div>')
        $("#SongsPageBottom").append('<table id=SongListTable></table>')
            $("#SongListTable").append('<tr>\
                                            <th></th>\
                                            <th>TITLE</th>\
                                            <th>ARTIST</th>\
                                            <th>ALBUM</th>\
                                            <th>RELEASE</th>\
                                            <th>DURATION</th>\
                                       </tr>\
                                       <tr id=songPageListContent>\
                                           <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                            <td>Pray</td>\
                                            <td>Sam Smith</td>\
                                            <td>Pray</td>\
                                            <td>2017-10-08</td>\
                                            <td>3:42</td>\
                                       </tr>\
                                       <tr id=songPageListContent>\
                                           <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                            <td>Pray</td>\
                                            <td>Sam Smith</td>\
                                            <td>Pray</td>\
                                            <td>2017-10-08</td>\
                                            <td>3:42</td>\
                                       </tr>\
                                       <tr id=songPageListContent>\
                                           <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                            <td>Pray</td>\
                                            <td>Sam Smith</td>\
                                            <td>Pray</td>\
                                            <td>2017-10-08</td>\
                                            <td>3:42</td>\
                                       </tr>')
        
        
    
//               <div class=centerSideContentWrapper id=SongsPageTop>
//                    <div id="contentTitle">
//                        <div id="contentTitleWrapper" style="border-bottom:transparent; font-size:45px;">
//                            Songs
//                        </div>
//                    </div>
//                    <button class='buttonStyle1' id='SongsPlayButton'>Play</button>
//                </div>
//                <div class=centerSideContentWrapper id=SongsPageBottom>
//                    <table id=SongListTable>
//                      <tr>
//                        <th></th>
//                        <th>TITLE</th>
//                        <th>ARTIST</th> 
//                        <th>ALBUM</th>
//                        <th>RELEASE</th>
//                        <th>DURATION</th>   
//                      </tr>
//                      <tr id=songPageListContent>
//                        <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>
//                        <td>Pray</td>
//                        <td>Sam Smith</td> 
//                        <td>Pray</td>
//                        <td>2017-10-08</td>
//                        <td>3:42</td>
//                      </tr>
//                      <tr id=songPageListContent>
//                        <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>
//                        <td>Pray</td>
//                        <td>Sam Smith</td> 
//                        <td>Pray</td>
//                        <td>2017-10-08</td>
//                        <td>3:42</td>
//                      </tr>
//                      <tr id=songPageListContent>
//                        <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>
//                        <td>Pray</td>
//                        <td>Sam Smith</td> 
//                        <td>Pray</td>
//                        <td>2017-10-08</td>
//                        <td>3:42</td>
//                      </tr>  
//                    </table>
//                </div>
//                                    
//            </div>

}