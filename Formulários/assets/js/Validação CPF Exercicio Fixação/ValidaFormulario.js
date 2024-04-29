// import ValidaCPF from "./ValidaCPF.js";

// class ValidForms {
//     constructor() {
//         this.forms = document.querySelector(".formulario");
//         this.events();
//     }

//     events() {
//         this.forms.addEventListener("submit", (e) => {
//             this.handleSubmit(e);
//         });
//     }
//     async handleSubmit(e) {
//         e.preventDefault(); // Prevent form submission before validation

//         const validInput = this.inputIsValid();
//         const validPassword = this.passwordIsValid();
//         const validaCPF = this.cpfIsValid();

//         if (validInput && validPassword && validaCPF) {
//             try {
//                 await this.saveFormDataAsText(); // Espera salvar os dados do formulário como texto
//                 console.log("Dados do formulário salvos com sucesso!");
//             } catch (error) {
//                 console.error("Erro ao salvar os dados do formulário:", error);
//                 // Lidar com erros de salvamento
//             }
//         }
//     }

//     getFormData() {
//         const formData = new FormData(this.forms);
//         const jsonData = {};

//         formData.forEach((value, key) => {
//             jsonData[key] = value;
//         });

//         return jsonData;
//     }

//     // Função para salvar os dados do formulário em um arquivo de texto
//     saveFormDataAsText() {
//         return new Promise((resolve, reject) => {
//             const formData = this.getFormData();
//             const textData = Object.entries(formData)
//                 .map(([key, value]) => `${key}: ${value}`)
//                 .join("\n");

//             const blob = new Blob([textData], { type: "text/plain" });
//             const url = URL.createObjectURL(blob);

//             const a = document.createElement("a");
//             a.href = url;
//             a.download = "form_data.txt";
//             document.body.appendChild(a);
//             a.click();
//             document.body.removeChild(a);
//             URL.revokeObjectURL(url);

//             // Resolva a Promise depois que o download estiver completo
//             resolve();
//         });
//     }

//     cpfIsValid() {
//         const cpf = new ValidaCPF(this.forms.querySelector(".cpf").value);
//         let input;
//         for (input of this.forms.querySelectorAll(".cpf")) {
//             if (!cpf.valida()) {
//                 this.createError(input, "CPF inválido");
//                 return false;
//             } else {
//                 this.removeError(input);
//             }
//         }
//         return true;
//     }

//     inputIsValid() {
//         let valid = true;

//         for (let input of this.forms.querySelectorAll(".validar")) {
//             if (!input.value) {
//                 this.createError(input, "Campo obrigatório"); // Display error message
//                 valid = false;

//             } else {
//                 this.removeError(input); // Remover mensagem de erro se o campo estiver preenchido
//             }
//         }
//         return valid; // Return the validation result
//     }

//     passwordIsValid() {
//         let valid = true;

//         for (let input of this.forms.querySelectorAll(".senha")) {
//             if (
//                 !/[A-Z]/.test(input.value) ||
//                 !/\d/.test(input.value) ||
//                 !/[\W_]/.test(input.value)
//             ) {
//                 this.createError(
//                     input,
//                     "Campo deve conter pelo menos uma letra maiúscula, um número e um símbolo"
//                 ); // Display error message
//                 valid = false;
//             } else {
//                 this.removeError(input); // Remover mensagem de erro se a senha for válida
//             }
//         }
//         return valid;
//     }

//     createError(input, msg) {
//         this.removeError(input);

//         // Create error message element
//         const div = document.createElement("div");
//         div.innerHTML = msg;
//         div.classList.add("error-text");

//         // Insert error message after the input
//         input.insertAdjacentElement("afterend", div);
//     }

//     removeError(input) {
//         const error = input.nextElementSibling;
//         if (error && error.classList.contains("error-text")) {
//             error.remove();
//         }
//     }

//     uservalid(input){
//         const user = input.value;
//         let valid = true;
//         if(user.length < 3 || user.length > 12){
//             this.createError(input, "Usuário precisa ter entre 3 e 12 caracteres");
//             valid = false;
//         }else{
//             this.removeError(input);
//         }
//         return valid;
//     }
// }

// const validForms = new ValidForms();
// console.log(validForms);

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", (e) => {
            this.handleSubmit(e);
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            try {
                const formData = this.getFormData();
                const jsonData = JSON.stringify(formData, null, 2); // Converte os dados do formulário em JSON
                document.getElementById("json-output").innerText = jsonData; // Atualiza o elemento HTML com os dados JSON
                await this.saveFormDataAsText()
                await alert("Formulário enviado.");
                await this.formulario.submit(); // Espera salvar os dados do formulário como texto
                console.log("Dados do formulário salvos com sucesso!");
                }
                
            catch (error) {
                console.error("Erro ao salvar os dados do formulário:", error);
                // Lidar com erros de salvamento
            }
            
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector(".senha");
        const repetirSenha = this.formulario.querySelector(".repetir-senha");

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, "Campos senha e repetir senha precisar ser iguais.");
            this.criaErro(
                repetirSenha,
                "Campos senha e repetir senha precisar ser iguais."
            );
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres.");
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (campo.classList.contains("cpf")) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains("usuario")) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(
                campo,
                "Nome de usuário precisar conter apenas letras e/ou números."
            );
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, "CPF inválido.");
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement("afterend", div);
    }

    saveFormDataAsText() {
        return new Promise((resolve, reject) => {
            const formData = this.getFormData();
            const jsonData = JSON.stringify(formData, null, 2); // Converte os dados do formulário em JSON
    
            // Cria um Blob a partir dos dados JSON
            const blob = new Blob([jsonData], { type: "application/json" });
    
            // Cria um URL temporário para o Blob
            const url = URL.createObjectURL(blob);
    
            // Pede ao usuário para confirmar o download
            if (confirm("Deseja baixar o arquivo de dados do formulário?")) {
                // Se o usuário confirmar, cria um elemento de link <a> para permitir o download do arquivo
                const a = document.createElement("a");
                a.href = url;
                a.download = "form_data.json"; // Define o nome do arquivo
    
                // Simula o clique no link para iniciar o download
                a.click();
    
                // Revoga o URL temporário
                URL.revokeObjectURL(url);
    
                // Resolva a Promise depois que o download estiver completo
                resolve();
            } else {
                // Se o usuário clicar em "Cancelar", rejeita a Promise
                reject(new Error("Download cancelado pelo usuário."));
            }
        });
    }

    getFormData() {
        const formData = new FormData(this.formulario);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
            console.log(`Key: ${key}, Value: ${value}`);
        });

        return jsonData;
    }
}

const valida = new ValidaFormulario();
