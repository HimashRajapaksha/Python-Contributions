package final2023JuneVrB;

import java.util.Scanner;

public class Student {
	
	private String studentId;
	private String name;
	private String address;
	private String contactNumber;
	
	
	public Student(String contactNumber, String address, String studentId, String name) {
		super();
		this.studentId = studentId;
		this.name = name;
		this.address = address;
		this.contactNumber = contactNumber;
	}
	public Student(Object contactNumber2, Object address2, Object studentId2, Object name2) {
		// TODO Auto-generated constructor stub
	}
	public void Read() {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter Student ID : ");
		this.studentId= scanner.next();
		System.out.println("Enter student name :");
		this.name=scanner.next();
		System.out.println("Enter address :");
		this.address= scanner.next();
		System.out.println("Enter the contact number :");
		this.contactNumber=scanner.next();
		
	
	}
	public void Print() {
		
		System.out.println("Student Informataion :");
		System.out.println("Student ID is :"+this.studentId);
		System.out.println("Student Name is :"+this.name);
		System.out.println("Student Address is  :"+this.address);
		System.out.println("Student Telephone is :"+this.contactNumber);
	}
	public char[] getname() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}


