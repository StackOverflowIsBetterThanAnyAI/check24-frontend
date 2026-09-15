import { IceType } from '../types/types'

export const fetchIceData = async () => {
    try {
        const response = await fetch('/api/eisdielen', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })

        if (!response.ok) {
            console.log('error', response.status)
        }

        const data: IceType[] = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return [] as IceType[]
    }
}
