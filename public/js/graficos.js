document.querySelectorAll('.chart-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.chart-container').forEach(container => {
            container.classList.remove('active');
        });
        document.getElementById(button.dataset.chart).classList.add('active');
    });
});

new Chart(document.getElementById('ingresosPorDiaChart'), {
    type: 'bar',
    data: {
        labels: ingresosPorDiaData.map(item => new Date(item.fecha).toLocaleDateString()),
        datasets: [{
            data: ingresosPorDiaData.map(item => item.ingresos_totales),
            backgroundColor: 'rgba(0, 225, 176, 0.5)',
            borderColor: 'rgba(0, 225, 176, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

new Chart(document.getElementById('ventasPorProductoChart'), {
    type: 'bar',
    data: {
        labels: ventasPorProductoData.map(item => item.nombre),
        datasets: [{
            data: ventasPorProductoData.map(item => item.cantidad_vendida),
            backgroundColor: 'rgba(220, 127, 155, 0.5)',
            borderColor: 'rgba(220, 127, 155, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

new Chart(document.getElementById('ventasPorCategoriaChart'), {
    type: 'bar',
    data: {
        labels: ventasPorCategoriaData.map(item => item.tipo),
        datasets: [{
            data: ventasPorCategoriaData.map(item => item.cantidad_ventas),
            backgroundColor: 'rgba(52, 127, 196, 0.5)',
            borderColor: 'rgba(52, 127, 196, 1)',
            borderWidth: 1
        }]
    }
});

new Chart(document.getElementById('ventasPorDiaChart'), {
    type: 'bar',
    data: {
        labels: ventasPorDiaData.map(item => new Date(item.fecha).toLocaleDateString()),
        datasets: [{
            data: ventasPorDiaData.map(item => item.total_vendido),
            backgroundColor: 'rgba(52, 127, 196, 0.5)',
            borderColor: 'rgba(52, 127, 196, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

new Chart(document.getElementById('comprasPorEstadoChart'), {
    type: 'bar',
    data: {
        labels: comprasPorEstadoData.map(item => item.estado),
        datasets: [{
            data: comprasPorEstadoData.map(item => item.cantidad_ventas),
            backgroundColor: 
                'rgba(220, 127, 155, 0.5)',
            borderColor: 
                'rgba(220, 127, 155, 1)',
            borderWidth: 1
        }]
    }
});


