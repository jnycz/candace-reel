import Link from 'next/link';


export default function Header({ title }) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"><span className="font-semibold text-xl tracking-tight">CANDACE NYCZ</span></a>
        </Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          Colorist
        </div>
        <div className="flex lg:flex lg:items-center lg:w-auto">
          <div className="flex  justify-end text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 ">color reel</a>
            </Link>
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">about</a>
            </Link>
            <Link href="/contact" >
              <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
