import axios from 'axios';
import {Video} from '../types';

interface IProps {
  videos: Video[]
}

const Home  = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>);
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
