function validateForm() {
//     const name =
//         document.getElementById("fname").value;
//     const email =
//         document.getElementById("email").value;
//     const email_RFC =
//         document.getElementById("email RFC").value;
//     const ID =
//         document.getElementById("id").value;
//     const id_ =
//         document.getElementById("id_").value;
//     const phone1 =
//         document.getElementById("phone1").value;
//     const phone2 =
//         document.getElementById("phone2").value;
//     const pincode =
//         document.getElementById("pincode").value;
//     const pincode2 =
//         document.getElementById("pincode2").value;
//     const description =
//         document.getElementById("description").value;
//     const submit =
//         document.getElementById("agree").checked;
//         console.log(1)



// nameError.textContent = "";
// emailError.textContent = "";
// email_RFCError.textContent = "";
// idError.textContent = "";
// id_Error.textContent = "";
// phone1Error.textContent = "";
// phone2Error.textContent = "";
// pincodeError.textContent = "";
// pincode2Error.textContent = "";
// descriptionError.textContent = "";
// subjectError.textContent = "";
// agreeError.textContent = "";

// let isValid = true;

// if (name === "" || /\d/.test(name)) {
//     nameError.textContent =
//         "Please enter min 2 characters long";
//     isValid = false;
// }

// if (email === "" || !email.includes("@")) {
//     emailError.textContent =
//         "Please enter email in the format x@a.xx";
//     isValid = false;
// }

// if (emailRFC === "" || !email.includes("@")) {
//     emailRFCError.textContent =
//         "Please enter email in the format x@a.xx";
//     isValid = false;
// }

// if (id === "" || id.length < 2) {
//     idError.textContent =
//         "Your ID needs to be between 2 and 128 characters long";
//     isValid = false;
// }
// if (id_ === ""  || id_.length < 2) {
//     id_Error.textContent =
//         "Please enter a valid id";
//     isValid = false;
// }
// if (phone1 === "" || phone1.length < 2) {
//     phone1Error.textContent =
//         "Please enter your phone in the format +380 (xx) xxx - xx - xx";
//     isValid = false;
// }
// if (phone2 === "" || phone2.length < 7) {
//     phone2Error.textContent =
//         "Please enter min 7 characters long";
//     isValid = false;
// }
// if (pincode === ""  || pincode.length < 8) {
//     pincodeError.textContent =
//         "Please enter pin code in the format xxxx-xxxx. Use only numbers";
//     isValid = false;
// }
// if (pincode2 === "" || pincode2.length < 8) {
//     pincode2Error.textContent =
//         "Your Pin Code needs to be 8 characters long";
//     isValid = false;
// }
// if (description === "" || description.length < 2) {
//     descriptionError.textContent =
//         "Please enter min 2 characters long";
//     isValid = false;
// }
// if (subject === "") {
//     subjectError.textContent =
//         "Please select your course.";
//     isValid = false;
// }

// if (!agree) {
//     agreeError.textContent =
//         "Please agree to the above information.";
//     isValid = false;
// }
// return isValid;
const inputs = [...document.querySelectorAll("input")] 
console.log(inputs)
}
validateForm()