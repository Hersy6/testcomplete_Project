var SQLSetup = require("SQLSetup")

function OrdersUsingSQL(){
  
  const fields = ["customerName", "street", "city", "state"];
  let customer = SQLSetup.getDataFromDb("SELECT * FROM [orders].[dbo].[orders]", fields);
      
  for(i=0; i<customer.size/fields.length; i++){
  
    var customerName = customer.get('customerName'+i.toString())
    var city = customer.get('city'+i.toString())
    var street = customer.get('street'+i.toString())
    var state = customer.get('state'+i.toString())
    
    if(!Sys.WaitProcess("Orders").Exists)
    {
      TestedApps.Orders.Run();
    }
    
    let orders = Aliases.Orders;
    orders.MainForm.MainMenu.Click("Orders|New order...");
    
    let orderForm = orders.OrderForm;
    let groupBox = orderForm.Group;
    let textBox = groupBox.Customer;
    textBox.SetText(customerName);
    textBox = groupBox.Street;
    textBox.SetText(street);
    textBox = groupBox.City;
    textBox.SetText(city);
    textBox = groupBox.State;
    textBox.SetText(state);
    orderForm.ButtonOK.ClickButton();
  }
  
    TestedApps.Orders.Terminate();
}