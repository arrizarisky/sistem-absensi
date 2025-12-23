export default function Pagination({ links }) {
    return (
        links.length > 0 &&
        links.map((link, index) => {
            return (
                <a
                    key={index}
                    href={link.url}
                    className={`px-3 py-1 rounded-md border ${
                        link.active
                            ? "bg-gray-700 text-white border-gray-300"
                            : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-gray-600 hover:text-white"
                    } mx-1`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></a>
            );
        })
    );
}
