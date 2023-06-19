export default function Validation(values){
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(values.email === ""){
        errors.email = "Email is required";
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid";
    }
    else {
        errors.email = "";
    }

    if(values.password === ""){
        errors.password = "Password is required";
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "Password is invalid";
    }
    else {
        errors.password = "";
    }

    return errors;
}