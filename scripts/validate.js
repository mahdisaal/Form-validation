//validate module
function validate(e){

    e.preventDefault();

    var valid=true;

    if (profile.firstName.value ===""){
    document.querySelector('#fNameError').textContent="*Please Enter the First Name*";
        valid = false;
    }

    if(profile.lastName.value == ""){
    document.querySelector('#lNameError').textContent="*Please Enter the Last Name*";
        valid=false;
    }

    if(profile.address1.value == ""){
    document.querySelector('#address1Error').textContent="Please Enter the address";
        valid=false;
    }
    
    if(profile.city.value == ""){
    document.querySelector('#cityError').textContent="Please Enter your city";
        valid=false;
    }

    if(profile.province.options.selectedIndex === 0){
        valid = false;
        document.querySelector('#provinceError').textContent="Please select at least one province";
    }

    if(profile.country.options.selectedIndex === 0){
        valid = false;
        document.querySelector('#countryError').textContent="Please select at least one country";
    }
    

    if(valid){
        alert("Thank you so much!");
    }

    return valid;
};
