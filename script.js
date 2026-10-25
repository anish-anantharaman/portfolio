function downloadCV() {
    const link = document.createElement("a");
    link.href = "/assets/resume/Anish_Resume.pdf";
    link.download = "Anish_Resume.pdf";
    link.click();
}