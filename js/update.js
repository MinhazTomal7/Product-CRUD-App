
fillExistingData()
async function fillExistingData(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")

    let URL = `http://164.68.107.70:6060/api/v1/ReadProductById/${id}`;
    document.getElementById("loader").classList.remove("d-none")
    let res = await axios.get(URL)
    document.getElementById("loader").classList.add("d-none")


    if(res.status===200){
        let items = res.data["data"][0]

        document.getElementById("ProductID").value = items["_id"]
        document.getElementById("ProductName").value = items["ProductName"]
        document.getElementById("ProductCode").value = items["ProductCode"]
        document.getElementById("ProductImg").value = items["Img"]
        document.getElementById("unitPrice").value = items["UnitPrice"]
        document.getElementById("ProductQty").value = items["Qty"]
        document.getElementById("totalPrice").value = items["TotalPrice"]
    }

}

async function updateData() {
    let ProductID = document.getElementById("ProductID").value;
    let ProductName = document.getElementById("ProductName").value;
    let ProductCode = document.getElementById("ProductCode").value;
    let ProductImg = document.getElementById("ProductImg").value;
    let ProductQty = document.getElementById("ProductQty").value;
    let unitPrice = document.getElementById("unitPrice").value;
    let totalPrice = document.getElementById("totalPrice").value;

   let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${ProductID}`

    document.getElementById("loader").classList.remove("d-none")

    let res = await axios.post(URL,
        {
            Img: ProductImg,
            ProductCode: ProductCode,
            ProductName: ProductName,
            Qty: ProductQty,
            TotalPrice: totalPrice,
            UnitPrice: unitPrice
        })

    document.getElementById("loader").classList.add("d-none")

    if(res.status===200){
        window.location = "index.html"
    }
    else{
        alert("error")
    }

}