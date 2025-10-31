const validaCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, "");

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
};

const exibeErro = (campo, mensagem) => {
    removeErro(campo);

    campo.classList.add('invalido');

    const erroElement = document.createElement('div');
    erroElement.classList.add('alert', 'alert-alerta', 'msg-erro');
    erroElement.textContent = mensagem;

    campo.parentNode.insertBefore(erroElement, campo.nextSibling);

    campo.classList.add('invalido'); 
};

const removeErro = (campo) => {
    const proximoElemento = campo.nextElementSibling;
    if (proximoElemento && proximoElemento.classList.contains('msg-erro')) {
        proximoElemento.remove();
    }
    campo.classList.remove('invalido');
};


const setupValidacaoCadastro = () => {
    
    const formCadastro = document.getElementById('formCadastro');
    const cpfInput = document.getElementById('cpf');
    
    if (!formCadastro) return;
    
    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        let formularioValido = true;

        removeErro(cpfInput);
        if (!validaCPF(cpfInput.value)) {
            exibeErro(cpfInput, 'CPF inválido. Verifique os 11 dígitos numéricos.');
            formularioValido = false;
        }

        formCadastro.querySelectorAll('[required]').forEach(campo => {
            removeErro(campo);

            if (!campo.checkValidity()) {
                const msg = campo.validationMessage || `O campo ${campo.name} é obrigatório ou está inválido.`;
                exibeErro(campo, msg);
                formularioValido = false;
            }
        });
        
        if (formularioValido) {
            formCadastro.reset();
            alert("Cadastro realizado com sucesso! Em uma aplicação real, os dados seriam enviados.");
            
        }
    });
};

window.setupValidacaoCadastro = setupValidacaoCadastro; 

document.addEventListener('DOMContentLoaded', setupValidacaoCadastro);