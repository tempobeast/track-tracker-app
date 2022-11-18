class WorkoutGroup < ApplicationRecord

    belongs_to :athlete
    belongs_to :coach
end
