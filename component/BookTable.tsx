import {useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {CiEdit, CiTrash} from "react-icons/ci";

interface Book {
    id: number;
    title: string;
}

export default function BookTable() {
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState<Book[]>([
        {id: 1, title: "Clean Code"},
        {id: 2, title: "Design Patterns"},
        {id: 3, title: "Refactoring"},
        {id: 4, title: "Domain-Driven Design"},
        {id: 5, title: "The Pragmatic Programmer"},
    ]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleAdd = () => {
        if (title.trim() === "") return;
        const newBook: Book = {
            id: books.length ? books[books.length - 1].id + 1 : 1,
            title,
        };
        setBooks([...books, newBook]);
        setTitle("");
    };

    const handleDelete = (id: number) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        if (deleteId !== null) {
            setBooks(books.filter((b) => b.id !== deleteId));
            setDeleteId(null);
        }
        setShowModal(false);
    };

    return (
        <div className=" mt-5 p-3 bg-white rounded shadow-sm">
            <div className="d-flex gap-2 mb-4">
                <Form.Control
                    type="text"
                    value={title}
                    placeholder="Nhập tiêu đề sách"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Button onClick={handleAdd} variant="primary" style={{width: "220px"}}>
                    + Thêm sách
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th style={{width: "80px"}}>ID</th>
                    <th>Tiêu đề</th>
                    <th style={{width: "200px",textAlign:"center"}}>
                        Hành động
                    </th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td className="text-center">
                            <Button variant="outline-dark" className="me-2 rounded-5">
                                <CiEdit/>
                            </Button>
                            <Button className="rounded-5" variant="outline-danger" onClick={() => handleDelete(book.id)}>
                                <CiTrash/>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>Bạn chắc chắn muốn xóa?</Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmDelete}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}