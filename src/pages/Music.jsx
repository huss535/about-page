import React from 'react';
import { Typography } from '@mui/material';

const Music = () => {
  const iframeStyles = {
    overflow: 'hidden',
    borderRadius: '10px',
    scrolling: 'auto',
    height: 450
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-around', alignItems: 'center', width: "100%", maxWidth: '80vw' }}>
      <div style={{ marginTop: '50px' }}>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          style={iframeStyles}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/nz/playlist/mix-1/pl.u-DdAN8ENI0zGW11Y"
          title="Apple Music Playlist"
        ></iframe>
      </div>

      <div >

        <Typography variant="h3" gutterBottom style={{ fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Browse through my playlist
        </Typography>



      </div>
    </div>
  );
};

export default Music;
