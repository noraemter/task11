async function getMenu() {
    try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data = await response.json();
        const recipes = data.recipes;
        const count = recipes.length;

        document.querySelector(".count").textContent = count;

        const result = recipes.map(function (recipe) {
            return `
                <div class='recipe'>
                    <h2>${recipe.title}</h2>
                    <img src='${recipe.image_url}' alt='${recipe.title}'/>
                </div>
            `;
        }).join('');

        document.querySelector(".recipes .row").innerHTML = result;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMenu();
