class BooksController < ApplicationController
    wrap_parameters format: []
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    def create
        user = User.find(params[:user_id])
        list = user.lists.first
        book = list.books.create!(book_params)
        if book 
            render json: book, status: :created
        else 
            render json: {errors: book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:user_id])
        list = user.lists.first
        book = list.books.find_by(id: params[:id])
        book.update!(book_params)
        render json: book, status: :ok
    end

    def destroy
        book = Book.find_by(id: params[:id])
        if book
            book.destroy
            render json: {}  
        end
    end
    
    private
    def book_params
        params.permit(:title,:author,:description)
    end
    def render_record_not_found
        render json: {errors: "Book not found"}, status: :not_found
    end

end
