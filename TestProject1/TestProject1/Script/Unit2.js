function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  let listView = mainForm.OrdersView;
  listView.Click(202, 111);
  let toolBar = mainForm.ToolBar;
  toolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(65, 11);
  textBox.SetText("ბონდო");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("წერეთელი");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("თბილისი");
  textBox.Keys("[Tab]");
  textBox = orderForm.Region;
  textBox.SetText("თბილისი");
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText("123");
  textBox.Keys("[Tab]");
  groupBox.Visa.Keys("[Tab]");
  groupBox.CardNo.SetText("123456");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpEqual, "1");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Date, "wTime", cmpEqual, "00:00:00");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "ბონდო");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Street, "wText", cmpEqual, "წერეთელი");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Region, "wText", cmpEqual, "თბილისი");
//  state was changed into Region and parent Group was changed with OrderForm
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.City, "wText", cmpEqual, "თბილისი");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Zip, "wText", cmpEqual, "123");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "WndCaption", cmpEqual, "Visa");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "wText", cmpEqual, "123456");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ExpDate, "wTime", cmpEqual, "00:00:00");
  orderForm.ButtonOK.ClickButton();
  Tables.OrdersView0.Check();
  listView.ClickItem("ბონდო", "MyMoney");
  mainForm.ToolBar.ClickItem(6, false);
  orders.dlgConfirmation.btnYes.ClickButton();
  Tables.OrdersView01.Check();
}

