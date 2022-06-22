import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Header({ title }) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-3">
        <div className="flex items-center flex-shrink-0">
        <Link href="/">
            <a className="block lg:inline-block lg:mt-0 "><span className="text-xl tracking-tight">CANDACE NYCZ</span></a>
        </Link>
        </div>
        <div className="flex items-center flex-shrink-0">
          colorist
        </div>
        <div className="flex lg:flex lg:items-center lg:w-auto">
          <div className="flex  justify-end text-sm lg:flex-grow">
            <AnchorLink href="#reel">
              <a className="block lg:inline-block lg:mt-0  hover:underline">color reel</a>
            </AnchorLink>
            <AnchorLink href="#about">
              <a className="block lg:inline-block lg:mt-0  hover:underline ml-4">about</a>
            </AnchorLink>
            <AnchorLink href="#contact">
              <a className="block lg:inline-block lg:mt-0 hover:underline ml-4">contact</a>
            </AnchorLink>
          </div>
        </div>
      </nav>
    </>
  );
}
