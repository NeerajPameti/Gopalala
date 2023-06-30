package com.nkxgen.spring.jdbc.controller;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nkxgen.spring.jdbc.service.ChartService;

@Controller
public class ChartController {

	@Autowired
	private ChartService chartService; // Assuming you have a service class to handle data retrieval

	@RequestMapping(value = "/graphs", method = RequestMethod.GET)
	public String graphs(Locale locale, Model model) {

		List<Integer> accountData = chartService.getAccountData();
		List<Integer> loanData = chartService.getLoanData();

		List<String> accountLabels = chartService.getAccountLabels(); // Retrieve account label names
		List<String> loanLabels = chartService.getLoanLabels(); // Retrieve loan label names

		System.out.println("accountData" + accountData);
		System.out.println("loanData" + loanData);
		System.out.println("accountLabels" + accountLabels);
		System.out.println("loanLabels" + loanLabels);

		// Pass the data to the HTML view using the model
		model.addAttribute("accountData", accountData);
		model.addAttribute("loanData", loanData);

		// Add the label names to the model
		model.addAttribute("accountLabels", accountLabels);
		model.addAttribute("loanLabels", loanLabels);

		System.out.println("Graphs Method called");

		return "graphs";
	}

}
