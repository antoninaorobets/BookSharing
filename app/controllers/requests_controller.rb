class RequestsController < ApplicationController
# '/api/users/user_id/{requests}/'

    def index
        user =  User.find(params[:user_id])
        received_requests = user.received_requests
        sent_requests = user.sent_requests
        render json: {sent: sent_requests,received: received_requests }, status: :ok
    end
    def create
        request = Request.create!(requests_params)
        render json: request, status: :created
    end

    private
    def requests_params
        params.permit(:sender_id, :receiver_id, :text, :book_id)
    end
    
end
