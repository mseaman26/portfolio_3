import YouTube from 'react-youtube';
import { videos } from '@/Lib/videos';

const YoutubeVideo = ({videoId}) => {
    return (
        <div>
            <YouTube videoId={videoId} opts={{width: '100%', height: '100%'}}/>
        </div>
    )
}

export default YoutubeVideo