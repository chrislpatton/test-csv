


/*
for (var i = 0; i < lostOrders.length; i++) {
  for (var j = 0; j < allOrders.length; j++) {
    if(allOrders[j].order_id === lostOrders[i]) {
      recovered.push(savedOrders[j]);
    }
  }
}*/
//console.log("Orders ", orders);
//console.log("Items ", items);
//var newCsv = [];

/*var order = {
              order_id: "RANGE-yhst-50863389838911-" + orderNum,
              order_date: orderDate,
              order_total: orderTotal,
              order_discount: '',
              order_tax: taxAmount,
              order_shipping: shippingTotal,
              contact: {
                name: contactName,
                billing: {
                  company: '',
                  street1: billStreet,
                  street2: billStreet2,
                  city: actualBillCity1,  
                  state: actualBillState,
                  zip: actualBillZip,
                  country: country,
                  country_iso: country
                },
                shipping: {
                  company: '',
                  street1: shipStreet,
                  street2: shipStreet2,
                  city: actualShipCity1,
                  state: actualShipState,
                  zip: actualShipZip,
                  country: country,
                  country_iso: country
                },
                people: {
                  firstname: contactFirst,
                  lastname: contactLast,
                  email: contactEmail,
                  phone: phoneNumber
                }
              },
              line_items: 
                allItems
            };

for (var i = 0; i < orders.length; i++) {
   var newOrder = orders[i];
  for (j = 0; j <items.length;j++) {
   var line_items = []
   var ln_items = {
        sku: items[j].Product_Code,
        name: items[j].Product_ID,
        unitPrice: items[j].Unit_Price,
        quantity: items[j].Quantity
};
    for (var k = 0; k < options.length; k++){  
     var size = {
      Size: options[k].Option_Value
    }
    ln_items.size = size;
    line_items.push(ln_items);
    //console.log(line_items);
    newOrders.orderItems = line_items;
    console.log(newOrders);
  }
  }

}*/


for (var i = 0; i < options.length; i++){
  for (var j=0; j < items.length; j++) {
  var line_items = [];
  var item = {
    sku: items[i].Product_Code,
    name: items[i].Product_ID,
    unitPrice: items[i].Unit_Price,
    quantity:items[i].Quantity
    }
  if (options[i].Order_ID === items[j].Order_ID) {
    var size = {
     size: options[j].Option_Value
    };
    item.size = size;
    line_items.push(item);
console.log(line_items);
    }
  }
}





/*var fields = ['order_id', 'order_total', 'order_tax', 'order_shipping','contact.name','contact.billing.company','contact.billing.street1','contact.billing.street2', 'contact.billing.city','contact.billing.state','contact.billing.zip','contact.billing.country','contact.billing.country_iso','contact.shipping.company','contact.shipping.street1','contact.billing.street2', 'contact.shipping.street2','contact.shipping.city','contact.shipping.state','contact.shipping.zip','contact.shipping.country','contact.shipping.country_iso','contact.people.firstname','contact.people.lastname','contact.people.email','contact.people.phone','line_items[0].sku','line_items[0].name','line_items[0].description','line_items.category','line_items.other','line_items[0].unitPrice','line_items[0].salePrice','line_items[0].quantity','line_items[0].totalPrice','line_items[0].imageUrl','line_items[0].attributes.size'];


var csv = json2csv({ data: recovered, fields: fields });

  
$('#save-btn').click(function(){
var blob = new Blob([csv],{type:'text/plain/charset=utf-8'});
saveAs(blob,"testfile.csv");

})*/