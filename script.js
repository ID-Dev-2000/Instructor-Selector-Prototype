// Initialize DOM nodes
let userCard = document.getElementById('userCard')
let selectedUserFromOption = document.getElementById('selectUserID')

// Fetch API data, return as JSON
async function fetchPlaceholderUserData() {
    let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
    fetchedDataAsJSON = await fetchedData.json()
    return await fetchedDataAsJSON
}

// function to create populate DOM elements with API data
async function instructorData(position) {
    let userData = await fetchPlaceholderUserData()

    let cardHTML = 
    `
    <p>Name: ${userData[position]['name']}</p>
    <p>E-mail: ${userData[position]['email']}</p>
    <p>Website: ${userData[position]['website']}
    <p>Catch Phrase: ${userData[position]['company']['catchPhrase']}</p>
    <hr style="width: 100%"/>
    `
    let createdNode = document.createElement('div')
    createdNode.classList.add('userCardDynamicNode')
    createdNode.innerHTML = cardHTML
    userCard.appendChild(createdNode)
}

async function generateUserCard() {
    // Receives value from drop-down field
    let selectedSubject = selectedUserFromOption.options[selectedUserFromOption.selectedIndex].value;

    switch (selectedSubject) {
        case 'subject-select':
            userCard.innerHTML = "<p>Please select a subject.</p>"
            break
        case 'subject-science':
            userCard.innerHTML = ''
            instructorData(0)
            instructorData(1)
            instructorData(2)
            break
        case 'subject-mathematics':
            userCard.innerHTML = ''
            instructorData(3)
            instructorData(4)
            instructorData(5)
            break
        case 'subject-history':
            userCard.innerHTML = ''
            instructorData(6)
            instructorData(7)
            instructorData(8)
            break
    }

}
