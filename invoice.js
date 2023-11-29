document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("invoice-form");
    const itemsTable = document.getElementById("invoice-items");
    const totalAmount = document.getElementById("total-amount");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Handle form submission, e.g., sending data to the server.
    });

    document.getElementById("add-item").addEventListener("click", function () {
        const newRow = itemsTable.insertRow(-1);
        const itemCell = newRow.insertCell(0);
        const descriptionCell = newRow.insertCell(1);
        const quantityCell = newRow.insertCell(2);
        const priceCell = newRow.insertCell(3);
        const totalCell = newRow.insertCell(4);

        itemCell.innerHTML = '<input type="text" name="item[]">';
        descriptionCell.innerHTML = '<input type="text" name="description[]">';
        quantityCell.innerHTML = '<input type="number" name="quantity[]">';
        priceCell.innerHTML = '<input type="number" name="price[]" step="0.01" min="0">';
        totalCell.innerHTML = '$0.00';

        updateTotal();
    });

    itemsTable.addEventListener("input", updateTotal);

    function updateTotal() {
        const rows = itemsTable.rows;
        let total = 0;

        for (let i = 1; i < rows.length; i++) {
            const price = parseFloat(rows[i].cells[3].querySelector("input").value) || 0;
            const quantity = parseInt(rows[i].cells[2].querySelector("input").value) || 0;
            const rowTotal = price * quantity;
            rows[i].cells[4].textContent = "$" + rowTotal.toFixed(2);
            total += rowTotal;
        }

        totalAmount.textContent = "$" + total.toFixed(2);
    }
});
