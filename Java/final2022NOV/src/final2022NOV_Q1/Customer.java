package final2022NOV_Q1;

abstract class Customer {
	int id;
	String name;
	
	public Customer (int id, String name) {
		this.id= id;
		this.name=name;		
	}
	public abstract void calculateBill();	
	
	public void display() {
		System.out.println("Customer id :"+id);
		System.out.println("Customer name :"+name);
				
	}
	
	
}