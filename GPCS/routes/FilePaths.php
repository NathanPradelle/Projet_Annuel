<?php

class FilePaths {
    /* Unauthenticated */
    const WELCOME = 'Unauthenticated/Welcome/Welcome';
    const APARTMENTS = 'Unauthenticated/ApartmentsPage/ApartmentsPage';
    const LOGIN = "Unauthenticated/Login/Login";
    const REGISTER = "Unauthenticated/Register/Register";

    /* Authenticated */
    const CONFIRM_PASSWORD = "Authenticated/ConfirmPassword/ConfirmPassword";
    const DASHBOARD = "Authenticated/Dashboard/Dashboard";
    const FORGOT_PASSWORD = "Authenticated/ForgotPassword/ForgotPassword";
    const PROFILE = "Authenticated/Profile/ProfileEditionPage";
    const RESET_PASSWORD = "Authenticated/ResetPassword/ResetPassword";
    const VERIFY_EMAIL = "Authenticated/VerifyEmail/VerifyEmail";

    /* Admin */
    const ADMIN_CREATION = 'Admin/AdminCreationPage/AdminCreationPage';
    const ADMINS_PAGE = 'Admin/AdminsPage/AdminsPage';
    const TAG_CREATION = 'Admin/TagCreationPage/TagCreationPage';
    const TAG_EDITION = 'Admin/TagEditionPage/TagEditionPage';
    const TAGS = 'Admin/TagsPage/TagsPage';
    const USERS = 'Admin/UsersPage/UsersPage';

    /* Lessor */
    const APARTMENT_CREATION = 'Lessor/ApartmentCreationPage/ApartmentCreationPage';
    const MY_APARTMENT = 'Lessor/MyApartment/MyApartment';
    const MY_APARTMENTS = 'Lessor/MyApartments/MyApartments';

    /* Traveler */
    const MY_RESERVATION = 'Traveler/MyReservationPage/MyReservationPage';
    const MY_RESERVATIONS = 'Traveler/MyReservationsPage/MyReservationsPage';

}