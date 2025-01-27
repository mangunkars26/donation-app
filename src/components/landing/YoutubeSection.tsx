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
  const [isMuted, setIsMuted] = useState<boolean>(false); // Default not muted
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const hasPlayed = useRef<boolean>(false);

  useEffect(() => {
    let mounted = true;
  
    const loadYouTubeAPI = () => {
      return new Promise((resolve, reject) => {
        if (window.YT) {
          resolve(window.YT);
          return;
        }
  
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.onerror = (err) => reject(err);
        
        window.onYouTubeIframeAPIReady = () => {
          if (mounted) {
            resolve(window.YT);
          }
        };
  
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      });
    };

    const initializePlayer = async () => {
      try {
        setIsLoading(true);
        await loadYouTubeAPI();
    
        if (!playerRef.current || !mounted) return;
    
        const newPlayer = new window.YT.Player(playerRef.current, {
          videoId: "qq6zlYPreOA",
          playerVars: {
            autoplay: 1, // Autoplay enabled
            mute: 0,    // Start unmuted
            controls: 1,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onReady: (event: { target: YTPlayer }) => {
              if (mounted) {
                const player = event.target;
                setPlayer(player);
                setIsLoading(false);
                
                // Memastikan video mulai dengan suara
                try {
                  player.unMute();
                  player.playVideo();
                  setIsMuted(false);
                } catch (error) {
                  console.warn("Auto-unmute failed, might need user interaction:", error);
                }
              }
            },
            onStateChange: (event) => {
              if (!mounted) return;
              
              // Auto-replay when ended
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
              
              // Try to unmute if video starts muted
              if (event.data === window.YT.PlayerState.PLAYING && !hasPlayed.current) {
                hasPlayed.current = true;
                try {
                  event.target.unMute();
                  setIsMuted(false);
                } catch (error) {
                  console.warn("Failed to unmute on first play:", error);
                }
              }
            },
          },
        });
      } catch (err) {
        console.error("Error initializing YouTube player:", err);
        if (mounted) {
          setError("Failed to initialize video player");
          setIsLoading(false);
        }
      }
    };
  
    initializePlayer();
  
    return () => {
      mounted = false;
      if (player) {
        player.destroy();
      }
    };
  }, []); // Remove player from dependencies to avoid reinitialize

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

  if (error) {
    return (
      <section id="gallery" className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <p>Sorry, there was an error loading the video: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="gallery"
      className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] bg-purple-900/50 backdrop-blur group"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-purple-900/50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            
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

            <div className="relative pb-[56.25%] h-0">
              <div
                ref={playerRef}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;