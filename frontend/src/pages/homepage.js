// BasicGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Result from './components/Result';
import Checker from "./components/Checker";
import Card from "./components/CustomCard";
import DefaultCard01 from './components/CustomCard01';
import DefaultCard02 from './components/CustomCard02';
import DefaultCard03 from './components/CustomCard03';
import Footer from './components/Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6}>
          <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Checker />
          </Item>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Result />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3} md={3}>
          <Item component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3} md={3}>
          <Item component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <DefaultCard01 />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3} md={3}>
          <Item component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <DefaultCard02 />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3} md={3}>
          <Item component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <DefaultCard03 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
