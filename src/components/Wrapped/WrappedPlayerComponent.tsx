"use client";
import WrappedPlayer from "@/lib/Player/WrappedPlayer";
import SpotifyFramePlayer from "@/lib/Spotify/FramePlayer";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WrappedContainer, { WrappedSlideProps } from "./WrappedContainer";

const LoadingPlayerComponent = (props: WrappedSlideProps) => {
  return (
    <WrappedContainer>
      <Loader2 size={32} className="animate-spin" />
    </WrappedContainer>
  );
};

const TransitionWrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & any) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition nodeRef={nodeRef} {...props}>
      <div ref={nodeRef} className="w-full h-full">
        {children}
      </div>
    </CSSTransition>
  );
};

function WrappedPlayerComponent({
  spotify,
  ...props
}: {
  spotify: SpotifyFramePlayer | null;
} & WrappedSlideProps) {
  const [player] = useState(() => new WrappedPlayer(spotify));
  const [, forceUpdateState] = useState(0);
  const forceUpdate = () => forceUpdateState((s) => s + 1);
  useEffect(() => {
    player.on("update", forceUpdate);
    player.play(props.statistics);

    return () => {
      player.off("update", forceUpdate);
    };
  }, []);

  useEffect(() => {
    player.spotifyPlayer = spotify;
  }, [spotify]);

  const Component = player.currentSlide?.component || LoadingPlayerComponent;

  return (
    <>
      <TransitionGroup>
        <TransitionWrapper
          key={player.currentSlide?.name || "none"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Component {...props} />
        </TransitionWrapper>
      </TransitionGroup>
    </>
  );
}

export default WrappedPlayerComponent;
