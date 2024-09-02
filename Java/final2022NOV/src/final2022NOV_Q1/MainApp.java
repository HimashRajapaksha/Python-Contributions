package final2022NOV_Q1;

import java.util.ArrayList;

public class MainApp {

	public static void main(String[] args) {
		
	ArrayList<RegisteredCus> registeredCustomers = new ArrayList<>();
	
	registeredCustomers.add(new RegisteredCus(101,"Kamal"));
	registeredCustomers.add(new RegisteredCus(102,"Sunil"));
	
	for (RegisteredCus customer : registeredCustomers) {
		
		customer.display();
		System.out.println();
		
	}
	
	}
	
	
}



















