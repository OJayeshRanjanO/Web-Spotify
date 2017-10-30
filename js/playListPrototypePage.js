function loadPlayListPrototype(){

    $('#centerSideContent').empty();
    $('#centerSideContent').append('<div class=centerSideContentWrapper id=PlayListPrototypeTop>\
                                        <div id=playListPrototypeImage style="background-image: url(./images/FSProfile3.jpg);"></div>\
                                        <div id=contentTitleOuterWrapper>\
                                            <div id="contentTitle">\
                                                <div id="contentTitleWrapper" style="border-bottom:transparent; font-size:45px;">Playlist 1</div>\
                                            </div>\
                                            <button class=buttonStyle1 id=PlayListPrototypeButton onclick=loadPlayListPrototype()>Play</button>\
                                        </div>\
                                    </div>')
    $('#centerSideContent').append('<div class=centerSideContentWrapper id=PlayListPrototypeBottom>\
                                        <table id=PlayListPrototypeTable>\
                                            <tr>\
                                                <th></th>\
                                                <th>TITLE</th>\
                                                <th>ARTIST</th>\
                                                <th>ALBUM</th>\
                                                <th>RELEASE</th>\
                                                <th>DURATION</th>\
                                            </tr>\
                                        </table>\
                                    </div>')
    
    
    //this section needs to be MORE DYNAMIC
    $('#PlayListPrototypeTable').append('<tr id=songPageListContent>\
                               <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                <td>Pray</td>\
                                <td>Sam Smith</td>\
                                <td>Pray</td>\
                                <td>2017-10-08</td>\
                                <td>3:42</td>\
                           </tr>')
    $('#PlayListPrototypeTable').append('<tr id=songPageListContent>\
                               <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                <td>Pray</td>\
                                <td>Sam Smith</td>\
                                <td>Pray</td>\
                                <td>2017-10-08</td>\
                                <td>3:42</td>\
                           </tr>')
    $('#PlayListPrototypeTable').append('<tr id=songPageListContent>\
                               <td><i class="material-icons">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                <td>Pray</td>\
                                <td>Sam Smith</td>\
                                <td>Pray</td>\
                                <td>2017-10-08</td>\
                                <td>3:42</td>\
                           </tr>')
                                            
                    

                    
 


                            



}