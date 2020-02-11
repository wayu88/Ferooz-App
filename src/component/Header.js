import React, {PropTypes} from 'react';

export default class App extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                  
                        <table className="table table-stripped table table-bordered">
                            <tr>
                                <th style={{border:'1px solid #c1c1c1',padding:'6px'}}>{this.props.title}</th>
                                
                                {this.props.dataArray.map((item, idx) => (
                                    <td key={idx} style={{border:'1px solid #c1c1c1',padding:'6px'}}>{item}</td>
                                ))}
                                
                            </tr>
                        </table>
                     
                </div>
        );
    }
     
}
 