import { useState } from 'react'
import { CaretDownOutlined, UserOutlined, PlayCircleOutlined, MailOutlined, ExclamationCircleOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons'
import Avatars from './Avatars';

const Header = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);


  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab)
  }

  const Kino = () => {
    return (
      <div className="container-main relative sm:px-6 lg:px-8">
        <ul className='flex flex-col lg:flex-row items-center w-full lg:w-[1170px] p-5 absolute top-5 left-0 btn-group-bg border border-color rounded-sm text-sm z-10'>

          {["Tarjima kino", "Premer", "Hind filmlar", "Multfilm", "Filmlar mavjud emas"].map((item, idx) => (
            <li key={idx} className="w-full lg:w-[215.68px] relative transition-all group py-2.5 m-1 link-bg rounded-sm text-center cursor-pointer">
              <span className="absolute inset-0 group-hover:bg-green-600 opacity-35 rounded-sm transition-all"></span>
              <a className="relative z-10 group-hover:text-white" href="#">{item}</a>
            </li>
          ))}

        </ul>
      </div>
    )
  }

  const Janr = () => {
    const genres = [
      "Jangari", "Drama", "Komediya", "Melodrama", "Sarguzasht", "Qo'rqinchli", "Tarixiy", "Klassik", "Fantaziya", "Hayotiy", "Triller", "Detektiv", "Hujjatli kino", "Anime", "Jinoyatchi", "Fantaziya", "Afsona", "Vester", "Musiqa"
    ]

    return (
      <div className="container-main relative sm:px-6 lg:px-8">
        <ul className='flex flex-col lg:flex-wrap lg:flex-row items-center w-full lg:w-[1170px] p-5 absolute top-5 left-0  btn-group-bg border border-color rounded-sm text-sm z-10'>

          {genres.map((genre, idx) => (
            <li key={idx} className="w-full lg:w-[215.68px] relative transition-all group py-2.5 m-1 link-bg rounded-sm text-center cursor-pointer">
              <span className="absolute inset-0 group-hover:bg-red-600 opacity-35 rounded-sm transition-all"></span>
              <a className="relative z-10 group-hover:text-white" href="#">{genre}</a>
            </li>
          ))}

        </ul>
      </div>
    )
  }

  const Yil = () => {
    const years = [
      "2025", "2024 yil", "2023 yil", "2022", "2021 yil", "2020", "2019", "2018", "2017 yil", "2016 yil",
      "2015 yil", "2014 yil", "2013 yil", "2012 yil", "2011 yil", "2010 yil"
    ];

    return (
      <div className="container-main relative sm:px-6 lg:px-8">
        <ul className='flex flex-col lg:flex-wrap lg:flex-row items-center w-full lg:w-[1170px] p-5 absolute top-5 left-0  btn-group-bg border border-color rounded-sm text-sm z-10'>
          {years.map((year, idx) => (
            <li key={idx} className="w-full lg:w-[215.68px] relative transition-all group py-2.5 m-1 link-bg rounded-sm text-center cursor-pointer">
              <span className="absolute inset-0 group-hover:bg-yellow-600 opacity-35 rounded-sm transition-all"></span>
              <a className="relative z-10 group-hover:text-white" href="#">{year}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const Mamlakat = () => {
    const countries = [
      "Rossiya", "AQSH", "Turkiya", "Xitoy", "Hindiston", "Avstraliya", "Buyuk Britaniya",
      "Janubiy Koreya", "Ukraina", "Qozog'iston", "Fransiya", "Eron", "Yaponiya"
    ];

    return (
      <div className="container-main relative sm:px-6 lg:px-8">
        <ul className='flex flex-col lg:flex-wrap lg:flex-row items-center w-full lg:w-[1170px] p-5 absolute top-5 left-0  btn-group-bg border border-color rounded-sm text-sm z-10'>
          {countries.map((country, idx) => (
            <li key={idx} className="w-full lg:w-[215.68px] relative transition-all group py-2.5 m-1 link-bg rounded-sm text-center cursor-pointer">
              <span className="absolute inset-0 group-hover:bg-purple-600 opacity-35 rounded-sm transition-all"></span>
              <a className="relative z-10 group-hover:text-white" href="#">{country}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }



  return (
    <header>
      <div className="header-bg border-y">
        <div className="container-main">
          <div className="flex items-center mr-auto md:flex-wrap md:justify-end">
            <a className="bg-[#fff0] mr-auto" href="/">
              <img
                className="w-[145px] h-auto md:w-[290px] md:h-[80px]"
                src="https://uzmovi.tv/images/logo.gif"
                alt="uzmovi logo"
                loading="lazy"
              />
            </a>
            <button
              className="md:hidden bg-[#3b2946] text-white uppercase text-[12px] font-normal p-4 my-1.5 rounded-sm border border-[#553f62]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              menyu
              <MenuOutlined className='ml-2' />
            </button>
            <nav>
              {/* Desktop uchun navbar */}
              <ul className="hidden md:flex uppercase">
                <nav>
                  <ul className="uppercase flex">

                    <li className='border-b border-amber-600 px-3 py-10 text-sm transition-all hover:hover:bg-[#ff690766] hover:text-white'>
                      <a href="#">
                        Bosh sahifa
                      </a>
                    </li>

                    <li onClick={() => toggleTab('movies')} className={`border-b border-green-600 relative px-3 py-10 text-sm transition-all hover:bg-[#2cc76e66] hover:text-white ${activeTab === 'movies' ? "bg-[#2cc76e66] text-white" : ''}`}>
                      <a href="#">Kinolar<CaretDownOutlined className='w-2.5 ml-0.5' /></a>
                    </li>

                    <li className='border-b border-blue-500 px-3 py-10 text-sm transition-all hover:hover:bg-[#02b0e466] hover:text-white'>
                      <a href="#">
                        Seriallar
                      </a>
                    </li>

                    <li onClick={() => toggleTab('genres')} className={`border-b border-red-600 relative px-3 py-10 text-sm transition-all hover:bg-[#fc1a3f66] hover:text-white ${activeTab === 'genres' ? "bg-[#fc1a3f66] text-white" : ''}`}>
                      <a href="#">janr<CaretDownOutlined className='w-2.5 ml-0.5' /></a>
                    </li>

                    <li onClick={() => toggleTab('year')} className={`border-b border-yellow-600 relative px-3 py-10 text-sm transition-all hover:bg-[#ffc14666] hover:text-white ${activeTab === 'year' ? "bg-[#ffc14666] text-white" : ''}`}>
                      <a href="#">yil<CaretDownOutlined className='w-2.5 ml-0.5' /></a>
                    </li>

                    <li onClick={() => toggleTab('countries')} className={`border-b border-purple-600 relative px-3 py-10 text-sm transition-all hover:bg-[#9b59b666] hover:text-white ${activeTab === 'countries' ? "bg-[#9b59b666] text-white" : ''}`}>
                      <a href="#">mamlakat<CaretDownOutlined className='w-2.5 ml-0.5' /></a>
                    </li>

                    <li className='border-b border-amber-600 px-3 py-10 text-sm transition-all hover:hover:bg-[#ff690766] hover:text-white'>
                      <a href="#">
                        Kino yangiliklari
                      </a>
                    </li>
                  </ul>
                </nav>
              </ul>
            </nav>
          </div>
        </div>
        {/* Mobil uchun menyu */}
        {mobileMenuOpen && (
          <ul className="uppercase flex flex-col sm:flex-row w-full sm:w-auto md:hidden">
            <li className='border-b border-amber-600 px-4 py-4 w-full text-sm transition-all hover:bg-[#ff690766] hover:text-white'>
              <a href="#">Bosh sahifa</a>
            </li>

            <li
              onClick={() => toggleTab('movies')}
              className={`border-b border-green-600 relative px-4 py-4 w-full text-sm transition-all hover:bg-[#2cc76e66] hover:text-white ${activeTab === 'movies' ? "bg-[#2cc76e66] text-white" : ''}`}
            >
              <a href="#">Kinolar <CaretDownOutlined className='w-2.5 ml-0.5' /></a>
              {activeTab === 'movies' && (
                <div className="flex flex-col bg-[#2cc76e66]">
                </div>
              )}
            </li>

            <li className='border-b border-blue-500 px-4 py-4 w-full text-sm transition-all hover:bg-[#02b0e466] hover:text-white'>
              <a href="#">Seriallar</a>
            </li>

            <li
              onClick={() => toggleTab('genres')}
              className={`border-b border-red-600 relative px-4 py-4 w-full text-sm transition-all hover:bg-[#fc1a3f66] hover:text-white ${activeTab === 'genres' ? "bg-[#fc1a3f66] text-white" : ''}`}
            >
              <a href="#">Janr <CaretDownOutlined className='w-2.5 ml-0.5' /></a>
              {activeTab === 'genres' && (
                <div className="flex flex-col bg-[#fc1a3f66] rounded">
                </div>
              )}
            </li>
          </ul>
        )}
      </div>
      {activeTab === 'movies' && (
        <>
          <Kino />
          <div onClick={() => setActiveTab(null)} className="fixed inset-0"></div>
        </>
      )}
      {activeTab === 'genres' && (
        <>
          <Janr />
          <div onClick={() => setActiveTab(null)} className="fixed inset-0"></div>
        </>
      )}
      {activeTab === 'year' && (
        <>
          <Yil />
          <div onClick={() => setActiveTab(null)} className="fixed inset-0"></div>
        </>
      )}
      {activeTab === 'countries' && (
        <>
          <Mamlakat />
          <div onClick={() => setActiveTab(null)} className="fixed inset-0"></div>
        </>
      )}
      <Avatars />

      <div className='bg-[#131a20]'>
        <div className="container-main">

          <div className="flex flex-col md:flex-row items-center gap-4 pt-8">

            <ul className='flex items-center md:mr-auto gap-2'>
              <li>
                <a className='bg-[#222933] py-2 px-3 border border-[#313842] rounded-sm text-xs flex items-center' href="#">
                  <UserOutlined className='mr-1' /> Kirish
                </a>
              </li>
              <li>
                <a className='bg-[#222933] py-2 px-3 border border-[#313842] rounded-sm text-xs' href="#">
                  Ro'yxatdan o'tish
                </a>
              </li>
            </ul>

            <ul className='flex items-center gap-2'>
              <li>
                <a className='bg-[#222933] py-2 px-3 border border-[#313842] rounded-sm' href="#">
                  <PlayCircleOutlined />
                </a>
              </li>
              <li>
                <a className='bg-[#222933] py-2 px-3 border border-[#313842] rounded-sm' href="#">
                  <MailOutlined />
                </a>
              </li>
              <li>
                <a className='bg-[#222933] py-2 px-3 border border-[#313842] rounded-sm' href="#">
                  <ExclamationCircleOutlined />
                </a>
              </li>
            </ul>
          </div>

          <form className='mt-6 relative pb-4'>
            <input
              className='bg-[#222933] pl-5 pr-10 py-2 rounded-sm w-full border border-[#313842]'
              type="search"
              placeholder='Qidirish...'
            />
            <span className='absolute right-3 top-2.5 text-gray-400'>
              <SearchOutlined />
            </span>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
