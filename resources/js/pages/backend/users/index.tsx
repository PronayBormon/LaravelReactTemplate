import { Head, router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface UsersPagination {
    data: User[];
    links: PaginationLink[];
}

interface Props {
    users: UsersPagination;

    filters: {
        search?: string;
        join_date?: string;
    };
}



export default function Index({ users, filters }: Props) {

    const [editId, setEditId] = useState<number | null>(null);

    const [search, setSearch] = useState(
        filters.search || ''
    );

    const [joinDate, setJoinDate] = useState(
        filters.join_date || ''
    );

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {

        e.preventDefault();

        if (editId) {

            router.put(`/users/${editId}`, data, {
                onSuccess: () => {
                    reset();
                    setEditId(null);
                },
            });

        } else {

            post('/users', {
                onSuccess: () => {
                    reset();
                },
            });
        }
    };

    const editUser = (user: User) => {

        setEditId(user.id);

        setData({
            name: user.name,
            email: user.email,
            password: '',
        });
    };

    const deleteUser = (id: number) => {

        if (confirm('Delete this user?')) {

            router.delete(`/users/${id}`);
        }
    };

    const applyFilters = () => {

        router.get(
            '/users',
            {
                search,
                join_date: joinDate,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const resetFilters = () => {

        setSearch('');

        setJoinDate('');

        router.get('/users');
    };

    useEffect(() => {

        const timeout = setTimeout(() => {

            router.get(
                '/users',
                {
                    search,
                    join_date: joinDate,
                },
                {
                    preserveState: true,
                    replace: true,
                }
            );

        }, 500);

        return () => clearTimeout(timeout);

    }, [search, joinDate]);

    return (
        <>
            <Head title="User List" />

            <div
                className="main-content-container overflow-hidden"
                style={{ minHeight: "75vh" }}
            >

                <div className="row">

                    <div className="col-md-12">

                        <div className="card bg-white rounded-10 border border-white mb-4">

                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 p-20">

                                <button
                                    className="bg-transparent text-primary fs-16 border-0 p-0"
                                    data-bs-target="#exampleModal"
                                    data-bs-toggle="modal"
                                    onClick={() => {

                                        setEditId(null);

                                        reset();
                                    }}
                                >

                                    + Add New User

                                </button>

                                {/* Filters */}

                                <div className="d-flex align-items-center gap-2 flex-wrap">

                                    <input
                                        className="form-control"
                                        placeholder="Search by name or email"
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        style={{ width: '250px' }}
                                    />

                                    <input
                                        className="form-control"
                                        type="date"
                                        value={joinDate}
                                        onChange={(e) =>
                                            setJoinDate(e.target.value)
                                        }
                                        style={{ width: '250px' }}
                                    />

                                    <button
                                        className="btn btn-primary"
                                        onClick={applyFilters}
                                    >

                                        Filter

                                    </button>

                                    <button
                                        className="btn btn-secondary"
                                        onClick={resetFilters}
                                    >

                                        Reset

                                    </button>

                                </div>

                            </div>

                            <div className="default-table-area mx-minus-1 table-to-do-list">

                                <div className="table-responsive">

                                    <table className="table align-middle w-100">

                                        <thead>

                                            <tr>

                                                <th>
                                                    User ID
                                                </th>

                                                <th>
                                                    Name
                                                </th>

                                                <th>
                                                    Email
                                                </th>

                                                <th>
                                                    Join Date
                                                </th>

                                                <th className="text-end">
                                                    Action
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {users.data.length > 0 ? (

                                                users.data.map((user) => (

                                                    <tr key={user.id}>

                                                        <td>
                                                            #{user.id}
                                                        </td>

                                                        <td>
                                                            {user.name}
                                                        </td>

                                                        <td>
                                                            {user.email}
                                                        </td>

                                                        <td>
                                                            {new Date(
                                                                user.created_at
                                                            ).toLocaleDateString(
                                                                'en-US',
                                                                {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                }
                                                            )}
                                                        </td>

                                                        <td>

                                                            <div
                                                                className="d-flex justify-content-end"
                                                                style={{ gap: "12px" }}
                                                            >

                                                                <button
                                                                    className="bg-transparent p-0 border-0 hover-text-success"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                    onClick={() => editUser(user)}
                                                                >

                                                                    <i className="material-symbols-outlined fs-16 fw-normal text-body">
                                                                        edit
                                                                    </i>

                                                                </button>

                                                                <button
                                                                    onClick={() =>
                                                                        deleteUser(user.id)
                                                                    }
                                                                    className="bg-transparent p-0 border-0 hover-text-danger"
                                                                >

                                                                    <i className="material-symbols-outlined fs-16 fw-normal text-body">
                                                                        delete
                                                                    </i>

                                                                </button>

                                                            </div>

                                                        </td>

                                                    </tr>

                                                ))

                                            ) : (

                                                <tr>

                                                    <td
                                                        colSpan={5}
                                                        className="text-center py-5"
                                                    >

                                                        No users found

                                                    </td>

                                                </tr>

                                            )}

                                        </tbody>

                                    </table>

                                </div>

                                {/* Pagination */}

                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-20 p-20">

                                    <span className="fs-14 text-muted">

                                        Showing {users.data.length} users

                                    </span>

                                    <ul className="pagination mb-0">

                                        {users.links.map((link, index) => (

                                            <li
                                                key={index}
                                                className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                            >

                                                <button
                                                    type="button"
                                                    className="page-link"
                                                    disabled={!link.url}
                                                    onClick={() => {

                                                        if (link.url) {

                                                            router.visit(link.url, {
                                                                preserveState: true,
                                                                preserveScroll: true,
                                                            });
                                                        }
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />

                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            </div>

                            {/* Modal */}

                            <div
                                aria-hidden="true"
                                aria-labelledby="exampleModalLabel"
                                className="modal fade"
                                id="exampleModal"
                            >

                                <div
                                    className="modal-dialog modal-dialog-centered rounded-10"
                                    style={{ maxWidth: "550px" }}
                                >

                                    <form
                                        onSubmit={submit}
                                        className="modal-content bg-white"
                                    >

                                        <div className="modal-header border-border-color-40 p-20">

                                            <h1
                                                className="modal-title fs-18 fw-medium mb-0"
                                                id="exampleModalLabel"
                                            >

                                                {editId
                                                    ? 'Edit User'
                                                    : 'Add New User'}

                                            </h1>

                                            <button
                                                aria-label="Close"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                type="button"
                                            >
                                            </button>

                                        </div>

                                        <div className="modal-body p-20 pb-0">

                                            <div className="row">

                                                <div className="col-lg-12">

                                                    <div className="mb-20">

                                                        <label className="label">
                                                            Name
                                                        </label>

                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            value={data.name}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'name',
                                                                    e.target.value
                                                                )
                                                            }
                                                        />

                                                    </div>

                                                </div>

                                                <div className="col-lg-12">

                                                    <div className="mb-20">

                                                        <label className="label">
                                                            Email
                                                        </label>

                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'email',
                                                                    e.target.value
                                                                )
                                                            }
                                                        />

                                                    </div>

                                                </div>

                                                <div className="col-lg-12">

                                                    <div className="mb-20">

                                                        <label className="label">
                                                            Password
                                                        </label>

                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            value={data.password}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'password',
                                                                    e.target.value
                                                                )
                                                            }
                                                        />

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="modal-footer border-0 p-20 pt-0">

                                            <button
                                                className="btn btn-danger fw-normal text-white"
                                                data-bs-dismiss="modal"
                                                type="button"
                                            >

                                                Cancel

                                            </button>

                                            <button
                                                className="btn btn-primary fw-normal text-white"
                                                type="submit"
                                                disabled={processing}
                                            >

                                                {processing
                                                    ? 'Processing...'
                                                    : editId
                                                        ? 'Update'
                                                        : 'Create'}

                                            </button>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}