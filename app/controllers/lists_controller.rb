class ListsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_find

    # get all users lists
    # /api/users/user_id/lists 
    def index
        lists = User.find(params[:user_id]).lists
        render json: lists, status: :ok
    end

    # get a list by id
    # /api/users/user_id/lists 
    # def show
    #     list = List.find_by(id: params[:list_id])
    #     render json:list, status: :ok
    # end

    private
    def render_record_not_find
        render json: {errors: "List noy found"}, status: :not_found
    end
end
