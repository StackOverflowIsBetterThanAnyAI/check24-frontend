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

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}
