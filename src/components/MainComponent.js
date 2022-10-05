import { Component, React } from 'react';
import { KATEGORIE } from '../shared/kategorie';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import Zlaczki from '../CategoryComponents/zlaczkicomponent';
import { ZLACZKI } from '../shared/zlaczki';
import {Link} from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kategorie: KATEGORIE,
            zlaczki: ZLACZKI,
            categorySelected: null

        }
    }

    onDishSelect(kategoria) {
        this.setState({ categorySelected: kategoria });
    }

    renderDish(kategoria) {
        if (kategoria != null)
            return (
                <Card>
                    <Link to={`/kategoria/${kategoria.name}`}>
                    <CardBody>
                        <CardTitle>{kategoria.name}</CardTitle>
                    </CardBody>
                    </Link>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }



    render() {
        const menu = this.state.kategorie.map((kategoria) => {
            return (
                <Card key={kategoria.id} onClick={() => this.onDishSelect(kategoria)}>
                    <CardBody>
                        {kategoria.name}
                    </CardBody>

                </Card>

            )
        });
        return (
            <div className="container">
                <div className="row row-content">
                    <div className='col-12 col-sm-4 border'>
                        <CardHeader className="">
                            Kategorie
                        </CardHeader>
                        {menu}
                        {this.renderDish(this.state.categorySelected)}
                    </div>
                    <div className='col-12 col-sm-8 '>
                        <CardHeader className="">
                            produkty
                        </CardHeader>

                        <Zlaczki zlaczki={this.state.zlaczki} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;