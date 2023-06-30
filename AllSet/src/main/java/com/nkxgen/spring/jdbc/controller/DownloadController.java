package com.nkxgen.spring.jdbc.controller;

import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nkxgen.spring.jdbc.DaoInterfaces.AccountProcessingDAO;
import com.nkxgen.spring.jdbc.DaoInterfaces.AuditLogDAO;
import com.nkxgen.spring.jdbc.model.AuditLogs;
import com.nkxgen.spring.jdbc.model.LoanTransactions;
import com.nkxgen.spring.jdbc.model.Transaction;
import com.nkxgen.spring.jdbc.utilities.Generator;
import com.nkxgen.spring.jdbc.utilities.PdfGenerator;

@Controller
public class DownloadController {

	private AuditLogDAO auditLogDAO;
	private Generator generator;
	@Autowired
	private AccountProcessingDAO interestCalDao;

	@Autowired
	public DownloadController(AuditLogDAO auditLogDAO, PdfGenerator generator) {
		this.auditLogDAO = auditLogDAO;
		this.generator = generator;
	}

	@RequestMapping(value = "auditDownloads")
	public void downloadAuditData(HttpServletResponse response) {
		try (OutputStream outputStream = response.getOutputStream()) {
			response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "attachment; filename=audit_logs.pdf");

			List<AuditLogs> auditLogsList = auditLogDAO.getAllAuditLogs();

			generator.generateAuditLogsPdf(auditLogsList, outputStream);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/generateAccountTransactionsPDF", method = RequestMethod.POST)
	public void downloadAccountData(HttpServletResponse response, @RequestParam("accountId") String accountid) {
		try (OutputStream outputStream = response.getOutputStream()) {

			response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "attachment; filename=transaction_list.pdf");
			int accountId = Integer.parseInt(accountid);
			System.out.println(accountId);
			List<Transaction> transactionList = interestCalDao.AccountTransactionStatementGeneration(accountId);
			generator.generateAccountTransactionPDF(transactionList, outputStream);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/generateLoanTransactionsPDF", method = RequestMethod.POST)
	public void downloadLoanData(HttpServletResponse response, @RequestParam("accountId") String accountid) {
		try (OutputStream outputStream = response.getOutputStream()) {

			response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "attachment; filename=transaction_list.pdf");
			int accountId = Integer.parseInt(accountid);
			System.out.println(accountId);
			List<LoanTransactions> transactionList = interestCalDao.LoanTransactionStatementGeneration(accountId);
			generator.generateLoanTransactionPDF(transactionList, outputStream);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
