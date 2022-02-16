export default function ThePost({ data }) {
    if (data === null) return (<div>Não recurso solicitado pelo sistema</div>)
    if (!data) return (<div>carregando...</div>)
    if (data.error) {
        return (<div>Não recurso solicitado pelo sistema</div>)
    } else if (data.title){
        return (
            <div>
                <div>{data.title} --- {data.id}</div>
                <div>{data.body}</div>
            </div>
        )
    } else{
        return (<div>Não recurso solicitado pelo sistema</div>)
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
            { params: { id: "4" } },
            { params: { id: "5" } },
            { params: { id: "6" } },
            { params: { id: "7" } },
            { params: { id: "8" } },
            { params: { id: "9" } }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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