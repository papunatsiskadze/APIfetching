const APIURL = 'https://randomuser.me/api?results=50'

getinfo(APIURL)

async function getinfo (url) {
    const res = await fetch (url)
    const data = await res.json()
    showinfo(data.results)
}

function showinfo (users) {
    main.innerHTML = ''
    users.forEach((user) => {
        const { picture,name,location,dob,phone } = user

        const userEl = document.createElement('div')
        userEl.classList.add('user')

        userEl.innerHTML = ` 
        <div class="outterdiv">
           <img src="${picture.large}">
        <h4>
            ${name.title + ' ' + name.first + ' ' + name.last}
        </h4>
        <p>
            ${location.city + ' ' + location.street.number + ' ' + location.street.name} 
        </p>
        <p>
            ${dob.age}
        </p>
        <p>
            ${phone}
        </p>
       </div>
        `

        main.appendChild(userEl)
    })


}