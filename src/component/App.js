import React,{PropTypes} from 'react';
import Header from './Header';
import ComparisionComponent from './Comparision'

export class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                dataArray : ["87,979","9,424","16,422","7,050","68,829","7,605","13,302","19,426","15,476","6,159","10,515","15,734"],
                comparisionHeader:["ImPwid","Fire","Water","Other","TE","Sev Storm","Theft","Flood","Wind","Quake","Surge","EQFF","EQSL"],
                comaparisionData : [
                    {
                        "impwid":"213221321",
                        "fire":"22",
                        "water":"112",
                        "other":"32",
                        "tt":"32",
                        "sev Storm":"",
                        "theft":"",
                        "flood":"32",
                        "wind":"321",
                        "quake":"",
                        "surge":"32",
                        "eQFF":"32",
                        "eQSL":""
                    },
                    {
                        "impwid":"213221321",
                        "fire":"22",
                        "water":"112",
                        "other":"32",
                        "tt":"32",
                        "sev Storm":"",
                        "theft":"",
                        "flood":"32",
                        "wind":"321",
                        "quake":"",
                        "surge":"32",
                        "eQFF":"32",
                        "eQSL":""
                    },
                    {
                        "impwid":"213221321",
                        "fire":"22",
                        "water":"112",
                        "other":"32",
                        "tt":"32",
                        "sev Storm":"",
                        "theft":"",
                        "flood":"32",
                        "wind":"321",
                        "quake":"",
                        "surge":"32",
                        "eQFF":"32",
                        "eQSL":""
                    },
                    {
                        "impwid":"213221321",
                        "fire":"22",
                        "water":"112",
                        "other":"32",
                        "tt":"32",
                        "sev Storm":"",
                        "theft":"",
                        "flood":"32",
                        "wind":"321",
                        "quake":"",
                        "surge":"32",
                        "eQFF":"32",
                        "eQSL":""
                    },
                    {
                        "impwid":"213221321",
                        "fire":"22",
                        "water":"112",
                        "other":"32",
                        "tt":"32",
                        "sev Storm":"",
                        "theft":"",
                        "flood":"32",
                        "wind":"321",
                        "quake":"",
                        "surge":"32",
                        "eQFF":"32",
                        "eQSL":""
                    }
                ]
            }
        }

        
        render(){
                    return(
                            <div className="container-fluid">
                                <div className="well">
                                    <div className="row">
                                        <Header title="Total Dark" dataArray={this.state.dataArray}/>
                                        <Header title="Total Light" dataArray={this.state.dataArray}/>
                                        <Header title="Total Difference" dataArray={this.state.dataArray}/>
                                        <Header title="Percent Difference" dataArray={this.state.dataArray}/>
                                        <Header title="Count of loc diff's" dataArray={this.state.dataArray}/>
                                        <ComparisionComponent headerArray={this.state.comparisionHeader} dataArray={this.state.comaparisionData}/>
                                    </div>
                                </div>  
                               
                            </div>
                    );
          }
}
