class SharedListsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_find

     # '/api/users/user_id/shared_lists/
    def index
        shared_lists = User.find(params[:user_id]).shared_lists
        # puts User.find(3).shared_lists.first.list.user.name
        render json: shared_lists, status: :ok, include: ['list','books', 'list.user']
    end

    def create
        user = User.find(params[:user_id])
        new_list = User.shared_lists.create(list_id: params[:list_id])
        if new_list 
            render json: new_list, status: :created
        else 
            render json: {errors: new_list.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    def destroy
        shared_list = Shared_list.find_by(id: params[:id])
        if shared_list
            shared_list.destroy
            render json: {}  
        else
            render json: { error: "List not found" }, status: :not_found
        end 
    end

    private
    def render_record_not_find
        render json: {errors: "List noy found"}, status: :not_found
    end
end
