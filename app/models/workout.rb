class Workout < ApplicationRecord

    has_one :coach
    has_many :log_entries
    has_many :athletes, through: :log_entries
end
