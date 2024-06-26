import MuxPlayer from '@mux/mux-player-react';

const VideoText = () => {
    return (
        <section className="container p-4 md:p-16 xl:p-24 ">
          <MuxPlayer streamType="on-demand" style={{aspectRatio: "16/9"}} playbackId='Ot01TuxyUILdHc8hGCHVTGHeU8n5jk6bE02vX00VelxVfk' accentColor="#f7931a" />
          <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold pt-6 text-[#1E1E1E]">Découvrez les meilleures cryptos pour le Bull Run de 2024</h1>
          <p className="my-6 lg:text-lg sm:text-sm font-medium tracking-tight">Nous fournissons à nos membres les outils nécessaires pour prendre des décisions éclairées, en rendant l'investissement plus facile et efficace.</p>  
        </section>  
    )
}

export default VideoText