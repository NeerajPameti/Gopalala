// Retrieve data from the model attributes passed by the Spring controller
var accountData = /*[[${accountData}]]*/[];
var loanData = /*[[${loanData}]]*/[];

// Retrieve label names from the model attributes
var accountLabels = /*[[${accountLabels}]]*/[];
var loanLabels = /*[[${loanLabels}]]*/[];

console.log("accountData:", accountData);
console.log("loanData:", loanData);
console.log("accountLabels:", accountLabels);
console.log("loanLabels:", loanLabels);

// Create a bar graph for account categories
var accountCtx = document.getElementById('accountChart').getContext('2d');
var accountChart = new Chart(accountCtx, {
	type: 'pie',
	data: {
		labels: accountLabels,
		datasets: [{
			label: 'Account Categories',
			data: accountData,
			backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			borderWidth: 1
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false
	}
});

// Create a polar area chart for loan account types
var loanCtx = document.getElementById('loanChart').getContext('2d');
var loanChart = new Chart(loanCtx, {
	type: 'polarArea',
	data: {
		labels: loanLabels,
		datasets: [{
			label: 'Loan Account Types',
			data: loanData,
			backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			borderWidth: 1
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false
	}
});