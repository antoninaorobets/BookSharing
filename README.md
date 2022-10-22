# Book Sharing app

## About the app
I have a lot of kids' books that I don't read to my son right now, and they are in different languages, which are not easy to buy in the USA. I wanted to share these books with my friends when I don't need them. So I came up with an idea to make this process easier and write a web app for that purpose. When my friend asks me for some books to read, instead of sending pictures of books in messenger, I add my books to the list in the app and then share the link. Users can request any book from that list they want to borrow, and the system will notify me which book to share.


## User Stories
- As User, I can create an account and sign in to the app to get access to my book.
- As an Authorized User I can add a book to my list.
- As an Authorized User I can edit a book from my list.
- As an Authorized User I can share a list with other users (copy/paste link).
- As an authorized User I can delete a book from my list with shared books.
- As a Authorized User I can see a shared list of books.
- As a Authorized User I can see a shared list of books from a particular user.
- As an Authorized User I can sent a request for book from the shared list.
- As an Authorized User I can receive and view requests for book.
- View borrowed books list.

## Technical details
Frontent - ReactJS; back-end - Ruby on rails, UI - Bootstrap React.

### Data Model
![Data Model](https://github.com/antoninaorobets/BookSharing/blob/main/DataModel.png?raw=true)

### Views
My Books - page where the user can see all books he is going to share.
	Add a new Book  - form to copy/paste a link from amazon.
Shared Books - page where the user can see his friends' books which he can request.
	Request a Book - form to request a selected book.
Requests  - page with a list of received and sent requests.
Login.


## To Dos
- add book image
- add book from the link from Amazon
- delete saved lists
- manage errors
- add menu for mobile 
- when you have only one shared list no need to keep two tabs
- when tou don't have any list => placeholder
- return user on shared list after login if they go to login page from Save List, 
- search shared books
- name+numbers code for shared link



npm start --prefix client
rails server