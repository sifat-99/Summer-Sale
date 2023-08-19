// document.getElementById("Card-4").addEventListener('click', function(){
//     calculateAllPrice("Card-4");

// })
let sum= 0;
function calculateAllPrice(card)
{
    
    const partiCularPriceString = card.childNodes[3].childNodes[5].childNodes[1].innerText;
    const particularUnitName = card.childNodes[3].childNodes[3].innerText;
    console.log(particularUnitName)
    const partiCularItemsPriceFirst = parseFloat(partiCularPriceString);
    sum = sum+partiCularItemsPriceFirst;
    document.getElementById("coupon-btn").addEventListener('click',function(){
        discount(sum);
        

    })
    
    toShow(sum,particularUnitName);
    toShowTotal(sum);
    ShowFinalPrice(sum);
    
}
function toShow(sum,particularUnitName)
{
    const updateBoxName = document.getElementById("PriceInput");
    const updateBoxValueString = updateBoxName.innerText;
    const updateBoxValue = parseFloat(updateBoxValueString);
    // console.log(updateBoxValue)
    sumNumber = parseFloat(sum);
    sumNumber = sumNumber.toFixed(2);
    updateBoxName.innerText = sumNumber+"TK";
    const ItemName = document.getElementById("NameInput");
    // console.log(particularUnitName)
    const count = ItemName.childElementCount;
    const p = document.createElement('p') ;
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}.  ${particularUnitName} `;

    ItemName.appendChild(p);
    ItemName.style.cssText = `
    font-size: 24px;
    color: #111;
    font-style: normal;
    font-weight: 500;
    padding-bottom: 24px;
  `;


}
function toShowDiscount(discount)
{
    const updateBoxName2 = document.getElementById("DiscountPrice");
    const updateBoxValue2 = updateBoxName2.innerText;
    // console.log(updateBoxValue2)
    discount = discount.toFixed(2);
        updateBoxName2.innerText = discount+"TK";
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
function discount(value)
{
    if(value>200)
    {
        const discountPrice = (value/100)*20;
        toShowDiscount(discountPrice);
        const AfterDiscountPrice = value - discountPrice;
        ShowFinalPrice(AfterDiscountPrice)
    }
    else
    {
        // toShowDiscount(value)
        // ShowFinalPrice(value)
    }
}

function toShowTotal(AfterDiscountPrice)
{
    const inputHTML = document.getElementById("PurchaseBtn");
    
    // console.log(TotalPrice)
    const btnActive = inputHTML.parentNode.childNodes[3];
    // console.log(btnActive)
    if(AfterDiscountPrice>0)
    {
        btnActive.removeAttribute('disabled');
    }
    else
    {
        btnActive.disabled = true;
    }
    }
function ShowFinalPrice(OverallPrice)
{
    const TotalPriceString = document.getElementById("TotalPrice");
    const TotalPrice = TotalPriceString.innerText;
    TotalPriceString.innerText = OverallPrice + "TK";
} 