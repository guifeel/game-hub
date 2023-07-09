import { Box, Grid, Show, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from '../Components/GameGrid';
import GameHeading from '../Components/GameHeading';
import GenreList from '../Components/GenreList';
import PlatformSelector from '../Components/PlatformSelector';
import SortSelector from '../Components/SortSelector';

const HomePage = () => {
  return (
    <>
      <Grid
        as='section'
        templateAreas={{
          base: `"main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5} as='aside'>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={'main'} as='section'>
          <Box pl={2}>
            <GameHeading />
            <HStack spacing={5} mb={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
