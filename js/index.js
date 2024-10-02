async function getList() {
    document.getElementById("loader").classList.remove("d-none")

    let URL = `http://164.68.107.70:6060/api/v1/ReadProduct/`
    let res = await axios.get(URL)
    document.getElementById("loader").classList.add("d-none")

    if (res.status === 200) {
        let list = res.data["data"]
        list.forEach((item) => {
            document.getElementById("itemList").innerHTML +=
                `
                <tr>
               <td>${item["ProductName"]} </td> 
               <td>${item["ProductCode"]} </td> 
               <td>${item["Qty"]} </td> 
               <td>${item["UnitPrice"]} </td>             
               <td>${item["TotalPrice"]} </td> 
               <td><button onclick="deleteItem('${item['_id']}')">Delete</button> </td>
               <td><button onclick="updateItem('${item['_id']}')">Update</button> </td> 
                </tr>                       
                `

        })
    } else {
        alert("wrong")
    }
}

   async function deleteItem(id){
       let URL = `http://164.68.107.70:6060/api/v1/DeleteProduct/${id}`;
       let res = await axios.get(URL)
       if(res.status===200){
           document.getElementById("itemList").innerHTML = ""
           await getList()
       }
    }


    async function updateItem(id){
        window.location = `update.html?id=${id}`;
    }



getList()