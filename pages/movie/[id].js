import { Container } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../nav'))

const myLoader = ({src}) => {
    return `http://image.tmdb.org/t/p/w500${src}`
  }

const Post = ({data}) => {
    console.log(data)
    return (
        <div className='bg__dark'>
            <Navbar />
            <Container>
                <div className='mt-5'>
                    <h1 className='text-center text_title'>{data.original_title}</h1>
                    <div className='d-flex justify-content-center'>
                            <Image className='img_overview' loader={myLoader}  src={data.poster_path} width="250" height="325"/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="detail_box">
                            <h4>Overview</h4>
                            <p>{data.overview}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Post;

export async function getServerSideProps(context) {
    console.log(context);
    const params = context.params;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea&language=en-US`);
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}