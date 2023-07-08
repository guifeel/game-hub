import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../Components/ExpandableText';
import GameAttibutes from '../Components/GameAttibutes';
import useGame from '../hooks/useGame';
import GameTrailer from '../Components/GameTrailer';
import GameScreenShorts from '../Components/GameScreenShorts';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttibutes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShorts gameId={game.id} />
    </Box>
  );
};

export default GameDetail;
