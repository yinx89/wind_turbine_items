First request  

A wind turbine has 100 items on it, each get inspected. This is an application that outputs numbers from 1 to 100, but for multiple of three print "Coating Damage" instead of the number and for the multiple of five print "Lightning Strike" instead of the number. For numbers which are multiple of both three and five print "Coating Damage and Lightning Strike" instead of the number. 

Improvements
- Added the possibility of entering a lower and upper number range in order to execute the function in a different number range and data validation has been implemented.
- Good UI in which the table is shown if the numerical values are correct in ascending order in which an ID can be identified and the value corresponding to the output of the expected function. In addition, the table offers the possibility of pagination, search by element, sort by elements and sorting of columns by clicking on the title of the corresponding column.
- No framework is used for PHP but JQuery libraries and datatables are used in addition to Bootstrap to simplify the process and gain in viewability.
- The data_ajax() function is used in Javascript to request the data through AJAX and XMLHTTPRequest.
- The application is responsive and can run on any device thus finding the correct representation of all adapted elements.
- It is divided into the different folders: Bootstrap, DataTables, js, functions, css and img.

Step by step
1. First of all, think about technologies and languages that could help me to develop the application and contribute to the goals I have set myself. We must have PHP and show in HTML, besides that I have seen interesting to use AJAX through XMLHTTPRequest to receive the data and to be able to show them in a dynamic way with Javascript and the libraries of JQuery and DataTables. For the visual aspect I thought that Bootstrap would be ideal for its simplicity and eye-catching.
2. Once I am clear about the technologies involved I created the functionality in calculate.php to show a first version of code without the use of DataTables with a simple table without pagination according to two numerical values established by default.
3. Then I decided to include the section to enter the data and thus establish a lower and higher margin at the same time I have established the data collection process with Javascript and XMLHTTPRequest.
4. Fourthly, I have modified the functionality of calculate.php so that it would be adapted to what DataTables required for its correct operation.
5. In fifth place I have established the parameters that allowed me to show the table in a clean way with all the functionality through DataTables.
6. Then I improved the visualization through Bootstrap adding the header element in addition to the best layout of the modules.
7. And finally I cleaned the code and documented what I considered important.
