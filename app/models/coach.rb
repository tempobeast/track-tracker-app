class Coach < ApplicationRecord

    has_one :team
    has_many :workouts
    has_many :workout_groups
    has_many :athletes, through: :workout_groups
end
