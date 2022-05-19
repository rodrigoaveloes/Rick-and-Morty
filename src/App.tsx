import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Api } from '../Api';
import './index.css';
import { CharacterResults } from './Types/types';
import { Pagination } from '@mui/material';
import axios from 'axios';




function App() {

  const [page, setPage] = useState(1);
  const [input, setInput] = useState<string>('');
  const [posts, setPosts] = useState<CharacterResults[]>([]);


  useEffect(() => {
    loadPost();

  }, [page]);





// base api Url
  const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com"
  });


  // const Api = {
    
  //   getAllCharacters: async () =>{
  //     let response = await axiosInstance.get(`/api/character?page=${page}`);
  //     await response.data.results;
  //     return response.data;
  // },
  // getAllLocations: async () =>{
  //     let response = await axiosInstance.get('/api/locations');
  //     await response.data;
  //     return response.data;
  // },

  // getAllEpisode: async () =>{
    
  //     let response = await axiosInstance.get('/api/episode');
  //     await response.data;
  //     return response.data.results;
  // }

  // }


  // req api 
  const loadPost = async () => {

    const res = await axiosInstance.get(`api/character/?page=${page}`);
    setPosts(res.data.results);
    return posts;
  }


  // input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    return input
  }

  return (
    <>
      <Nav />

      <div className="flex justify-center mt-4" >

        <div className="mb-3 xl:w-96">
          <input
            type="text"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-[#e6e6e6] bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#dfdfdf] focus:border-lime-600 focus:outline-none focus:drop-shadow-
      "
            onChange={handleSearch}
            value={input} disabled
            id="searchCharacter"
            placeholder="Buscar personagem"
            />
        </div>
      </div>

      <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="text-center">

          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            {posts.map((item, index) => {
              return <>
                <a key={index}
                  href="/"
                  aria-label="View Item"
                  className=" brightness-90 inline-block overflow-hidden duration-300 transform bg-white rounded shadow-xl hover:-translate-y-2 hover:brightness-100"
                >
                  <div className="flex flex-col h-full bg-[#e6e6e61c] hover:border-[1px] border-[#3de767] ">
                    <img
                      src={item.image}
                      className="object-cover w-full h-48"
                      alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                      <div className="p-2">
                        <h1 className="mb-3 font-black leading-5 hover:text-lime-500">
                          {item.name}
                        </h1>
                        <p className="text-gray-500"> <span className="font-semibold"> Status: </span> {item.status} - <span className="font-semibold"> Specie: </span> {item.species} </p>
                        <p className="text-gray-300">{item.type}</p>
                      </div>
                      <div className="mb-3">
                        <h1 className="mb-1 text-gray-500"> <span className="font-semibold">Last Location: </span> {item.origin.name}</h1>
                        <h1 className="mb-1"> <span className="font-semibold">First see in: </span> {item.location.name}</h1>

                      </div>

                    </div>
                  </div>
                </a>
              </>

            }

            )}


      {posts.length <= 0 && 
      <div className="flex justify-center w-full">
        <img src="https://tenor.com/view/rick-and-morty-rick-morty-portal-gun-portal-gif-16682581" alt="" />

      </div>
      }



          </div>

          <div className="flex justify-center">
            <Pagination count={42} defaultPage={1} size="large" variant="outlined" color="primary" onChange={(e, value) => setPage(value)} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
