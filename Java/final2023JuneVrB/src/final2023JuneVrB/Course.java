package final2023JuneVrB;

import java.util.ArrayList;
import java.util.Scanner;

public class Course {
	private String CourseId;
	private String name;
	private String instructor;
	private ArrayList<Student> enrolledStudents;
	public Course(String name, String CourseId, String instructor) {
		super();
		this.CourseId = CourseId;
		this.name = name;
		this.instructor = instructor;
		enrolledStudents = new ArrayList<Student>();
		
	}
	public void Read() {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter Course ID : ");
		this.CourseId= scanner.next();
		System.out.println("Enter course name :");
		this.name=scanner.next();
		System.out.println("Intructor :");
		this.instructor= scanner.next();
		
	}
	
	
	public void AddStudent(Student student) {
		enrolledStudents.add(student);
	}
	
	public void Print() {
		System.out.println("Course Information");
		System.out.println("Course ID :"+this.CourseId);
		System.out.println("Course Name :"+this.name);
		System.out.println("Instructor :"+this.instructor);
		System.out.println("Enrolled Students :");
		for (Student student : enrolledStudents) {
			System.out.println(student.getname());
		}
		
		System.out.println();
		 
		
		
	}

}
