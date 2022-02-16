import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
/>

export default function TheMovie({ data }) {
    if (data === null) return (<div>Não recurso solicitado pelo sistema</div>)
    if (!data) return (<div>carregando...</div>)
    if (data.error) {
        return (<div>Não recurso solicitado pelo sistema</div>)
    } else if (data.Title) {
        return (
            <div>
                <Card style={{ width: '18rem', marginLeft: 50, marginTop: 30, marginBottom: 50 }}>
                    <Card.Img variant="top" src={data.Poster} />
                    <Card.Body>
                        <Card.Title>{data.Title} --- {data.Year}</Card.Title>
                        <Card.Text>
                            {data.Plot}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    } else {
        return (<div>Não recurso solicitado pelo sistema</div>)
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "tt0095801" } },
            { params: { id: "tt0033152" } },
            { params: { id: "tt0015400" } },
            { params: { id: "tt0041149" } },
            { params: { id: "tt0044388" } },
            { params: { id: "tt0098746" } },
            { params: { id: "tt0046322" } },
            { params: { id: "tt0046497" } },
            { params: { id: "tt0044389" } }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=6d17a1f&i=${params.id}`)
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    } catch (err) {
        return {
            props: {
                data: null
            }
        }
    }
}