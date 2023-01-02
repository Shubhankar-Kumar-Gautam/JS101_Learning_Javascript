// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

const data_base_username = "thetroublemaker@123@#";
const data_base_password = "QWE123#$";

let entered_user_name = "thetroublemaker@123@#";
let entered_user_password = "QWE123#$";

if ((data_base_username == entered_user_name) && (data_base_password == entered_user_password))
{
  console.log("LOGIN SUCCESSFUL")
}
else if(data_base_username != entered_user_name)
{
  console.log("INCORRECT USERNAME")
}
else if(data_base_password != entered_user_password)
{
  console.log("INCORRECT PASSWORD")
}