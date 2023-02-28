using SchoolManagementApp.MVC.Data;

namespace SchoolManagementApp.MVC.Models
{
    public class ClassViewModel
    {
        public string CourseName { get; set; }
        public int Id { get; set; }
        public string LecturerName { get; set; }
        public string Time { get; set; }
    }
}