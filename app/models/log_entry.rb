class LogEntry < ApplicationRecord

    belongs_to :workout
    belongs_to :athlete
end
