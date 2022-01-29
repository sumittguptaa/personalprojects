import React , {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../contextApp';

export default class Navi extends Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand href="#" >React-Car-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="reponsive-navbar-nav" >
                        <Nav className="mr-auto" >
                            <Link to='/'>Product
                            </Link>
                        </Nav>
                        <Nav>
                            <ProductConsumer>
                                {(value) =>{
                                    return <Link style={{color:"yellowgreen"}} eventkey={2} to="/cart" >
                                        My Cart ({value.cart.length})
                                    </Link>
                                }}
                            </ProductConsumer>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}