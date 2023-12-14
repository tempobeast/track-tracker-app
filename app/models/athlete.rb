class Athlete < User

    def workout_list 
        self.coach.workouts
    end

    belongs_to :team
    has_many :log_entries
    has_many :workouts, through: :log_entries
    has_one :workout_group
    has_one :coach, through: :workout_group
end
