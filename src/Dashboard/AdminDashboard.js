import React from 'react'
import firebase from '../Authentication/Firebase'
export const database = firebase.database();

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lunch: [], dinner: [] }
  }
  UNSAFE_componentWillMount() {
    let date = new Date().getDay();
     database.ref('/chef/' + 3).on("value", function(dataSnapshot) {
        if (dataSnapshot.val()){
          let lunch = dataSnapshot.val().dej, dinner = dataSnapshot.val().din;
          this.setState({ lunch, dinner });
        }
        else{
          console.log("No Data Found!!!");
          this.setState({ lunch: 1, dinner: 1 })
        }
      }.bind(this));
    }


  render(){
    return(
      <div>
        {/* Admin Dashboard Here  */}
        <div className="dashboard">
          <div>
          <div className="fixed w-full h-full top-0 left-0 flex items-start justify-center z-20 opacity-0 pointer-events-none">
            <div className="absolute w-full h-full bg-gray-900 opacity-75"> </div>
            <div className="bg-white w-11/12 md:w-1/2 mx-auto rounded shadow-lg mt-6 z-50 overflow-y-auto">
              <div className="modal-content text-left">
                
                <div className="flex justify-between items-center p-4 border-b">
                  <p className="text-2xl font-bold">Changer votre Mot de passe</p>
                  <div className="cursor-pointer z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="fill-current text-black">
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </div>
                </div>

                <form className="w-full lg:w-2/3 mx-auto py-8">
                  <div className="mb-8 relative">
                    <input placeholder="Nouveau mot de passe" type="password" className="focus:outline-none py-1 border-b border-gray-400 placeholder-gray-500 focus:placeholder-mainBlue w-full" />
                    <span className="input-border absolute left-0 block bg-mainBlue w-0 h-px hover:w-full transition"></span>
                    <span className="absolute br-0 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"> </path>
                        <circle cx="12" cy="12" r="3"> </circle> 
                      </svg>
                    </span>
                  </div>
                  <div className="mb-8 relative">
                    <input placeholder="Confirmer le nouveau mot de passe" type="password" className="focus:outline-none py-1 border-b border-gray-400 placeholder-gray-500 focus:placeholder-mainBlue w-full" />
                    <span className="input-border absolute left-0 block bg-mainBlue w-0 h-px hover:w-full transition"></span>
                  </div>

                  <div className="relative">
                  <button type="submit" value="submit" className="btn-submit bg-mainBlue text-white py-2 px-12 rounded focus:outline-none transition">Sauvgarder</button>
                  </div>
                </form>
              </div>
            </div>  
          </div>
          <nav className="bg-lightWhite py-4 mb-12">
            <div className="mx-32">
              <div className="flex flex-row justify-between">
                <img alt="Logo" src="./img/logo.png" className="h-12" />
                <div className="relative group mw-64">
                  <div className="flex items-center cursor-pointer text-sm text-blue border border-white border-b-0 hover:border-grey-light rounded-t-lg py-3 px-2">
                     admin@um6p.ma 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current h-4 w-4">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"> </path>
                    </svg>
                  </div>
                  <div className="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 w-full invisible">
                    <button className="w-full text-left px-4 py-2 block text-black hover:bg-grey-lighter focus:outline-none">Nouveau Utilisateur</button>
                    <button className="w-full text-left px-4 py-2 block text-black hover:bg-grey-lighter focus:outline-none">Changer le MDP</button>
                    <button className="w-full text-left px-4 py-2 block text-black hover:bg-grey-lighter focus:outline-none">Se déconnecter</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
 <div className="mx-32">

<div className="flex flex-row justify-between">
<div className="w-1/4">
<span className="mr-4">Jour :</span>
<div dir="auto" className="v-select inline-block bg-lightWhite w-64 vs--single vs--searchable">
<div className="vs__dropdown-toggle">
<div className="vs__selected-options">
<span className="vs__selected">
            Mercredi
          </span> 
          <input aria-label="Search for option" role="combobox" type="search" autoComplete="off" className="vs__search" />
          </div> 
          <div className="vs__actions">
            <button type="button" title="Clear selection" className="vs__clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
            <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z">
</path>
</svg>
</button> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" className="vs__open-indicator">
<path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
</path>
</svg> <div className="vs__spinner" style={{display: "none"}}>Loading...</div>
</div>
</div> 
</div>
</div>
<div className="w-auto">
<button className="bg-mainBlue py-2 px-8 text-white rounded focus:outline-none hover:bg-lightWhite hover:text-mainBlue border border-mainBlue transition">Sauvegarder</button>


<button className="bg-mainBlue py-2 px-8 text-white rounded focus:outline-none hover:bg-lightWhite hover:text-mainBlue border border-mainBlue transition ml-2">Ajouter une station</button>


</div>
</div>
  {/* *************************** STATIONS HEADER ***************************** */}

    <div className="flex flex-row justify-between mt-16">
      <div className="w-2/12"></div>
      <div className="relative flex-auto mx-2">
        <h2 className="bg-mainBlue text-center text-white py-2 text-2xl rounded font-bold">Station 1</h2>
      </div>
      <div className="relative flex-auto mx-2">
        <h2 className="bg-mainBlue text-center text-white py-2 text-2xl rounded font-bold">Station 2</h2>
      </div>
      <div className="relative flex-auto mx-2">
      <h2 className="bg-mainBlue text-center text-white py-2 text-2xl rounded font-bold">Station 3</h2>
        <button className="absolute top-0 right-0 h-full focus:outline-none bg-red-500 text-white px-4 text-2xl rounded-r">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <line x1="18" y1="6" x2="6" y2="18"> </line>
            <line x1="6" y1="6" x2="18" y2="18"> </line>
          </svg>
        </button>
      </div>
    </div>

  {/* *************************** STATIONS ***************************** */}
  {this.state.lunch === 0 ? 
      <div>
      </div>:
      <div>
        <Meal heading="Déjeuner" stations={this.state.lunch}  />
        <Meal heading="Le dîner" stations={this.state.dinner} />
        </div>
  }
        </div>
      </div>
    </div>
  </div>
    )
  }
}

