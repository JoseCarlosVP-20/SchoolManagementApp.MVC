$(function () {

    // agregar sweetAlert
    $('.deleteBtn').click(function (e) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                let btn = $(this);
                let id = btn.data("id");
                $('#classId').val(id);
                $('#classesDeleteFrom').submit();
            }
        })
    })
})