// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
.then(response => response.json())
.then(result => {
    let section = document.querySelector(".characters")
    console.log(result)
    for (const data in result){
        let image = document.createElement("img")
        let figcap1 = document.createElement("FIGCAPTION")
        let figcap2 = document.createElement("FIGCAPTION")
        let div = document.createElement("DIV")

        image.setAttribute("alt", "GOT character "+data)
        image.src = result[data].imageUrl

        figcap1.innerHTML = result[data].fullName
        figcap2.innerText = result[data].title

        image.style = "margin: 25px; width: 200px; height: 220px"
        figcap1.style = "margin-bottom: 20px; text-align: center; font-size: 20px; font-weight: bolder; line-height: 20px;"
        figcap2.style = "margin-left: 22px; margin-bottom: 20px; text-align: center; font-size: 18px; font-weight: bolder; line-height: 20px; width: 200px"
        
        div.appendChild(image)
        div.appendChild(figcap1)
        div.appendChild(figcap2)
        section.appendChild(div)

    }
})
.catch((error) => {
    console.error(error)
    let section = document.querySelector(".characters")
    let element = document.createElement('div')
    element.textContent = "An error occured. Please try again.";
    section.appendChild(element)
});
