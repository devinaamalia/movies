import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('../nav'))


const myLoader = ({src}) => {
    return `https://image.tmdb.org/t/p/w500${src}`
  }

const Movie = ({data}) => {
    const datas = data.results
    console.log(datas);
    return (
        <div>
        <Head>
            <title>Movie List</title>
        </Head>
        <div className='bg__dark'>
            <Navbar />
            <Container>
            <div className='row mt-5 pb-5' >
                {datas.map((item) => (
                    <div className='col-3 mb-4' key={item.id}>
                        <Link passHref href={`/movie/${item.id}`}>
                            <div className='wrap'>
                                <div className='box'> 
                                    <Image className='img' loader={myLoader}  src={item.poster_path} width="250" height="325"/> 
                                    <div className='wrap_title'>
                                        <p className='title'>{item.original_title}</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='date'>{item.release_date}</p>
                                            <p className='accent'>{item.vote_average}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
          </Container>
        </div>
    </div>
    )
}

export default Movie;

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`);
    const data = await res.json();

    return {
        props: {
            data: data,
        }
    }
}
