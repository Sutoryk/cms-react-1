import { Component, React } from 'react';
import { KATEGORIE } from '../shared/kategorie';
import {Button, Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import Featured from './Featuredcomponent';
import { FEATURED } from '../shared/featured';
import {Link} from 'react-router-dom';
import { ZLACZKI } from '../shared/zlaczki';
import Zlaczki from './Featuredcomponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kategorie: KATEGORIE,
            categorySelected: null,
            featured: FEATURED,

        }
    }

    onDishSelect(kategoria) {
        this.setState({ categorySelected: kategoria });
    }


    render() {
        const menu = this.state.kategorie.map((kategoria) => {
            return (
                <Card key={kategoria.id} onClick={() => this.onDishSelect(kategoria) }style={{
                    width:'20rem',
                    height:'15rem'
                }}>
                    <CardBody>
                        {kategoria.name}
                    </CardBody>
                    <Button color="light">
                    <Link to={`/kategoria/${kategoria.name}`}>
                        Przegladaj
                        </Link>
                    </Button>
                    
                </Card>

            )
        });
        return (
            <div className="container">
                <div className="row row-content">
                    <div class="offset-sm-4">
                        <CardHeader className="">
                            Kategorie
                        </CardHeader>
                        </div>
                        {menu}
                    <div className='row row-content'>
                    <div className='col-12 col-sm-12 '>
                        <CardHeader>
                            Promowane produkty
                        </CardHeader>

                    <Featured featured={this.state.featured}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;