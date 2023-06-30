
$(document).ready(function() {
	console.log("Main page  Called ");
	var mainContent = $('#main-content');

	function graphs() {
	console.log("graphs function called");
		$.ajax({
			url: 'graphs',
			type: 'GET',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	}
	

	graphs(); // Call the function on page load


	var adduser = $('#adduser');
	var mainContent = $('#main-content');

	adduser.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'addUser',
			type: 'POST',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//-------------------------logout--------------------------------------------------
	var logout = $('#logout');

	logout.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'logOut',
			type: 'GET',
			success: function(response) {
				location.href = "LoginPage";
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});


	//---------------------------To View AuditLogs---------------------------------
	var viewAudits = $('#viewAudits');
	var mainContent = $('#main-content');

	viewAudits.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'auditLogs',
			type: 'GET',

			success: function(response) {

				// Open a new window and display the HTML content
				var newWindow = window.open("", "_blank");
				newWindow.document.open();
				newWindow.document.write(response);
				newWindow.document.close();
				//mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//-------------------------------To download AuditLogs ----------------------------------

	var downloadAudits = $('#downloadAudits');

	downloadAudits.on('click', function(event) {
		event.preventDefault();

		// Make the AJAX call to fetch the PDF content
		$.ajax({
			url: 'auditDownloads',
			type: 'GET',
			xhrFields: {
				responseType: 'blob'
			},
			success: function(response) {
				// Create a blob URL from the response
				var blobUrl = URL.createObjectURL(response);

				// Create a temporary link element to initiate the download
				var link = document.createElement('a');
				link.href = blobUrl;
				link.download = 'audit_logs.pdf';
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





	//--------------------------    list users button ajax call       --------------------------
	var listusers = $('#listusers');
	var mainContent = $('#main-content');

	listusers.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'mainUser',
			type: 'GET',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});

	//--------------------------- Master Entry Accounts------------------------
	var accounts = $('#accounts');
	var mainContent = $('#main-content');

	accounts.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'accountDataSave',
			type: 'POST',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//--------------------------- Master Entry Loans------------------------
	var loans = $('#loans');
	var mainContent = $('#main-content');

	loans.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'loanDataSave',
			type: 'POST',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//--------------------------- Account New Application------------------------
	var newaccount = $('#newaccount');
	var mainContent = $('#main-content');

	newaccount.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'AccountNewApplicationForm',
			type: 'GET',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//------------------------------------ Loans New Application -------------------
	var newloan = $('#newloan');
	var mainContent = $('#main-content');

	newloan.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'loanNewApplicationForm',
			type: 'GET',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	// ------------------------------- Customers ------------------------------
	var customers = $('#customers');
	var mainContent = $('#main-content');

	customers.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'customers',
			type: 'POST',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	// ------------------------------------ savingsaccountview -------------------
	var savingsacc = $('#savingsacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'anyTypeAccountInfo',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#currentacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'anyTypeAccountInfo',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#recurrentacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'anyTypeAccountInfo',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#FDacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'anyTypeAccountInfo',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//---------------------------------- savingsapplication -------------------------
	var savingsapp = $('#savingsapp');
	var mainContent = $('#main-content');

	savingsapp.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'newAccountApplication',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsapp = $('#currentapp');
	var mainContent = $('#main-content');

	savingsapp.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'newAccountApplication',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsapp = $('#recurrentapp');
	var mainContent = $('#main-content');

	savingsapp.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'newAccountApplication',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsapp = $('#FDapp');
	var mainContent = $('#main-content');

	savingsapp.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'newAccountApplication',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	// ------------------------------------


	//================================================================================loanaccounts
	var savingsacc = $('#Personalacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'account',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Vehicleacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'account',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Goldacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'account',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Mortageacc');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'account',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//=================================================================
	var savingsacc = $('#Mortageapp');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'getApplications',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Goldapp');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'getApplications',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Vehicleapp');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'getApplications',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#Personalapp');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		var listItemValue = $(this).data("value");
		console.log(listItemValue);
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'getApplications',
			type: 'POST',
			data: { Typevalue: listItemValue },
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#redirected');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'redirected',
			type: 'GET',
			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	//========================================================
	var savingsacc = $('#newloan');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag

		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'loanNewApplicationForm',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var savingsacc = $('#newaccount');
	var mainContent = $('#main-content');

	savingsacc.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'accountNewApplicationForm',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});

	//========================loans transactions==========================
	var loanrepay = $('#loanrepay');
	var mainContent = $('#main-content');

	loanrepay.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'loanRepay',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});

	var loanwithdraw = $('#loanwithdraw');
	var mainContent = $('#main-content');

	loanwithdraw.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'lowid',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});

	//================================================account transactions========================

	var moneydeposit = $('#moneydeposit');
	var mainContent = $('#main-content');

	moneydeposit.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'moneyDeposit',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var moneywithdraw = $('#moneywithdraw');
	var mainContent = $('#main-content');

	moneywithdraw.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'withdrawl',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});


	//======================================================================

	var statement_generation = $('#statement_generation');
	var mainContent = $('#main-content');

	statement_generation.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'statementPage',
			type: 'POST',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
	var intrest_caluclation = $('#intrest_caluclation');
	var mainContent = $('#main-content');

	intrest_caluclation.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'getAccounts',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});

	var cashchest = $('#cashchest');
	var mainContent = $('#main-content');

	cashchest.on('click', function(event) {
		// Prevent the default behavior of the anchor tag
		// Load Neeraj page content using AJAX
		$.ajax({
			url: 'cashChest',
			type: 'GET',

			success: function(response) {
				mainContent.html(response);
			},
			error: function() {
				alert('Failed to load page.');
			}
		});
	});
});