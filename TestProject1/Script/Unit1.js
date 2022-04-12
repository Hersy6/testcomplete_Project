function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.OrdersView.Click(133, 63);
  mainForm.ToolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(45, 7);
  textBox.SetText("tornike");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("ketskhoveli");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("tbilisi");
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("tbilisi");
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText("0123");
  textBox.Keys("[Tab]");
  groupBox.Visa.Keys("[Tab]");
  groupBox.CardNo.SetText("123456789");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wItemCount", cmpEqual, 3);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "tornike");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "Enabled", cmpEqual, true);
  orderForm.ButtonOK.ClickButton();
}