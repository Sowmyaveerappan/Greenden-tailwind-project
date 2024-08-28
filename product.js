//selecting sidenav, menuicon//

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"

})
//Product search Functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

console.log("productlist",productlist)



search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()
    console.log("enteredValueUPPERCASE", enteredValue)

    for (count = 0; count < productlist.length; count = count + 1) {
        console.log("count",count)
        var productname = productlist[count].querySelector("h1").textContent
        console.log("productname",productname)

        console.log("test123",productname.toUpperCase().indexOf(enteredValue))
        console.log("test12345",productname[count].toUpperCase().indexOf(enteredValue))

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }

        else {
            productlist[count].style.display = "block"
        }
    }

})


