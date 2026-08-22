document.addEventListener('DOMContentLoaded', () => {

    // 1. التنقل بين صفحات القائمة الجانبية Navigation
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    const pageContents = document.querySelectorAll('.page-content');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = item.getAttribute('data-page');

            // إزالة التنشيط من العناصر السابقة
            menuItems.forEach(i => i.classList.remove('active'));
            pageContents.forEach(p => p.classList.remove('active'));

            // إضافة التنشيط للعنصر الحالي
            item.classList.add('active');
            const activePage = document.getElementById(`${pageId}-page`);
            if (activePage) {
                activePage.classList.add('active');
            }
        });
    });

    // 2. إظهار وإخفاء القائمة الجانبية (الجوال)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // 3. التنبيهات Dropdown
    const notifBtn = document.getElementById('notifBtn');
    const notifDropdown = document.getElementById('notifDropdown');

    if (notifBtn) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            notifDropdown.classList.remove('show');
        });
    }

    // 4. التحكم بـ المودال (نافذة طلب عميل جديد)
    const requestModal = document.getElementById('requestModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');

    const toggleModal = (show) => {
        if (show) {
            requestModal.classList.add('show');
        } else {
            requestModal.classList.remove('show');
        }
    };

    if (openModalBtn) openModalBtn.addEventListener('click', () => toggleModal(true));
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => toggleModal(false));
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', () => toggleModal(false));

    // إغلاق المودال عند الضغط خارجه
    window.addEventListener('click', (e) => {
        if (e.target === requestModal) toggleModal(false);
    });

    // 5. إرسال النموذج (افتراضي)
    const newRequestForm = document.getElementById('newRequestForm');
    if (newRequestForm) {
        newRequestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم تسجيل طلب العميل بنجاح برقم: PRJ-2026-0003');
            toggleModal(false);
            newRequestForm.reset();
        });
    }
});