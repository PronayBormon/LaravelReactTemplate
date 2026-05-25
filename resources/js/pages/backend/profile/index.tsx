import DashboardChart from "@/pages/widget/chart";

interface Props {
    user: any;
}


export default function index({ user }: Props) {
    return (

        <>
            <div className="row">
                <div className="col-12">
                    <div className="card bg-white border border-white rounded-10 p-20 mb-4">
                        <h3 className="mb-20">
                            Profile Intro
                        </h3>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <img alt="profile" className="rounded-circle" src={user.avatar ? `/${user.avatar}` : "/backend/assets/images/placholder.png"} style={{ width: "75px" }} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h3 className="fs-18" style={{ marginBottom: "2px" }}>
                                    {user.name}
                                </h3>
                                <span className="fs-16">
                                    <a className="__cf_email__" data-cfemail="660b0712030926000f0a074805090b" href={`mailto:${user.email}`}>
                                        {user.email}
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* <h4 className="fw-medium fs-16 mb-2">
                            About Me
                        </h4> */}
                        {/* <p className="lh-1-8 fs-16">
                            Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
                        </p>
                        <h3 className="mb-2 pb-1">
                            Social Profile
                        </h3> */}
                        {/* <ul className="p-0 mb-0 list-unstyled d-flex gap-2" >
                            <li>
                                <a className="d-inline-block rounded-circle text-decoration-none text-center text-white transition-y fs-16" href="https://www.facebook.com/" style={{ width: "24px", height: "24px", lineHeight: "24px", backgroundColor: "#3a559f" }} target="_blank">
                                    <i className="ri-facebook-fill">
                                    </i>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <div className="col-12">
                {/* <div className="col-md-6 col-xxxl-6 col-6"> */}
                    <div className="card bg-white border border-white rounded-10 p-20 mb-4">
                        <h3 className="mb-20">
                            Profile Information
                        </h3>
                        <ul className="p-0 mb-0 list-unstyled last-child-none">
                            <li className="mb-10 fs-16">
                                User ID:
                                <span className="text-secondary">
                                    {user.id}
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Full Name:
                                <span className="text-secondary">
                                    {user.name}
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Email:
                                <span className="text-secondary">
                                    <a className="__cf_email__" data-cfemail="15787c767d70747955737c79743b767a78" href={`mailto:${user.email}`}>
                                       {user.email}
                                    </a>
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Role:
                                <span className="text-secondary">
                                    {user.role}
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Join Date:
                                <span className="text-secondary">
                                    {user.created_at}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="col-md-6 col-xxxl-6 col-6">
                    <div className="card bg-white border border-white rounded-10 p-20 mb-4">
                        <h3 className="mb-20">
                            Additional Information
                        </h3>
                        <ul className="p-0 mb-0 list-unstyled last-child-none">
                            <li className="mb-10 fs-16">
                                Phone:
                                <span className="text-secondary">
                                    +1 444 266 5599
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Address:
                                <span className="text-secondary">
                                    84 S. Arrowhead Court Branford
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Orders:
                                <span className="text-secondary">
                                    696
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Product:
                                <span className="text-secondary">
                                    9240
                                </span>
                            </li>
                            <li className="mb-10 fs-16">
                                Event:
                                <span className="text-secondary">
                                    5
                                </span>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
            {/* <div className="col-md-6 col-xxxl-6 col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <h3 className="fw-medium mb-10">
                                            Total Projects
                                        </h3>
                                        <h2 className="lh-1 fs-26 mb-20 fw-medium">
                                            22.5K+
                                        </h2>
                                        <div className="text-center bg-light rounded-circle mx-auto" style={{ width: "100px", height: "100px", lineHeight: "100px", marginBottom: "32px" }}>
                                            <img alt="active-learning" src="assets/images/active-learning.svg" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>
                                                This Month
                                            </span>
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style={{ padding: "3px 5px" }}>
                                                <i className="material-symbols-outlined fs-14 text-success">
                                                    trending_up
                                                </i>
                                                <span className="lh-1 fs-14 text-success">
                                                    2.15%
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <h3 className="fw-medium mb-10">
                                            Total Orders
                                        </h3>
                                        <h2 className="lh-1 fs-26 mb-20 fw-medium">
                                            21.2K
                                        </h2>
                                        <div className="text-center bg-light rounded-circle mx-auto" style={{ width: "100px", height: "100px", lineHeight: "100px", marginBottom: "32px" }}>
                                            <img alt="join" src="assets/images/join.svg" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>
                                                This Week
                                            </span>
                                            <span className="d-flex align-content-center gap-1 bg-danger bg-opacity-10 border border-danger" style={{ padding: "3px 5px" }}>
                                                <i className="material-symbols-outlined fs-14 text-danger">
                                                    trending_down
                                                </i>
                                                <span className="lh-1 fs-14 text-danger">
                                                    1.25%
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bg-white p-20 rounded-10 border border-white mb-4">
                                        <h3 className="fw-medium mb-10">
                                            Total Revenue
                                        </h3>
                                        <h2 className="lh-1 fs-26 mb-20 fw-medium">
                                            $34.5M
                                        </h2>
                                        <div className="text-center bg-light rounded-circle mx-auto" style={{ width: "100px", height: "100px", lineHeight: "100px", marginBottom: "32px" }}>
                                            <img alt="school" src="assets/images/school.svg" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span>
                                                This Week
                                            </span>
                                            <span className="d-flex align-content-center gap-1 bg-success bg-opacity-10 border border-success" style={{ padding: "3px 5px" }}>
                                                <i className="material-symbols-outlined fs-14 text-success">
                                                    trending_up
                                                </i>
                                                <span className="lh-1 fs-14 text-success">
                                                    75%
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="rounded-10 p-20 pb-0 gradient-bg position-relative welcome-card mb-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="fs-16 text-white d-block" style={{ marginTop: "-11px" }}>
                                            December 28, 2025
                                        </span>
                                        <h3 className="fs-26 fw-medium text-white" style={{ marginTop: "7px", marginBottom: "10px" }}>
                                            Welcome To StarCode Kh
                                        </h3>
                                        <p className="fs-15 text-white">
                                            Learning Management System Dashboard.
                                        </p>
                                        <p className="fs-16 fw-medium text-white mb-0">
                                            Daily Performance
                                        </p>
                                        <DashboardChart
                                            type="line"
                                            height="225"
                                            categories={[
                                                '2026',
                                                '2025',
                                                '2024',
                                                '2023',
                                                '2022',
                                                '2021',
                                                '2020',
                                            ]}
                                            series={[
                                                {
                                                    name: 'Sales',
                                                    data: [120, 200, 150, 300, 280, 280, 400],
                                                },
                                                {
                                                    name: 'Revenue',
                                                    data: [350, 120, 200, 180, 150, 130, 190],
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center text-md-end">
                                            <img alt="welcome" src="assets/images/welcome.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
    )
}