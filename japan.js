console.log("JavaScript file loaded successfully!");

// Chuyển hướng về trang chính
function goBack()
{

    console.log("Go back button clicked! Redirecting...");

    window.location.href = "DuhocJapan.html"; // Đường dẫn đến trang chính
}
function openDetails(element) 
{
    // Lấy dữ liệu từ các thuộc tính của thẻ HTML được nhấp
    const details = 
    {
        title: element.getAttribute("data-title"),
        intro: element.getAttribute("data-intro"),
        location: element.getAttribute("data-location"),
        strengths: element.getAttribute("data-strengths"),
        scholarships: element.getAttribute("data-scholarships"),
        image: element.getAttribute("data-image")
    };

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("japan1", JSON.stringify(details));

    // Chuyển hướng sang trang chi tiết
    window.location.href = "japan1.html";
}
document.addEventListener("DOMContentLoaded", () => 
{
    // Lấy dữ liệu từ localStorage
    const japan1 = JSON.parse(localStorage.getItem("japan1"));

    if (japan1) 
    {
        // Sử dụng innerHTML để hiển thị đúng định dạng HTML
        document.getElementById("detail-title").innerText = japan1.title || "Không có tiêu đề";
        document.getElementById("detail-info").innerHTML = japan1.intro || "Không có thông tin";
        document.getElementById("detail-location").innerHTML = japan1.location || "Chưa cập nhật vị trí";
        document.getElementById("detail-strengths").innerHTML = japan1.strengths || "Không có thông tin thế mạnh";
        document.getElementById("detail-scholarships").innerHTML = japan1.scholarships || "Không có thông tin học bổng";
        document.getElementById("detail-image").src = japan1.image || "default.jpg";
    } else 
    {
        console.error("Không tìm thấy dữ liệu trong localStorage!");
    }
});