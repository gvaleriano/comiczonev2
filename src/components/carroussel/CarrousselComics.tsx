import Ticker from "framer-motion-ticker"
import alienImg from '../../assets/logos/alien_press.svg'
import horseImg from '../../assets/logos/dark_horse.svg'
import dcImg from '../../assets/logos/dc.svg'
import imageComicsImg from '../../assets/logos/image_comics.svg'
import marvelImg from '../../assets/logos/marvel.svg'

export function CarrousselComics(){

  const imageLogos = [
    alienImg,
    horseImg,
    dcImg,
    imageComicsImg,
    marvelImg
  ]

  return(
    <div className="w-full flex items-center justify-center">
    <Ticker duration={20}>
      {imageLogos.map((item, index) => (
        <div key={index} className="opacity-30">
          <div className="flex h-24">
            <div className="w-32 p-4">
              <img className="w-full h-full border-2 border-solid pointer-events-none rounded-lg" src={`${item}`} />
            </div>
          </div>
        </div>
      ))}
    </Ticker>
  </div>
  )
}