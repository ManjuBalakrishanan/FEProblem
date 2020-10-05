import React, { Component } from 'react'  
import './App.css'  
import Button from '@material-ui/core/Button';
import Footer from './footer';

export class Falicino extends Component {  
        constructor(props) {  
                super(props)  
              var max_distance=100;
              var  speed=2;
              var timeTaken =max_distance/speed;
                this.state = {  
                        
                        selectedPlanet:'',
                        selectedVehicle:'',
                        Planets: [{"name":"Donlon","distance":100},{"name":"Enchai","distance":200},{"name":"Jebing","distance":300},{"name":"Sapir","distance":400},{"name":"Lerbin","distance":500},{"name":"Pingasor","distance":600}],  
                        Vehicle: [{"name":"Space pod","total_no":2,"max_distance":200,"speed":2},{"name":"Space rocket","total_no":1,"max_distance":300,"speed":4},{"name":"Space shuttle","total_no":1,"max_distance":400,"speed":5},{"name":"Space ship","total_no":2,"max_distance":600,"speed":10}] 
  
                }  
        }  
        Changeplanet = (e) => {  
                this.setState({  
                        Planets: e.target.value  
                })  
        }  
        Changevehicle = (e) => {  
                this.setState({  
                        selectedVehicle: e.target.value  
                })  
        }  
        
        
        onsubmit = (e) => {  
                e.preventDefault();
                this.setState(({ Vehicle }) => {
                  const mQuestions = Vehicle.filter(item=>item.name==this.state.selectedVehicle)
                  mQuestions[0].total_no= mQuestions[0].total_no-1
                 // mQuestions.splice(1, 1)
                  return { Vehicle }
                })

                //e.preventDefault();  
                alert(` PLANET:${this.state.Planets}, VEHICLE:${this.state.selectedVehicle}, TIMETAKEN:${this.state.timeTaken}`)  
        }  
  
        render() {  
                return (  
                          <div>  
                            <div className="row" >  
                               <div className="col-lg-8 col-sm-4 btn btn-primary">  
                               </div>  
                            </div>
                                <form autoComplete="on" className="form-style" onSubmit={this.onsubmit}>  
                                 <div className="form-group dropdn"> 
                                   <label >Select the planet : <br></br></label> 
                                   
                                   <select className="form-control" value={this.state.Planets} onChange={this.Changeplanet} > 
                                   <option></option>   
                                   <option>Donlon</option>  
                                   <option>Enchai</option>  
                                   <option>Jebing</option>  
                                   <option>Saphin</option>  
                                   <option>Lerbin</option> 
                                   <option>Pingaser</option> 
                                   </select>
                                  </div>
                                    <br></br>
                                    
                                <div>  

                {this.state.Vehicle.map(veh=>(<div><li>{veh.name} count {veh.total_no}</li>
                                    <input type="radio"  value={veh.name} checked={this.state.selectedVehicle == veh.name } onClick={this.Changevehicle} />  
                                    </div>
                                    ))

                                  }
                             

                                
                                </div><br></br>  
                                <Button type="submit"className="btn-primary"variant="contained" color="primary">
                             FindFaciloni
</Button>
                                </form> 
                                <Footer/>
                        </div>  
                )  
        }  
}  
  
export default Falicino 