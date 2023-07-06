import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: plaforms } = usePlatforms();
  const platform = plaforms?.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} 游戏`;
  return (
    <Heading as='h1' mb={5} fontSize='5xl' my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
