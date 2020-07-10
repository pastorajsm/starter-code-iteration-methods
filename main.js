// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Kata 1 (isActive)

const activeUser = users.filter(function (user) {
    return user.isActive === true
})
printKata(1, activeUser)



// kata 2 (users email)

const userEmail = users.map(function (user) {
    return user.email
})
printKata(2, userEmail)


// kata 3 (OVATION)

const hasOvation = users.some(function (user) {
    return user.company === 'OVATION'
})
printKata(3, hasOvation)


// Kata 4 (find User over 38)



const found = users.find(function (user) {
    return user.age > 38
})
printKata(4, found)


// kata 5 (filter and find)

const activeUserOver38 = users.filter(function (user) {
    return user.isActive
}).find(function (user) {
    return user.age > 38
})
printKata(5, activeUserOver38)


// kata 6 (filter and map)

const userBalance = users.filter(function (user) {
    return user.zencoCompany
}).map(function (user) {
    return user.balanceOfUsers
})
printKata(6, userBalance)


// kata 7 (filter, includes and map)

const fugiatTagUser = users.filter(function (user) {
    return user.tags.includes('fugiat')

})
    .map(function (user) {
        return user.age
    })
printKata(7, fugiatTagUser)