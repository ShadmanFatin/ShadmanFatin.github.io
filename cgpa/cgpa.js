const inputBox = document.querySelector(".inputBox");
const printButton = document.querySelector(".printButton");

const studentId = inputBox.value;

printButton.addEventListener
(
      "click" , function printGrade()
      {
            window.open(`http://usis.bracu.ac.bd/academia/docuJasper/index?studentId=${studentId}&reportFormat=PDF&old_id_no=${studentId}&strMessage=&scholarProgramMsg=&companyLogo=%2Fvar%2Facademia%2Fimage%2FuniversityLogo%2F1571986355.jpg&companyName=BRAC+University&headerTitle=GRADE+SHEET&companyAddress=66%2C+MOHAKHALI+C%2FA%2C+DHAKA+-+1212.&academicStanding=Satisfactory&gradeSheetBackground=%2Fhome%2Fgrails%2Fapache-tomcat-7.0.42%2Fwebapps%2Facademia%2Fimages%2FgradeSheetBackground.jpg&_format=PDF&_name=GRADE_SHEET_${studentId}_${studentId}&_file=student%2FrptStudentGradeSheetForStudent.jasper`);
      }
);