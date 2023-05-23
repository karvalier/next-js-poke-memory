
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';


export default function Home() {
  const [cardForLevel, setCardForLevel] = useState(6);
  const [level, setLevel] = useState(1);
  const [data, setData] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  const [select, setSelect]  = useState([]);
  const [img, setImg] = useState([]);

// useEffect(() => {
//     const fetchData = async () => {
//       const dat = [1, 2, 3, 4, 5 ];

//       const requests = dat.map((item) =>
//         fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then((response) =>
//           response.json()
//         )
//       );

//       const responses = await Promise.all(requests);
//       const dataTemp = responses.map((pokemon) => ({
//         name: pokemon.name,
//         img: pokemon.sprites.other.dream_world.front_default,
//         active: true
//       }));
//       const temp = [...dataTemp.sort(() => Math.random() - 0.5), ...dataTemp.sort(() => Math.random() - 0.5)];
//       setData(temp.sort(() => Math.random() - 0.5));
//     };

//     fetchData();
//   }, []);

  useEffect(() => {
    const fetchData = async () => {
    const dat = [];
  ;
    for(let i = 1; i <= cardForLevel + ((level - 1) * 3); i++) {
      dat.push(i);
    }

      const requests = dat.map((item) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then((response) =>
          response.json()
        )
      );

      const responses = await Promise.all(requests);
      const dataTemp = responses.map((pokemon) => ({
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        active: true
      }));
      const temp = [...dataTemp.sort(() => Math.random() - 0.5), ...dataTemp.sort(() => Math.random() - 0.5)];
      setData(temp.sort(() => Math.random() - 0.5));
    };

    fetchData();
  }, [level]);

  useEffect(() => {
  setDataCard(data);
  }, [data]);

  const onPar = (value) => {
    console.info(value,  value.split("-")[0], value.split("-")[0] === select.find(item => item.includes(value.split("-")[0])))
    if(select.length === 0){
        setSelect([value]);
    }
    else if(select.length === 1){
        if (select.find(item => item === value)){
          setSelect(select.filter(item => item !== value))
        }
        else {
            setSelect([...select, value]);
        }
        
    }
    else {
        setSelect([]);
    }
  }

  useEffect(() => {
    if (select.length === 2){
       if (select[0].split("-")[0] === select[1].split("-")[0]) {
        setTimeout(function() {
            const temp = data.map(item =>  {
                return {...item, active: item.name.includes(select[0].split("-")[0]) ? false : item.active }})
            setData(temp);
            setSelect([])
        }, 1000);
       } else {
        setTimeout(function() {
            setSelect([])
        }, 500);
       }
    }
  }, [select]);

  return (
      <Layout >
        <h1 className='text-5xl'>Nivel {level}</h1>
        <div>
          <h3>Puntaje: { data.filter(item => !item.active).length /2 }</h3>
          <div className='max-w-6xl grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 border-2 rounded-lg shadow-xl border-gray-600 rounded-lg p-4' >
            {data.filter(item => item.active).length > 0 ? data.map((item, key) => (
              <Card clearCard={!item.active} value={item.name} img={item.img} active={select.find(item => Number(item.split('-')[1]) === key)} onClick={(value) => onPar(`${value}-${key}`)}/>
            )) : 
            data.length > 0 ? 
            <div>
              {/* Winner message */}
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">¡Felicitaciones!</strong>
                <span className="block sm:inline"> Has ganado el nivel {level}.</span>
              </div>

              {/* Start game button */}
              <button onClick={() => setLevel(level + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Jugar nivel {level + 1}
              </button>
            </div> : <div/>}
         </div>  
        </div>
      </Layout>
    )
}
