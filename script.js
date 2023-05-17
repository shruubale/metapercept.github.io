console.log('metapercept test');
let http = new XMLHttpRequest();
http.open('get','class.json');
http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status ==200){
        let classes = JSON.parse(this.responseText);
        let card='';

        for (let item of classes)
        {
            card+= `
            <div class="card" style="width: 18rem">
            <img src="${item.ImageUrl}" alt="${item.ImageUrl}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${item.Name}</h5>
              <p class="card-text">
               ${item.ShortDesc}
              </p>
              <a href="#" class="btn">View</a>
            </div>
          </div>`
        }

        document.querySelector('.classes-cards').innerHTML = card;
    }
}