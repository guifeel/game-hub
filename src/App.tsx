import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import GameGrid from './Components/GameGrid';
import GameHeading from './Components/GameHeading';
import GenreList from './Components/GenreList';
import NavBar from './Components/NavBar';
import PlatformSelector from './Components/PlatformSelector';
import SortSelector from './Components/SortSelector';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "  main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
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
}

export default App;
