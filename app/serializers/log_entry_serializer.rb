class LogEntrySerializer < ActiveModel::Serializer
  attributes :id, :workout_rating, :mileage, :details, :reflection, :workout_id, :athlete_id
end
