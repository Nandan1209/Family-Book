var images = ["DSC_8415 US visa email size.JPG","DSC_8417 US visa email size.JPG","DSC_8413 US visa email size.JPG"];
var names = ["Nandagopan Nair","Lakshmi P.V","Anoop Radhakrishnan"];
var i = 0;

function update(){
    i++;
    var number_of_family_members_in_array = 3
    if (i > number_of_family_members_in_array ) {
       i = 0; 
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_member_name").innerHTML = updatedname;
}