function OrdersUsingExcel()
{

  Project.Variables.ExcelVar.Reset()

  while(!Project.Variables.ExcelVar.IsEOF()) 
  {
    let excel = Project.Variables.ExcelVar.Value
    var customerName = excel("customerName")
    var city = excel("city")
    var street = excel("street")
    var state = excel("state")

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
  
    Project.Variables.ExcelVar.Next()
  }
  TestedApps.Orders.Terminate();
}