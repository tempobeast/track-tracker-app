class Coach < User

    belongs_to :team
    has_many :workouts
    has_many :workout_groups
    has_many :athletes, through: :workout_groups
end
