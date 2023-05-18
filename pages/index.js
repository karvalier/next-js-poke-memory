import Layout from './../components/Layout';
import Link from "next/link";
import Image from 'next/image';
import Pokebola from '../styles/pokeball-pokemon-svgrepo-com.svg';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl text-center">
        <Image src={Pokebola} width={100} height={100}/>
        <h1 className="text-3xl font-bold mb-4 mt-4">¡Bienvenido al juego de memoria de Pokémon!</h1>
        <p className="text-gray-600 mb-4">
          En este juego tendrás que demostrar tus habilidades para recordar las parejas de Pokémon. Cada nivel será más difícil que el anterior, ¿crees que podrás superarlos todos? ¡Ponte a prueba ahora mismo!
        </p>
        <Link href="/memory">
          <a className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>¡Jugar ahora!</a>
        </Link>
      </div>
    </Layout>
  );
}