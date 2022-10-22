import { React,Component } from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';

class WidokPrzedmiotu extends Component{

    render(){
        return(
            <div className="container">
            <div class="row">
                <Breadcrumb>
                <Link to="/home">
                <BreadcrumbItem>Wstecz</BreadcrumbItem>
                </Link>
                </Breadcrumb>
            </div>
        </div>
        
        )
    }
}
export default WidokPrzedmiotu;