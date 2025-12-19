import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

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
                                                        &nbsp;
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
