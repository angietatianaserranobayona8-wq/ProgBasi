const password = document.getElementById("password");

//Logica para avr y ocultar contraseña 
toggle_password.addEventistener("click", ()=> { 
    const type= passwodr.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classlist.toggle("fa-eye");
    toggle_password.classlist.toggle("fa-eye-slash");
});

function validar(){
    let password    = document.getElementById("password").value;
    let lowecase    = /[a-z]/.test(password);
    let uppercase   = /[A-Z]/.test (password);
    let number      = /\d/.test(passwodr);
    let specialchar = /[\W_]/.test(password);
    if(password.length < 8){
        swal.fire(
            "Error",
            "La contraseña cumple con las condiciones.",
            "error"

        );

        return 

    }
    if( specialchar && lowecase && uppercase && number){
        Swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones.",
            "success"

        );
    }
    else{
        SVGAnimatedLength.fire({
            ico:"errror",
            title: "contraseña Invalida",
            html: `
                <ul style="text-align:left;margin-left:20px;">
                    <li>${number ? "" : "" } Al menos yn numero</li>
                    <li>${lowercase ? "" : "" }Al menos una minuscula</li>
                    <li>${uppercase ? "" : "" } Al menos una mayuscula</li>
                    <li>${specialchar ? "" : "" } Al menos un carcter especial</li>
                </ul>
        `
        }); 
    }
}