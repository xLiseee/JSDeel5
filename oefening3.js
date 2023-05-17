let teller= 0.


document.getElementsByTagName("button")[0].addEventListener('click', tekstTonen);

document.getElementsByTagName("button")[1].addEventListener('click', tekstWissen);


function tekstTonen () {

    let spanElement = document.createTextNode("span");

    let spanElementTekst = document.createTextNode(document.getElementsByTagName("input")[0].value + "");

    spanElement.appendChild(spanElementTekst);

    document.getElementsByTagName("p")[0].appendChild(spanElement);


    teller++;

    spanElement.id = "span" + teller;


    document.getElementById("span + teller").style.color = "red";

    document.getElementById("span + teller").style.fontWeight = "bold";


    if (teller > 1) {

        document.getElementById("span" + (teller - 1)).style.color = "black";

        document.getElementById("span" + (teller - 1)).style.fontWeight = "normal";

    }

}


function tekstWissen() {

    document.getElementsByTagName("p")[0].innerHTML = "";

    teller = 0;

}