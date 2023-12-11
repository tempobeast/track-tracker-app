class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        user = find_user
        if user && user.type == "Coach"
            render json: user, status: :ok
        elsif user && user.type == "Athlete"
            coach = user.coach.workouts
            render json: [user, coach], status: :ok
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :email, :team, :type, :team_id)
    end


end
