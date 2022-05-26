let userCard = document.getElementById('userCard')

// Fetch API data, return as JSON
async function fetchPlaceholderUserData() {
    let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
    fetchedDataAsJSON = await fetchedData.json()
    return await fetchedDataAsJSON
}

// Handle Email functionality
function submitInput() {
    alert('test')
}

// Generate DOM nodes for user cards
let selectedUserFromOption = document.getElementById('selectUserID')

// TODO: Add images of instructors in user cards
async function generateUserCard() {
    let userData = await fetchPlaceholderUserData()
    let selectedUser = selectedUserFromOption.options[selectedUserFromOption.selectedIndex].value;
    if (selectedUserFromOption.options[selectedUserFromOption.selectedIndex].value == 'x') {
        const cardHTML = `<p>Please select an instructor.</p>`
        userCard.innerHTML = cardHTML
    } else { 
        const cardHTML =
        `
        <p>Name: ${userData[selectedUser]['name']}</p>
        <p>E-mail: ${userData[selectedUser]['email']}</p>
        <p>Catch Phrase: ${userData[selectedUser]['company']['catchPhrase']}</p>
        <adress><a href=mailto${userData[selectedUser]['email']} target="_blank">CONTACT ME (Currently not functional during placeholder build)</address>
        `
        userCard.innerHTML = cardHTML
    }
}
