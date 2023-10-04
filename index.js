// #search_text
function onSearchChange() {
    var inputValue = document.getElementById("search_text").value;
    if (inputValue.trim() !== "") {
        window.location.href = "findyourcar.html?search=" + encodeURIComponent(inputValue);
    } else {
        alert("Please enter a value before changing the page.");
    }
}

const search_text = localStorage.getItem("search_text")
async function onSearch(event){

    const search_text = event.target.value;
    //renderPosts(id);
    //console.log(id);
    //getcars(search_text)
} 

async function getcars(search_text) {
    // https://api.hellocars.com.au/buy/search?query=toyota
    const posts = await fetch(`http://127.0.0.1:5501/cars.json?search=${search_text}`)
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');


    // id="loading_spin_img"

}

function postHTML(post) {
    return `
    <div class="post">
        <div class="post__title">
            ${post.title}
        </div>
        <p class="post__body">
            ${post.body}
        </p>
    </div>
    `
}

getcars(search_text);