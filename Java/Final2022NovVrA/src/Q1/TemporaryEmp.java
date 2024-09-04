package Q1;

public class TemporaryEmp extends Employee {
	
	int OtHrs;
	double OtRate;
	double minWage;
	
	public TemporaryEmp (int id ,String name,int OtHrs,double OtRate) {
		super(id,name);
		this.OtHrs = OtHrs;
		this.OtRate= OtRate;
		this.minWage=15000.0;
}

	@Override
	public void calculateNtSalary() {
		double OTAmount = OtHrs*OtRate;
		double netSalary = minWage + OTAmount;
		System.out.println("Net Salary :"+netSalary);
		
	}
	
	public void display() {
		super.display();
		System.out.println("");
		
	}
}

    




