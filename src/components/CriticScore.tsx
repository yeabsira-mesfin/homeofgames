import { Badge } from "@chakra-ui/react"

interface Props{
    score:number
}

const CriticScore = ({score}:Props) => {
  let color = score > 85 ? 'green': score>60?'yellow':'';
  return (
    <Badge colorScheme={color} fontSize='11px' paddingX={3} borderRadius='5px'>
      {score}
    </Badge>
   )
}

export default CriticScore