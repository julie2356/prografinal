document.addEventListener("DOMContentLoaded", () => {
    const panelInput = document.getElementById('panel-input');

    function btnNbrClicked(event) {
        const value = event.target.innerText;
        panelInput.value += value;
    }

    function btnDeleteClicked() {
        panelInput.value = panelInput.value.slice(0, -1);
    }

    function btnResetClicked() {
        panelInput.value = '';
    }

    function btnEqualClicked() {
        try {
            const result = eval(panelInput.value.replace('x', '*').replace('/', '/'));
            panelInput.value = result;
        } catch (error) {
            panelInput.value = 'Error';
        }
    }

    document.querySelectorAll('.my-btn').forEach(button => {
        if (button.innerText === 'DEL') {
            button.addEventListener('click', btnDeleteClicked);
        } else if (button.innerText === 'RESET') {
            button.addEventListener('click', btnResetClicked);
        } else if (button.innerText === '=') {
            button.addEventListener('click', btnEqualClicked);
        } else {
            button.addEventListener('click', btnNbrClicked);
        }
    });    
});

function addHistory(equation, result) {
    const historyListElement = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `<span>${equation} = ${result}</span>`;
    historyListElement.appendChild(historyItem);
}

document.getElementById('history-btn').addEventListener('click', function() {
    const history = document.getElementById('history');
    if (isHistoryVisible) {
        history.classList.add('hidden');
        this.textContent = 'History';
    } else {
        history.classList.remove('hidden');
        this.textContent = 'Hide History';
    }
    isHistoryVisible = !isHistoryVisible;
});