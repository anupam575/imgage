
let input=document.querySelector(".search-box input")
let btn=document.querySelector(".btn button")
let images=document.querySelector(".images")



const accessKey="n8pWeqZZo3KigfzvScohwOWnrfdhxxoT6f4R_bqFlOA";
let page=1;
let keyword=""
async function getResponse() {
  keyword=input.value
  let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  let response=await fetch(url);
  let data=await response.json();
  let results=data.results;
  console.log(results);
  results.map((result)=>{
    let li=document.createElement("li")
    li.classList.add("image")
    let html=`<img src="${result.profile_image[0].urls.small}" alt="img" class="photo">
          <div class="details">
            <div class="user">
              <img src="camera.svg" alt="img">
              <span>Iron Man</span>

            </div>
            <div class="download">
              <img src="download.svg" alt="img">
            </div>
          </div>`
          li.innerHTML=html
          images.appendChild(li)

  })
  
  
}
btn.addEventListener("click",()=>{
  page=1
  getResponse()
})
