import getAdvice from './helpers/getAdvice';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [advice, setAdvice] = useState<string>('Loading quote...');

  useEffect(() => {
    giveAdvice();
  }, []);

  const giveAdvice = async () => {
    const { slip: { advice } } = await getAdvice();
    setAdvice(advice);
  };

  return (
    <div className='app'>
      <div className='card'>
        <blockquote className='quote' dangerouslySetInnerHTML={{ __html: advice }}></blockquote>
      </div>
      <div className='button-container'>
        <button className='button'>
          <svg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'><g fill='none' fillRule='evenodd' stroke='currentColor' strokeLinejoin='round' transform='translate(3 3)'><path d='m11.5 4.5-3.978-4-4.022 4'/><path d='m7.522.521v11.979'/><path d='m4.5 7.5h-2c-1.1045695 0-2 .8954305-2 2v4c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4c0-1.1045695-.8954305-2-2-2h-2'/></g></svg>
        </button>
      </div>
    </div>
  );
}

export default App;