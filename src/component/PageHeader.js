import React, {PropTypes} from 'react';
import logo from './logo.png';


export default class PageHeader extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="container-sub-nav">
                    <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <img src={logo}  alt="logo" style={{width:'197px'}}/>
                                    </div>

                                    <div className="col-sm-10">
                                    <ul className="navbar-nav" style={{listStyleType:'none'}}>
                                            <li className="nav-item active">
                                                <a className="nav-link" href="/blog">Input<span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Rated-Comparision</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Modeled-Comparision</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Dark</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Light</a>
                                            </li>
                                                        
                                    </ul>
                                    </div>
                                </div>
                               
                            </div>
                        </nav>
                    </div>
                </div>
        );
    }
}