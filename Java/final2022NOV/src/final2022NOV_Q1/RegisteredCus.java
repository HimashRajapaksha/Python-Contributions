package final2022NOV_Q1;

import java.util.Scanner;

class RegisteredCus extends Customer{
	double rewardPoints;
	double netAmount;
	
	public RegisteredCus (int id ,String name) {
		super(id ,name);
		this.rewardPoints = 0;
		this.netAmount =0 ;
			
	}
	 @Override
	 public void calculateBill()
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the bill amount :");
		double billAmount = scanner.nextDouble();
		
		if (billAmount > 950.00) {
			this.rewardPoints = 0.15*billAmount;
		}
		
		double discount = 0.07*billAmount;
		this.netAmount = billAmount-discount;
	}

	 @Override
	    public void display() {
	        super.display();
	        calculateBill(); 
	       
	        System.out.println("Customer reward points: " + rewardPoints);
	        System.out.println("Customer Net amount to pay: " + netAmount);
	    }
}