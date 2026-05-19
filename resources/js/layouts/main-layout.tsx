import React from "react";
import MainNavbar from "@/components/main-component/main-navbar";
import MainSidebar from "@/components/main-component/main-sidebar";

export default function MainLayout({
    title = '',
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (<>
        <MainSidebar />

        {/* <!-- Start Main Content Area --> */}
        <div className="container-fluid">
            <div className="main-content d-flex flex-column">

                <MainNavbar></MainNavbar>
                <h1>{title}</h1>
                {/* <!-- End Header Area --> */}
                {children}



                {/* <!-- Start Footer Area --> */}
                <footer className="footer-area bg-white text-center rounded-10 rounded-bottom-0">
                    <p className="fs-16 text-body">
                        ©Copyright all right reserve
                    </p>
                </footer>
                {/* <!-- End Footer Area --> */}


            </div >
        </div >
        {/* <!-- Start Main Content Area --> */}

    </>
    );
}
