class WorkoutsController < ApplicationController

    def create
        user = find_user
        if user
            workout = user.workouts.create!(workout_params)
            render json: workout, status: :created
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    def index
        user = find_user
        if user
            workouts = user.workouts
            render json: workouts, status: :ok
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end



    private

    def workout_params
        params.permit(:date, :workout_type, :add_ons, :details => [])
    end
end
