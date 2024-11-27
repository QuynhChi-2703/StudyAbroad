console.log("JavaScript file loaded successfully!");

// Chuyển hướng về trang chính
function goBack() {
    console.log("Go back button clicked! Redirecting...");
    window.location.href = "quocgia.html"; // Đường dẫn đến trang chính
}
console.log("JavaScript file loaded successfully!");

// Điều hướng đến trang chi tiết
function openDetails(image, title, info) {
    const url = `details.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&info=${encodeURIComponent(info)}`;
    window.location.href = url;
}

// Truy cập và hiển thị nội dung từ URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const image = params.get("image");
    const title = params.get("title");
    const info = params.get("info");

    if (image) document.getElementById("detail-image").setAttribute("src", image);
    if (title) document.getElementById("detail-title").textContent = title;
    if (info) document.getElementById("detail-info").textContent = info;
});