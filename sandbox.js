const cat = document.querySelector("img");
const header = document.querySelector(".header");
const title = header.querySelector("h1");

const observer = new IntersectionObserver((elements)=>{
    elements.forEach((element)=>{
        if(element.isIntersecting)
        {
            header.style.backgroundColor = "green";
            title.innerText = "Cat Found 🐱";
        }
        else{
            header.style.backgroundColor = "rgba(255, 0, 0, 0.65)";
            title.innerText = "No Cat Found :(";
        }
    })
},{
    threshold:0.5
})

observer.observe(cat);