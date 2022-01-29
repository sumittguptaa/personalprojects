import React from 'react'
import { Container ,Form,Button,Row,Col} from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/UI/Input'
function Signin() {
    return (
        <div>
            <Layout>
                <Container>
                <Row style={{marginTop : "50px"}} >
                    <Col md={{span : 6, offset: 3}} >
                            <Form>
                                <Input
                                    label="Email address"
                                    type="email"
                                    placeholder="Enter email"
                                    value=""
                                    onChange={() => { }}
                                    errorMessage="We'll never share your email with anyone else."
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    value=""
                                    onChange={() => { }}

                                />
                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    </Col>
                </Row>
              
                </Container>
            </Layout>
        </div>
    )
}

export default Signin
