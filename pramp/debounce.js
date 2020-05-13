const searchInput = document.querySelector(".search-input");
const results = document.querySelector(".results")

searchInput.addEventListener('input', debounce(handleInput, 1000));

function handleInput(event) {
  console.log('handle has been fired')
  results.innerHTML = '';
  if (searchInput.value === '') return;
  

  searchData(searchInput.value)
    .then(res => {
    const fragment = document.createDocumentFragment();         
    res.forEach(movie => {
      let listItem = document.createElement("li")
      listItem.innerText = movie["title"]
      fragment.appendChild(listItem);
    })
  
    results.appendChild(fragment);
    // console.log(res);
  })
}

function debounce(fn, delay) {
  let id;
  
  return function(...args) {
    if(id) {
      clearTimeout(id);
    }
    
    id = setTimeout(() => {
      fn(...args)
    }, delay)
    
    console.log(id);
    
  }
}
