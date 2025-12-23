import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectBox from "@/Components/SelectBox";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function SubmitAttendances() {
    const [transitioning, setTransitioning] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        status: "attend",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("attendances.submit")),
            {
                preservescroll: true,
                onSuccess: () => {
                    alert("User Absent successfully!");
                },
                onError: (errors) => {
                    console.log(errors);
                },
            };
    };

    useEffect(() => {
        if (data.status == "attend") {
            setTransitioning(false);
        } else {
            setTransitioning(true);
        }
    }, [data.status]);

    return (
        <section className="max-w-2xl ">
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="info"
                        value="Silahkan lakukan absensi"
                    />
                    <SelectBox
                        onChange={(e) => setData("status", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        options={[
                            {
                                value: "attend",
                                label: "Hadir",
                            },
                            {
                                value: "leave",
                                label: "Cuti",
                            },
                            {
                                value: "permit",
                                label: "Izin",
                            },
                            {
                                value: "business_trip",
                                label: "Perjalanan Dinas",
                            },
                            {
                                value: "remote",
                                label: "Kerja Jarak Jauh",
                            },
                        ]}
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <Transition
                    show={transitioning}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <div>
                        <InputLabel htmlFor="description" value="Alasan" />

                        <TextInput
                            id="password"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />

                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>
                </Transition>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Absen</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
