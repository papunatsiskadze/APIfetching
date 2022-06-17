const APIURL = 'https://randomuser.me/api?results=50'

getinfo(APIURL)

async function getinfo (url) {
    const res = await fetch (url)
    const data = await res.json()
}

function showinfo (monacemebi) {
    
    monacemebi.forEach((infos) => {
        const { gender,name } = infos
    })


}
document.write(getinfo)