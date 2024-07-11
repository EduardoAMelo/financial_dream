import React from 'react';
import { Container, Paper, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Chart, registerables } from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

const theme = createTheme();

interface ChartCardProps {
  chartType: 'line' | 'bar' | 'pie' | 'doughnut';
  title: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ chartType, title }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={data} />;
      case 'bar':
        return <Bar data={data} />;
      case 'pie':
        return <Pie data={data} />;
      case 'doughnut':
        return <Doughnut data={data} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Paper style={{ padding: '1rem' }}>
          <Typography variant="h5">{title}</Typography>
          {renderChart()}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ChartCard;
