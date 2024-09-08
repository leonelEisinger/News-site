
document.getElementById("search").addEventListener("click", function(e) {
    e.preventDefault();
    

    let searchField = document.getElementById("searchField");
    if (!searchField) {

        let searchForm = document.createElement("div");
        searchForm.setAttribute("id", "searchForm");
        searchForm.innerHTML = `
            <input type="text" id="searchField" placeholder="Buscar notícias..." style="padding: 5px; font-size: 16px;">
            <button id="searchButton" style="padding: 5px 10px; font-size: 16px;">Buscar</button>
        `;
        
        let banner = document.getElementById("banner");
        banner.parentNode.insertBefore(searchForm, banner.nextSibling);
        
        document.getElementById("searchButton").addEventListener("click", function() {
            let searchTerm = document.getElementById("searchField").value;
            if (searchTerm) {
                window.location.href = `#?q=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
});

// Seleciona o formulário e o campo de mensagem
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const registerLink = document.getElementById('registerLink');

// Função para exibir a mensagem de login realizado com sucesso
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginMessage.textContent = "Login realizado com sucesso!";
    loginMessage.style.color = "green";
});

refForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginMessage.textContent = "Cadastro realizado com sucesso!";
    loginMessage.style.color = "green";
});