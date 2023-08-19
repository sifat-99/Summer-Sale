let sum= 0;
function calculateAllPrice(card)
{
    
    const partiCularPriceString = card.parentNode.childNodes[3].childNodes[3].childNodes[5].childNodes[1].innerText;
    const partiCularItemsPriceFirst = parseFloat(partiCularPriceString);
    sum = sum+partiCularItemsPriceFirst;
    // InputValue()
    // const DiscountPrice = discount(sum);
    toShow(sum);
    
}
function toShow(sum)
{
    const updateBoxName = document.getElementById("PriceInput")
    const li = document.createElement("li");
    sum = sum.toFixed(2);
    
    li.innerText = sum;
    updateBoxName.innerHTML="Total price: "+sum;
    // const li2 = document.createElement("li");
    // DiscountPrice = DiscountPrice.toFixed(2);
    // li2.innerText = DiscountPrice;
    // updateBoxName.innerHTML = "Total: " + DiscountPrice;
    console.log(sum)
    
}

function InputValue()
{
    const inputHTML = document.getElementById("InputField");
    const input = inputHTML.value;
    const btnActive = inputHTML.parentNode.childNodes[3];
    if(input === "SELL200")
    {
        btnActive.removeAttribute('disabled');
    }
    else
    {
        btnActive.disabled = true;
    }
}

// document.getElementById("coupon-btn").addEventListener('click',function discount(value){
//         if(value >0)
//         {
//             const discountValue = (value/100)*20;
//             const total = value - discountValue;
//             return total;
//         }
    
// })

// function setToThePurchaseField(total)
// {

// }