using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace SchoolManagementApp.MVC.Data
{
    [ModelMetadataType(typeof(CoursesMetadata))]
    public partial class Course { }

    public class CoursesMetadata
    {
        [Display(Name = "Code")]
        public string Code { get; set; } = null!;

        [Display(Name = "Credits")]
        public int? Credits { get; set; }

        [Display(Name = "Name")]
        public string Name { get; set; } = null!;
    }
}