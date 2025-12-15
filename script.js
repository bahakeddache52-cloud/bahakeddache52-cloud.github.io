// كود جافاسكريبت احترافي بسيط
document.addEventListener('DOMContentLoaded', (event) => {
    // جلب الزر بواسطة المعرف (ID)
    const actionButton = document.getElementById('actionButton');

    // إضافة مستمع حدث (Event Listener) للنقرة
    actionButton.addEventListener('click', () => {
        alert('قتلك انا مرسي على القوادة.');
        // يمكن إضافة المزيد من الوظائف هنا
    });
});
