class ListsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_find

    # get all users lists
    # /api/users/user_id/lists 
    def index  
        list = User.find(params[:user_id]).lists.first
        hashids = Hashids.new("this is my salt",8)
        hash = hashids.encode(list.id)
        render json: list, status: :ok
    end

#    /api/lists/:hash
    def show
        # hashids = Hashids.new("this is my salt",8)
        # id = hashids.decode(params[:hash])
        # list = List.find(id)
        list = List.find(params[:hash])
        render json: list, status: :ok
    end

    private
    def render_record_not_find
        render json: {errors: "List noy found"}, status: :not_found
    end
    # def hashids
    #     Hashids.new("shared link salt")
    # end

end
