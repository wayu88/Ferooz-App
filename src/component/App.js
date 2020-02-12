import React,{PropTypes} from 'react';
import Header from './Header';
import ComparisionComponent from './Comparision'
import InputComponent from './InputComponent';
import LightComponent from './LightComponent';
import PageHeader from './PageHeader';

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
                ],
                selectedHeader:""
            }

            this.onHeaderClick = this.onHeaderClick.bind(this);
        }

        onHeaderClick(param) {
            //console.log("inside App :: ",param);
            
            this.setState({selectedHeader:param.name});
        }
        
        render(){

                    console.log(this.state.selectedHeader)

                return(
                            <div className="container-fluid">
                                <div className="row">
                                    <PageHeader onHeaderClick={this.onHeaderClick}/>
                                </div>
                                {
                                    this.state.selectedHeader === 'Input Page' ? 
                                        (<InputComponent title="input"/> ) : 

                                    this.state.selectedHeader === 'Rated-Comparision' ?
                                      (
                                      
                                        <div className="row" style={{marginRight:'0px',marginLeft:'0px'}}>
                                            <div className="col-sm-12" style={{marginTop:'30px'}}>
                                                 <div className="panel panel-default" style={{textAlign:'center'}}><h3>Rated-Comparision Page</h3></div>
                                            </div>
                                            <div className="well" style={{marginTop:'100px'}}>
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
                                        ) :
                                      
                                    this.state.selectedHeader === 'Dark'?
                                      (<InputComponent title="Dark Page"/>)  : this.state.selectedHeader === 'Modeled-Comparision'?
                              (
                                <div className="row" style={{marginRight:'0px',marginLeft:'0px'}}>
                                    <div className="col-sm-12" style={{marginTop:'30px'}}>
                                        <div className="panel panel-default" style={{textAlign:'center'}}><h3>Modeled-Comparision Page</h3></div>
                                    </div>
                                    <div className="well" style={{marginTop:'100px'}}>
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
                          ):(<LightComponent title="Light Page"/>)

                                    
                                }
                               
                               
                            </div>
                    );
          }
}
