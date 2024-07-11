import React, { useState } from 'react';
import { Container, Paper, Typography, CssBaseline, TextField, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Modal, Box, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import dayjs, { Dayjs } from 'dayjs';
import './DateSelectCard.css';

const theme = createTheme();

const data = {
  divida: ['Nome1MuitoGrande', 'Nome2', 'Nome3', 'Nome4', 'Nome5', 'Nome6'],
  valores: [100, 200, 300, 400, 500, 600]
};

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const DateSelectCard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<Dayjs>(dayjs());
  const [selectedYear, setSelectedYear] = useState<Dayjs>(dayjs());
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(data.divida.length).fill(false));
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{ nome: string; valor: number } | null>(null);

  const handleMonthChange = (month: Dayjs | null) => {
    if (month) {
      setSelectedMonth(month);
    }
  };

  const handleYearChange = (year: Dayjs | null) => {
    if (year) {
      setSelectedYear(year);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedItems(prevState => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  const handleOpenModal = (index: number) => {
    setModalContent({ nome: data.divida[index], valor: data.valores[index] });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
          <Paper sx={{ padding: '1rem' }}>
            <Typography sx={{ marginBottom: '1rem' }} variant="h5">Select Month and Year</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DatePicker
                  views={['month']}
                  label="Month"
                  minDate={dayjs('0001-01-01')}
                  maxDate={dayjs('9999-12-31')}
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  slots={{ textField: TextField }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  views={['year']}
                  label="Year"
                  minDate={dayjs('2000-01-01')}
                  maxDate={dayjs('2100-12-31')}
                  value={selectedYear}
                  onChange={handleYearChange}
                  slots={{ textField: TextField }}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
            <TableContainer component={Paper} sx={{ marginTop: '1rem', maxHeight: '240px', overflow: 'auto' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>Selecionar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.divida.map((nome, index) => (
                    <TableRow key={index}>
                      <TableCell className="truncate" onClick={() => handleOpenModal(index)} style={{ cursor: 'pointer' }}>{nome}</TableCell>
                      <TableCell>{formatCurrency(data.valores[index])}</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>
                        <Checkbox
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid #ddd', pb: 1, mb: 2 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Detalhes da Dívida
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleCloseModal}
                sx={{ p: 0 }}
              >
                <IonIcon icon={closeOutline} />
              </IconButton>
            </Box>
            {modalContent && (
              <>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Nome: {modalContent.nome}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Valor: {formatCurrency(modalContent.valor)}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DateSelectCard;
