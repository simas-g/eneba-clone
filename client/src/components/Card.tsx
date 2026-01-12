import type { Game } from "../types/game"
import { CONSOLES } from "../constants/consoles"

const Card = ({game}: {game: Game}) => {
  console.log(game.console)
  return (
    <div key={game.id} className='max-w-md border flex flex-col h-full border-[#4DD7FE] relative'>
      <div className='relative'>
        <img src={game.image_url} alt={game.title} className='w-full h-80 object-cover' />
        <div className='p-2 bg-black/50 backdrop-blur-sm absolute bottom-0 w-full flex justify-center gap-2'>
          <img src={CONSOLES[game.console]?.icon} alt={CONSOLES[game.console]?.name} className='w-4 h-4' />
          <p className='text-sm font-bold text-white'>{CONSOLES[game.console]?.name}</p>
        </div>
      </div>

      <div className='p-4 h-full bg-[#1F0A4C] text-left flex flex-col gap-4 justify-between'> 
        <div>
          <h3 className='text-lg font-bold text-white'>{game.title}</h3>
          <p className='text-sm text-gray-400'>{game.description}</p>
          <p className='text-sm text-[#4DD7FE] font-bold mt-1'>{game.region}</p>
        </div>

        <div className="font-bold flex flex-col">
          <p className='text-sm text-gray-400 flex gap-1'>From 
            <span className='line-through'>€{game.price}</span>
            <span className='text-lime-400'>-{((game.price - game.discount_price) / game.price * 100).toFixed(0)}%</span>
          </p>
          <p className='text-white text-2xl'>€{game.discount_price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
