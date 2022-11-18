class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :workout_type, :details, :approx_duration, :add_ons
end
