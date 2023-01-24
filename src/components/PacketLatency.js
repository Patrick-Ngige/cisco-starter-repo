import  Component  from "react";
import axios from "axios";
// import useWebSocket from 'react-use-websocket';


var axiosTiming = (" ");

class PacketLatency extends Component {
  componentWillMount() {
    axios.get("wss://echo.websocket.org")
      .then(function (response) {
        console.log(response.latency);  
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
   
       axiosTiming = (instance) => {
        instance.interceptors.request.use((request) => {
          request.ts = Date.now();
          return request;
        });
      
        instance.interceptors.response.use((response) => {
          const timeInMs = `${Number(Date.now() - response.config.ts).toFixed()}ms`;
          response.latency = timeInMs;
          return response;
        });
        axiosTiming(axios);
      }
     
    )
  }
}

// export default PacketLatency;