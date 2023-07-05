import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import GameGrid from './Components/GameGrid';
import GameHeading from './Components/GameHeading';
import GenreList from './Components/GenreList';
import NavBar from './Components/NavBar';
import PlatformSelector from './Components/PlatformSelector';
import SortSelector from './Components/SortSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box pl={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} mb={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
