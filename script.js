// كود جافاسكريبت احترافي بسيط
document.addEventListener('DOMContentLoaded', (event) => {
    // جلب الزر بواسطة المعرف (ID)
    const actionButton = document.getElementById('actionButton');

    // إضافة مستمع حدث (Event Listener) للنقرة
    actionButton.addEventListener('click', () => {
        alert('شكراً لك على النقر! يعمل الكود الاحترافي بشكل جيد.');
        // يمكن إضافة المزيد من الوظائف هنا
    });
});
