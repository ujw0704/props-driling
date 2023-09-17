
import './App.css';
// import Card from './Components/Card';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import { apiUrl,filterData } from './Components/Data';
import { useEffect ,useState} from 'react';
import Spinner from './Components/Spinner';
function App() {

  const [courses , setCourses] = useState([]);
 const [loading,setloading]=useState(true);

  useEffect(() => {
    setloading(true)
    fetch(apiUrl)
      .then(response => response.json()) 
      .then(output => setCourses(output.data))

      
      
   
      .catch(error => console.error("Error fetching data:", error))

      
    setloading(false)

   
  }, []);
  



  return (
    <div className="App">
      <div>

  <Navbar />
      </div>


<div>
  {
loading ? (<Spinner/>):(<Cards courses ={courses}/>)
  }
</div>
<div>

  <Filter 
  filterData ={filterData}
  />
</div>

    </div>
  );
}

export default App;
