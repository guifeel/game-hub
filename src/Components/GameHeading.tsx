import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} 游戏`;
  return (
    <Heading as='h1' mb={5} fontSize='5xl' my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
