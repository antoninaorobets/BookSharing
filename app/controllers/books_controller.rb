class BooksController < ApplicationController
    wrap_parameters format: []
    def create
        user = User.find(params[:user_id])
        list = user.lists.first
        book = list.books.create(book_params)
        if book 
            render json: book, status: :created
        else 
            render json: {errors: book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        book = Book.find_by(id: params[:id])
        if book
            book.destroy
            render json: {}  
        else
            render json: { error: "Book not found" }, status: :not_found
        end 
    end
    
    private
    def book_params
        params.permit(:title,:author,:description)
    end

end
