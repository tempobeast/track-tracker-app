class Athlete < User

    belongs_to :team
    has_many :log_entries
    has_many :workouts, through: :log_entries
    has_one :workout_group
    has_one :coach, through: :workout_groups
end
