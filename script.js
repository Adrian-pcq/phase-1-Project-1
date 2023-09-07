fetch('http://localhost:3000/superheroes')
.then((resp)=>resp.json())
.then(data=>renderHeroes(data))

function renderHeroes(heroArray){
heroArray.forEach(renderHero)
}

function renderHero(hero){
    const menuDiv = document.getElementById("hero-menu");
    const imageHero = document.createElement("img");
    imageHero.src = hero.image
    menuDiv.append(imageHero)

    imageHero.addEventListener("click", e => { renderDetails(hero) })
    
    function renderDetails(hero){
        const heroImage = document.getElementById("hero-image")
        const heroName = document.getElementById("hero-name")
        const realName = document.getElementById("real-name")
        const hometown = document.getElementById("hometown")
        const description = document.getElementById("description")

        heroImage.src = hero.image
        heroImage.alt = hero.name
        heroName.textContent = `Superhero Name: ${hero.name}`
        realName.textContent = `Name: ${hero.realName}`
        hometown.textContent= `Hometown: ${hero.hometown}`
        description.textContent = `Skills: ${hero.description}`
    }

    imageHero.addEventListener("click", e =>{
        const elemSelect = e.target
        if(elemSelect === document.querySelector(".selected")){
            elemSelect.classList.remove("selected")
        }else{elemSelect.classList.add("selected")}
        document.addEventListener("keydown",e =>{
            if(e.key === "Delete"){
                if(document.querySelector(".selected"))
                elemSelect.remove()
            }
        })
        
    })

}

const newform = document.getElementById("newHero")
newform.addEventListener("submit", e =>{
    e.preventDefault()
    const newHero = {
        name: e.target.name.value,
        realName: e.target["hero-name"].value,
        hometown: e.target.hometown.value,
        description: e.target.description.value,
        image: e.target["new-image"].value
    };
    renderHero(newHero)
})