using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace SchoolManagementApp.MVC.Data
{
    [ModelMetadataType(typeof(LecturersMetadata))]
    public partial class Lecturer { }

    public class LecturersMetadata
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; } = null!;

        [Display(Name = "Last Name")]
        public string LastName { get; set; } = null!;
    }
}