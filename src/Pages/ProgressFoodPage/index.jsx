import React from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import ProgressScreen from '../../Components/ProgressScreen';

const ProgressFood = () => {
  const { id } = useParams();
  return (
    <div className="container-over">
      <div className="container-int">
        {/* <Header title="Progresso da comida" /> */}
        <ProgressScreen idReceita={ id } />
      </div>
    </div>
  );
};

export default ProgressFood;
