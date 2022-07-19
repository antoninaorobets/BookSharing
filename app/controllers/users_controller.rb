class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    def create
        user = User.create(user_login_params)
        puts user
        if user.valid?
            session[:user_id] = user.id
            list = user.lists.create(name: "primary")
            puts list
            render json: user, status: :created
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :ok
        else 
            render json: {errors: "User not authorized"}, status: :unauthorized
        end
    end

    private
    def user_login_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
    def render_record_not_found
        render json: {errors: "User not found"}, status: :not_found
    end
end
