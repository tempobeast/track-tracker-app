class AthletesController < ApplicationController
    def create 
        athlete = Athlete.create!(user_params)
        session[:user_id] = user.id
        render json: [athlete], status: :created
    end

    def show
        athlete = find_user
        render json: athlete, status: :ok
    end
end
