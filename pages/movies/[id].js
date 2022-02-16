export default function TheMovie({ data }) {
    if (data === null) return (<div>Não recurso solicitado pelo sistema</div>)
    if (!data) return (<div>carregando...</div>)
    if (data.error) {
        return (<div>Não recurso solicitado pelo sistema</div>)
    } else if (data.Title){
        return (
            <div>
                <div>{data.Title} --- {data.Year}</div>
                <div>{data.Plot}</div>
                <div>
                    <img src={data.Poster} width="300" height="400" />
                </div>
            </div>
        )
    } else{
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