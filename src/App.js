// App is our major component. Other component will get connected to  it
import React from 'react'; // React object from react class which is present in package.json
// package.json-All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "27d8a8478131471cf5954ffd64f496aa";
class App extends React.Component // way to initialize componenet 'App'. React.Component is in node_modules
{
  state = { // state is an object that lives within a component and is responsible for keeping track of changing of data within a component
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    descripton: undefined,
    error: undefined

  }
  getWeather = async (e) => {
    e.preventDefault(); // without this, the page will go full reload, data will appear only for a second and we won't be able to see that 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=27d8a8478131471cf5954ffd64f496aa&units=metric`);
    const data = await api_call.json(); // async and await will make sure that execution stalls till the data from the api gets loaded. 
    if (city && country) { // If this is not done then if city or country or both if not entered, then it will break the application
      console.log(data);
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      }); // Always use this function to manipulate state, never change values without using this function, its a good practise 

    }
    else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      })
    }
  }
  render() { // Render can return only one element
    return (<div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temprature={this.state.temprature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}



export default App; // It tells that file has to be made available to other files
