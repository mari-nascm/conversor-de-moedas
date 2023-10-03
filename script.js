const convertButton = document.querySelector(".convert-button")
const selectFrom = document.querySelector(".select-from")
const selectTo = document.querySelector(".select-to")
const currencyFrom = document.querySelector(".currency-from")
const currencyTo = document.querySelector(".currency-to")
const currencyImageFrom = document.querySelector(".currency-img-from")
const currencyImageTo = document.querySelector(".currency-img-to")


function changeCurrency(){
    if(selectTo.value == "dolar"){
        currencyTo.innerHTML = "Dolar Americano"
        currencyImageTo.src = "./img/usa.png"
    }
    if(selectTo.value == "euro"){
        currencyTo.innerHTML = "Euro"
        currencyImageTo.src = "./img/euro.png"
    }
    if(selectTo.value == "libra"){
        currencyTo.innerHTML = "Libra"
        currencyImageTo.src = "./img/libra.png"
    }
}

function convertValues(){
    const inputValue = document.querySelector(".input-value").value
    const currencyValueFrom = document.querySelector(".currency-value-from")
    const currencyValueTo = document.querySelector(".currency-value-to")

    // cotação 03/10/2023
    const dolarToday = 5.09
    const euroToday = 5.32
    const libraToday = 6.14
    

    if(selectFrom.value == "real" && selectTo.value == "dolar"){
        currencyValueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputValue)

            currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"}).format(inputValue / dolarToday)
    }

    if(selectFrom.value == "real" && selectTo.value == "euro"){
        currencyValueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputValue)

            currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputValue / euroToday)
    }

    if(selectFrom.value == "real" && selectTo.value == "libra"){
        currencyValueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputValue)

            currencyValueTo.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"}).format(inputValue / libraToday)
    }



}
