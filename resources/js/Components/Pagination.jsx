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
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
                    } mx-1`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></a>
            );
        })
    );
}
