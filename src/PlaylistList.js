import React, { Component } from 'react';
import Playlist from './Playlist';

class PlaylistList extends Component{
  render() {
    return(
      <div className='flex-row'>
        {this.props.playlists.map( function (playlist) {
            return(
              <Playlist name={playlist.name} image={playlist.image} key={playlist.id}></Playlist>
            )
          })}
      </div>
    )
  }
}

export default PlaylistList;
