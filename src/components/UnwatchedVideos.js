import { useSelector } from "react-redux";
import { selectMemoizedUnWatchedVideos, selectMemoizedFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";
import { useMemo } from "react";

export default function UnWatchedVideos() {
    const selectUnWatchedVideos = useMemo(selectMemoizedFilteredVideos, [])
    const unwatchedVideos = useSelector((state) =>
        selectMemoizedFilteredVideos(state, false)
    );

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
