import {React,Component,Button} from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay,
     CardText, CardBody, CardTitle, CardHeader, ListGroup, ListGroupItem, CardFooter} from 'reactstrap';

class Featured extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    "id":1,
                    "item": "First item",
                    "description": "Description of the first item"
                },
                {
                    "id":2,
                    "item": "Second item",
                    "description": "Description of the Second item"
                },
                {
                    "id":3,
                    "item": "Third item",
                    "description": "Description of the Third item"
                },
            ]
        }
    

} 



render(){
    
    const featured = this.props.featured.map((item)=>{
        return(
            <Card key={item.id} style={{
                width:'20rem',
                height:'15rem'
            }}
            className="justify-content-center"
            >  
            <CardBody>
                    {item.name}
            </CardBody>
                    <Link to={`/kategoria/${item.name}`}>
                       <button style={{ 'color': 'blue', 'backgroundColor': 'white', 'border': 'none'}}>
                        Przegladaj
                       </button>
                        </Link>                    

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

