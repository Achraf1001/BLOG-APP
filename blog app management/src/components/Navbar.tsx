import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    { name: 'Home', link: '/' },
    { name: 'New Blog', link: '/new' },
    { name: 'Blogs', link: '/blogs' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky bg-gray-200 mx-6 rounded-3xl top-7 z-50 h-20 transition-all shadow-xl duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className=' mx-auto py-5 px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <a href='/' className='flex items-center'>
              <svg
                className='h-7 w-auto'
                viewBox='0 0 100 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 30L30 10M30 10V25M30 10H15'
                  stroke='url(#gradient)'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M40 10L60 30M60 30H45M60 30V15'
                  stroke='url(#gradient)'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M70 10V30M70 20H90M90 10V30'
                  stroke='url(#gradient)'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <defs>
                  <linearGradient
                    id='gradient'
                    x1='0'
                    y1='0'
                    x2='100'
                    y2='40'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#4F46E5' />
                    <stop offset='1' stopColor='#06B6D4' />
                  </linearGradient>
                </defs>
              </svg>
              <span className='ml-2 text-[22px] font-poppins-700 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600'>
                IG.Blog
              </span>
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='font-poppins-500  text-gray-500 text-s flex items-baseline gap-8'>
              {links.map((item, index) => (
                <a
                  key={item.name}
                  href={item.link}
                  className='rounded-md p-2 hover:text-cyan-600'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
