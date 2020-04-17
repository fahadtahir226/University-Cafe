import React from 'react'

class UserDashboard extends React.Component {
  render(){
    return(
    <div className="flex flex-col lg:flex-row items-stretch min-h-screen text-center">
      <Station station_Num={1} costomers={3} />
      <Station station_Num={2} costomers={1} />
      <Station station_Num={3} costomers={2}/>
    </div>  
    )
  }
}

const Station = props => {
  var color = findColor(props.costomers);
    return (
        <div className={"w-full lg:w-1/3 text-white transition border-l border-white " + color}>
          <div className="h-full p-6">
            <h1 className="font-bold text-5xl bg-white text-mainBlue capitalize rounded-lg mb-4">Station {props.station_Num}</h1>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg p-2">
              <div className={"flex flex-row m-2 rounded-lg w-full items-stretch " + color}>
                <div className="w-1/3 border-r border-white flex items-center justify-center">
                  <svg width="70" height="110" viewBox="0 0 70 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="27.8427" cy="10.5068" rx="9.98142" ry="10.5068" fill="white"></ellipse>
                  <path d="M25.1002 66.4287H31.1647V105.564L31.5016 106.239C32.8493 108.432 34.1969 109.444 37.3976 109.106C39.9582 108.836 40.9353 107.082 41.1037 106.239V101.619V78.6477V36.9086L46.8313 47.5358C48.4485 50.6397 51.2112 51.3032 52.3904 51.2469L65.1932 50.4035C66.8104 50.1336 67.8885 49.2789 68.2254 48.8853C69.7079 47.4009 69.4046 45.118 69.0677 44.1621C68.3939 41.5981 64.9686 41.2944 63.3401 41.4631L54.2434 42.1379L48.0105 30.3298C47.3367 29.149 45.7868 26.3488 44.9782 24.5945C44.1696 22.8401 41.2836 22.1766 39.9417 22.0642H22.068H16.172C13.6114 22.0642 12.2974 23.4137 11.9605 24.0884L8.08598 31.0046L3.36916 39.9449L1.85304 42.8126C1.04444 43.8922 0.505373 45.5116 0.336916 46.1863L0 56.4762V59.6812C0 60.6259 0.22461 61.4243 0.336916 61.7055C0.875981 63.055 2.2461 63.8422 2.86378 64.0671C3.64992 64.4045 5.5928 64.7756 7.07523 63.561C8.55766 62.3465 9.04057 60.4684 9.09672 59.6812L9.43364 48.0419L15.1612 37.4146V61.5368V74.0196V100.503L15.3297 104.214C15.3297 106.778 17.0142 108.319 17.8565 108.769C18.3619 109.106 19.9117 109.612 22.068 108.938C24.2242 108.263 24.9879 105.508 25.1002 104.214V88.1384V66.4287Z" fill="white"></path>
                  </svg>
                </div>
                <div className="w-2/3 border-l border-white text-center">
                  <h2 className="text-9xl font-bold text-white rounded-full">{props.costomers}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

const findColor = costumers => {
  switch (costumers) {
    case 0:
      return "bg-green-600"
    case 1:
      return "bg-green-500"
    case 2:
      return "bg-orange-400"
    case 3:
      return "bg-orange-600"
    case 4:
      return "bg-red-400"
  }
} 


export default UserDashboard;