import MuxPlayer from '@mux/mux-player-react';

const VideoText = () => {
    return (
      <section className="container p-6 md:p-12">
        <MuxPlayer streamType="on-demand" style={{aspectRatio: "16/9"}} playbackId='Ot01TuxyUILdHc8hGCHVTGHeU8n5jk6bE02vX00VelxVfk' accentColor="#f7931a" poster='/thumbnail.jpg' />
        <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt-6 text-[#1E1E1E]">Découvrez les meilleures cryptos pour le Bull Run de 2024.</h1>
        <p className="my-6 lg:text-lg sm:text-sm font-medium tracking-tight">Notre mission est de démystifier le monde complexe des cryptomonnaies et de fournir à nos membres les outils nécessaires pour prendre des décisions d'investissement éclairées. </p>  
      </section>  
    )
}

export default VideoText