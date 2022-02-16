import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
/>

export default function Main() {

    return (
        <div>

            <Card style={{ width: '18rem', marginLeft: 50, marginTop: 30, marginBottom: 50 }}>
                <Card.Body>
                    <Button style={{margin: 10}} href="/movies/tt0015400" variant="primary">ACESSAR FILME</Button>
                    <Button style={{margin: 10}} href="/posts/1" variant="primary">ACESSAR POST</Button>
                </Card.Body>
            </Card>

            {/* <a href="/movies/tt0015400"> ACESSAR FILME </a> <br /><br />

            <a href="/posts/1"> ACESSAR POST </a> */}

        </div>
    )
}


