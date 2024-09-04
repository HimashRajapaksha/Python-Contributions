package ThreadsNovember22;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Object lock= new Object();
		
		Scanner scanner=new Scanner(System.in);
		
		System.out.print("Enter pattern 01 :");
		String p1 =scanner.next();
		
		System.out.print("Enter pattern 02 :");
		String p2 =scanner.next();
		
		System.out.print("Enter Count :");
		int count =scanner.nextInt();
		
		Thread thread01= new Pattern01 (lock,p1,count);
		Thread thread02= new Pattern02 (lock,p2,count);
		
		thread01.start();
		thread02.start();
		
		try {
			thread01.join();
			thread02.join();
		} catch (InterruptedException e) {
			
			e.printStackTrace();
			
		}
		
	}

}
