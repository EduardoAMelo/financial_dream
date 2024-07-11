import React from 'react';
import { Container, Paper, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './ExploreContainer.css';

const theme = createTheme();

interface TextCardProps {
  title: string;
  children?: React.ReactNode;
}

const TextCard: React.FC<TextCardProps> = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Paper style={{ padding: '1rem' }}>
          <Typography style={{ marginBottom: '1rem' }} variant="h6">{title}</Typography>
          {children}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default TextCard;
