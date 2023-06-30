package com.nkxgen.spring.jdbc.utilities;

import java.io.OutputStream;
import java.util.List;

import org.springframework.stereotype.Component;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.nkxgen.spring.jdbc.model.AuditLogs;
import com.nkxgen.spring.jdbc.model.LoanTransactions;
import com.nkxgen.spring.jdbc.model.Transaction;

@Component
public class PdfGenerator implements Generator {

	public void generateAuditLogsPdf(List<AuditLogs> auditLogsList, OutputStream outputStream) {
		try {
			Document document = new Document(PageSize.A4);
			PdfWriter.getInstance(document, outputStream);

			document.open();

			PdfPTable table = new PdfPTable(4);
			float cellPadding = 8f;

			// Set preferred column widths
			float[] columnWidths = { 30f, 100f, 80f, 60f };
			table.setWidths(columnWidths);

			// Create a Font for the table heading
			Font headingFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.WHITE);

			// Set background color for table heading
			PdfPCell headingCell = new PdfPCell(new Paragraph("ID", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Event", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Timestamp", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Username", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			for (AuditLogs auditLogs : auditLogsList) {
				PdfPCell idCell = new PdfPCell(new Paragraph(auditLogs.getId().toString()));
				idCell.setPadding(cellPadding);
				table.addCell(idCell);

				table.addCell(auditLogs.getEvent());

				PdfPCell timestampCell = new PdfPCell(new Paragraph(auditLogs.getTimestamp().toString()));
				timestampCell.setPadding(cellPadding);
				table.addCell(timestampCell);

				PdfPCell usernameCell = new PdfPCell(new Paragraph(auditLogs.getUsername()));
				usernameCell.setPadding(cellPadding);
				table.addCell(usernameCell);
			}

			document.add(table);
			document.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void generateAccountTransactionPDF(List<Transaction> transactionList, OutputStream outputStream) {
		try {

			// Create the PDF document and writer
			Document document = new Document(PageSize.A4);
			PdfWriter writer = PdfWriter.getInstance(document, outputStream);

			// Open the document
			document.open();

			// Create the table with 4 columns
			PdfPTable table = new PdfPTable(7);
			float cellPadding = 8f;

			// Set preferred column widths
			float[] columnWidths = { 30f, 50f, 50f, 50f, 50f, 50f, 50f };
			table.setWidths(columnWidths);

			// Create a Font for the table heading
			Font headingFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.WHITE);

			// Set background color for table heading
			PdfPCell headingCell = new PdfPCell(new Paragraph("ID", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Account No", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Transaction Date", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Transaction Type", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Transaction Mode", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Transaction Amount", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Processed by", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			// Add table rows with transaction data
			for (Transaction transaction : transactionList) {
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_id())));
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_anct_id())));
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_date())));
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_type())));
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_mode())));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getTran_amount()))));
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_processedby())));
			}

			// Add the table to the document
			document.add(table);

			// Close the document
			document.close();

			// Flush and close the writer
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void generateLoanTransactionPDF(List<LoanTransactions> transactionList, OutputStream outputStream) {
		try {

			// Create the PDF document and writer
			Document document = new Document(PageSize.A4.rotate());
			document.setMargins(0, 0, 0, 0);
			PdfWriter writer = PdfWriter.getInstance(document, outputStream);

			// Open the document
			document.open();

			// Create the table with 4 columns
			PdfPTable table = new PdfPTable(11);
			table.getDefaultCell().setBorderWidth(0.5f);
			table.getDefaultCell().setBorderColor(BaseColor.BLACK);
			float cellPadding = 8f;

			table.getDefaultCell().setPadding(cellPadding);

			// Set preferred column widths
			float[] columnWidths = { 30f, 30f, 30f, 50f, 50f, 50f, 50f, 50f, 50f, 50f, 50f };
			table.setWidths(columnWidths);

			// Create a Font for the table heading
			Font headingFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.WHITE);

			// Set background color for table heading
			PdfPCell headingCell = new PdfPCell(new Paragraph("ID", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Processed by", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Loan Id", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("EMI", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Interest Amount", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Type", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Total", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Amount", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Complete", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Date", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);

			headingCell = new PdfPCell(new Paragraph("Installment No", headingFont));
			headingCell.setBackgroundColor(new BaseColor(0, 51, 102));
			headingCell.setPadding(cellPadding);
			table.addCell(headingCell);
			// Add table rows with transaction data
			for (LoanTransactions transaction : transactionList) {
				table.addCell(new PdfPCell(new Phrase(transaction.getTran_id())));
				table.addCell(new PdfPCell(new Phrase(transaction.getProcessedBy())));
				table.addCell(new PdfPCell(new Phrase(transaction.getLoanId())));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getEmi()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getInterest()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getType()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getTotal()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getAmount()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getComplete()))));
				table.addCell(new PdfPCell(new Phrase(String.valueOf(transaction.getDate()))));
				table.addCell(new PdfPCell(new Phrase(transaction.getInstallmentNo())));
			}

			// Add the table to the document
			document.add(table);

			// Close the document
			document.close();

			// Flush and close the writer
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
