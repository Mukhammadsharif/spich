// app/components/VideoPlayer.js
'use client';

import { useState, useRef } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="container-fluid">
            <div className="video-wrapper position-relative">
                <video
                    ref={videoRef}
                    controls
                    autoPlay
                    muted
                    className="w-100"
                    style={{ width: '100%' }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/hd_1920_1080_30fps.mp4`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <button
                        className="play-button"
                        onClick={handlePlayPause}
                        aria-label="Play video"
                    >
                        {/* Custom play icon (SVG or image) */}
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36" cy="36" r="36" fill="#000252"/>
                            <path d="M33.9632 26.0409L33.9631 26.0409L33.9688 26.0431C37.9279 27.6039 41.4709 29.719 44.5489 32.4318L44.5515 32.4341C45.7803 33.5053 46.3619 34.7564 46.3686 35.9695C46.3753 37.1809 45.8091 38.4526 44.5496 39.5676C41.6328 42.1099 37.9853 44.3989 33.9743 45.9548C32.3723 46.562 30.9728 46.4623 29.9504 45.9085C28.9358 45.359 28.2049 44.3161 28.0127 42.8468C27.4983 38.034 27.5103 33.4327 28.0121 29.1432C28.2198 27.6271 29.0186 26.5942 30.0742 26.0609C31.1428 25.5211 32.5376 25.4631 33.9632 26.0409Z" fill="#FFF8EF" stroke="#FFF8EF" strokeWidth="1.26262"/>
                        </svg>

                    </button>
                )}
            </div>
        </div>
    );
}
