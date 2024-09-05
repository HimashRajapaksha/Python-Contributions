package final2023JuneVrB;

import java.util.ArrayList;

public class StudentApp {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        ArrayList<Course> courses = new ArrayList<>();

        for (int i = 0; i < 2; i++) {
            Student student = new Student(null, null, null, null);
            student.Read();
            students.add(student);

            Course course = new Course(null, null, null);
            course.Read();
            course.AddStudent(student);
            courses.add(course);
        }

        System.out.println("Student Information:");
        for (Student student : students) {
            student.Print();
        }

        System.out.println("Course Information:");
        for (Course course : courses) {
            course.Print();
        }
    }
}
