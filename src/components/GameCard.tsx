import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"

interface GameProps{
    game: Game
    
}

const GameCard = ({game}: GameProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={2}>
        <PlatformIconsList platform={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack> 
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard;
