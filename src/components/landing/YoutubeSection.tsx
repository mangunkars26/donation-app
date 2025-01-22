import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string | HTMLElement,
        config: {
          videoId: string;
          playerVars?: {
            autoplay?: number;
            mute?: number;
            controls?: number;
            showinfo?: number;
            rel?: number;
            modestbranding?: number;
            playsinline?: number;
          };
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        ENDED: number;
        PAUSED: number;
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  destroy: () => void;
  getIframe: () => HTMLIFrameElement;
}

const YouTubeSection: React.FC = () => {
  const [player, setPlayer] = useState<YTPlayer | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const playerRef = useRef<HTMLDivElement>(null);
  const hasPlayed = useRef<boolean>(false);

  useEffect(() => {
    // Add YouTube API script only once
    const scriptExists = document.querySelector('script[src*="youtube.com/iframe_api"]');
    if (!scriptExists) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize YouTube Player API
    const initializePlayer = () => {
      if (!playerRef.current) return;

      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: "fCGecWrG4xg",
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 1,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Replay the video if it ends
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }

            // Automatically play video on the first pause
            if (event.data === window.YT.PlayerState.PAUSED && !hasPlayed.current) {
              event.target.playVideo();
              hasPlayed.current = true;
            }

            // Mark video as played when it starts playing
            if (event.data === window.YT.PlayerState.PLAYING) {
              hasPlayed.current = true;
            }
          },
        },
      });
    };

    // Assign the YouTube API ready callback
    window.onYouTubeIframeAPIReady = initializePlayer;

    // Cleanup function
    return () => {
      if (player) {
        player.destroy();
      }
      window.onYouTubeIframeAPIReady = undefined; // Reset global callback
    };
  }, [player]);

  const toggleSound = () => {
    if (!player) return;

    try {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    } catch (error) {
      console.error("Error toggling sound:", error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-orange-700 to-orange-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-poppins leading-tight">
            Sekilas Kegiatan Kami
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 font-poppins max-w-2xl mx-auto">
            Mari simak kegiatan pembelajaran dan aktivitas bermanfaat yang kami lakukan bersama para santri
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-2xl bg-orange-900/50 backdrop-blur group"
          >
            {/* Sound toggle button */}
            <button
              onClick={toggleSound}
              type="button"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-0"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>

            {/* YouTube iframe container */}
            <div className="relative pb-[56.25%] h-0">
              <div
                ref={playerRef}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 bg-orange-600/30 rounded-lg p-4 inline-block"
          >
            <p className="text-white/90 text-sm font-poppins flex items-center justify-center gap-2">
              <Volume2 className="w-4 h-4" />
              Hover video dan klik icon suara untuk mendengarkan
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
