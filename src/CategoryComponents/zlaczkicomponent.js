import {React,Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader, ListGroup, ListGroupItem} from 'reactstrap';
import { ZLACZKI } from '../shared/zlaczki';


class Zlaczki extends Component{
    constructor(props){
        super(props);
    

} 

render(){
    const zlaczki = this.props.zlaczki.map((zlaczka)=>{
        return(
            <Card style={{
                width:'15rem',
                height:'2rem'
            }}
            className="justify-content-center"
            >  
            <CardBody>
                    {zlaczka.name}
            </CardBody>

            </Card>
        )
    });

    return(
        <div className='container'>
                <div className='row'>
                        {zlaczki}
                </div>
                </div>
    )
}




}

export default Zlaczki;