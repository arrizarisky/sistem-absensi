import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { Pencil } from "lucide-react";

export default function userIndex({ users }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between p-2 items-center">
                        <label className="font-bold text-gray-300">
                            Total Users: {users.total}
                        </label>
                        <Link
                            className="group relative inline-block overflow-hidden border rounded-lg border-gray-600 px-8 py-3"
                            href={route("users.create")}
                        >
                            <span className="absolute inset-x-0 top-0 h-0.5 bg-gray-600 transition-all group-hover:h-full"></span>

                            <span className="relative text-sm font-medium text-gray-600 transition-colors group-hover:text-white">
                                Create User
                            </span>
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto rounded border border-gray-300 shadow-sm dark:border-gray-600">
                                <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
                                            <th className="text-left px-3 py-2 whitespace-nowrap">
                                                ID
                                            </th>
                                            <th className="text-left  px-3 py-2 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th className="text-left  px-3 py-2 whitespace-nowrap">
                                                Email
                                            </th>
                                            <th className="text-left  px-3 py-2 whitespace-nowrap">
                                                Role
                                            </th>
                                            <th className="text-left  px-3 py-2 whitespace-nowrap">
                                                &nbsp;
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {users.data.map((user) => {
                                            return (
                                                <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        {user.id}
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        {user.role}
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        <Link
                                                            className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600"
                                                            href={route(
                                                                "users.edit",
                                                                user.id
                                                            )}
                                                        >
                                                            <Pencil className="h-3 w-3" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="px-3 py-2"
                                            >
                                                <Pagination
                                                    links={users.links}
                                                />
                                            </td>
                                            <td
                                                colSpan="4"
                                                className="px-3 py-2"
                                            ></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
