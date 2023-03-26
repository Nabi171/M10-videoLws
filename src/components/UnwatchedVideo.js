import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import VideoItem from "./VideoItem";
import { selectUnWatchedVideos } from '../features/videos/videoSelector';
// import { selectWatchedVideos } from "../features/videos/videoSelector";

const UnwatchedVideo = () => {
    const unwatchedVideos = useSelector(selectUnWatchedVideos);

    console.log("[UnWatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {unwatchedVideos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
export default UnwatchedVideo;