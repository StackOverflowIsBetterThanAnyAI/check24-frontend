import { fetchIceData } from '@/app/api/fetchIceData'
import { useEffect, useState } from 'react'

type IceType = {
    id: number
    name: string
    stadt: string
    bewertung: number
    lieblingssorte: string
}

const Ice = () => {
    const [iceData, setIceData] = useState<IceType[]>([])
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchIceData()
            console.log(data)
            setIceData(data)
        }
        loadData()
    }, [])

    return iceData?.length ? (
        <ul className="m-4 flex flex-col gap-4">
            {iceData.map((item) => {
                return (
                    <li
                        key={item.id}
                        className="outline outline-2 outline-zinc-50 w-full max-w-64 p-4 rounded-md"
                    >
                        <div>{item.name}</div>
                        <div>{item.stadt}</div>
                        <div>{item.bewertung} Sterne</div>
                        <div>Empfehlung des Hauses: {item.lieblingssorte}</div>
                    </li>
                )
            })}
        </ul>
    ) : (
        <div>Keine Eisdaten verfügbar</div>
    )
}

export default Ice
