import React from 'react';

const Music = () => {
  const iframeStyles = {
    height: 450,
    width: 500,
    maxWidth: '660px',
    overflow: 'hidden',
    borderRadius: '10px',
  };

  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{margin:'50px'}}>
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        style={iframeStyles}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/nz/playlist/mix-1/pl.u-DdAN8ENI0zGW11Y"
        title="Apple Music Playlist"
      ></iframe>
    </div>

    <div >

    <h1>Browse through my playlist</h1>

    </div>
    </div>
  );
};

export default Music;
