import { Link, router } from '@inertiajs/react';
import { dashboard, home, logout } from '@/routes';
import { LogOut, Settings } from 'lucide-react';
import type { SideNavItem } from '@/types';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

const items: SideNavItem[] = [
    {
        title: 'Home',
        href: home(),
        icon: "material-symbols-outlined menu-icon",
    },
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: "material-symbols-outlined menu-icon",
    },
    {
        title: 'Profile',
        href: "settings/profile",
        icon: "material-symbols-outlined user",
    },
];
const cleanup = useMobileNavigation();
const handleLogout = () => {
    cleanup();
    router.flushAll();
};


export default function MainSidebar() {
    return (
        <>
            <div className="sidebar-area" id="sidebar-area">

                <div className="logo position-relative d-flex align-items-center justify-content-between">
                    <Link className="d-block text-decoration-none position-relative" href={home()}>
                        <img alt="logo-icon" src="/backend/assets/images/seller1.png" />
                        <span className="logo-text text-secondary fw-semibold">NAME </span>
                    </Link>
                    <button className="sidebar-burger-menu-close bg-transparent py-3 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y" id="sidebar-burger-menu-close">
                        <span className="border-1 d-block for-dark-burger" style={{
                            borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(45deg)"
                        }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{
                            borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(-45deg)"
                        }}>
                        </span>
                    </button>
                    <button className="sidebar-burger-menu bg-transparent p-0 border-0" id="sidebar-burger-menu">
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                    </button>
                </div>
                <aside className="layout-menu menu-vertical menu active" data-simplebar="" id="layout-menu">
                    <ul className="menu-inner">
                        {/* <li className="menu-title small text-uppercase">
                            <span className="menu-title-text">
                                MAIN
                            </span>
                        </li>
                        <li className="menu-item open">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    dashboard
                                </span>
                                <span className="title">
                                    Dashboard
                                </span>
                                <span className="count">
                                    11
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link active" href="index.html">
                                        E-Commerce
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="crm.html">
                                        CRM
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="project-management.html">
                                        Project Management
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="lms.html">
                                        LMS
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="help-desk.html">
                                        Help Desk
                                        <span className="new tag">
                                            Hot
                                        </span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="hr-management.html">
                                        HR Management
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="school.html">
                                        School
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="marketing.html">
                                        Marketing
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="analytics.html">
                                        Analytics
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="hospital.html">
                                        Hospital
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="finance.html">
                                        Finance
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        {items.map((item, index) => (
                            <li className="menu-item" key={index}>
                                <Link
                                    className="menu-link"
                                    href={item.href}
                                >
                                    <span className={item.icon}>
                                        dashboard
                                    </span>

                                    <span className="title">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                        {/* <li className="menu-title small text-uppercase">
                            <span className="menu-title-text">
                                APPS
                            </span>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="to-do-list.html">
                                <span className="material-symbols-outlined menu-icon">
                                    ballot
                                </span>
                                <span className="title">
                                    To Do List
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="calendar.html">
                                <span className="material-symbols-outlined menu-icon">
                                    calendar_today
                                </span>
                                <span className="title">
                                    Calendar
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="contacts.html">
                                <span className="material-symbols-outlined menu-icon">
                                    perm_contact_calendar
                                </span>
                                <span className="title">
                                    Contacts
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="chat.html">
                                <span className="material-symbols-outlined menu-icon">
                                    chat
                                </span>
                                <span className="title">
                                    Chat
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    email
                                </span>
                                <span className="title">
                                    Email
                                </span>
                                <span className="count new bg-success-40 text-success-50">
                                    3
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="inbox.html">
                                        Inbox
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="compose.html">
                                        Compose
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="read-email.html">
                                        Read
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="kanban-board.html">
                                <span className="material-symbols-outlined menu-icon">
                                    keyboard_command_key
                                </span>
                                <span className="title">
                                    Kanban Board
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    insert_drive_file
                                </span>
                                <span className="title">
                                    File Manager
                                </span>
                                <span className="count new bg-danger-40 text-danger-50">
                                    7
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="my-drive.html">
                                        My Drive
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="assets.html">
                                        Assets
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="projects-file.html">
                                        Projects
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="personal.html">
                                        Personal
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="applications.html">
                                        Applications
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="documents.html">
                                        Documents
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="media.html">
                                        Media
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title small text-uppercase">
                            <span className="menu-title-text">
                                PAGES
                            </span>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    shopping_cart
                                </span>
                                <span className="title">
                                    E-Commerce
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="products-grid.html">
                                        Products Grid
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="products-list.html">
                                        Products List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="product-details.html">
                                        Product Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-product.html">
                                        Create Product
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="edit-product.html">
                                        Edit Product
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="cart.html">
                                        Cart
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="checkout.html">
                                        Checkout
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="orders.html">
                                        Orders
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="order-details.html">
                                        Order Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-order.html">
                                        Create Order
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="order-tracking.html">
                                        Order Tracking
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="customers.html">
                                        Customers
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="customer-details.html">
                                        Customer Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="categories.html">
                                        Categories
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-category.html">
                                        Create Category
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="edit-category.html">
                                        Edit Category
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="sellers.html">
                                        Sellers
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="seller-details.html">
                                        Seller Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-seller.html">
                                        Create Seller
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="reviews.html">
                                        Reviews
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="refunds.html">
                                        Refunds
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    handshake
                                </span>
                                <span className="title">
                                    CRM
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="contacts-crm.html">
                                        Contacts
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-contact.html">
                                        Create Contact
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="customers-crm.html">
                                        Customers
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="leads.html">
                                        Leads
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-lead.html">
                                        Create Lead
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="deals.html">
                                        Deals
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    description
                                </span>
                                <span className="title">
                                    Project Management
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="project-overview.html">
                                        Project Overview
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="projects-list.html">
                                        Projects List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-project.html">
                                        Create Project
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="clients.html">
                                        Clients
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="teams.html">
                                        Teams
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="kanban-board-project.html">
                                        Kanban Board
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="users.html">
                                        Users
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-user.html">
                                        Create User
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    auto_stories
                                </span>
                                <span className="title">
                                    LMS
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="courses-list.html">
                                        Courses List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="course-details.html">
                                        Course Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-course.html">
                                        Create Course
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="edit-course.html">
                                        Edit Course
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="instructors.html">
                                        Instructors
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    support
                                </span>
                                <span className="title">
                                    Help Desk
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="tickets.html">
                                        Tickets
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="ticket-details.html">
                                        Ticket Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="agents.html">
                                        Agents
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="reports.html">
                                        Reports
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    clinical_notes
                                </span>
                                <span className="title">
                                    HR Management
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="employee-list.html">
                                        Employee List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-new-employee.html">
                                        Add New Employee
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="employee-leave.html">
                                        Employee Leave
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-leave.html">
                                        Add Leave
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="school-attendance.html">
                                        Attendance
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="departments.html">
                                        Departments
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-departments.html">
                                        Add Departments
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="holidays.html">
                                        Holidays
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="employee-salary.html">
                                        Employee Salary
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-payslip.html">
                                        Create Payslip
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    school
                                </span>
                                <span className="title">
                                    School
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="student-list.html">
                                        Student List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-student.html">
                                        Add Student
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="teacher-list.html">
                                        Teacher List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-teacher.html">
                                        Add Teacher
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="staff-list.html">
                                        Staff List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-staff.html">
                                        Add Staff
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="all-courses.html">
                                        All Courses
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-course.html">
                                        Add Course
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="fees-collection.html">
                                        Fees collection
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-fees.html">
                                        Add Fees
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="school-attendance.html">
                                        Attendance
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="library.html">
                                        Library
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-library-book.html">
                                        Add Library Book
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    home_health
                                </span>
                                <span className="title">
                                    Hospital
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="patients.html">
                                        Patients
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="patient-details.html">
                                        Patient Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="doctors.html">
                                        Doctors
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="doctor-details.html">
                                        Doctor Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="all-schedule.html">
                                        All Schedule
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="book-appointments.html">
                                        Book Appointments
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    local_activity
                                </span>
                                <span className="title">
                                    Events
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="events.html">
                                        Events
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="event-details.html">
                                        Event Details
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="create-an-event.html">
                                        Create An Event
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="edit-an-event.html">
                                        Edit An Event
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    share
                                </span>
                                <span className="title">
                                    Social
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="profile.html">
                                        Profile
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="settings.html">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    content_paste
                                </span>
                                <span className="title">
                                    Invoices
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="invoices.html">
                                        Invoices
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="invoice-details.html">
                                        Invoice Details
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    person
                                </span>
                                <span className="title">
                                    Users
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="team-members.html">
                                        Team Members
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="users-list.html">
                                        Users List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="add-user.html">
                                        Add User
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    account_box
                                </span>
                                <span className="title">
                                    Profile
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="user-profile.html">
                                        User Profile
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="teams2.html">
                                        Teams
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="projects.html">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="starter.html">
                                <span className="material-symbols-outlined menu-icon">
                                    star_border
                                </span>
                                <span className="title">
                                    Starter
                                </span>
                            </a>
                        </li>
                        <li className="menu-title small text-uppercase">
                            <span className="menu-title-text">
                                MODULES
                            </span>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    emoji_emotions
                                </span>
                                <span className="title">
                                    Icons
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="material-symbols.html">
                                        Material Symbols
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="remix-icon.html">
                                        RemixIcon
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    qr_code_scanner
                                </span>
                                <span className="title">
                                    UI Elements
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="alerts.html">
                                        Alerts
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="avatar.html">
                                        Avatar
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="buttons.html">
                                        Buttons
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="cards.html">
                                        Cards
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="carousels.html">
                                        Carousels
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="dropdowns.html">
                                        Dropdowns
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="grids.html">
                                        Grids
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="images.html">
                                        Images
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="list.html">
                                        List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="modals.html">
                                        Modals
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="navs.html">
                                        Navs
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="paginations.html">
                                        Pagination's
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="progress.html">
                                        Progress
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="spinners.html">
                                        Spinners
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="tabs.html">
                                        Tabs
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="accordions.html">
                                        Accordions
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="date-time-picker.html">
                                        Date Time Picker
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="videos.html">
                                        Videos
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    table_chart
                                </span>
                                <span className="title">
                                    Tables
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="basic-table.html">
                                        Basic Table
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="data-table.html">
                                        Data Table
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    forum
                                </span>
                                <span className="title">
                                    Forms
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="basic-elements.html">
                                        Basic Elements
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="advanced-elements.html">
                                        Advanced Elements
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="validation.html">
                                        Validation
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="wizard.html">
                                        Wizard
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="editors.html">
                                        Editors
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="file-uploader.html">
                                        File Uploader
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    pie_chart
                                </span>
                                <span className="title">
                                    ApexCharts
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="line.html">
                                        Line
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="area.html">
                                        Area
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="column.html">
                                        Column
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="mixed.html">
                                        Mixed
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="radial-bar.html">
                                        RadialBar
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="radar.html">
                                        Radar
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="pie.html">
                                        Pie
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="polar.html">
                                        Polar
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="more.html">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    lock_open
                                </span>
                                <span className="title">
                                    Authentication
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="sign-in.html">
                                        Sign In
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="sign-up.html">
                                        Sign Up
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="forgot-password.html">
                                        Forgot Password
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="reset-password.html">
                                        Reset Password
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="confirm-email.html">
                                        Confirm Email
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="lock-screen.html">
                                        Lock Screen
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="logout.html">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    content_copy
                                </span>
                                <span className="title">
                                    Extra Pages
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="pricing.html">
                                        Pricing
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="timeline.html">
                                        Timeline
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="faq.html">
                                        FAQ
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="gallery.html">
                                        Gallery
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="testimonials.html">
                                        Testimonials
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="search.html">
                                        Search
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="coming-soon.html">
                                        Coming Soon
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="blank-page.html">
                                        Blank Page
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    error
                                </span>
                                <span className="title">
                                    Errors
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="404-error-page.html">
                                        404 Error Page
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="internal-error.html">
                                        Internal Error
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="widgets.html">
                                <span className="material-symbols-outlined menu-icon">
                                    widgets
                                </span>
                                <span className="title">
                                    Widgets
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="maps.html">
                                <span className="material-symbols-outlined menu-icon">
                                    map
                                </span>
                                <span className="title">
                                    Maps
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="notifications.html">
                                <span className="material-symbols-outlined menu-icon">
                                    notifications
                                </span>
                                <span className="title">
                                    Notifications
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="members.html">
                                <span className="material-symbols-outlined menu-icon">
                                    people
                                </span>
                                <span className="title">
                                    Members
                                </span>
                            </a>
                        </li>
                        <li className="menu-title small text-uppercase">
                            <span className="menu-title-text">
                                OTHERS
                            </span>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="my-profile.html">
                                <span className="material-symbols-outlined menu-icon">
                                    account_circle
                                </span>
                                <span className="title">
                                    My Profile
                                </span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    settings
                                </span>
                                <span className="title">
                                    Settings
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a className="menu-link" href="account-settings.html">
                                        Account Settings
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="change-password.html">
                                        Change Password
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="connections.html">
                                        Connections
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="privacy-policy.html">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link" href="terms-conditions.html">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link menu-toggle active" href="javascript:void(0);">
                                <span className="material-symbols-outlined menu-icon">
                                    keyboard_arrow_down
                                </span>
                                <span className="title">
                                    Multi Level Menu
                                </span>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item after-sub-menu menu-level">
                                    <a className="menu-link menu-toggle" href="javascript:void(0);">
                                        <span className="title">
                                            Level One
                                        </span>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a className="menu-link" href="#">
                                                Level Three
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                        <li className="menu-item">
                <Link
                    className="block w-full cursor-pointer"
                    href={logout()}
                    as="button"
                    onClick={handleLogout}
                    data-test="logout-button"
                >
                    <Logou className="mr-2" />
                    Log out
                </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}
