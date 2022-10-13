import axios from 'axios';
import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import {Video} from '../types';

interface IProps {
  videos: Video[]
}

const Home  = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ) : (
        <NoResults text={'No videos'}/>
      )}
    </div>
  )
};

// Prerender page on each request using the data returned
// Only use when you want to render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data
    }
  }
}

export default Home;
