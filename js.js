		var passwordx = "AS0013";
		var headerx = "অগ্রদূত সমিতি";
		var footerx = "Last updated (18.10.2024)";
		var h1 = "";//
		
		var vx = [//ADMIN
			["01) Chotan Halder", 6000],
			["02) Biswabyapi Halder", 6000],
			["03) Suman Biswas", 6000],
			["04) Prosen Halder", 6000],
			["05) Amit Halder", 6000],
			["06) Bikram Halder", 6000],
			["07) Bappa Mondal", 6000],
			["08) Ramprasad Halder", 6000],
			["09) Subrata Mondal", 6000],
			["10) Upanada Halder", 6000],
			["11) Pravat Biswas", 6000],
			["12) Rajib Mondal", 6000]];

		var vy = [ //EXPENSES
["Salary - (september)", 500],
["Salary - (August)", 500],
["Salary - (July)", 500],
["Salary - (June)", 500],
["Salary - (May)", 500],
["Sourav Halder - (Left)", 700],
["Salary - (April)", 300],
["Salary - (March)", 200],
["Salary - (February)", 200],
["Salary - (January)", 200]];

var ary = [ //1.Name, 2.date, 3.amount, 4.charge, 5.interest, 6.return, 7.fine, 8.installment
	
["AS0045 - Sujoy Halder","18.10.2024",10000,100,0,00,00,"26"],	
["AS0044 - Ritam dutta","04.10.2024",10000,100,00,0,0,"00"],	
["AS0043 - Pinki Halder","08.10.2024",10000,100,00,0,0,"00"],	
["AS0042 - Chanchal Halder","08.10.2024",5000,50,00,0,0,"00"],	
["AS0041 - Subrata Halder","07.10.2024",5000,50,00,250,0,"25"],	
["AS0040 - Suraj sarkar","30.09.2024",10000,100,00,1000,00,"24"],
["AS0039 - Nikhil Halder","16.09.2024",5000,50,00,0,00,"26(4)"],
["AS0038 - Amio Sarkar","15.09.2024",10000,100,00,0,00,"00(1)"],
["AS0037 - Bimal Halder","02.08.2024",10000,100,00,4310,0,"4"],
["AS0034 - Kakoli Pramanik","26.06.2024",5000,50,0,4000,0,"10"],
["AS0033 - Sima Pramanik","25.06.2024",10000,100,0,7000,0,"12(5)"],
["AS0032 - Bapi Pramanik","25.06.2024",10000,100,0,5500,0,"15(5)"],
["AS0028 - Dipa Halder","14.05.2024",8000,80,1920,0,0,"Gold(1)"],
["AS0027 - Suman Halder","8.05.2024",2000,20,0,0,0,"Gold(5)"],
["AS0022 - Sudip sarkar","15.04.2024",7000,70,1680,0,160,"00(2)"],
["AS0018 - Sushanta Halder","09.04.2024",3000,30,180,0,0,"00(5)"],
["AS0011 - Ananda Swarnakar","19.02.2024",6000,60,0,4200,1300,"12(12)"],
["AS0005 - Bipul Halder","09.01.2024",20000,200,7200,10000,0,"00(1)"],
["AS0001 - Haradhan Halder","03.01.2024",10000,100,0,9000,0,"08"],
["AS0000 - Others","2024-2025",3500,00,0,00,0,"Other"],

//paid.............	
["AS0031 - Sujoy Halder","07.06.2024",10000,100,3000,10000,1700,"Paid"],			
["AS0010 - Ajay Swarnakar","07.02.2024",3000,30,900,3000,750,"Paid"],
["AS0036 - Subrata Halder","14.07.2024",10000,100,1500,10000,0,"Paid"],
["AS0016 - Amio Sarkar","26.03.2024",6000,60,1800,6000,1000,"Paid"],
["AS0025 - Suman Halder","26.04.2024",3000,30,540,3000,240,"Paid"],
["AS0012 - Subrata Halder","26.02.2024",10000,100,3000,10000,0,"Paid"],
["AS0035 - Chandan halder","27.06.2024",1500,15,85,1500,0,"Paid"],
["AS0024 - Chandan halder","26.04.2024",6000,60,720,6000,280,"Paid"],
["AS0003 - Sima Pramanik","11.01.2024",10000,100,3000,10000,0,"Paid"],
["AS0007 - Bapi Pramanik","24.01.2024",10000,100,3000,10000,0,"Paid"],
["AS0029 - Dipu Biswas","16.05.2024",2000,20,120,2000,0,"Paid"],
["AS0026 - Susanto Halder","07.05.2024",8000,80,480,8000,20,"Paid"],
["AS0002 - Sujoy Halder","05.01.2024",10000,100,3000,10000,300,"Paid"],
["AS0021 - Sujoy Halder","15.04.2024",4000,40,440,4000,0,"Paid"],
["AS0020 - Amio Sarkar","10.04.2024",10000,100,2000,10000,2700,"Paid"],
["AS0030 - Chandan Halder","24.05.2024",4000,40,200,4000,0,"Paid"],
["AS0006 - Sushanta Halder","21.01.2024",10000,100,500,10000,400,"Paid"],
["AS0023 - Dipankar Mridha","22.04.2024",3000,30,100,3000,0,"Paid"],
["AS0019 - Vola Halder","10.04.2024",6000,60,300,6000,0,"Paid"],
["AS0017 - Samim Mondal","29.03.2024",10000,100,600,10000,0,"Paid"],
["AS0015 - Sudip Sarkar","22.03.2024",5000,50,300,5000,0,"Paid"],
["AS0014 - Amio Sarkar","14.03.2024",3000,30,200,3000,0,"Paid"],
["AS0013 - Sudip Sarkar","12.03.2024",5000,50,300,5000,50,"Paid"],
["AS0009 - Amio Sarkar","04.02.2024",5000,50,690,5000,250,"Paid"],    
["AS0008 - Sudip Sarkar","30.01.2024",3000,30,450,3000,0,"Paid"],
["AS0004 - Amio Sarkar","06.01.2024",3000,30,170,3000,0,"Paid"]
		];






