// console.log("accepted")
let sum= 0;
function calculateAllPrice(card)
{
    
    const partiCularPriceString = card.parentNode.childNodes[3].childNodes[3].childNodes[5].childNodes[1].innerText;
    const partiCularItemsPriceFirst = parseFloat(partiCularPriceString);
    sum = sum+partiCularItemsPriceFirst;
    toShow(sum);
}
function toShow(sum)
{
    const updateBoxName = document.getElementById("PriceInput")
    const li = document.createElement("li");
    sum = sum.toFixed(2);
    li.innerText = sum;
    updateBoxName.innerHTML="Total price: "+sum;
    // console.log(sum)
}