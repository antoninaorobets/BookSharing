class RequestsController < ApplicationController
# '/api/users/user_id/{requests}/'

    def index
        user =  User.find(params[:user_id])
        if (params[:type] == 'sent')
            sent_requests = user.sent_requests.order('requests.created_at DESC')
            render json: sent_requests , status: :ok
        else
            received_requests = user.received_requests.order('requests.created_at DESC')
            render json: received_requests , status: :ok
        end
    end
    def show
        user =  User.find(params[:user_id])
        sent_requests = user.sent_requests.find_by(book_id: params[:book_id])
        render json: sent_requests, status: :ok
    end
    def create
        # byebug
         if !params[:receiver_id]
            list = Book.find(params[:book_id]).list
            params[:receiver_id] = list.user.id
        end
            request = Request.create!(requests_params)
            render json: request, status: :created
    end

    private
    def requests_params
        params.permit(:sender_id, :receiver_id, :text, :book_id)
    end
    
end
