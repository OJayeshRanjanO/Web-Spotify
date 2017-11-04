var myPlaylist;

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
											<tr id=songPageListContent>\
											<td><i class="material-icons song-content-play-button">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                            <td>Doar Cu Tine</td>\
                                            <td>Activ</td>\
                                            <td>Motive</td>\
                                            <td>2004-10-08</td>\
                                            <td>3:25</td>\
											</tr>\
											<tr id=songPageListContent>\
											<td><i class="material-icons song-content-play-button">play_circle_outline</i><i class="material-icons SongPageAddSong">add</i></td>\
                                            <td>Crosses</td>\
                                            <td>Jos</td>\
                                            <td>Veneer</td>\
                                            <td>2003-10-08</td>\
                                            <td>2:41</td>\
											</tr>\
                                        </table>\
                                    </div>')
									
	
										
										
			var songList = [
				{
				title:"Doar Cu Tine",
				mp3:"./music/Activ-Doar Cu Tine.mp3",
				artist:"Activ"
				},
				{
				title:"Crosses",
				mp3:"./music/Jos - Crosses.mp3",
				artist:"Jos"
				}
			];
			
			
			myPlaylist = new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_1",
				cssSelectorAncestor: "#jp_container_1"
			}, 
			songList
			, {
				supplied: "mp3",
				wmode: "window",
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true
			});
			
			$(".song-content-play-button").each(function(index){
				$(this).click(function(event){
					myPlaylist.play(index);
				});
			});
			
		
    
    //this section needs to be MORE DYNAMIC
	/*
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
                                      */      
                    

                    
 


                            



}