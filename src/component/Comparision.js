import React, {PropTypes} from 'react';

export default class ComparisionComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
                <table className="table table-stripped table table-bordered">
                        <thead>
                            <tr>
                                {this.props.headerArray.map((item, idx) => (
                                        <th>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.dataArray.map((item, idx) => (
                                <tr>
                                    <td>{item.impwid}</td>
                                    <td>{item.fire}</td>
                                    <td>{item.water}</td>
                                    <td>{item.other}</td>
                                    <td>{item.tt}</td>
                                    <td>{item.sevStorm}</td>
                                    <td>{item.theft}</td>
                                    <td>{item.flood}</td>
                                    <td>{item.wind}</td>
                                    <td>{item.quake}</td>
                                    <td>{item.surge}</td>
                                    <td>{item.eQFF}</td>
                                    <td>{item.eQSL}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
        )
    }

}