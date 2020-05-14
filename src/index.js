console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', (event) => {

    //Deliverable 1

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderImages(json))

        
    function renderImages(images) {
        // console.log(images.message)

        for (const element of images.message) {
            const createImg = document.createElement('img')
            createImg.src = element
            createImg.style.width = "300px"
            createImg.style.display = "inline-block"
            dogBreedUL.insertAdjacentElement("beforebegin", createImg)
        }
    }

    //Deliverable 2

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreedsUl(json))

        const dogBreedUL = document.querySelector('#dog-breeds')
        dogBreedUL.style.columnCount = "4"

    function renderBreedsUl(data) {
        // console.log(data.message)
        for (const key in data.message) {
            // console.log(key)
            const createLi = document.createElement('li')
            createLi.textContent = key
            dogBreedUL.appendChild(createLi)
        }
    }

    //Deliverable 3

    dogBreedUL.addEventListener("click", (e) => {


        if (e.target.tagName === "LI") {
            // console.dir(e.target)
            const li = e.target

            if (li.className === "" || li.className == "black" ) {
                li.style.color = "red"
                li.className = "red"
            } else if ( li.className == "red") {
                li.style.color = "black"
                li.className = "black"
            }
        }
    })

    //Deliverable 4

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener("change", (e) => {
        // console.log(e.target.value)
        const dropdownVal = e.target.value
        const dogBreedUL = document.querySelector('#dog-breeds')
        const liNodeList = dogBreedUL.querySelectorAll('li')
        const liArr = Array.from(liNodeList)
        // console.log(liArr)


        // Need to finish this functionality
        if (dropdownVal === "a") {
            //check li's first letter propery. Display none all non a
            for (const element of liArr) {
                console.log(element)
            }
        } else if (dropdownVal === "b") {
            //check li's first letter propery. Display none all non b
        } else if (dropdownVal === "c") {
            //check li's first letter propery. Display none all non c
        } else if (dropdownVal === "d") {
            //check li's first letter propery. Display none all non d
        }
    })

})