/*var items2 = [];
for (var i = 0; i <items.length; i++){
  for (var j =0; j < lostOrders.length; j++) {
    var orderId = "RANGE-yhst-50863389838911-" + items[i].Order_ID;
    if (orderId === lostOrders[j]) {
     
      items2.push(orders[i]);
    }
  }
}


var orders2 = [];
for (var i = 0; i <orders.length; i++){
  for (var j =0; j < lostOrders.length; j++) {
    var orderId = "RANGE-yhst-50863389838911-" + orders[i].Order_ID;
    if (orderId === lostOrders[j]) {
     
      orders2.push(orders[i]);
    }
  }
}
*/

function getLineItems(item) {

  var all_items = [];
  
  for (var k=0; k < items2.length; k++) { 
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
      size:items[k].Product_Code
    }
    };
    
    
    all_items.push(singleItem);
}    
} 
    
   
  }
 

 return all_items;
}

var allOrders = [];

for (var i = 0; i < orders2.length; i++) {
  
  var fullName = orders2[i].Bill_Name.split(' ')
  var newOrder = {
  order_id: "RANGE-yhst-50863389838911-" + orders2[i].Order_ID,
              order_date: orders2[i].Date,
              order_total: orders2[i].Total,
              order_discount: '$0.00',
              order_tax: "$0.00",
              order_shipping: orders2[i].Shipping_Charge,
              contact: {
                name: orders2[i].Bill_Name,
                billing: {
                  company: "",
                  street1: orders2[i].Bill_Address_1,
                  street2: orders2[i].Bill_Address_2,
                  city: orders2[i].Bill_City,  
                  state: orders2[i].Bill_State,
                  zip: orders2[i].Bill_Zip,
                  country: orders2[i].Bill_Country,
                  country_iso: orders2[i].Bill_Country
                },
                shipping: {
                  company: '',
                  street1: orders2[i].Ship_Address_1,
                  street2: orders2[i].Ship_Address_2,
                  city: orders2[i].Ship_City,
                  state: orders2[i].Ship_State,
                  zip: orders2[i].Ship_Zip,
                  country: orders2[i].Ship_Country.slice(3),
                  country_iso: orders2[i].Ship_Country.slice(0,2)
                },
                people: {
                  firstname: fullName[0],
                  lastname: fullName[fullName.length-1],
                  email: orders2[i].Email,
                  phone: orders2[i].Ship_Phone
                }
              }
              };
              //console.log(getLineItems(orders2[i].Order_ID))
            newOrder.line_items = getLineItems(orders2[i].Order_ID)
             // allOrders.push(newOrder);
             Stitch.createSalesOrder(newOrder);
             //console.log(newOrder.order_id);
          }

  //console.log(allOrders)