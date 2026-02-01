// Initializing
console.log("JS Initializing");

function createdCard(title, cName, views, vidPost, duration, thumbnail){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src = "${thumbnail}" alt = "Thumbnail" class = "thumbnail">
    <span class = "duration">${duration}</span>
    <div class = "card-body">
        <h3 class = "title">${title}</h3>
        <span class = "cName">${cName} |</span>
        <span class = "views">${views} views |</span>
        <span class = "vidPost">${vidPost} months ago</span>
    </div>
    `;
    return card;
}

function formatViews(views) {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(views);
}


document.querySelector(".container").insertAdjacentHTML("afterbegin",createdCard("Intoduction to Backend Useing NodeJs | Sigma web devlopment video #2", "CodeWithDhru", formatViews(1800000), 7, "18:82", "https://i.ytimg.com/vi/Xoz_KYfaSkk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBO4gxQWwghWzkbPUJX44K7MitWag").outerHTML);

document.querySelector(".container").insertAdjacentHTML("afterbegin",createdCard("Intoduction to Backend Useing NodeJs | Sigma web devlopment video #2", "CodeWithDhru", formatViews(1800000), 7, "18:82", "https://i.ytimg.com/vi/Xoz_KYfaSkk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBO4gxQWwghWzkbPUJX44K7MitWag").outerHTML);
