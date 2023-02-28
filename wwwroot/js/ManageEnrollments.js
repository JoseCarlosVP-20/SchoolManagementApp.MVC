$(function () {

    // agregar sweetAlert
    $('.enrollmentBtn').click(function (e) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Please confirm this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm Enrollment!'
        }).then((result) => {
            if (result.isConfirmed) {
                let btn = $(this);
                let studentId = btn.attr("data-studentId");
                let shouldEnroll = btn.attr("data-shouldEnroll");
                $('#studentId').val(studentId);
                $('#shouldEnroll').val(shouldEnroll);
                $('#classEnrollmentForm').submit();
            }
        })
    })
})