import Footer from "./components/Footer";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import data from "./data"

function App() {
  //console.log(data);
  const travelLocations = data.map((list) => {
    return <Location 
              key={list.id}
              {...list}
            />

  })
  return (
    <div className="travel-journal">
      <Navbar />
      {travelLocations}
      <Footer />
      
      
    </div>
  );
}

export default App;
