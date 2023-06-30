package com.nkxgen.spring.jdbc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nkxgen.spring.jdbc.Bal.ViewInterface;
import com.nkxgen.spring.jdbc.DaoInterfaces.AccountApplicationDaoInterface;
import com.nkxgen.spring.jdbc.DaoInterfaces.LoanApplicationDaoInterface;
import com.nkxgen.spring.jdbc.ViewModels.AccountTypeView;
import com.nkxgen.spring.jdbc.ViewModels.LoanViewModel;
import com.nkxgen.spring.jdbc.model.Account;
import com.nkxgen.spring.jdbc.model.LoanAccount;

@Service
public class ChartService {
	@Autowired
	private ViewInterface v;

	@Autowired
	private AccountApplicationDaoInterface ac;

	@Autowired
	private LoanApplicationDaoInterface ll;

	public List<String> getAccountLabels() {
		List<String> accountLabels = new ArrayList<>();
		List<AccountTypeView> list = v.set11();
		for (AccountTypeView type : list) {
			accountLabels.add(type.getAccountType());
		}
		return accountLabels;
	}

	public List<String> getLoanLabels() {
		List<String> loanLabels = new ArrayList<>();
		List<LoanViewModel> list = v.getAllLoans();
		for (LoanViewModel type : list) {
			loanLabels.add(type.getLoanType());
		}
		return loanLabels;
	}

	public List<Integer> getAccountData() {
		List<Integer> accountData = new ArrayList<>();
		List<String> accountLabels = getAccountLabels();
		for (String accountLabel : accountLabels) {
			List<Account> types = ac.getAccountsByType(accountLabel);
			accountData.add(types.size());
		}
		return accountData;
	}

	public List<Integer> getLoanData() {
		List<Integer> loanData = new ArrayList<>();
		List<String> loanLabels = getLoanLabels();
		for (String loanLabel : loanLabels) {
			List<LoanAccount> types = ll.getLoanAccountsByLoanType(loanLabel);
			loanData.add(types.size());
		}
		return loanData;
	}

}
