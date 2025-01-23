fetch("https://api.pexels.com/v1/search?query=hamsters", 
{headers : {
        "authorization" : "cCNbIVrih6ubLht8KO8lWs14zcP1pgco4gnuQgPsrOZHzQ2xX9rnX6y2"
    }})
.then(resp => {
    
    if(resp.ok){
        return resp.json();
        
    }else{
        throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
    }
})
.then(image => {
    console.log(image.photos);

    const row = document.getElementById("card-image");
    const loadImage = document.getElementById("load-btn");

    loadImage.addEventListener("click", (e)=> {
        e.preventDefault();
        row.innerHTML = "";
        image.photos.forEach(element => {
            console.log(element.url)

            const col = document.createElement("div");
            const card = document.createElement("div");
            const img = document.createElement("img");
            const cardBody = document.createElement("div");
            const cardTitle = document.createElement("h5");
            const cardText = document.createElement("p");
            const divCardFooter=document.createElement("div");
            const divButton = document.createElement("div");
            const buttonView = document.createElement("button");
            const buttonHide = document.createElement("button");
            const smallText = document.createElement("small");

            col.classList.add("col-md-4");
            card.classList.add("card", "mb-4", "shadow-sm",);
            img.classList.add("card-img-top", "img-fluid", "object-fit-cover");
            img.style.height = "250px";
            img.style.width = "100%";
            img.src=element.src.large;
            cardBody.classList.add("card-body");
            cardTitle.classList.add("card-title");
            cardTitle.textContent=element.photographer;
            cardText.textContent="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
            divCardFooter.classList.add("d-flex", "justify-content-between", "align-items-center");
            divButton.classList.add("btn-group");
            buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
            buttonView.textContent="View";
            buttonView.type="button";

            buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
            buttonHide.textContent = "Hide";
            buttonHide.type = "button";

            smallText.classList.add("text-muted");
            smallText.textContent = element.id;

            row.appendChild(col);
            col.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(divCardFooter);
            divCardFooter.appendChild(divButton);
            divCardFooter.appendChild(smallText);
            divButton.appendChild(buttonView);
            divButton.appendChild(buttonHide);

            buttonHide.addEventListener("click", () => {
                card.remove()
            })
        });

    })
})

fetch("https://api.pexels.com/v1/search?query=tigers", {
  headers: {
    authorization: "cCNbIVrih6ubLht8KO8lWs14zcP1pgco4gnuQgPsrOZHzQ2xX9rnX6y2",
  },
})
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
    }
  })
  .then((image) => {

    console.log(image.photos);

    const row = document.getElementById("card-image");

    const loadTiger = document.getElementById("load-Tiger");

    loadTiger.addEventListener("click", (e) => {
      e.preventDefault();
    row.innerHTML = "";
      image.photos.forEach((element) => {
        console.log(element.url);

        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");
        const divCardFooter = document.createElement("div");
        const divButton = document.createElement("div");
        const buttonView = document.createElement("button");
        const buttonHide = document.createElement("button");
        const smallText = document.createElement("small");

        col.classList.add("col-md-4");
        card.classList.add("card", "mb-4", "shadow-sm");
        img.classList.add("card-img-top", "img-fluid", "object-fit-cover");
        img.style.height = "250px";
        img.style.width = "100%";
        img.src = element.src.large;
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = element.photographer;
        cardText.textContent =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
        divCardFooter.classList.add("d-flex", "justify-content-between", "align-items-center");
        divButton.classList.add("btn-group");
        buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonView.textContent = "View";
        buttonView.type = "button";

        buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonHide.textContent = "Hide";
        buttonHide.type = "button";

        smallText.classList.add("text-muted");
        smallText.textContent = element.id;

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(divCardFooter);
        divCardFooter.appendChild(divButton);
        divCardFooter.appendChild(smallText);
        divButton.appendChild(buttonView);
        divButton.appendChild(buttonHide);

        buttonHide.addEventListener("click", () => {
          card.remove();
        });
      });
    });
  });

function search() {
  const input = document.getElementById("search");
  const btnSearch = document.getElementById("btn-search");
  const row = document.getElementById("card-image");

  btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    const userSearch = input.value.trim(); 

    if (userSearch) {
      const apiUrl = `https://api.pexels.com/v1/search?query=${userSearch}`;

      fetch(apiUrl, {
        headers: {
          authorization: "cCNbIVrih6ubLht8KO8lWs14zcP1pgco4gnuQgPsrOZHzQ2xX9rnX6y2",
        },
      })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("Errore durante il caricamento delle immagini");
          }
        })
        .then((imageSearch) => {
          
            row.innerHTML = "";

        imageSearch.photos.forEach((element) => {
        console.log(element.url);

        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");
        const divCardFooter = document.createElement("div");
        const divButton = document.createElement("div");
        const buttonView = document.createElement("button");
        const buttonHide = document.createElement("button");
        const smallText = document.createElement("small");

        col.classList.add("col-md-4");
        card.classList.add("card", "mb-4", "shadow-sm");
        img.classList.add("card-img-top", "img-fluid", "object-fit-cover");
        img.style.height = "250px";
        img.style.width = "100%";
        img.src = element.src.large;
        cardBody.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = element.photographer;
        cardText.textContent =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
        divCardFooter.classList.add("d-flex", "justify-content-between", "align-items-center");
        divButton.classList.add("btn-group");
        buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonView.textContent = "View";
        buttonView.type = "button";

        buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonHide.textContent = "Hide";
        buttonHide.type = "button";

        smallText.classList.add("text-muted");
        smallText.textContent = element.id;

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(divCardFooter);
        divCardFooter.appendChild(divButton);
        divCardFooter.appendChild(smallText);
        divButton.appendChild(buttonView);
        divButton.appendChild(buttonHide);

        buttonHide.addEventListener("click", () => {
          card.remove();
        });
          });
        })
        .catch((error) => {
          console.error("Errore:", error);
        });
    } else {
      console.log("Il campo di ricerca è vuoto.");
    }
  });
}

  search();