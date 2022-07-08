class UsersController < ApplicationController
    def create
        user = User.create(user_login_params)
        if user.valid?
            session[:user_id] = user.id
            user.Lists.create(name: "primary")
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
end
