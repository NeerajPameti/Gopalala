package com.nkxgen.spring.jdbc.utilities;

import java.io.OutputStream;
import java.util.List;

import com.nkxgen.spring.jdbc.model.AuditLogs;
import com.nkxgen.spring.jdbc.model.LoanTransactions;
import com.nkxgen.spring.jdbc.model.Transaction;

public interface Generator {
	void generateAuditLogsPdf(List<AuditLogs> auditLogsList, OutputStream outputStream);

	void generateAccountTransactionPDF(List<Transaction> transactionList, OutputStream outputStream);

	void generateLoanTransactionPDF(List<LoanTransactions> transactionList, OutputStream outputStream);

}
