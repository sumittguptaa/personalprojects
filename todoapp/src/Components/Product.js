import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row ,Card , Col  ,Button} from 'react-bootstrap'
import {ProductConsumer} from '../contextApp'

export default class Product extends Component{
    render(){
        const{id , title , img , price ,inCart} = this.props.product ;
        return(
            <div>
                <ProductConsumer>
                    {(value) =>(
                        <Card onClick={(e) =>{e.value.handleDetails(id)}} style={{width : '18rem' , height : '18rem'}}> 
                        <Link to="/details" >
                            <Card.Img variant="top" src={img} />
                        </Link>
                        <Card.Body>
                            <Card.title>{title}</Card.title>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col >
                                <Button size="sm" disabled={inCart} onClick={() =>{value.addToCart(id)} } variant="secondary" >
                                    {inCart === true ?(<span>In Cart</span>) : (<span></span>)}
                                </Button>
                                </Col>
                                <Col>
                                     <small className="text-muted text-right">INR{price}</small>
                                </Col>
                            </Row>
                        </Card.Footer>
                        </Card>
                    )}
                </ProductConsumer>
            </div>
        )
    }
}