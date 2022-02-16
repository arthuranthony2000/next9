import useSWR from 'swr'

export default function Movies2() {

    const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=6d17a1f&s=bagdad`, fetcher)

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>

            {/* EXERCÍCIO 1 -- CLIENT SIDE RENDERING*/}
            {data.Search.map((m, i) => <div key={i} onClick={() => {window.location.href = "/movieclient?id="+m.imdbID}}>{m.Title} --- {m.Year}</div>)}

            {/* EXERCÍCIO 2 -- SERVER SIDE RENDERING */}
            {/* {data.Search.map((m, i) => <div key={i} onClick={() => {window.location.href = "/movieserver?id="+m.imdbID}}>{m.Title} --- {m.Year}</div>)} */}

        </div>

    )

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}