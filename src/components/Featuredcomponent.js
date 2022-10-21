import {React,Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader, ListGroup, ListGroupItem} from 'reactstrap';
import { ZLACZKI } from '../shared/zlaczki';


class Featured extends Component{
    constructor(props){
        super(props);
    

} 

render(){
    const featured = this.props.featured.map((item)=>{
        return(
            <Card style={{
                width:'20rem',
                height:'15rem'
            }}
            className="justify-content-center"
            >  
            <CardBody>
                    {item.name}
            </CardBody>

            </Card>
        )
    });

    return(
        <div className='container'>
                <div className='row'>
                        {featured}
                </div>
                </div>
    )
}

}
export default Featured;

