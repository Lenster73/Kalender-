// Инициализация Flatpickr с возможностью выбора диапазона дат
flatpickr("#dateRangePicker", {
    mode: "range",
    dateFormat: "d-m-Y",
    locale: {
        rangeSeparator: " по "
    }
});

function submitDateRange() {
    const selectedDates = document.getElementById('dateRangePicker').value;
    if (selectedDates) {
        alert('Вы выбрали диапазон дат: ' + selectedDates);
    } else {
        alert('Пожалуйста, выберите диапазон дат.');
    }
}

