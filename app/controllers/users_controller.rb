class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        team_id = Team.find_by(params[:team])
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        user = find_user
        if user
            render json: user, status: :ok
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :email, :team, :type)
    end


end
