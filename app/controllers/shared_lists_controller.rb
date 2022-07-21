class SharedListsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_find
#    //before_action :find_user

     # /api/users/user_id/shared_lists/
    def index
        shared_lists = User.find(params[:user_id]).shared_lists
        # puts User.find(3).shared_lists.first.list.user.name
        render json: shared_lists, status: :ok, include: ['list','books', 'list.user']
    end

    def show
         user = User.find(params[:user_id])
         shared_lists = user.shared_lists.find_by( list_id:  params[:id] )
         if shared_lists 
            render json: {saved: true}, status: :ok
         else
            render json: {saved: false}, status: :ok
         end
    end

    def create
        user = User.find(params[:user_id])
        new_list = user.shared_lists.create!(list_id: params[:list_id])
        render json: new_list, status: :created

    end
    
    def destroy
        shared_list = Shared_list.find(params[:id])
        shared_list.destroy
        render json: {}  
    end

    private
    def render_record_not_find
        render json: {errors: "List noy found"}, status: :not_found
    end
    def find_user
        User.find(params[:user_id])
    end
end
