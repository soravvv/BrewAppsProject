# BrewAppsProject

## Features

- **Create**: Add new books with titles, authors, and summaries.
- **Read**: View a list of all books and individual book details.
- **Update**: Edit and update book details.
- **Delete**: Remove books from the database

GET https://brew-apps-project-zojq.vercel.app/api/books => This endpoint will give all the listing of books

GET https://brew-apps-project-zojq.vercel.app/api/books/:id (referenceId=6540a0f71fbb800390a5747b) => This endpoint will get the details of the books 

DELETE https://brew-apps-project-zojq.vercel.app/api/books/:id => This endpoint will delete the book

POST https://brew-apps-project-zojq.vercel.app/api/books/save/details => this endpoint will help in to create new books (Body JSON=> {
    "title": "Book 4",
    "author": "Sorav",
    "summary": "Creating Book 4"
}
)

PUT https://brew-apps-project-zojq.vercel.app/api/books/update/:id => this endpoint will update the existing book details which has not deleted (Body JSON=> {
    "title": "Book 5",
    "author": "Sorav",
    "summary": "Creating Book 5"
}
)


**For Local Setup**
1. npm install in root folder (Brew Apps Project)
2. Add .env file in which PORT=8000 DB_URL="mongodb+srv://soravmalviya15:books1234@cluster0.pqriw4o.mongodb.net/?retryWrites=true&w=majority"
3. npm run dev