document.title = "Arbg.online " + document.querySelector("h1").innerText;

let metaDesc = document.createElement("meta");
metaDesc.name = "description";
metaDesc.content = "Crypto arbitrage is the process of buying cryptocurrency on one platform at a lower price and selling it on another for a higher price " + document.querySelector("p").innerText;
document.head.appendChild(metaDesc);

let metaOgTitle = document.createElement("meta");
metaOgTitle.setAttribute("property", "og:title");
metaOgTitle.content = document.title;
document.head.appendChild(metaOgTitle);
