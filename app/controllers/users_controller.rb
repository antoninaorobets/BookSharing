class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    wrap_parameters format: []
    def create
        user = User.create!(user_login_params)
        session[:user_id] = user.id
        list = user.lists.create(name: "default")
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    private
    def user_login_params
        params.permit(:user, :name, :email, :password, :password_confirmation)
    end
    def render_record_not_found
        render json: {errors: "User not found"}, status: :not_found
    end
end
