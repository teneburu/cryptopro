import MuxPlayer from '@mux/mux-player-react';
interface  Props {
    video_id: string
    height?: string
    width?: string
    className?: string
}
export default function VideoComponent({video_id, width, height, className}: Props) {
    return (
        <div className={className}>
            <MuxPlayer streamType="on-demand" style={{width: width, height: height}} playbackId={video_id} accentColor="#f7931a" />
        </div>
    )
  }