interface  Props {
    video_id: string
    className?: string
}
export default function VideoComponent({video_id, className}: Props) {
    return <iframe className={`w-full aspect-video ${className}`} src={`https://www.youtube.com/embed/${video_id}?autoplay=0&origin=https://crypto-pro.app`} allowFullScreen />
  }