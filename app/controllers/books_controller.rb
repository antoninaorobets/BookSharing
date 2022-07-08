class BooksController < ApplicationController

    def create
        book = Book.create(book_params)
        render json: book, status: :created
    end

    private
    def
        params.permit(:title,:author,:description, :list_id, :status)
    end
end