const Plate = (props) => {
  let key = props.key;
  console.log(props)

  // console.log(props);
  return (
    <div className="flex-auto mx-2 bg-CleanGray p-4 rounded">
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <h2 className="flex justify-center bg-mainBlue text-center text-white px-2 text-2xl font-bold rounded mb-4 capitalize">Plate {key}</h2>
        <div className="flex-auto">
          <div className="h-12 mb-2">
            <input id="s2din0" type="file" accept="image/*" />
          </div>
          <div className="h-12 relative">
            <input type="text" placeholder="Nom du plate" className="w-full h-full px-2 border focus:outline-none focus:border-mainBlue focus:placeholder-mainBlue transition" />
          <button className="absolute top-0 right-0 h-full bg-mainBlue text-white px-4 text-2xl focus:outline-none">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
const Dish = (props) => {
  let key = props.key;
  console.log(props)

  // console.log(props);
  return (
    <div className="flex-auto mx-2 bg-CleanGray p-4 rounded">
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <h2 className="flex justify-center bg-mainBlue text-center text-white px-2 text-2xl font-bold rounded mb-4 capitalize">Plate {key}</h2>
        <div className="flex-auto">
          <div className="h-12 mb-2">
            <input id="s2din0" type="file" accept="image/*" />
          </div>
          <div className="h-12 relative">
            <input type="text" placeholder="Nom du plate" className="w-full h-full px-2 border focus:outline-none focus:border-mainBlue focus:placeholder-mainBlue transition" />
          <button className="absolute top-0 right-0 h-full bg-mainBlue text-white px-4 text-2xl focus:outline-none">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

const Station = (props) => {
  return(
    <div>
      {props.plates.map((plate, key) => <Plate name={plate.name} key={key} /> )}
    </div>
  )
}
const Meal = (props) => {

  return (
    <div className="flex flex-row justify-between mt-6 items-stretch">
    <div className="w-2/12">
      <h2 className="flex items-center justify-center bg-mainBlue text-white text-2xl rounded font-bold h-full">{props.heading}</h2>
    </div>
    {
      Object.keys(props.stations).map(station => <Station plates={props.stations[station].plates} /> )
    }

  </div>
  )
}

export default AdminDashboard


//        **********************    dinner
{/* <div className="flex flex-row justify-between mt-6 items-stretch">
  <div className="w-2/12">
    <h2 className="flex items-center justify-center bg-mainBlue text-white text-2xl rounded font-bold h-full">Déjeuner</h2>
  </div>
  <div className="flex-auto mx-2 bg-CleanGray p-4 rounded">
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <h2 className="flex justify-center bg-mainBlue text-center text-white px-2 text-2xl font-bold rounded mb-4 capitalize">Plate 1</h2>
        <div className="flex-auto">
          <div className="h-12 mb-2">
            <input id="s1dej0" type="file" accept="image/*" />
          </div>
          <div className="relative h-12">
            <input type="text" placeholder="Nom du plate" className="w-full h-full px-2 border focus:outline-none focus:border-mainBlue focus:placeholder-mainBlue transition" />
            <button className="absolute top-0 right-0 h-full bg-mainBlue text-white px-4 text-2xl focus:outline-none">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-auto mx-2 bg-CleanGray p-4 rounded">
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <h2 className="flex justify-center bg-mainBlue text-center text-white px-2 text-2xl font-bold rounded mb-4 capitalize">Plate 1</h2>
        <div className="flex-auto">
          <div className="h-12 mb-2">
            <input id="s2dej0" type="file" accept="image/*" />
          </div>
          <div className="relative h-12">
            <input type="text" placeholder="Nom du plate" className="w-full h-full px-2 border focus:outline-none focus:border-mainBlue focus:placeholder-mainBlue transition" />
            <button className="absolute top-0 right-0 h-full bg-mainBlue text-white px-4 text-2xl focus:outline-none">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-auto mx-2 bg-CleanGray p-4 rounded">
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <h2 className="flex justify-center bg-mainBlue text-center text-white px-2 text-2xl font-bold rounded mb-4 capitalize">Plate 1</h2>
        <div className="flex-auto">
          <div className="h-12 mb-2">
            <input id="s3dej0" type="file" accept="image/*" />
          </div>
          <div className="relative h-12">
            <input type="text" placeholder="Nom du plate" className="w-full h-full px-2 border focus:outline-none focus:border-mainBlue focus:placeholder-mainBlue transition" />
            <button className="absolute top-0 right-0 h-full bg-mainBlue text-white px-4 text-2xl focus:outline-none">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
