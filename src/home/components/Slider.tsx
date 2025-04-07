import { Carousel } from 'antd';

const Slider = () => {

  const sliderImg = [
    {
      "id": 1,
      "url": "https://images.uzmovi.tv/2025-04-06/4b26c537390d98fd75d098e11d7a5d06.jpg",
      "title": "kiberhujum (premer)"
    },
    {
      "id": 2,
      "url": "https://images.uzmovi.tv/2025-04-06/b2c4b80ed03ef95b48949bf1fea039e6.jpg",
      "title": "Vavilon: Uyga yo'l / Bobil 5 (multfilm, premyera)"
    },
    {
      "id": 3,
      "url": "https://images.uzmovi.tv/2025-04-05/301500b6436fee473fb87646ddc8deca.jpg",
      "title": "Minecraft Maynkraft Minekraft uzbek o'zbek tilida kino film premyera"
    },
    {
      "id": 4,
      "url": "https://images.uzmovi.tv/2025-04-05/0e52faad710e7f1dc5b44058a2bce53f.jpg",
      "title": "Usta ishchi master premyera uzbek o'zbek tilida"
    },
    {
      "id": 5,
      "url": "https://images.uzmovi.tv/2025-04-05/25f89381208e4a8b634af648a34eb453.jpg",
      "title": "Amerikalik qaroqchilar / So'nggi talonchilik (premyera)"
    },
  ]

  return (
    <main className="py-10 bg-[#523b670d]">
      <div>
        <div className="container-main">
          <h2 className="pt-[5px] pb-[5px] pl-[12px] mt-[13px] mb-[20px] border-l-2 border-[#9b59b6]">
            <a className="uppercase px-2.5 py-3] color-[length:200%_100%] animate-[shine_3s_linear_infinite]"
              style={{
                fontWeight: 'bold',
                fontSize: '18px',
                background: 'linear-gradient(to left, #a5bbdc 0%, #fff 20%, #a5bbdc 40%)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                animation: 'shine 3s linear infinite',
              }}
              href="#">premer</a>
          </h2>
          <Carousel autoplay autoplaySpeed={5000} className="relative">
            {sliderImg.map(slide => (
              <div key={slide.id} className="relative">
                <img
                  src={slide.url}
                  alt={slide.title || 'Slide image'}
                  className='w-full h-[300px] sm:h-[400px] md-[500px] lg:h-[600px] object-cover'
                />
                {slide.title && (
                  <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[rgba(48,65,86,0.28)] text-white w-full px-2py-3 sm:py-4 md:py-5 lg:py-6 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    {slide.title}
                  </h3>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  )
}

export default Slider
