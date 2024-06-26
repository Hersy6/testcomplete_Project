﻿function getDataFromDb(queryString, fieldNames)
{
  Delay(2000);
  var Qry1;
  const results = new Map();

  //Create a query
  Qry1 = ADO.CreateADOQuery();
  
  //Specify the connection string
  Qry1.ConnectionString = "Provider=SQLOLEDB.1;Server=localhost;" +
                        "Database=orders;Uid=testAutomation; Pwd=Testautomation123;"

  //Specify the SQL expression
  Qry1.SQL = queryString; 
            
  //Execute the query
  Qry1.Open();
  
  //Process results and insert data into the test log
  Qry1.First();

  for (j=0;!Qry1.EOF;j++) 
  {
    for(i=0;i<fieldNames.length;i++)  
      results.set(fieldNames[i] + j.toString(), Qry1.FieldByName(fieldNames[i]).Value)
      
    Qry1.Next();
  }

  //Closes the query
  Qry1.Close();
  return results; 
}

module.exports.getDataFromDb = getDataFromDb