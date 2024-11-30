// components/VideoPlayer.tsx

import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    url: string;  // The video URL to play (YouTube, Vimeo, etc.)
    playing?: boolean;  // Play/pause state
    controls?: boolean;  // Show video controls
    volume?: number;  // Volume control (0.0 to 1.0)
    muted?: boolean;  // Mute video
    width?: string;  // Width of the player (default 100%)
    height?: string;  // Height of the player (default auto)
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    playing = true,
    controls = true,
    volume = 0.8,
    muted = false,
    width = '100%',
    height = 'auto',
}) => {
    return (
        <div style={{ width, height }}>
            <ReactPlayer
                url={url}
                playing={playing}
                controls={controls}
                volume={volume}
                muted={muted}
                width={width}
                height={height}
            />
        </div>
    );
};

export default VideoPlayer;
