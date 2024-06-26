const chuckNorrisAPI = "https://api.chucknorris.io/jokes/random";
const chuckNorrisCategories = "https://api.chucknorris.io/jokes/categories";

getChuckNorrisCategories();
let select = document.getElementById("categories");
select.onchange = (e) => {
  console.log(e);
  getChuckNorrisJoke2(e.target.value)
};

  async function getChuckNorrisJoke() {
    try {
      const response = await fetch(chuckNorrisAPI);

      if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
      }

      const jsonData = await response.json();
      console.log(jsonData.value);
      document.getElementById('chuck').innerHTML = jsonData.value;
    } catch (error) {
      console.error(error);
    }
};

async function getChuckNorrisJoke2(a) {
  try {

    const response = await fetch("https://api.chucknorris.io/jokes/random?category=" + a);

    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }

    const jsonData = await response.json();
    console.log(jsonData.value);
    document.getElementById('chuck').innerHTML = jsonData.value;
  } catch (error) {
    console.error(error);
  }
};

async function getChuckNorrisCategories() {
  try {
    const response = await fetch(chuckNorrisCategories);

    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }

    const jsonData = await response.json();
    console.log(jsonData);

    let categories = jsonData;
    categories.forEach(addCategory);

    function addCategory(value){

      let select = document.getElementById("categories");
      let option = document.createElement("option");
      option.text = value;
      option.setAttribute("id", value);
      option.onchange = getChuckNorrisJoke2(value);
      select.add(option);

    }

    document.getElementById('chuckcategories').innerHTML = jsonData.value;
  } catch (error) {
    console.error(error);
  }
};