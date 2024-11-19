import { useEffect, useState } from 'react';
import './App.css';
// import TestCard from './components/TestCard';
import supabase from './config/supabaseClient';
import TestCard from './components/TestCard';


function App() {

  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)



  useEffect(() => {
    const fetchSmoothies = async () => {
      console.log('Fetching posts...');

      const { data, error } = await supabase.from('smoothies').select()
        
      if (error) {
        setFetchError(`Error fetching data: ${error.message}`);
        console.log('Error details:', error);
      }
      
      
      if (data) {
        setSmoothies(data)
        console.log('Data fetched:', data);
        setFetchError(null)
      }



    }

    fetchSmoothies();
  }, [])


  return (
    <div className="App">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className='smoothies'>
        <div className="grid">
        {smoothies.map(item => (
          <TestCard key={item.id} smoothie={item} />
        ))}
        </div>
        </div>
      )}

    </div>
  );
}

export default App;


// #3 fetching data