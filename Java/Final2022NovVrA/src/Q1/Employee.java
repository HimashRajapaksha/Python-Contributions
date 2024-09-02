package Q1;

abstract class Employee {
	
	int id;
	String name;
	
	public Employee(int id ,String name) {
		this.id = id;
		this.name = name;

}
	public abstract double calculateNetSalary();
	
	public void display() {
		System.out.println("Employee id :"+id);
		System.out.println("Employee name :"+name);
		
	}
	public void calculateNtSalary() {
		// TODO Auto-generated method stub
		
	}
	
}