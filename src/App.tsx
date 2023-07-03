import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "  main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={'nav'} bg={'orange.300'}>
          nav
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} bg={'pink.300'}>
            aside
          </GridItem>
        </Show>
        <GridItem area={'main'} bg={'green.300'}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
