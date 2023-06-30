$(document).ready(function() {

	var fetchTransactions = $('#fetchTransactions');

	fetchTransactions.on('click', function(event) {
		event.preventDefault();
		var type = $("#selectOption").val();
		var accno = $("#accno").val();
		var selectedOption = $("#selectOption").val();
		var div2 = $("#div2");
		$.ajax({
			url: "statement",
			type: "GET",
			data: {
				accountId: accno,
				option: selectedOption,
				type: type
			},
			success: function(data) {
				div2.html(data);
			},
			error: function(xhr, status, error) {
				console.log("Error: " + error);
			}
		});

	});

	var downloadAccountTransactions = $('#downloadPDF');

	downloadAccountTransactions.on('click', function(event) {
		event.preventDefault();

		var accountId = document.getElementById("accno").value; // Get the account ID from the input field
		var type = document.getElementById("selectOption").value;
		// Create the data object with the account ID
		var data = {
			accountId: accountId
		};
		var url;
		if (type === 'accounts') {
			url = 'generateAccountTransactionsPDF';
		} else if (type === 'loans') {
			url = 'generateLoanTransactionsPDF';
		}

		// Make the AJAX call to fetch the PDF content
		$.ajax({
			url: url,
			type: 'POST',
			data: data,
			xhrFields: {
				responseType: 'blob'
			},
			success: function(response) {
				// Create a blob URL from the response
				var blobUrl = URL.createObjectURL(response);

				// Create a temporary link element to initiate the download
				var link = document.createElement('a');
				link.href = blobUrl;
				link.download = 'account_transactions.pdf';
				link.style.display = 'none';
				document.body.appendChild(link);

				// Simulate a click event on the link to trigger the download
				link.click();

				// Cleanup by revoking the blob URL and removing the link element
				URL.revokeObjectURL(blobUrl);
				document.body.removeChild(link);
			},
			error: function() {
				alert('Failed to load PDF.');
			}
		});
	});

});


