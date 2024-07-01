document.querySelectorAll('.chart-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.chart-container').forEach(container => {
            container.classList.remove('active');
        });
        document.getElementById(button.dataset.chart).classList.add('active');
    });
});


