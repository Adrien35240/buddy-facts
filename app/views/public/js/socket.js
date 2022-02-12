const socket = io();
function setWebSocket() {
    socket.on('message', function (msg) {
        const factsContainer = document.getElementById('ul--facts__container')
        factsContainer.innerHTML = ''
        for (item of msg) {
            const li = document.createElement('li')
            li.classList.add("li")
            li.innerHTML = item
            factsContainer.appendChild(li)
        }
    });
}
window.addEventListener('load', () => {
    setWebSocket()
})