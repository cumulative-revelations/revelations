(function(){
    
    const currentUri = window.location.href;

    let splitPath = currentUri.split("/");

    console.log(splitPath.length);

    if (splitPath.length > 0) {
        const relativeUri = splitPath[splitPath.length - 1];

        const links = document.getElementsByTagName("A");
        for(let i = 0; i < links.length; i++) {
            if (links[i].getAttribute("href") == relativeUri) {
                links[i].classList.add("current");
            }
        }
    }

    const siteNavigation = document.querySelector(".site-navigation");
    const siteNavButton = document.querySelector(".js-nav-toggle");

    siteNavButton.addEventListener("click", function(ev){
        siteNavigation.classList.toggle("is-shown");
    });

}());