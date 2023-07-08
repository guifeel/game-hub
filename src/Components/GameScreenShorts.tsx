import { SimpleGrid, Image } from '@chakra-ui/react';
import useGameScreenShots from '../hooks/useGameScreenShots';

interface Props {
  gameId: number;
}

const GameScreenShorts = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenShots(gameId);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} borderRadius={2} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShorts;
