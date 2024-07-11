import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/react';
import { Container, Paper, Typography, CssBaseline } from '@mui/material';
import ExploreContainer from '../components/ExploreContainer';
import ChartCard from '../components/ChartCard';
import DateSelectCard from '../components/DateSelectCard';
import TextCard from '../components/TextCard';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [chartType, setChartType] = useState<'line' | 'bar' | 'pie' | 'doughnut'>('line');

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TextCard title="Poupado">
          <Typography align='center'  variant="h4">R$ 1890,00</Typography>
        </TextCard>
        <DateSelectCard />
        {/* <ChartCard chartType={'pie'} title="My Chart" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
