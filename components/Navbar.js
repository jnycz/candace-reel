import Link from 'next/link';

export default function Header({ title }) {
  return (
    <>

        <nav className="py-3">
          <div className="max-w-5xl mx-auto px-4 lg:px-0 flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                  <a className="block lg:inline-block lg:mt-0 "><span className="text-xl tracking-tight">CANDACE NYCZ</span></a>
              </Link>
            </div>
            <div className="flex items-center flex-shrink-0 font-semibold text-xl">
              COLORIST
            </div>
          </div>
        </nav>

    </>
  );
}
