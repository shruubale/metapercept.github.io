console.log('welcome');
let http = new XMLHttpRequest();
http.open("get","class.json",true)
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status==200)
    {
        let cardss=JSON.parse(this.responseText);
        let output = "";
        for (let item of cardss){
            output+= `
            <div class="card" style="width: 18rem">
                    <img src="${item.ImageUrl}" alt="${item.ImageUrl}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.Name}</h5>
                        <p class="card-text">${item.ShortDesc}</p>
                        <button class="btn btn-primary">View</button>
                    </div>
                </div>
            `
        }
        document.querySelector('.classes-cards').innerHTML = output;
    }
}