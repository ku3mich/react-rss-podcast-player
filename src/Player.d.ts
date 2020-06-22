export default Player;
declare class Player extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        feedData: never[];
        allEpisodes: never[];
        currentEpisode: string;
        isPlaying: boolean;
        volume: number;
        currentTime: number;
        currentEpisodeDuration: number;
        currentEpisodeDescription: string;
    };
    audioElement: HTMLAudioElement;
    rssParser: import("rss-parser");
    componentWillMount(): void;
    play(): void;
    interval: NodeJS.Timeout | undefined;
    pause(): void;
    setEpisode(episode: any): void;
    handleEpisodeClick(episode: any): void;
    handleTimeChange(e: any): void;
    handleVolumeChange(e: any): void;
    changeCurrentEpisode(episode: any): void;
    handleSkipForward15Seconds(e: any): void;
    handleSkipBackwards15Seconds(e: any): void;
    fetchDataFromRssFeed(url: any): void;
    formatTime(time: any): any;
    render(): JSX.Element;
}
import React from "react";
