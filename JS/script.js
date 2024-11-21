// Toggle Menu Action 
function toggleMenu() {
    const navMobile = document.querySelector('.nav-link-mobile');
    navMobile.classList.toggle('active');
}

// Form Validasi Coba 1
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-contact form");
    const InputName = document.getElementById("name");
    const InputEmail = document.getElementById("email");
    const SelectService = document.getElementById("service");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        clearErrors(); // reset pesan error

        let isValid = true;

        // validasi nama
        if (InputName.value.trim() === "") 
        {
            showError(InputName, "Nama tidak boleh kosong yaaa, harus di isi looo....");
            isValid = false;
        }

        // validasi email
        if (InputEmail.value.trim() === "") 
        {
            showError(InputEmail, "Hayooo emailnyaa juga tidak boleh kosonggg...");
            isValid = false;
        }
        else if (!validateEmail(InputEmail.value))
        {
            showError(InputEmail, "Email tidak valid yaaa.");
            isValid = false;
        }

        // validasi service
        if (SelectService.value === "")
        {
            showError(SelectService, "Silahkan pilih layanan kami.");
            isValid = false;
        }

        // if validation is true / success
        if (isValid)
        {
            alert ("Data anda berhasil di kirim. Terimakasih, Selamat Menikmati! :)");
            form.reset();
        }

        // enampilkan pesan error
        function showError(input, message) {
            const error = document.createElement("small");
            error.className = "error-message";
            error.style.color = "red";
            error.textContent = message;
            input.insertAdjacentElement("afterend", error);
        }

        // Fungsi untuk menghapus pesan error
        function clearErrors() {
            const errors = document.querySelectorAll(".error-message");
            errors.forEach((error) => error.remove());
        }

        // Fungsi untuk validasi email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});