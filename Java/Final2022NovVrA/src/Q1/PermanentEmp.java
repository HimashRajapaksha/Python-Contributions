package Q1;

public class PermanentEmp extends Employee {
	
	double basicSal;
	double commission;
	
	public PermanentEmp (int id ,String name, double basicSal) {
	super(id,name);
	this.basicSal =basicSal;
	this.commission =0.15*basicSal;
	
	
}

	@Override
	public double calculateNetSalary() {
		return basicSal + commission;
		
		
		
	}
	
	public void display() {
        super.display();
        System.out.println("Basic Salary: " + basicSal);
        System.out.println("Commission: " + commission);
        System.out.println("Net salary :"+calculateNetSalary());
    }
		
	
		
		
		
		
		
		
		
	}
		
		
	
