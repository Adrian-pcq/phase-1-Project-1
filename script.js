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
        heroName.textContent = hero.name
        realName.textContent = hero.realName
        hometown.textContent= hero.hometown
        description.textContent = hero.description
    }

}
