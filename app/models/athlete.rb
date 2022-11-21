class Athlete < User

    has_one :team
    has_many :log_entries
    has_many :workouts, through: :log_entries
    has_many :workout_groups
    has_many :coaches, through: :workout_groups
end
