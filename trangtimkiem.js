
/*-------------------------------------------------------*/
function searchUniversity(event) {
    event.preventDefault();  // Ngừng hành động mặc định của form (không tải lại trang)

    // Lấy giá trị quốc gia từ dropdown
    var country = document.getElementById("country").value;

    // Kiểm tra nếu người dùng chưa chọn quốc gia
    if (!country) {
        alert("Vui lòng chọn quốc gia.");
        return;
    }

    // Điều hướng đến trang HTML tương ứng với quốc gia
    window.location.href = country + ".html";
}