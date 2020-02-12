import React, {PropTypes} from 'react';
import logo from './logo.png';


export default class PageHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            links: [
                {
                    id: 0,
                    name: "Input"
                },
                {
                    id: 1,
                    name: "Rated-Comparision"
                },
                {
                    id: 2,
                    name: "Modeled-Comparision"
                },
                {
                    id: 3,
                    name: "Dark"
                },
                {
                    id: 4,
                    name: "Light"
                }
            ],
            activeLink: 0
        }
    }

    handleClick(id){
        this.setState({ activeLink: id });
        let linkTemp = this.state.links[id];
        this.props.onHeaderClick(linkTemp);
    };
    
    render(){
        const { links, activeLink } = this.state;
       
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
                                            {this.state.links.map((item, idx) => (
                                                <li key={idx} className={item.id === activeLink ? 'nav-item active' : 'nav-item'} onClick={() => this.handleClick(item.id)}>
                                                    <a className="nav-link">{item.name}</a>
                                                </li>   
                                            ))}  
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