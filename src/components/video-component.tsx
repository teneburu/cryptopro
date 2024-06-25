interface  Props {
    video_id: string
    className?: string
}
export default function VideoComponent({video_id, className}: Props) {
    return <iframe width="1080" height="1920" 
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
    className={`w-full aspect-video ${className}`} 
    src={`https://player.vimeo.com/video/${video_id}`} 
    allowFullScreen />
  }