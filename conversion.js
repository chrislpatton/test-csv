


function getLineItems(item) {

  var all_items = [];
  
  for (var k=0; k < items.length; k++) { 
  var size = items[k].Product_Code.split('-');
  if(items[k].Order_ID === item){ 
  if(items[k].Product_ID !== "Shipping" && items[k].Product_ID !=="Discount"){
  var singleItem = {
    sku: items[k].Product_Code,
    name: items[k].Product_ID,
    unitPrice: items[k].Unit_Price,
    salePrice:items[k].Unit_Price,
    quantity:items[k].Quantity,
    totalPrice:items[k].Unit_Price,
    shipping:0,
    tax:0,
    attributes: {
      size:size[1]
    }
    };
    
    
    all_items.push(singleItem);
}    
} 
    
   
  }
 

 return all_items;
}



for (var i = 0; i < orders.length; i++) {
  var fullName = orders[i].Name.split(' ')
  var newOrder = {
  order_id: "RANGE-yhst-50863389838911-" + orders[i].Order_ID,
              order_date: orders[i].Date,
              order_total: orders[i].Total,
              order_discount: '$0.00',
              order_tax: "$0.00",
              order_shipping: orders[i].Shipping_Charge,
              contact: {
                name: orders[i].Name,
                billing: {
                  company: "",
                  street1: orders[i].Bill_Address_1,
                  street2: orders[i].Bill_Address_2,
                  city: orders[i].Bill_City,  
                  state: orders[i].Bill_State,
                  zip: orders[i].Bill_Zip,
                  country: orders[i].Bill_Country,
                  country_iso: orders[i].Bill_Country
                },
                shipping: {
                  company: '',
                  street1: orders[i].Ship_Address_1,
                  street2: orders[i].Ship_Address_2,
                  city: orders[i].Ship_City,
                  state: orders[i].Ship_State,
                  zip: orders[i].Ship_Zip,
                  country: orders[i].Ship_Country.slice(3),
                  country_iso: orders[i].Ship_Country.slice(0,2)
                },
                people: {
                  firstname: fullName[0],
                  lastname: fullName[fullName.length-1],
                  email: orders[i].Email,
                  phone: orders[i].Ship_Phone
                }
              }
              };
            newOrder.line_items = getLineItems(orders[i].Order_ID)
              console.log(newOrder);
          }
console.log(getLineItems(orders[3].Order_ID))          



  
  