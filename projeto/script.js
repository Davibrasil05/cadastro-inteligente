const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
// Ouve o evento quando o usuário SAI do campo
nome.addEventListener('blur', () => validarCampo(nome, validarNome));
email.addEventListener('blur', () => validarCampo(email, validarEmail));
senha.addEventListener('input', () => validarCampo(senha, validarSenha));
// Função genérica de validação
function validarCampo(input, funcaoValidadora) {
const msgErro = document.getElementById(input.id + '-error');
const resultado = funcaoValidadora(input.value);
if (!resultado.valido) {
input.classList.add('error');
input.classList.remove('success');
msgErro.textContent = resultado.mensagem;
} else {
input.classList.remove('error');
input.classList.add('success');
msgErro.textContent = '';
}
}
// Validações específicas
function validarNome(valor) {
if (!valor.trim()) return { valido: false, mensagem: '⚠️ Nome é obrigatório' };
if (valor.length < 3) return { valido: false, mensagem: '⚠️ Mínimo 3 caracteres' };
return { valido: true };
}
function validarEmail(valor) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!valor) return { valido: false, mensagem: '⚠️ E-mail obrigatório' };
if (!regex.test(valor)) return { valido: false, mensagem: '⚠️ Formato inválido' };
return { valido: true };
}
function validarSenha(valor) {
    const bar = document.getElementById('strength-bar');
    let forca = 0;

    // Critérios
    if (valor.length >= 8) forca++;
    if (/[A-Z]/.test(valor)) forca++;
    if (/[0-9]/.test(valor)) forca++;
    if (/[^A-Za-z0-9]/.test(valor)) forca++; // Caractere especial

    // Atualiza a interface visual da barra
    bar.className = 'strength-bar'; // Limpa classes anteriores
    
    if (valor.length > 0) {
        if (forca === 1) bar.classList.add('fraca');
        else if (forca === 2) bar.classList.add('razoavel');
        else if (forca === 3) bar.classList.add('boa');
        else if (forca === 4) bar.classList.add('forte');
    }

    // Retorno para a função validarCampo original
    if (valor.length < 8) return { valido: false, mensagem: '⚠️ Mínimo 8 caracteres' };
    if (!/[A-Z]/.test(valor)) return { valido: false, mensagem: '⚠️ Precisa de 1 letra maiúscula' };
    if (!/[0-9]/.test(valor)) return { valido: false, mensagem: '⚠️ Precisa de 1 número' };
    if (!/[^A-Za-z0-9]/.test(valor)) return { valido: false, mensagem: '⚠️ Precisa de 1 caractere especial' };

    return { valido: true };
}