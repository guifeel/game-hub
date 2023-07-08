import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../Components/ExpandableText';
import DefinitionItem from '../Components/DefinitionItem';
import CriticScore from '../Components/CriticScore';
import GameAttibutes from '../Components/GameAttibutes';

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
    </Box>
  );
};

export default GameDetail;
