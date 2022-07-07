import { Button, Grid } from '@chakra-ui/react';
import { store, Todo } from '../store';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const TopBar = () => (
  <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
    <ColorModeSwitcher />
    <Button onClick={() => store.load()}>Load</Button>
  </Grid>
);

export { TopBar };
