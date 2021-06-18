/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Modal from "./Modal"
import Link from 'next/link'

export default function Data() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [q, setQ] = useState(query)
    const [page, setPage] = useState(1)

    const [showModal, setShowModal] = useState(false)

    const apiKey = "g0V35PP4pPD0kFZ_A6T8azaaQOxorhZwPfMF-cTUiTg"
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=20&order_by=popular&query=${q}&client_id=${apiKey}`)
            const data = await res.json()
            console.log(data.results);
            setData(data.results)
            setLoading(false)
        }
        fetchData()
        return () => fetchData()
    }, [page, q])
    console.log(query);
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                    <button type="submit" onClick={e => setQ(query)}>search</button>
                </form>
                <div className="pagination" style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a type="submit" onClick={e => setQ('cars')}>Cars</a>
                    <a type="submit" onClick={e => setQ('flowers')}>Flowers</a>
                    <a type="submit" onClick={e => setQ('phones')}>Phones</a>
                    <a type="submit" onClick={e => setQ('bikes')}>Bikes</a>
                    <a type="submit" onClick={e => setQ('houses')}>Houses</a>
                    <a type="submit" onClick={e => setQ('beach')}>Beach</a>
                    <a type="submit" onClick={e => setQ('india')}>India</a>
                    <a type="submit" onClick={e => setQ('Nature')}>Nature</a>
                    <a type="submit" onClick={e => setQ('Sea')}>Sea</a>
                </div>
                {data.length === 0 && <div><h1>Please search something</h1></div>}
                {data.length !== 0 && (
                    <div className="pagination" style={{ marginTop: '0' }}>
                        <a type="submit" onClick={e => setPage(1)}>1</a>
                        <a type="submit" onClick={e => setPage(2)}>2</a>
                        <a type="submit" onClick={e => setPage(3)}>3</a>
                        <a type="submit" onClick={e => setPage(4)}>4</a>
                        <a type="submit" onClick={e => setPage(5)}>5</a>
                        <a type="submit" onClick={e => setPage(6)}>6</a>
                        <h3>This is page no {page}</h3>
                    </div>)
                }
            </center>
            <div className="grid">
                {!loading && data.map((item, index) => (
                    <div key={index} >
                        <img
                            className="wide"
                            onClick={() => {
                                console.log('Clicked')
                                setShowModal(true)
                            }}
                            src={item.urls.regular}
                            style={{ width: '100%', height: '100%' }}
                            alt={item.alt_description} />
                        {showModal && <Modal />}
                    </div>
                ))}
            </div>

        </div>
    )
}
