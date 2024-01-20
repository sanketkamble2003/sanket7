function validate() {
    var Name = document.getElementById("name");
    var email = document.getElementById("email");
    var Phone = document.getElementById("phone_number");
    var Address=document.getElementById("address");
    var Select=document.getElementById("dropdown");
    var Radio=document.my_form.source;
    var Checkbox=document.my_form.option;
    var Feedback=document.getElementById("feedback");
    var Form=document.getElementsByTagName("form");
    var i;

    //validating a Name 
    if (Name.value == "") {
        alert("Enter a Valid Name")
        return false;
    }


    //validating a Phone number
    if(Phone.value.length != 10)
    {
        alert("Invalid length of Phone number")
        return false
    }
    for(i=0;i<Phone.value.length;i++)
    {
        var ch=Phone.value.charAt(i);
        if((ch<"0")||(ch>"9"))
        {
            alert("Invalid Phone number")
            return false;
        }
    }

    //validating  an address
    if(Address.value=="")
    {
        alert("Enter a Proper address")
        return false;
    }

    //validating a select section
    if(Select.value=="Select current role")
    {
        alert("Please select your current role")
        return false;
    }

    //validating a radio button
    for(var j=0;j<Radio.length;j++)
    {
        if(Radio[j].checked)
        {

           break;
        }

    }
    if(j==Radio.length)
    {
        alert("Please select any one option")
        return false;
    }

    //validating a check box
    var CheckValid=false;
    for(var i=0;i<Checkbox.length;i++)
    {
        if(Checkbox[i].checked)
        {
            CheckValid=true;
            break;

        }
    }
    if(CheckValid==false)
    {
        alert("Please select at least one checkbox")
        return false;
    }

    //validatting textarea section
    if(Feedback.value.length<15)
    {
        alert("Please describe your experience in at least 15 charcters")
        return false;
    }

    //validating an email
    var mailformat =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.value.match(mailformat)) 
    {

        return true;
    }
    else
    {
        alert("Invalid email address")
        return false;
    }


}
//alert message after submitting the form
var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {

  alert("Are you sure to submit the form?");
});