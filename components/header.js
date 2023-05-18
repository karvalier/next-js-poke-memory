import Link from 'next/link';
import Image from 'next/image';
import logo from '../styles/logo.png';


const Header = () => {
  return (
    <header className="bg-gray-600 text-white shadow-xl">
      <nav>
        <ul className='flex flex-row justify-between'>
          <li className="m-2">
            <Link href="/">
              <Image 
                src={logo} 
                width={120}
                height={60}
                alt="Picture of the author"
              />
              </Link>
          </li>
          <li className="m-2 text-3xl">
            <Link href="/">Jugar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;