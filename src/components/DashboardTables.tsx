import { useEffect, useState } from "react";
import BookForm from "./BookForm";
import "../components/styles/dashboard-tables.css";
import { getAllBooks } from "../api/book";
import { BookResponse } from "../types/BookResponse";
import { getAllMembers } from "../api/member";
import { MemberResponse } from "../types/MemberResponse";

const DashboardTables = () => {
  const [activeView, setActiveView] = useState("books");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const [books, setBooks] = useState([]);
    const [members, setMembers] = useState([])
    
  useEffect(() => {
    const fetchAllBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    console.log(fetchAllBooks());
    fetchAllBooks();
  }, [activeView]);

  useEffect(()=>{
    const fetchAllMembers = async () => {
        const members = await getAllMembers();
        setMembers(members);
    }
    console.log(fetchAllMembers());
    fetchAllMembers();
  },[]);

  const openBookModal = () => setIsBookModalOpen(true);
  const closeBookModal = () => setIsBookModalOpen(false);

  return (
    <div className="dashboard-tables">
      <div className="actions-wrapper">
        <div className="view-toggles">
          <button
            onClick={() => setActiveView("books")}
            className={`toggle-button ${
              activeView === "books" ? "active" : ""
            }`}
          >
            Books
          </button>
          <button
            onClick={() => setActiveView("members")}
            className={`toggle-button ${
              activeView === "members" ? "active" : ""
            }`}
          >
            Members
          </button>
        </div>
        <div className="container-operations">
          <button className="add-book" onClick={openBookModal}>
            Add Book
          </button>
        </div>
      </div>

      <div className="table-container">
        {activeView === "books" ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Publication Year</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book: BookResponse) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publicationYear}</td>
                  <td>
                    <span className={`status-badge ${book.isAvailable}`}>
                      
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Member Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member: MemberResponse) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.memberType}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isBookModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BookForm closeBookModal={closeBookModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTables;
