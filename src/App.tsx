import { Typography } from 'antd';
import './App.css';
import ApplyForm from './componments/ApplyForm';

function App() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Typography className='py-2 font-bold text-lg'>Timothy Lam</Typography>
      <ApplyForm />
    </div>
  );
}

export default App;
